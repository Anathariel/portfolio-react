/**
 * ==========================================
 * POINT D'ENTRÉE DE L'APPLICATION (main.jsx)
 * ==========================================
 *
 * Ce fichier est le TOUT PREMIER fichier JavaScript exécuté.
 * Il "monte" (attache) l'application React dans le DOM HTML.
 *
 * RÔLE :
 * - Trouver l'élément HTML avec l'id "root" dans index.html
 * - Y injecter toute l'application React (composant App)
 *
 * CONCEPTS REACT :
 * - createRoot : API moderne de React 18+ pour créer la racine de l'app
 * - StrictMode : Mode de développement qui active des vérifications supplémentaires
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss'; // Import des styles globaux (SCSS compilé en CSS)

/**
 * Montage de l'application React
 *
 * ÉTAPES :
 * 1. document.getElementById('root') : Trouve l'élément <div id="root"> dans index.html
 * 2. createRoot(...) : Crée une "racine" React à cet emplacement
 * 3. .render(...) : Affiche le contenu React dans cette racine
 *
 * STRICTMODE :
 * Active des vérifications en mode développement :
 * - Détecte les effets de bord inattendus
 * - Alerte sur les APIs obsolètes
 * - Vérifie que les composants sont réutilisables (rend 2x en dev)
 * Note : StrictMode n'affecte PAS la production (build)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
