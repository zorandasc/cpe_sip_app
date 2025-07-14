# Use the official Node.js image as the base image
FROM node:20.12.2-alpine3.19 AS base

# Install dependencies and build the Next.js app
FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./


# Use npm ci for clean install in CI/CD environments:
#Deletes node_modules
#Strictly Uses Lock File: It must find a package-lock.json
#Faster (Often): Because it skips the dependency resolution phase
#Preventing "Works on My Machine": By ensuring identical dependency trees,
#If npm install were used, it might pull in slightly newer versions of dependencies
RUN \
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm i --frozen-lockfile; \
    else npm i; \
    fi

# COPY SOURCE FILES
# This creates .next and installs all node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Next.js specific production setup
#By using these COPY --from=builder commands, you achieve the goal of a 
#multi-stage build: you perform all the heavy lifting (installing dev dependencies, 
#compiling code) in the builder stage, and then selectively copy only the absolute 
#necessities into the lean runner image. This results in a smaller, more optimized, 
#and more secure final Docker image for deployment.
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

#--from=builder: This flag is the key. It tells Docker: 
#"Instead of copying from the current build context
#(the directory where the Dockerfile is), go to the build stage named builder 
#(which you defined earlier with FROM ... AS builder) and copy files from there."

# Command to run the application
CMD ["npm", "start"]