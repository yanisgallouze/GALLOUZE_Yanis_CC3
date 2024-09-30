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

## Partie 2 : framework Express

### Question 2.1 donner les URL des documentations de chacun des modules installés par la commande précédente.

- Question 2.1 : Documentations des modules installés
- Express: https://expressjs.com/
- Http-errors: https://github.com/jshttp/http-errors
- Loglevel: https://www.npmjs.com/package/loglevel
- Morgan: https://github.com/expressjs/morgan

### Question 2.2 vérifier que les trois routes fonctionnent.

- http://localhost:8000/ : 200 OK
- http://localhost:8000/index.html : 200 OK 
- http://localhost:8000/random/5 : 200 OK 

### Question 2.3 : En-têtes des réponses fournies par Express

connection:
keep-alive
content-length:
81
content-type:
text/html; charset=utf-8
date:
Mon, 30 Sep 2024 02:09:37 GMT
etag:
W/"51-WSGaceofHEvJXRuG+5RdtEd7FEg"
keep-alive:
timeout=5
x-powered-by:
Express

### Question 2.4 quand l’événement listening est-il déclenché ?

L'événement listening est déclenché une fois que le serveur est en écoute sur le port spécifié (8000).

### Question 2.5 indiquer quelle est l’option (activée par défaut) qui redirige / vers /index.html ?

L'option par défaut dans Express est redirect: true pour les fichiers statiques, ce qui redirige / vers /index.html automatiquement.

### Question 2.6 visiter la page d’accueil puis rafraichir (Ctrl+R) et ensuite forcer le rafraichissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier style.css ? Justifier.

- Rafraîchissement normal (Ctrl+R) : Le code HTTP pour style.css est 200 (OK) car le fichier est chargé depuis le serveur.

- Forçage du rafraîchissement (Ctrl+Shift+R) : Le code HTTP peut être 304 (Not Modified) si le fichier est déjà en cache et n'a pas changé. Mais dans mon cas j'ai eu 200 OK car j'ai désactivé le cache du navigateur.

### Question 2.7 vérifier que l’affichage change bien entre le mode production et le mode development.

- Avec le mode développement : 
    http://localhost:8000/javascript : Error 404 Page not found avec le message d'erreur
    http://localhost:8000/random/yanis : Error 400 Invalid number parameter avec le message d'erreur

- Avec le mode production :  
    http://localhost:8000/javascript : Error 404 Page not found sans le message d'erreur puique le client s'en fiche
    http://localhost:8000/random/yanis : Error 400 Invalid number parameter sans le message d'erreur puique le client s'en fiche
    
