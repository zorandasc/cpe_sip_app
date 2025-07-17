#!/bin/sh
# Add admin user before starting the app

echo "👤 Adding admin user to database..."

node ./src/script/addAdminUser.js || echo "⚠️ Admin user might already exist."

echo "🚀 Starting Next.js app..."

npm start

#1. Make it executable:
#chmod +x start-with-admin.sh

#2. UPOTREBA U docker-compose.yml:

#command: ["./start-with-admin.sh"]

#ZASTO OVAJ FAJL?

#ZASTO NE DOMAH RUN SCRIPT INdocker-compose.yml?

#OVAKO: command: ["node", "./src/script/addAdminUser.js"]
#ZATO STO:

#However, this approach will only run the script 
#and then exit the container — 
#your Next.js app won’t start afterward unless you add a mechanism to run both.

#PA MORA OVAKO:
