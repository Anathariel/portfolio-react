import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

/**
 * Header component with responsive navigation
 * Features:
 * - Fixed header with logo (adapts to theme)
 * - Desktop navigation menu
 * - Mobile burger menu
 * - Theme toggle (day/night)
 * - Aurora glow effect
 */
const Header = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Use logo matching the theme
  const logoSrc = theme === 'dark' ? '/images/logo/logoDark.svg' : '/images/logo/logoLight.svg';

  return (
    <header>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoSrc} alt="Angele Dev Logo" />
        </Link>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/about" onClick={closeMenu}>About me</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>My projects</Link>
          </li>
          <li>
            <a
              href="/images/CV/DevWebENAngéline_Gillot.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              My resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-controls">
        <ThemeToggle />
        <div className="burger-menu" onClick={toggleMenu}>
          <img src="/images/icons/menu-burger.svg" alt="Menu Burger" />
        </div>
      </div>
    </header>
  );
};

export default Header;
