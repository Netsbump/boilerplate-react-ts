<a id="readme-top" name="readme-top"></a>

<br />

<div align="center">

  <h3 align="center">🚀 React TypeScript Boilerplate</h3>

  <p align="center">Welcome to my front-end React boilerplate! This is a personal endeavor, crafted to streamline both my personal and professional projects as I advance through the React and TypeScript ecosystem.
  </p>
  </br>
   <a href="https://github.com/Netsbump/boilerplate-react-ts/issues">Report Issues</a>
   ·
   <a href="https://github.com/Netsbump/boilerplate-react-ts/pulls">Request Feature</a>
</div>

<div>

### ✨ Features

- **React & TypeScript:** The foundation of this boilerplate. I'm diving into modern web development with React and bolstering my expertise through TypeScript.
- **ESLint & Prettier:** Discipline first! I've equipped myself with ESLint and Prettier to ensure I adhere to best practices, keep my code neat, and maintain consistency in my coding style.
- **Vite.js:** Performance and rapid development in focus. I've adopted Vite.js to keep abreast of modern development tools and to enhance my development workflow's efficiency.

### 🤝 Contributions & Usage

Feel free to use this boilerplate if you find any utility in it. Contributions, suggestions, or feedback are always welcome.

### 🔴 Note

The remainder of this README delves into detailed explanations about files and configurations. This section is currently in French. My apologies for any inconvenience! I'll aim to provide an English translation in the future.

</div>

<br />

<!-- TABLE DES MATIERES -->
<details>
  <summary>Table des matières</summary>
		<ul>
      <li><a href="#projet-vitejs">Projet React avec Vite.js </a></li>
          <ol>
            <li><a href="#fichiers-vitejs">Contenu des fichiers générés par Vite</a></li>
          </ol>
      <li><a href="#getting-started">Getting Started</a></li>
      		<ol>
            <li><a href="#prerequis">Prérequis</a></li>
        		<li><a href="#recuperation-boilerplatet">Récupération du Boilerplate</a></li>
            <li><a href="#config-vsc">Configuration de Visual Studio Code</a></li>
            <li><a href="#installation-dependances">Installation des dépendances</a></li>
            <li><a href="#run-projet">Lancement du projet</a></li>
            <li><a href="#build-projet">Build du projet</a></li>
      		</ol>
    </ul>
</details>

</br>

<p id="projet-vitejs"></p>

# Projet React avec Vite.js

Vite est un outil de développement front-end qui nous permet de démarrer rapidement un projet avec des configurations minimales. Il offre un démarrage rapide, des rechargements à chaud et d'autres fonctionnalités pour améliorer votre flux de développement. Si vous souhaitez en savoir plus sur Vite, consultez la [documentation officielle de Vite](https://vitejs.dev/guide/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contenu des fichiers générés par Vite

Voici une explication succincte de chaque fichier généré par Vite dans ce projet React + TypeScript :

- `index.html`: Sert de squelette HTML à l'application. Contient le script qui charge le JavaScript initial.

- `src/main.tsx`: Le point d'entrée de l'application. Ce fichier initialise l'application et intègre le composant racine dans le DOM.

- `src/App.tsx`: : Le composant principal de l'application. Il contient la structure et la logique de base de l'interface utilisateur.

- `vite.config.js`: Le fichier de configuration pour Vite qui définit comment le projet est construit et servi. Il permet de personnaliser le processus de développement et de production selon vos besoins.

- `package.json`: Décrit les métadonnées du projet, les dépendances, et les scripts pour démarrer, construire et tester l'application.

- `tsconfig.json`: Configure les options de compilation de TypeScript pour le projet, aidant à gérer les types et la structure du code.

- `tsconfig.node.json`: Configuration de TypeScript pour les scripts exécutés dans un environnement Node.js, séparée du code source principal.

- `.eslintrc.cjs`: Ce fichier contient la configuration d'ESLint pour votre projet. ESLint est un outil de linting qui vous aide à identifier et corriger les problèmes dans votre code, tels que les erreurs de syntaxe, les problèmes de style de code, et les mauvaises pratiques de programmation. Dans ce fichier, vous pouvez définir des règles de linting, des environnements, des plugins, etc.

- `.prettierrc.cjs`: Ce fichier contient la configuration de Prettier pour votre projet. Prettier est un formatteur de code qui garantit que votre code est cohérent et lisible. Il reformate automatiquement votre code en fonction des règles que vous avez définies dans le fichier de configuration .prettierrc.cjs.

- `.vscode/` : Contient des configurations spécifiques pour VSCode, incluant des recommandations d'extensions et des paramètres pour ESLint et Prettier.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p id="getting-started"></p>

# Getting Started

Pour démarrer avec ce boilerplate, suivez les étapes ci-dessous pour installer les prérequis, récupérer le projet, configurer votre environnement de développement, installer les dépendances ainsi que démarrer et build votre projet.

<p id="prerequis"></p>
  
1. _Prérequis_

- Assurez-vous d'avoir Node.js installé sur votre machine. Vite.js requiert au moins la version `18.0.0` de Node.js. Vous pouvez télécharger la dernière version LTS ou actuelle de Node.js depuis ce lien : [télécharger Node.js](https://nodejs.org/fr/download).

- Pour vérifier la version de Node.js installée sur votre système, exécutez la commande suivante dans votre terminal :

```sh
node -v
```

<p id="recuperation-boilerplate"></p>
  
2. _Récupération du Boilerplate

Pour utiliser ce boilerplate, commencez par le récupérer depuis GitHub :

a) Rendez-vous sur la page GitHub du projet.

b) Cliquez sur le bouton "Use this template" pour créer une nouvelle copie du repository sous votre propre compte GitHub.

c) Clonez le repository sur votre machine locale avec :

```sh
git clone <URL_DU_REPO>
cd <NOM_DU_REPO>
```

Pour ouvrir le projet directement dans VS Code, exécutez :

```sh
code .
```

<p id="config-vsc"></p>
  
3. _Configuration de Visual Studio Code_

Pour une expérience de développement optimale, VSCode vous proposera d'installer les extensions définies dans le fichier .vscode/extensions.json. Il est recommandé d'installer les extensions suivantes :

a) Obligatoires

- ESLint (`dbaeumer.vscode-eslint`) - Pour le linting du code JavaScript et TypeScript.
- Prettier (`esbenp.prettier-vscode`) - Pour le formatage automatique du code.

b) Suggestions recommandées

- Error Lens (`usernamehw.errorlens`) - Pour une meilleure visibilité des erreurs et avertissements dans le code.
- Material Icon Theme (`pkief.material-icon-theme`) - Pour des icônes de fichiers améliorées dans l'explorateur de VSCode.
- Pretty TypeScript Errors (`yoavbls.pretty-ts-errors`) - Pour des messages d'erreur TypeScript plus lisibles et plus agréables visuellement.

c) Utilisation

Avec ces extensions, chaque fois que vous sauvegardez un fichier, ESLint corrigera automatiquement les problèmes (selon les règles définies) et Prettier formatera le code.

d) Conseils

Si vous rencontrez des comportements inattendus ou des conflits entre les extensions, vérifiez si d'autres formateurs de code ou extensions liées à ESLint/Prettier sont activés et désactivez-les.

<p id="installation-dependances"></p>
  
4. _Installation des dépendances_

Positionnez-vous à la racine du projet (là où se trouve le fichier `package.json`) et installez les dépendances nécessaires avec :

```sh
npm install
```

Cette commande peut être adaptée à votre gestionnaire de package préféré (par exemple `yarn install` ou `pnpm install`).

<p id="run-projet"></p>
  
5. _Lancement du projet_

Pour lancer l'application en mode développement, exécutez la commande suivante :

```sh
npm run dev
```

Cela lancera le serveur de développement de Vite.js et ouvrira automatiquement votre application dans le navigateur.

<p id="build-projet"></p>
  
6. _Build du projet_

Pour générer les fichiers statiques pour le déploiement de votre application en mode production, exécutez :

```sh
npm run build
```

Vite.js créera par défaut un dossier dist/ contenant tous vos fichiers optimisés pour la production.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENCE -->
<p id="licence"></p>

# Licence

Distribué sous la Licence MIT. Voir le fichier LICENSE pour plus d'informations.

<p align="right">(<a href="#readme-top">retour en haut</a>)</p>
