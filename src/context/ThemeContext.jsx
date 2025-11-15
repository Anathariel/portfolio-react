import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ==========================================
 * CONTEXT DE THÈME (Theme Context)
 * ==========================================
 *
 * Ce fichier gère le thème de l'application (clair/sombre).
 *
 * CONCEPTS REACT UTILISÉS :
 * - Context API : Permet de partager des données entre composants sans props drilling
 * - Hooks : useState pour l'état, useEffect pour les effets de bord, useContext pour accéder au contexte
 * - Custom Hook : useTheme() pour faciliter l'utilisation du contexte
 */

// Création du contexte - C'est comme une "boîte" qui va contenir nos données de thème
const ThemeContext = createContext();

/**
 * Hook personnalisé pour utiliser le thème dans n'importe quel composant
 *
 * UTILISATION :
 * const { theme, toggleTheme } = useTheme();
 *
 * @returns {Object} - Contient 'theme' (string: 'dark' ou 'light') et 'toggleTheme' (fonction)
 * @throws {Error} - Si utilisé en dehors du ThemeProvider
 */
export const useTheme = () => {
  // useContext permet d'accéder aux données du contexte
  const context = useContext(ThemeContext);

  // Vérification de sécurité : le hook doit être utilisé à l'intérieur du Provider
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};

/**
 * Provider du thème - Enveloppe l'application et fournit le thème à tous les enfants
 *
 * FONCTIONNALITÉS :
 * - Détecte le thème préféré de l'utilisateur (localStorage ou préférence système)
 * - Persiste le choix de thème dans localStorage
 * - Applique le thème au document HTML via un attribut data-theme
 *
 * @param {Object} props
 * @param {ReactNode} props.children - Les composants enfants qui auront accès au thème
 */
export const ThemeProvider = ({ children }) => {
  /**
   * Fonction pour déterminer le thème initial au chargement de l'application
   *
   * ORDRE DE PRIORITÉ :
   * 1. Thème sauvegardé dans localStorage (choix précédent de l'utilisateur)
   * 2. Préférence système de l'utilisateur (dark mode du système d'exploitation)
   * 3. Thème sombre par défaut
   */
  const getInitialTheme = () => {
    // Vérifier si un thème est déjà sauvegardé dans le navigateur
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Sinon, vérifier la préférence système de l'utilisateur
    // window.matchMedia permet de détecter les préférences CSS du système
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    // Par défaut, utiliser le thème sombre
    return 'dark';
  };

  // État React qui contient le thème actuel ('dark' ou 'light')
  // useState initialise l'état avec le résultat de getInitialTheme()
  const [theme, setTheme] = useState(getInitialTheme);

  /**
   * Effect Hook qui s'exécute à chaque changement de thème
   *
   * RESPONSABILITÉS :
   * - Applique le thème au document HTML (utilisé par les CSS)
   * - Sauvegarde le choix dans localStorage pour la prochaine visite
   */
  useEffect(() => {
    // Applique l'attribut data-theme sur l'élément <html>
    // Les styles CSS utilisent cet attribut : [data-theme="dark"] { ... }
    document.documentElement.setAttribute('data-theme', theme);

    // Sauvegarde le thème dans localStorage du navigateur
    // Cela persiste même après fermeture du navigateur
    localStorage.setItem('theme', theme);
  }, [theme]); // Le tableau [theme] signifie : "exécute cet effet quand 'theme' change"

  /**
   * Fonction pour basculer entre les thèmes clair et sombre
   *
   * UTILISATION : Appelée quand l'utilisateur clique sur le bouton de thème
   */
  const toggleTheme = () => {
    // setTheme avec une fonction : reçoit l'état précédent, retourne le nouvel état
    // Ceci est la méthode recommandée quand le nouvel état dépend de l'ancien
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  /**
   * Le Provider rend les données disponibles à tous ses enfants
   *
   * value={{ theme, toggleTheme }} : Les données partagées avec les composants enfants
   * {children} : Tous les composants enveloppés par ce Provider
   */
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
