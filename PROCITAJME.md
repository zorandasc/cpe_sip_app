## LOKALNI DEVELOPMENT

REQUIREMENTS: node.js, VSCODE, GIT-BASH (linux cli), DOCKER DESKTOP,

PRVO, POKRETANJE LOKALNOG SERVERA I LOKALNI RAZVOJ REACT(NEXT.JS) APLIKACIJE:

```bash
#downoald next.js framework
npx create-next-app@latest
# kada zavrsi download
npm run dev

```

NAKON ZAVRSETKA DEVELOPMENTA IDE POKRETANJE LOKALNE PRODUKCIONE APLIKACIJE BEZ DOCKERA:
PRVO SE APLIKACIJA BILDUJE SA:

```bash
npm run build

```

A ONDA SE POKRENE SA:

```bash
npm run start
```

AKO SVE UREDNO RADI PRELAZIOM NA PRAVLJENJE LOKALNOG DOCKERA ZA LOKALNO TESTIRANJE DOCKER APLIKACIJE.

DA BI SE APLIKACIJA "DOKERIZOVALA" MORA UNUTAR PROJEKTA DA POSTOJI Dockerfile, docker-copmose.yml(OPCIONO)

Dockerfile JE FILE KOJI PREDSTAVLJA SET INSTRUKCIJA KAKO DA SE BUILDUJE IMAGE.
DockerFile JE U SUSTINI UPUSTVO ZA PRAVLJENJE DOCKER IMAGE
(DOCKER IMAGE JE ANALOGNO S A ISO FILE ZA VIRTUALNE MASINE)

docker-compose.yml JE FILE KOJI DEFINISE KAKO DA SE NAPRAVI RUNING DOCKER CONTAINER KORISTECI GORE DEFINISANI DOCKER IMAGE.

(DOCKER CONTAINER JE ANALOGNO SA VIRTUALNA MASINA),
docker-compose.yml JE U SUTINI UPUTSTVO ZA POKRETANJE DOCKER CONTAINERA
docker-compose.yml DEFINISE KAKO DA IMAGE KOMUNICIRA SA SVOJIM HOSTOM: NPR. KOJE TCP PORTOVE DA SE KORISTE, I KOJE FOLDER NA HOSTU DA KORISTI

## LOKALNI RAZVOJ:

KADA KORISTIOMO docker-compose.yml KONTEJNER SE POKRECE SA:

```bash
docker compose up -d

```

KADA PROMJENIMO SOURCE CODE ONDA REBUILDUJEMO IMAGE

```bash
docker compose up --build

or

docker compose build --no-cache
docker compose up
```

KADA NEMAMO docker-compose.yml ZA POKRETANJE KONTAIJENRA, SE KORISTI, NPR:

```bash
docker run -p 3000:3000 -v /path/to/your/host/xml-configs:/app/xmlconfigs --name your-nextjs-app-name  your-nextjs-image-name

```

U OVOM PROJEKTU KORISTIMO DVA compose FILE:

1.) docker-compose.yml: ZA LOKALNI DEVELOPMENT

2.) docker-compose.prod.yml: ZA PRODUKCIJU
OVAJ FILE SALJE SE ZAJEDNO SA DOCKER IMAGE NA PRODUKCIONI SERVER

````


ZAUSTAVITE KONTAJINER

```bash
docker stop your-nextjs-app-name

````

PRODUKCIONI SERVER:

# -----------------------------------------------------------------

PREKO USB:

# Example using Git Bash (often preferred for cleaner paths)

docker save -o ~/Desktop/cpe-sip-nextjs-app.tar cpe-sip-nextjs-app:latest

# In Git Bash or WSL terminal

gzip C:/Users/YourUser/Desktop/my-nextjs-app-image.tar

# This will create a compressed file named my-nextjs-app-image.tar.gz

# ----------------------------------------------------------------

## PUSH TO PRODUCTION SERVER (HOST)

LOKLANO ZIPOVANJE:

```bash
docker save -o my-phone-config-app.tar your_app_name:1.0.0

gzip my-phone-config-app.tar

```

# -----------------------------------------------------

TRANSFER SA WINDOWS NA LINUX SYSTEMA SA SCP COMANDOM:

PRENOSIMO:

1. BUILODVANI ZIPOVANI IMAGE my-phone-config-app.tar.gz
2. docker-compose.prod.yml TO JE SET INSTRUKCIJA ZA PRODUKCIONI CONTAINER

NA SERVERU docker-compose.prod.yml I IMAGE my-phone-config-app.tar.gz MORAJU BITI U ISTOM FOLDERU

# From your local Windows machine (using Git Bash/WSL/pscp)

```bash

scp my-phone-config-app.tar.gz user@your_server_ip:/home/user/
scp C:\path\to\your\modified\docker-compose.prod.yml user@your_server_ip:/home/user/nextjs-app/docker-compose.yml

```

# ------------------------------------------------------------------------------------------------

## PRODUKCIONI SERVER

SSH NA SERVER:

```bash

ssh user@your_server_ip
cd /home/user/nextjs-app

```

DEKOMPRESIJA

```bash

gunzip /home/user/my-phone-config-app.tar.gz
```

LOAD DOCKER U DOCKER DEAMON:

```bash

docker load -i /home/user/my-phone-config-app.tar
```

VERIFIKACIJA IMAGE NA SERVERU:

```bash
docker images
```

POKRETANJE DOCKER KONTAINERA:

```bash
docker compose -f docker-compose.prod.yml up -d
```

AKO ZELITE DA OBRISETE DOCKER IMAGE

```bash
docker rmi image-name
```
