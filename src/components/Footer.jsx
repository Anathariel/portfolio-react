import { useTheme } from '../context/ThemeContext';

/**
 * Modern Footer component
 * Minimalist design with social links
 * Logo adapts to theme
 */
const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  // Use logo matching the theme
  const logoSrc = theme === 'dark' ? '/images/logo/logoDark.svg' : '/images/logo/logoLight.svg';

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoSrc} alt="Angele Dev Logo" />
        </div>

        <div className="footer-links">
          <a href="https://github.com/Anathariel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/angeledev/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/images/CV/CV English.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Angéline Gillot. Made with ✨ and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
