/**
 * ==========================================
 * DONNÉES DES PROJETS (projectsData.js)
 * ==========================================
 *
 * Ce fichier contient toutes les informations sur les projets du portfolio.
 * Centraliser les données permet de :
 * - Faciliter les modifications (un seul endroit à mettre à jour)
 * - Séparer les données de la logique des composants
 * - Réutiliser les données dans plusieurs composants
 *
 * COMMENT AJOUTER UN NOUVEAU PROJET :
 * 1. Copiez un objet projet existant
 * 2. Modifiez toutes les propriétés (id, name, description, etc.)
 * 3. Ajoutez vos images dans /public/images/projects/
 * 4. Le projet apparaîtra automatiquement sur la page Projects
 *
 * STRUCTURE D'UN PROJET :
 * - id : Identifiant unique (utilisé dans l'URL)
 * - name : Nom du projet
 * - description : Description détaillée
 * - tech : Technologies utilisées
 * - github : Lien vers le dépôt GitHub
 * live : lien vers le site hébergé
 * - images : Tableau des chemins d'images (relatifs à /public/)
 * - alt : Tableau des descriptions alternatives pour l'accessibilité
 */

export const projects = [
  {
    id: "inkfection",
    name: "Inkfection",
    description: "Inkfection was my first full HTML/CSS website project consisting of maquetting and coding a responsive onepage website for a tattoo salon.",
    tech: "Solo project - HTML/CSS only",
    github: "https://github.com/Anathariel/Projet-Tatouage",
    live:'https://projet-tatouage.vercel.app/',
    images: [
      "/images/projects/inkfection-home.png",
      "/images/projects/inkfection-stats.png"
    ],
    alt: [
      "Inkfection, tattoo website project - Main",
      "Inkfection, tattoo website project - Stats"
    ]
  },
  {
    id: "AfterGlow",
    name: "AfterGlow",
    description: "AfterGlow is a solo project made for discovering Vue.js and the use of the cocktail API; I went for a neon type fantasy website for your cocktail recipe findings ! Hope you like it I had lots of fun working in Vue.js.",
    tech: "Solo Project - Vue.js - HTML - SCSS & API Cocktail",
    github: "https://github.com/Anathariel/AfterGlow",
    live:'https://after-glow-swart.vercel.app/#/',
    images: [
      "/images/projects/AfterGlowHomepage.png",
      "/images/projects/AfterGlowCatalogue.png"
    ],
    alt: [
      "AfterGlow; solo project with API cocktail - Main",
      "AfterGlow; solo project for cocktail recipes"
    ]
  },
  {
    id: "locar",
    name: "Loca'R",
    description: "Loca'R is the first MVC structured project for a airbnb type website. We were given Twig & Altorouter as guidelines to use for this one. No symfony, full PHP.",
    tech: "Group Project - PHP & Altorouter / Twig - SCSS & JS",
    github: "https://github.com/Anathariel/Project-Rbnb",
    // live:'https://projet-tatouage.vercel.app/',
    images: [
      "/images/projects/locar-home.png",
      "/images/projects/locar-dashboard.png"
    ],
    alt: [
      "Loca'R, airbnb website project - Main",
      "Loca'R, airbnb website project - Dashboard"
    ]
  },
  {
    id: "team180",
    name: "Team 180",
    description: "A simple custom Wordpress Template made for a blog about our class. It regroups a part for blog articles and one to present me and my collegues.",
    tech: "Solo Project - HTML & SCSS + JS",
    github: "https://github.com/Anathariel/Team180",
    // live:'https://team180.vercel.app/',
    images: [
      "/images/projects/team180-home.png",
      "/images/projects/team180-home.png"
    ],
    alt: [
      "Team 180 - Wordpress Template - Main",
      "Team 180 - Wordpress Template - Blog"
    ]
  }
];
