# 🌟 Portfolio Angéline Gillot - React Edition

Portfolio moderne développé avec **Vite + React 19**, avec une identité visuelle mystique et céleste inspirée d'un univers fantastique.

---

## 📚 Table des matières

- [Pour commencer](#-pour-commencer)
- [Stack technique](#-stack-technique)
- [Structure du projet](#-structure-du-projet)
- [Installation](#%EF%B8%8F-installation--développement)
- [Fonctionnalités](#-fonctionnalités)
- [Guide pour débutants React](#-guide-pour-débutants-react)
- [Modification du contenu](#-modification-du-contenu)
- [Déploiement](#-déploiement)
- [Ressources](#-ressources)

---

## 🎯 Pour commencer

Si vous êtes **novice en React**, lisez attentivement :
1. La section [Guide pour débutants React](#-guide-pour-débutants-react)
2. Le fichier `MAINTENANCE.md` pour comprendre comment maintenir le projet
3. Les commentaires dans les fichiers de code (ils expliquent chaque concept)

**Fichiers principaux à connaître :**
- `src/main.jsx` - Point d'entrée de l'application
- `src/App.jsx` - Structure principale et navigation
- `src/data/` - Données à modifier pour personnaliser le contenu

---

## 🚀 Stack Technique

### Technologies principales
- **React 19.2.0** - Bibliothèque JavaScript pour créer des interfaces utilisateur
- **Vite 7.2.2** - Outil de build ultra-rapide avec rechargement à chaud
- **React Router DOM** - Gestion de la navigation entre pages
- **Framer Motion** - Animations et transitions fluides
- **SASS/SCSS** - Préprocesseur CSS pour styles modulaires

### Outils de développement
- **ESLint** - Analyseur de code pour maintenir la qualité
- **Node.js** - Environnement d'exécution JavaScript (requis)

---

## 📁 Structure du Projet

```
portfolio-react/
├── public/                    # Fichiers statiques (accessibles directement)
│   ├── fonts/                # Polices personnalisées
│   ├── images/               # Images et icônes
│   │   ├── icons/           # Icônes SVG (GitHub, LinkedIn, etc.)
│   │   └── projects/        # Captures d'écran des projets
│   └── noise.min.js         # Bibliothèque pour effet de bruit
│
├── src/                      # Code source de l'application
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx       # Menu de navigation
│   │   ├── Footer.jsx       # Pied de page
│   │   ├── CosmicCursor.jsx # Curseur personnalisé avec traînée
│   │   ├── StarField.jsx    # Champ d'étoiles animé
│   │   ├── ThemeToggle.jsx  # Bouton pour changer le thème
│   │   └── PageTransition.jsx # Wrapper pour transitions de page
│   │
│   ├── pages/               # Pages principales de l'application
│   │   ├── Home.jsx        # Page d'accueil avec effet aurore
│   │   ├── About.jsx       # Page À propos avec bio et compétences
│   │   └── Projects.jsx    # Portfolio de projets
│   │
│   ├── context/            # Context API pour données globales
│   │   └── ThemeContext.jsx # Gestion du thème clair/sombre
│   │
│   ├── hooks/              # Hooks personnalisés React
│   │   └── useAurora.js    # Hook pour l'effet aurore boréale
│   │
│   ├── data/               # Données de contenu (facile à modifier)
│   │   ├── bioData.js      # Informations biographiques et compétences
│   │   └── projectsData.js # Liste des projets du portfolio
│   │
│   ├── styles/             # Fichiers de styles SCSS
│   │   ├── _variables.scss # Variables CSS (couleurs, tailles, etc.)
│   │   ├── _theme.scss     # Styles pour thème clair/sombre
│   │   ├── _fonts.scss     # Déclarations de polices
│   │   ├── global.scss     # Styles globaux de base
│   │   ├── pages/          # Styles spécifiques à chaque page
│   │   └── main.scss       # Point d'entrée des styles
│   │
│   ├── utils/              # Fonctions utilitaires
│   ├── App.jsx             # Composant racine avec Router
│   └── main.jsx            # Point d'entrée JavaScript
│
├── index.html              # Page HTML principale
├── package.json            # Dépendances et scripts npm
├── vite.config.js          # Configuration Vite
├── README.md               # Ce fichier
└── MAINTENANCE.md          # Guide de maintenance détaillé
```

---

## 🛠️ Installation & Développement

### Prérequis
- Node.js version 18 ou supérieure ([Télécharger Node.js](https://nodejs.org/))
- Un éditeur de code (VS Code recommandé)

### Installation

```bash
# 1. Cloner le projet (ou télécharger le ZIP)
git clone [URL_DU_REPO]
cd portfolio-react

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:5173/
```

### Commandes disponibles

```bash
# Développement (avec rechargement automatique)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Vérifier la qualité du code
npm run lint
```

---

## ✨ Fonctionnalités

### 🎨 Effets visuels
- **Champ d'étoiles parallaxe** - Étoiles qui suivent le curseur avec effet de profondeur
- **Curseur cosmique** - Traînée de particules en forme d'étoiles
- **Effet aurore boréale** - Animation de rayons lumineux sur la page d'accueil
- **Transitions de page** - Animations fluides lors de la navigation

### 🌓 Thème clair/sombre
- Bascule entre mode jour et nuit
- Sauvegarde automatique de la préférence
- Détection de la préférence système

### 📱 Design responsive
- Adapté aux mobiles, tablettes et ordinateurs
- Menu burger sur mobile
- Images optimisées

### ⚡ Performance
- Chargement ultra-rapide avec Vite
- Animations optimisées à 60 FPS
- Code splitting automatique

---

## 📖 Guide pour débutants React

### Qu'est-ce que React ?
React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Au lieu d'écrire du HTML directement, vous créez des **composants** réutilisables.

### Concepts clés utilisés dans ce projet

#### 1. **Composants**
Un composant est un morceau d'interface réutilisable.
```jsx
// Exemple simple de composant
function Bouton() {
  return <button>Cliquez-moi</button>;
}
```

#### 2. **Props (Propriétés)**
Les props permettent de passer des données à un composant.
```jsx
function Titre({ texte }) {
  return <h1>{texte}</h1>;
}
// Utilisation : <Titre texte="Bonjour" />
```

#### 3. **State (État)**
Le state est une donnée qui peut changer et déclencher un re-rendu.
```jsx
const [compteur, setCompteur] = useState(0);
// compteur : valeur actuelle
// setCompteur : fonction pour modifier la valeur
```

#### 4. **Hooks**
Les hooks sont des fonctions spéciales de React :
- `useState` - Gérer l'état
- `useEffect` - Exécuter du code lors du montage/changement
- `useRef` - Garder une référence à un élément DOM
- `useContext` - Accéder aux données d'un Context

#### 5. **Context API**
Permet de partager des données entre composants sans les passer en props à chaque niveau.
Utilisé ici pour le thème (clair/sombre).

### Fichiers à étudier pour apprendre

1. **Débutant** :
   - `src/data/projectsData.js` - Simple fichier de données
   - `src/data/bioData.js` - Données structurées
   - `src/components/Footer.jsx` - Composant simple

2. **Intermédiaire** :
   - `src/context/ThemeContext.jsx` - Context API et hooks
   - `src/App.jsx` - Routing et structure
   - `src/pages/Home.jsx` - Animations Framer Motion

3. **Avancé** :
   - `src/hooks/useAurora.js` - Canvas API et animations complexes
   - `src/components/StarField.jsx` - Gestion de particules
   - `src/components/CosmicCursor.jsx` - Interactions curseur

---

## 🔧 Modification du Contenu

### Changer vos informations personnelles

**Fichier : `src/data/bioData.js`**
```javascript
export const bioVersions = {
  shortest: "Votre bio courte ici",
  // ... modifier les autres versions
};

export const skillsData = {
  front: "html ✧ css ✧ react", // Vos compétences front-end
  back: "node.js ✧ express"     // Vos compétences back-end
};
```

### Ajouter un projet

**Fichier : `src/data/projectsData.js`**
```javascript
{
  id: "mon-projet",              // Identifiant unique
  name: "Mon Super Projet",      // Nom affiché
  description: "Description...", // Texte de description
  tech: "React, Node.js",        // Technologies utilisées
  github: "https://github.com/...", // Lien GitHub
  images: [
    "/images/projects/mon-projet-1.png",
    "/images/projects/mon-projet-2.png"
  ],
  alt: [
    "Description image 1",
    "Description image 2"
  ]
}
```

N'oubliez pas d'ajouter vos images dans `/public/images/projects/`.

### Modifier les couleurs

**Fichier : `src/styles/_variables.scss`**
```scss
$color-primary: #86eae7;    // Couleur principale
$color-text: #f8f8f8;       // Couleur du texte
$color-background: #292727; // Couleur de fond
// ... modifier selon vos goûts
```

### Changer les polices

**Fichier : `src/styles/_fonts.scss`**
1. Ajoutez vos fichiers de police dans `/public/fonts/`
2. Déclarez-les dans `_fonts.scss`
3. Utilisez-les dans `_variables.scss`

---

## 🚀 Déploiement

### Build de production

```bash
# Créer le build optimisé
npm run build

# Les fichiers optimisés seront dans le dossier /dist
```

### Déployer sur Netlify (gratuit)

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre dépôt GitHub
3. Configuration :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Cliquez sur "Deploy"

### Déployer sur Vercel (gratuit)

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre projet GitHub
3. Vercel détecte automatiquement Vite
4. Cliquez sur "Deploy"

### Déployer sur GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json :
"homepage": "https://votre-username.github.io/portfolio-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Déployer
npm run deploy
```

---

## 🎨 Identité Visuelle

### Palette de couleurs

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| Turquoise Aurora | `#86eae7` | Couleur principale, accents |
| Blanc cassé | `#f8f8f8` | Texte principal |
| Beige sable | `#D8CBC4` | Couleur secondaire |
| Brun foncé | `#292727` | Fond (mode sombre) |

### Typographie

- **UncialAntiqua** - Titres principaux (style médiéval)
- **Fleur** - Menu de navigation (style décoratif)
- **Lora** - Corps de texte (serif élégant et lisible)

---

## 📚 Ressources

### Apprendre React
- [Documentation officielle React](https://react.dev/) (EN)
- [React en français](https://fr.legacy.reactjs.org/)
- [Tutoriel interactif](https://react.dev/learn/tutorial-tic-tac-toe)

### Apprendre Vite
- [Documentation Vite](https://vitejs.dev/)
- [Guide de démarrage](https://vitejs.dev/guide/)

### Framer Motion
- [Documentation](https://www.framer.com/motion/)
- [Exemples d'animations](https://www.framer.com/motion/examples/)

### SCSS/SASS
- [Documentation officielle](https://sass-lang.com/)
- [Guide SCSS](https://sass-lang.com/guide)

### Canvas API (pour les effets visuels)
- [MDN Canvas Tutorial](https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial)

---

## 🤝 Contribution & Support

### Signaler un bug
Ouvrez une issue sur GitHub avec :
- Description du problème
- Étapes pour le reproduire
- Captures d'écran si possible

### Demander de l'aide
- Consultez d'abord le fichier `MAINTENANCE.md`
- Vérifiez les commentaires dans le code
- Ouvrez une discussion sur GitHub

---

## 📝 Notes Techniques

### Warnings SCSS
Les warnings `@import is deprecated` sont normaux. Sass migre vers `@use` mais ce n'est pas bloquant.

### Effet Aurora
L'effet utilise la bibliothèque SimplexNoise chargée via un script externe dans `index.html`. Elle génère du "bruit" pour un mouvement naturel.

### Performance
Les animations Canvas utilisent `requestAnimationFrame` pour 60 FPS fluides. Le nombre de particules s'adapte automatiquement à la taille de l'écran.

---

## 👥 Crédits

**Design & Développement** : [Angéline Gillot](https://github.com/Anathariel)

**Inspirations** :
- [Ambient Canvas Backgrounds](https://github.com/crnacura/AmbientCanvasBackgrounds)
- Dribbble - Cosmic & Space UI designs

---

## 📄 Licence

Ce projet est un portfolio personnel. Vous pouvez vous en inspirer pour créer le vôtre !

---

**🌟 Tech Stack** : React 19 + Vite 7 + SCSS + Framer Motion

**Dernière mise à jour** : Novembre 2024
