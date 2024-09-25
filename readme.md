# devweb-tp5 - Serveur HTTP en Node.js

## Introduction

Ce projet est un exercice de mise en place d'un serveur HTTP en utilisant Node.js, d'abord avec le module natif HTTP, puis avec le framework Express. Les différentes étapes du projet sont décrites ci-dessous.

## Questions

### Question 1.1 : Liste des en-têtes de la réponse HTTP du serveur

Lorsque le serveur renvoie la page HTML basique dans la première version du `requestListener` (sans gestion des types de contenus spécifiques), voici les en-têtes HTTP de la réponse :

Request URL:
http://localhost:8000/
Request Method:
GET
Status Code:
200 OK
Remote Address:
127.0.0.1:8000
Referrer Policy:
strict-origin-when-cross-origin
connection:
keep-alive
date:
Tue, 24 Sep 2024 04:18:26 GMT
keep-alive:
timeout=5
transfer-encoding:
chunked


### Question 1.2 : Liste des en-têtes de la réponse HTTP du serveur après modification du code

Voici les en-têtes HTTP après modification du `requestListener` : 

Request URL:
http://localhost:8000/
Request Method:
GET
Status Code:
200 OK
Remote Address:
127.0.0.1:8000
Referrer Policy:
strict-origin-when-cross-origin
connection:
keep-alive
content-length:
20
content-type:
application/json ### CONTENT TYPE A ETE AJOUTE GRACE AU CODE ###
date:
Wed, 25 Sep 2024 02:17:11 GMT
keep-alive:
timeout=5
accept:
text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8

### Question 1.3 que contient la réponse reçue par le client ? 

Le client reçois la page index.html 

### Question 1.4 quelle est l’erreur affichée dans la console ? Retrouver sur https://nodejs.org/api le code d’erreur affiché 

L'erreur affichée sera de type ENOENT si le fichier index.html n'est pas trouvé.

### Question 1.5 : modification du requestListener avec async/await

### Question 1.6 indiquer ce que cette commande a modifié dans votre projet.

npm install cross-env --save
npm install nodemon --save-dev

Ces commandes ont ajoutées les dépendances cross-env et nodemon dans le fichier package.json et ont ajoutés aussi un fichier package-lock.json qui répertories tout les packages de ces dépendances.

### Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?

Les scripts http-dev et http-prod diffèrent principalement par leur usage :

http-dev : Utilise nodemon pour redémarrer automatiquement le serveur lors de modifications et définit l'environnement en mode développement (NODE_ENV=development).

http-prod : Démarre le serveur sans redémarrage automatique et définit l'environnement en mode production (NODE_ENV=production), avec des optimisations et moins de logs.

### Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.

/index.html : 200 OK MEME CHOSE AVEC /
/random.html : 200 OK
/ : 200 OK MEME CHOSE AVEC /index.html
/dont-exist : 404 NOT FOUND

