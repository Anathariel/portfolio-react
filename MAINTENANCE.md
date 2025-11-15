# 📘 Guide de Maintenance - Portfolio React

**Guide complet pour maintenir et améliorer le projet**
*Destiné aux développeurs débutants en React*

---

## 📚 Table des matières

1. [Introduction](#introduction)
2. [Prérequis & Outils](#prérequis--outils)
3. [Comprendre l'architecture](#comprendre-larchitecture)
4. [Modifications courantes](#modifications-courantes)
5. [Ajouter de nouvelles fonctionnalités](#ajouter-de-nouvelles-fonctionnalités)
6. [Dépannage](#dépannage)
7. [Bonnes pratiques](#bonnes-pratiques)
8. [Ressources pour progresser](#ressources-pour-progresser)

---

## Introduction

Ce guide vous accompagne pas à pas dans la maintenance et l'amélioration de ce portfolio React. Même si vous êtes débutant, vous pourrez :
- Modifier le contenu (textes, images, projets)
- Personnaliser les styles et couleurs
- Ajouter de nouvelles pages
- Comprendre comment fonctionne le code

**Conseil** : Lisez ce guide en entier une première fois, puis revenez-y quand vous avez besoin de faire une modification spécifique.

---

## Prérequis & Outils

### Ce dont vous avez besoin

#### 1. **Node.js** (obligatoire)
Node.js est l'environnement qui permet d'exécuter JavaScript hors du navigateur.

```bash
# Vérifier si Node.js est installé
node --version
# Doit afficher v18.0.0 ou supérieur

# Si pas installé, téléchargez sur : https://nodejs.org/
```

#### 2. **Éditeur de code** (recommandé : VS Code)
Un éditeur vous aide à écrire du code avec coloration syntaxique et autocomplétion.

**VS Code (gratuit)** : https://code.visualstudio.com/

**Extensions VS Code recommandées** :
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier - Code formatter
- SCSS IntelliSense

#### 3. **Git** (recommandé)
Pour versionner votre code et suivre les modifications.

```bash
# Vérifier si Git est installé
git --version

# Si pas installé : https://git-scm.com/
```

#### 4. **Navigateur moderne**
Chrome, Firefox ou Edge avec les DevTools.

### Premier lancement du projet

```bash
# 1. Ouvrir un terminal dans le dossier du projet
cd portfolio-react

# 2. Installer les dépendances (une seule fois)
npm install

# 3. Démarrer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:5173/ dans votre navigateur
```

**Note** : Quand le serveur de développement tourne, vos modifications s'affichent automatiquement dans le navigateur (Hot Reload).

---

## Comprendre l'architecture

### Comment React fonctionne dans ce projet

React construit l'interface en assemblant des **composants** comme des pièces de LEGO.

#### Flux de l'application

```
index.html (page HTML de base)
    ↓
src/main.jsx (point d'entrée JavaScript)
    ↓
src/App.jsx (composant racine)
    ↓
  ┌─────────────────┬─────────────────┬─────────────────┐
  ↓                 ↓                 ↓                 ↓
Header          StarField       CosmicCursor       Footer
  ↓
Pages (Home, About, Projects)
```

#### Fichiers clés à connaître

| Fichier | Rôle | Quand le modifier |
|---------|------|-------------------|
| `src/main.jsx` | Point d'entrée | Rarement (seulement pour config globale) |
| `src/App.jsx` | Structure et navigation | Pour ajouter des pages |
| `src/data/*.js` | Contenu (projets, bio) | **Très souvent** (vos infos) |
| `src/styles/*.scss` | Styles visuels | Pour changer couleurs/design |
| `src/components/*.jsx` | Composants réutilisables | Pour modifier le layout |
| `src/pages/*.jsx` | Pages du site | Pour changer le contenu des pages |

---

## Modifications courantes

### 1. Modifier vos informations personnelles

#### A. Changer votre bio

**Fichier** : `src/data/bioData.js`

```javascript
export const bioVersions = {
  shortest: "Ma courte présentation ici",

  shorter: "Une présentation un peu plus longue...",

  long: "Une version encore plus détaillée de ma bio...",

  longest: "La version la plus complète de ma présentation..."
};
```

**Résultat** : Les différentes pages utilisent ces versions selon l'espace disponible.

#### B. Modifier vos compétences

**Fichier** : `src/data/bioData.js`

```javascript
export const skillsData = {
  // Modifiez avec VOS compétences front-end
  front: "React ✧ JavaScript ✧ HTML/CSS ✧ Tailwind",

  // Modifiez avec VOS compétences back-end
  back: "Node.js ✧ Express ✧ MongoDB ✧ REST API"
};

export const toolsData = "✧ Figma ✧ Git/GitHub ✧ VS Code ✧ Postman";
```

**Résultat** : Vos compétences s'affichent sur la page About.

### 2. Ajouter/Modifier un projet

#### A. Préparer les images du projet

1. **Optimiser vos captures d'écran** (PNG ou JPG, < 500 KB)
2. **Les placer dans** : `/public/images/projects/`
3. **Nommer clairement** : `mon-projet-home.png`, `mon-projet-detail.png`

#### B. Ajouter le projet dans les données

**Fichier** : `src/data/projectsData.js`

```javascript
export const projects = [
  // Vos autres projets...

  // NOUVEAU PROJET - Copiez ce modèle
  {
    id: "mon-nouveau-projet",           // Identifiant unique (pas d'espaces)
    name: "Mon Nouveau Projet",         // Nom affiché
    description: "Description détaillée de mon projet. Expliquer ce qu'il fait, le contexte, les défis relevés...",
    tech: "React, Node.js, MongoDB",    // Technologies utilisées
    github: "https://github.com/username/projet", // Lien GitHub
    images: [
      "/images/projects/mon-projet-home.png",
      "/images/projects/mon-projet-detail.png"
    ],
    alt: [
      "Page d'accueil du projet",       // Description pour accessibilité
      "Page de détail du projet"
    ]
  }
];
```

**Résultat** : Le projet apparaît automatiquement sur la page Projects.

#### C. Supprimer un projet

Supprimez simplement l'objet correspondant dans le tableau `projects`.

### 3. Changer les couleurs du site

**Fichier** : `src/styles/_variables.scss`

```scss
// COULEURS PRINCIPALES
$color-primary: #86eae7;        // Couleur d'accent (liens, boutons)
$color-secondary: #D8CBC4;      // Couleur secondaire
$color-text: #f8f8f8;           // Couleur du texte
$color-background: #292727;     // Fond principal (mode sombre)
$color-background-alt: #1a1a2e; // Fond alternatif

// Vous pouvez utiliser n'importe quelle couleur hex
// Exemples :
// Bleu : #3498db
// Violet : #9b59b6
// Rose : #e74c3c
// Vert : #2ecc71
```

**Comment choisir des couleurs ?**
- [Coolors.co](https://coolors.co/) - Générateur de palettes
- [Adobe Color](https://color.adobe.com/) - Roue chromatique
- Assurez-vous d'avoir un bon contraste texte/fond pour l'accessibilité

**Résultat** : Toutes les pages utilisent ces nouvelles couleurs.

### 4. Modifier les liens sociaux

#### A. Dans le Header/Footer

**Fichier** : `src/components/Header.jsx` (ou `Footer.jsx`)

Cherchez les liens et modifiez-les :

```jsx
<a
  href="https://github.com/VOTRE-USERNAME"  // Modifiez ici
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/images/icons/github.svg" alt="GitHub" />
</a>
```

#### B. Dans la page Home

**Fichier** : `src/pages/Home.jsx`

Même principe, cherchez les balises `<a>` et modifiez les `href`.

### 5. Ajouter/Changer des images

#### Images de projets
Placez-les dans : `/public/images/projects/`

#### Icônes
Placez-les dans : `/public/images/icons/`

#### Utilisation dans le code
```jsx
// Chemin relatif à /public/
<img src="/images/mon-image.png" alt="Description" />
```

**Important** : Le chemin commence par `/` car les fichiers dans `/public/` sont accessibles à la racine.

---

## Ajouter de nouvelles fonctionnalités

### 1. Ajouter une nouvelle page

#### Étape 1 : Créer le fichier de la page

**Fichier** : `src/pages/Contact.jsx` (exemple)

```jsx
/**
 * Page Contact
 */
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <main className="contact-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contactez-moi</h1>
        <p>Contenu de votre page ici...</p>
      </motion.div>
    </main>
  );
};

export default Contact;
```

#### Étape 2 : Ajouter la route dans App.jsx

**Fichier** : `src/App.jsx`

```jsx
// 1. Importer la nouvelle page (en haut du fichier)
import Contact from './pages/Contact';

// 2. Ajouter la route dans la fonction AnimatedRoutes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />

        {/* NOUVELLE ROUTE */}
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
```

#### Étape 3 : Ajouter le lien dans le menu

**Fichier** : `src/components/Header.jsx`

Ajoutez un lien dans la navigation :

```jsx
<Link to="/contact" onClick={closeMenu}>
  Contact
</Link>
```

#### Étape 4 : Créer les styles (optionnel)

**Fichier** : `src/styles/pages/_contact.scss` (nouveau fichier)

```scss
.contact-page {
  padding: 2rem;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    color: $color-primary;
  }
}
```

N'oubliez pas d'importer ce fichier dans `src/styles/main.scss` :

```scss
@import 'pages/contact';
```

### 2. Ajouter un nouveau composant réutilisable

**Exemple** : Créer un composant "Card" pour afficher des informations

#### Étape 1 : Créer le composant

**Fichier** : `src/components/Card.jsx`

```jsx
/**
 * Composant Card réutilisable
 *
 * @param {string} title - Titre de la card
 * @param {string} description - Contenu de la card
 * @param {string} image - URL de l'image (optionnel)
 */
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
```

#### Étape 2 : Utiliser le composant

Dans n'importe quelle page :

```jsx
import Card from '../components/Card';

function MaPage() {
  return (
    <div>
      <Card
        title="Mon titre"
        description="Ma description"
        image="/images/mon-image.png"
      />
    </div>
  );
}
```

### 3. Modifier le thème clair/sombre

#### A. Ajouter des couleurs pour le thème clair

**Fichier** : `src/styles/_theme.scss`

```scss
// THÈME SOMBRE (par défaut)
[data-theme="dark"] {
  --color-bg: #292727;
  --color-text: #f8f8f8;
  --color-primary: #86eae7;
}

// THÈME CLAIR
[data-theme="light"] {
  --color-bg: #ffffff;          // Fond blanc
  --color-text: #2c3e50;        // Texte sombre
  --color-primary: #3498db;     // Bleu pour les accents
  --color-secondary: #95a5a6;   // Gris pour secondaire
}
```

#### B. Utiliser les variables dans vos styles

```scss
.mon-element {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 2px solid var(--color-primary);
}
```

**Pourquoi ?** Les variables CSS (`var(--nom)`) changent automatiquement selon le thème actif.

### 4. Ajouter une animation

Avec **Framer Motion**, les animations sont faciles !

#### Animation de base : Fade In

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}      // État initial
  animate={{ opacity: 1 }}      // État final
  transition={{ duration: 0.5 }} // Durée (0.5 seconde)
>
  Mon contenu
</motion.div>
```

#### Animation au scroll

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}  // S'anime quand visible
  viewport={{ once: true }}             // Une seule fois
  transition={{ duration: 0.6 }}
>
  Mon contenu
</motion.div>
```

#### Animation au survol

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}    // Agrandit de 10%
  whileTap={{ scale: 0.95 }}     // Réduit au clic
  transition={{ duration: 0.2 }}
>
  Cliquez-moi
</motion.button>
```

**Plus d'exemples** : https://www.framer.com/motion/examples/

---

## Dépannage

### Problèmes courants et solutions

#### ❌ Problème : `npm run dev` ne fonctionne pas

**Erreur** : `command not found: npm`

**Solution** :
```bash
# Vérifier que Node.js est installé
node --version

# Si rien ne s'affiche, installer Node.js :
# https://nodejs.org/
```

**Erreur** : `Cannot find module...`

**Solution** :
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
```

#### ❌ Problème : La page est blanche

**Causes possibles** :
1. **Erreur JavaScript** - Ouvrez la console (F12) pour voir l'erreur
2. **Import manquant** - Vérifiez que tous les imports sont corrects
3. **Composant non exporté** - Vérifiez `export default` à la fin du fichier

**Solution** :
```bash
# Regarder les erreurs dans le terminal
# Regarder les erreurs dans la console du navigateur (F12)
```

#### ❌ Problème : Les styles ne s'appliquent pas

**Causes possibles** :
1. **Fichier SCSS non importé** - Vérifiez `src/styles/main.scss`
2. **Nom de classe incorrect** - Vérifiez l'orthographe
3. **Spécificité CSS** - Un autre style a la priorité

**Solution** :
```scss
// Dans main.scss, vérifiez que votre fichier est importé
@import 'pages/ma-page';

// Augmenter la spécificité si nécessaire
.ma-classe.ma-classe {
  // Styles...
}
```

#### ❌ Problème : L'image ne s'affiche pas

**Solution** :
```jsx
// ✅ CORRECT (fichier dans /public/)
<img src="/images/mon-image.png" alt="Description" />

// ❌ INCORRECT
<img src="images/mon-image.png" alt="Description" />
<img src="../images/mon-image.png" alt="Description" />
```

**Vérifier** :
1. L'image est bien dans `/public/images/`
2. Le nom du fichier est correct (respecter majuscules/minuscules)
3. Le chemin commence par `/`

#### ❌ Problème : `npm run build` échoue

**Erreur courante** : Warnings ESLint

**Solution** :
```bash
# Corriger les warnings ESLint d'abord
npm run lint

# Ou forcer le build (déconseillé)
npm run build -- --mode production
```

### Comment déboguer efficacement

#### 1. Utiliser `console.log()`

```jsx
function MonComposant({ data }) {
  // Afficher les données reçues
  console.log('Données reçues:', data);

  return <div>{data.name}</div>;
}
```

#### 2. React DevTools

Installez l'extension navigateur "React Developer Tools" :
- Chrome : https://chrome.google.com/webstore
- Firefox : https://addons.mozilla.org/

**Avantages** :
- Voir la hiérarchie des composants
- Inspecter les props et state
- Voir les re-renders

#### 3. Vérifier les imports

```jsx
// ✅ Bon import
import MonComposant from './components/MonComposant';

// ❌ Mauvais import (majuscule/minuscule)
import moncomposant from './components/MonComposant';
```

---

## Bonnes pratiques

### 1. Organisation du code

#### Nommer vos fichiers et composants

```
✅ BIEN :
- Composants : PascalCase (MaCard.jsx, Header.jsx)
- Fichiers utilitaires : camelCase (formatDate.js, api.js)
- Styles : kebab-case (_ma-card.scss, _variables.scss)

❌ À ÉVITER :
- Mélanger les conventions
- Noms trop courts (c.jsx, h.jsx)
```

#### Structure des composants

```jsx
/**
 * Documentation du composant
 */
import { useState } from 'react';
import './MonComposant.scss';

// 1. Définir les types de props (si TypeScript)
// 2. Composant principal
const MonComposant = ({ prop1, prop2 }) => {
  // 3. State et hooks
  const [state, setState] = useState(initial);

  // 4. Fonctions utilitaires
  const handleClick = () => {
    // ...
  };

  // 5. Render
  return (
    <div className="mon-composant">
      {/* JSX ici */}
    </div>
  );
};

// 6. Export
export default MonComposant;
```

### 2. Gestion de l'état (State)

#### Quand utiliser useState ?

```jsx
// ✅ Pour des données qui changent dans le composant
const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);

// ❌ Ne PAS utiliser pour des données statiques
// Utilisez plutôt des constantes
const MENU_ITEMS = ['Home', 'About', 'Projects'];
```

#### Mettre à jour le state correctement

```jsx
// ✅ CORRECT
setCount(count + 1);
setCount(prevCount => prevCount + 1); // Encore mieux !

// ❌ INCORRECT
count = count + 1;  // Ne modifie jamais directement le state !
```

### 3. Performance

#### Ne pas créer de fonctions dans le render

```jsx
// ❌ MAUVAIS (fonction recréée à chaque render)
<button onClick={() => handleClick(id)}>Click</button>

// ✅ MIEUX
const handleButtonClick = () => handleClick(id);
<button onClick={handleButtonClick}>Click</button>

// ✅ ENCORE MIEUX (avec useCallback pour composants complexes)
import { useCallback } from 'react';
const handleButtonClick = useCallback(() => handleClick(id), [id]);
```

#### Éviter les re-renders inutiles

```jsx
// Utiliser React.memo pour composants lourds
import { memo } from 'react';

const HeavyComponent = memo(({ data }) => {
  // Ce composant ne re-render que si 'data' change
  return <div>{/* ... */}</div>;
});
```

### 4. Accessibilité (A11Y)

```jsx
// ✅ Toujours des alt sur les images
<img src="/image.png" alt="Description détaillée" />

// ✅ Labels pour les inputs
<label htmlFor="email">Email :</label>
<input id="email" type="email" />

// ✅ Sémantique HTML
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// ✅ ARIA pour éléments interactifs
<button aria-label="Fermer le menu" onClick={close}>
  ✕
</button>
```

### 5. Git & Versioning

#### Commits significatifs

```bash
# ✅ Messages clairs et descriptifs
git commit -m "Ajout: Page Contact avec formulaire"
git commit -m "Fix: Correction affichage mobile Header"
git commit -m "Style: Mise à jour palette de couleurs"

# ❌ Messages vagues
git commit -m "update"
git commit -m "fix bug"
git commit -m "modifications"
```

#### Ignorer les fichiers inutiles

Le fichier `.gitignore` est déjà configuré pour ignorer :
- `node_modules/` (dossier très lourd)
- `dist/` (fichiers générés)
- `.env` (variables secrètes)

**Ne JAMAIS commit** :
- Les clés API
- Les mots de passe
- Le dossier `node_modules/`

---

## Améliorer le projet

### Idées de fonctionnalités à ajouter

#### Niveau Débutant
- [ ] Ajouter un bouton "Retour en haut" (scroll to top)
- [ ] Créer une page de remerciements
- [ ] Ajouter plus de projets
- [ ] Modifier les animations existantes
- [ ] Changer la palette de couleurs

#### Niveau Intermédiaire
- [ ] Créer un formulaire de contact fonctionnel
- [ ] Ajouter un système de filtres pour les projets
- [ ] Implémenter un carrousel d'images
- [ ] Créer une page Blog avec articles
- [ ] Ajouter un mode "Print" pour CV

#### Niveau Avancé
- [ ] Intégrer un CMS (Contentful, Strapi)
- [ ] Ajouter des tests (Jest, React Testing Library)
- [ ] Implémenter le SEO (React Helmet)
- [ ] Créer une version multilingue (i18n)
- [ ] Optimiser les performances (lazy loading, code splitting)

### Architecture recommandée pour scaling

Si le projet devient plus gros, organisez-le ainsi :

```
src/
├── components/
│   ├── common/         # Composants réutilisables (Button, Card, etc.)
│   ├── layout/         # Layout (Header, Footer, Sidebar)
│   └── features/       # Composants par fonctionnalité
├── pages/
├── hooks/              # Hooks personnalisés
├── context/            # Contexts React
├── services/           # API calls, services externes
├── utils/              # Fonctions utilitaires
├── constants/          # Constantes globales
└── styles/
```

---

## Ressources pour progresser

### Apprendre React

#### Débutant
- 📖 [Documentation officielle React](https://react.dev/) - Le meilleur point de départ
- 🎥 [React pour débutants (Grafikart)](https://grafikart.fr/tutoriels/react) - En français
- 🎮 [Tutoriel interactif](https://react.dev/learn/tutorial-tic-tac-toe) - Apprendre en faisant

#### Intermédiaire
- 📖 [React Hooks en détail](https://react.dev/reference/react)
- 🎥 [React Patterns](https://www.patterns.dev/posts/react-patterns/)
- 💻 [Exercices pratiques](https://react-tutorial.app/)

#### Avancé
- 📖 [React Performance](https://react.dev/learn/render-and-commit)
- 🛠️ [Testing React](https://testing-library.com/docs/react-testing-library/intro/)

### JavaScript moderne

- [JavaScript.info](https://javascript.info/) - Guide complet ES6+
- [MDN Web Docs](https://developer.mozilla.org/fr/) - Référence complète

### CSS & Design

- [Flexbox Froggy](https://flexboxfroggy.com/#fr) - Apprendre Flexbox en jouant
- [Grid Garden](https://cssgridgarden.com/#fr) - Apprendre CSS Grid
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs

### Outils

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Déboguer efficacement
- [React DevTools](https://react.dev/learn/react-developer-tools) - Inspecter React

### Communautés

- [Discord Grafikart](https://grafikart.fr/tchat) - Communauté française
- [Reddit /r/reactjs](https://www.reddit.com/r/reactjs/) - Actualités React
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs) - Questions/réponses

---

## Checklist de maintenance

### Quotidienne (si développement actif)
- [ ] Tester en local (`npm run dev`)
- [ ] Vérifier la console pour les erreurs
- [ ] Commit des changements importants

### Hebdomadaire
- [ ] Vérifier les mises à jour de dépendances (`npm outdated`)
- [ ] Tester sur différents navigateurs
- [ ] Tester en mode responsive (mobile, tablette)

### Mensuelle
- [ ] Mettre à jour les dépendances mineures (`npm update`)
- [ ] Vérifier les performances (Lighthouse)
- [ ] Backup du code (push sur GitHub)
- [ ] Tester le build de production (`npm run build`)

### Avant déploiement
- [ ] Tests complets sur toutes les pages
- [ ] Vérifier les liens externes (GitHub, LinkedIn, etc.)
- [ ] Optimiser les images (compression)
- [ ] Tester le build (`npm run build && npm run preview`)
- [ ] Vérifier le SEO (meta tags, Open Graph)
- [ ] Test d'accessibilité (Wave, axe DevTools)

---

## Obtenir de l'aide

### Stratégie de résolution de problèmes

1. **Lire le message d'erreur** (dans terminal ET console navigateur)
2. **Vérifier les commentaires** dans le code concerné
3. **Consulter ce guide** (section Dépannage)
4. **Rechercher l'erreur** sur Google/Stack Overflow
5. **Demander de l'aide** sur Discord/Reddit

### Bien poser une question

Quand vous demandez de l'aide :

```markdown
❌ Mauvaise question :
"Ça marche pas, aidez-moi"

✅ Bonne question :
"Problème d'affichage des images sur la page Projects

Ce que j'ai fait :
- Ajouté une image dans /public/images/projects/
- Modifié projectsData.js avec le chemin /images/projects/mon-image.png

Résultat attendu : L'image s'affiche
Résultat obtenu : Image cassée (icône 🖼️)

Message d'erreur : GET 404 Not Found

Fichier concerné : src/data/projectsData.js ligne 15
```

---

## Conclusion

Ce guide couvre les bases de la maintenance de ce portfolio React. N'hésitez pas à :

- **Expérimenter** : Le meilleur moyen d'apprendre !
- **Lire le code** : Les commentaires expliquent comment ça fonctionne
- **Faire des erreurs** : C'est normal et instructif (utilisez Git pour revenir en arrière)
- **Demander de l'aide** : La communauté React est très active

**Rappel** : Avant toute modification importante, faites un commit Git pour pouvoir revenir en arrière si besoin :

```bash
git add .
git commit -m "Sauvegarde avant modification de [fonctionnalité]"
```

---

**Bon courage dans votre projet ! 🚀**

*Document maintenu par : Angéline Gillot*
*Dernière mise à jour : Novembre 2024*
