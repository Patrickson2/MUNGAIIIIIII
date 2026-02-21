import { useState } from 'react';
import '../stylings/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - PM Monogram */}
        <a href="#" className="logo">
          <div className="monogram-logo">
            <span className="pm-text">PM</span>
          </div>
        </a>

        {/* Theme Toggle */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </button>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <h3>Connect With Me</h3>
            <ul className="social-links">
              <li>
                <a 
                  href="https://github.com/Patrickson2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/patrickson-mungai-a7a936280/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:thairupatrickson@gmail.com" 
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope"></i>
                  <span>Gmail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


