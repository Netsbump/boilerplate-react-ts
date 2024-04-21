module.exports = {
  root: true, // Indique qu'il s'agit de la configuration de plus haut niveau et qu'ESLint ne doit pas chercher d'autres configurations
  env: {
    browser: true, // Définit l'environnement d'exécution comme navigateur (window, document, etc. disponibles)
    es2020: true, // Active les fonctionnalités d'ECMAScript 2020
  },
  extends: [
    'eslint:recommended', // Utilise un ensemble de règles recommandées par ESLint
    'plugin:react/recommended', // Utilise un ensemble de règles recommandées pour React
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended', // Règles recommandées pour les hooks React
    'plugin:prettier/recommended', // Intègre Prettier avec ESLint pour formater le code selon les règles définies
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Dossiers et fichiers à ignorer par ESLint
  parser: '@typescript-eslint/parser', // Utilise le parseur de TypeScript pour ESLint
  parserOptions: {
    ecmaVersion: 'latest', // Utilise la dernière version disponible d'ECMAScript
    sourceType: 'module', // Indique que le code utilise des modules ES6
    project: ['./tsconfig.json', './tsconfig.node.json'], // Chemins vers les fichiers de configuration TypeScript
    tsconfigRootDir: __dirname, // Répertoire racine pour les fichiers tsconfig
  },
  plugins: [
    'react',
    'react-refresh', // Plugin pour le hot reloading avec React Fast Refresh
    '@typescript-eslint', // Active les règles spécifiques à TypeScript
    'prettier' // Active Prettier comme plugin ESLint
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn', // Avertir si autre chose que des composants sont exportés avec React Fast Refresh
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Exiger un type de retour explicite pour les fonctions
    '@typescript-eslint/no-unused-vars': 'error', // Signaler les variables inutilisées
    '@typescript-eslint/no-explicit-any': 'warn', // Avertir contre l'utilisation de 'any'
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // N'autoriser les fichiers JSX qu'avec l'extension .tsx
    'react/prop-types': 'off', // Désactiver les prop-types de React, car TypeScript est utilisé pour la vérification des types
    'react/jsx-props-no-spreading': 'warn', // Avertir contre la propagation des props dans JSX
    'prettier/prettier': 'error', // Signaler les erreurs de formatage Prettier comme des erreurs ESLint
    'react/react-in-jsx-scope': 'off', // Désactiver la règle exigeant React dans la portée pour JSX (inutile avec React 17+)
  },
};

