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
application/json ############################################## content type a été ajouté grâce au code ##############
date:
Wed, 25 Sep 2024 02:17:11 GMT
keep-alive:
timeout=5
accept:
text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8

### Question 1.3 que contient la réponse reçue par le client ? 

Le client reçois la page index.html 

