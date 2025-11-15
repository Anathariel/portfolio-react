/**
 * ==========================================
 * COMPOSANT PRINCIPAL DE L'APPLICATION (App.jsx)
 * ==========================================
 *
 * Ce fichier est le point d'entrée principal de l'application React.
 * Il configure la structure globale et la navigation.
 *
 * CONCEPTS REACT UTILISÉS :
 * - React Router : Pour la navigation entre pages (SPA - Single Page Application)
 * - Framer Motion : Pour les animations de transition entre pages
 * - Context API : Pour le thème (via ThemeProvider)
 *
 * STRUCTURE DE L'APPLICATION :
 * ThemeProvider (gestion du thème)
 *   └─ Router (navigation)
 *       ├─ StarField (effet visuel de fond)
 *       ├─ CosmicCursor (curseur personnalisé)
 *       ├─ Header (menu de navigation)
 *       ├─ AnimatedRoutes (pages avec transitions)
 *       └─ Footer (pied de page)
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CosmicCursor from './components/CosmicCursor';
import StarField from './components/StarField';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

/**
 * AnimatedRoutes - Gère les routes avec animations
 *
 * POURQUOI UN COMPOSANT SÉPARÉ ?
 * useLocation() ne peut être appelé qu'à l'intérieur d'un <Router>,
 * donc nous créons un composant enfant du Router pour gérer les routes animées.
 *
 * FONCTIONNALITÉS :
 * - AnimatePresence : Gère les animations d'entrée/sortie des pages
 * - mode="wait" : Attend que la page actuelle termine son animation de sortie
 *                 avant de commencer l'animation d'entrée de la nouvelle page
 * - key={location.pathname} : Force React à traiter chaque route comme unique,
 *                             déclenchant ainsi les animations de transition
 */
function AnimatedRoutes() {
  // useLocation donne accès à l'URL actuelle (ex: '/', '/about', '/projects')
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/*
        Routes définit toutes les pages de l'application
        - location={location} : Synchronise avec l'URL actuelle
        - key={location.pathname} : Crucial pour les animations (identifie chaque page)
      */}
      <Routes location={location} key={location.pathname}>
        {/* Route pour la page d'accueil (/) */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        {/* Route pour la page À propos (/about) */}
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />

        {/* Route pour la page Projets (/projects) */}
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

/**
 * App - Composant racine de l'application
 *
 * ORDRE D'EMBOÎTEMENT IMPORTANT :
 * 1. ThemeProvider : En premier pour fournir le thème à toute l'app
 * 2. Router : Ensuite pour permettre la navigation
 * 3. Composants globaux : Effets visuels et layout qui apparaissent sur toutes les pages
 * 4. AnimatedRoutes : Les pages avec leurs animations
 *
 * COMPOSANTS GLOBAUX (présents sur toutes les pages) :
 * - StarField : Champ d'étoiles animé en arrière-plan
 * - CosmicCursor : Curseur personnalisé avec traînée de particules
 * - Header : Menu de navigation en haut de page
 * - Footer : Pied de page avec liens et informations
 */
function App() {
  return (
    // ThemeProvider enveloppe toute l'app pour fournir le contexte de thème
    <ThemeProvider>
      {/* Router active la navigation entre pages sans rechargement */}
      <Router>
        {/* Effets visuels de fond */}
        <StarField />
        <CosmicCursor />

        {/* Structure de layout commune à toutes les pages */}
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
