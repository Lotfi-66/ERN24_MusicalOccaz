
# MusicalOccaz

MusicalOccaz est une plateforme de vente d'instruments de musique d'occasion entre particuliers, inspirée par le concept de Vinted. Ce projet a été développé avec React pour le frontend et utilise une base de données MongoDB.

## Fonctionnalités

- Inscription et connexion des utilisateurs
- Publication d'annonces pour vendre des instruments de musique
- Recherche et filtrage des annonces
- Système de messagerie entre acheteurs et vendeurs
- Gestion de profil utilisateur

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)
- MongoDB

## Installation

1. Clonez ce dépôt :

```bash
git clone https://github.com/Lotfi-66/ERN24_MusicalOccaz.git
``` 


2. Naviguez dans le dossier du projet :

```bash
cd ERN24_MusicalOccaz
```


3. Installez les dépendances :

```bash
npm install
```


4. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires :

```bash
touch .env
```

```bash
REACT_APP_API_URL=http://localhost:5000
MONGODB_URI=mongodb://localhost:27017/musicaloccaz
```


## Lancement de l'application

1. Démarrez le serveur de développement React :

```bash
npm start
```


2. L'application devrait maintenant être accessible à l'adresse `http://localhost:3000`

## Structure du projet

MusicalOccaz/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── styles/
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
└── README.md
