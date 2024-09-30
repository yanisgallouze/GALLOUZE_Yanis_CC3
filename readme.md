# devweb-tp5 - Serveur HTTP en Node.js

## Introduction

Ce projet est un exercice de mise en place d'un serveur HTTP en utilisant Node.js, d'abord avec le module natif HTTP, puis avec le framework Express. Les différentes étapes du projet sont décrites ci-dessous.

## Questions

### Question 1.1 : Liste des en-têtes de la réponse HTTP du serveur

Lorsque le serveur renvoie la page HTML basique dans la première version du `requestListener`, voici les en-têtes HTTP de la réponse :

- **Request URL:** http://localhost:8000/
- **Request Method:** GET
- **Status Code:** 200 OK
- **Remote Address:** 127.0.0.1:8000
- **Referrer Policy:** strict-origin-when-cross-origin
- **Connection:** keep-alive
- **Date:** Tue, 24 Sep 2024 04:18:26 GMT
- **Keep-Alive:** timeout=5
- **Transfer-Encoding:** chunked

### Question 1.2 : Liste des en-têtes de la réponse HTTP du serveur après modification du code

Voici les en-têtes HTTP après modification du `requestListener` :

- **Request URL:** http://localhost:8000/
- **Request Method:** GET
- **Status Code:** 200 OK
- **Remote Address:** 127.0.0.1:8000
- **Referrer Policy:** strict-origin-when-cross-origin
- **Connection:** keep-alive
- **Content-Length:** 20
- **Content-Type:** application/json (### CONTENT TYPE A ÉTÉ AJOUTÉ GRÂCE AU CODE ###)
- **Date:** Wed, 25 Sep 2024 02:17:11 GMT
- **Keep-Alive:** timeout=5
- **Accept:** text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8

### Question 1.3 : Que contient la réponse reçue par le client ?

Le client reçoit la page `index.html`.

### Question 1.4 : Quelle est l’erreur affichée dans la console ?

L'erreur affichée sera de type `ENOENT` si le fichier `index.html` n'est pas trouvé.

### Question 1.5 : Modification du `requestListener` avec `async/await`

### Question 1.6 : Indiquer ce que cette commande a modifié dans votre projet.

Les commandes suivantes ont ajouté les dépendances `cross-env` et `nodemon` dans le fichier `package.json` :

```bash
npm install cross-env --save
npm install nodemon --save-dev
```

Elles ont également ajouté un fichier `package-lock.json` qui répertorie tous les packages de ces dépendances.

### Question 1.7 : Quelles sont les différences entre les scripts `http-dev` et `http-prod` ?

Les scripts `http-dev` et `http-prod` diffèrent principalement par leur usage :

- **http-dev** : Utilise `nodemon` pour redémarrer automatiquement le serveur lors de modifications et définit l'environnement en mode développement (`NODE_ENV=development`).
- **http-prod** : Démarre le serveur sans redémarrage automatique et définit l'environnement en mode production (`NODE_ENV=production`), avec des optimisations et moins de logs.

### Question 1.8 : Donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.

- **/index.html** : 200 OK _(même chose pour /)_
- **/random.html** : 200 OK
- **/** : 200 OK _(même chose pour /index.html)_
- **/dont-exist** : 404 NOT FOUND

## Partie 2 : Framework Express

### Question 2.1 : Donnez les URL des documentations de chacun des modules installés par la commande précédente.

- **Express**: [Documentation Express](https://expressjs.com/)
- **Http-errors**: [Documentation http-errors](https://github.com/jshttp/http-errors)
- **Loglevel**: [Documentation loglevel](https://www.npmjs.com/package/loglevel)
- **Morgan**: [Documentation morgan](https://github.com/expressjs/morgan)

### Question 2.2 : Vérifier que les trois routes fonctionnent.

- **http://localhost:8000/** : 200 OK
- **http://localhost:8000/index.html** : 200 OK 
- **http://localhost:8000/random/5** : 200 OK 

### Question 2.3 : En-têtes des réponses fournies par Express

- **Connection:** keep-alive
- **Content-Length:** 81
- **Content-Type:** text/html; charset=utf-8
- **Date:** Mon, 30 Sep 2024 02:09:37 GMT
- **ETag:** W/"51-WSGaceofHEvJXRuG+5RdtEd7FEg"
- **Keep-Alive:** timeout=5
- **X-Powered-By:** Express

### Question 2.4 : Quand l’événement `listening` est-il déclenché ?

L'événement `listening` est déclenché une fois que le serveur est en écoute sur le port spécifié (8000).

### Question 2.5 : Indiquer quelle est l’option (activée par défaut) qui redirige `/` vers `/index.html` ?

L'option par défaut dans Express est `redirect: true` pour les fichiers statiques, ce qui redirige `/` vers `/index.html` automatiquement.

### Question 2.6 : Visiter la page d’accueil puis rafraîchir (Ctrl+R) et ensuite forcer le rafraîchissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier `style.css` ? Justifier.

- **Rafraîchissement normal (Ctrl+R)** : Le code HTTP pour `style.css` est 200 (OK) car le fichier est chargé depuis le serveur.
  
- **Forçage du rafraîchissement (Ctrl+Shift+R)** : Le code HTTP peut être 304 (Not Modified) si le fichier est déjà en cache et n'a pas changé. Mais dans mon cas, j'ai eu 200 OK car j'ai désactivé le cache du navigateur.

### Question 2.7 : Vérifier que l’affichage change bien entre le mode production et le mode développement.

- **Mode développement** : 
    - `http://localhost:8000/javascript` : Error 404 Page not found avec le message d'erreur.
    - `http://localhost:8000/random/yanis` : Error 400 Invalid number parameter avec le message d'erreur.

- **Mode production** :  
    - `http://localhost:8000/javascript` : Error 404 Page not found sans le message d'erreur puisque le client s'en fiche.
    - `http://localhost:8000/random/yanis` : Error 400 Invalid number parameter sans le message d'erreur puisque le client s'en fiche.
