import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../../data/navigation';
import './Navbar.css';

const DESKTOP_BREAKPOINT = 992;
const MENU_TRANSITION_MS = 400; // matches the `.navbar ul` slide transition

function Navbar({ activeSection, onNavigate, theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTimer = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  useEffect(() => () => clearTimeout(scrollTimer.current), []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const scroll = () => {
      target.scrollIntoView({ behavior: 'smooth' });
      onNavigate(id);
    };

    if (isMenuOpen) {
      // Let the mobile menu slide out before scrolling.
      closeMenu();
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(scroll, MENU_TRANSITION_MS);
    } else {
      scroll();
    }
  };

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
            Portfolio
          </a>

          <div className="navbar-actions">
            {/* Theme toggle */}
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </button>

            {/* Hamburger menu (mobile) */}
            <button
              type="button"
              id="menu-icon"
              className={isMenuOpen ? 'active' : ''}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>

          <ul id="nav-menu" className={isMenuOpen ? 'active' : ''}>
            <li className="mobile-menu-header">
              <span className="menu-title">Menu</span>
              <button
                type="button"
                id="close-menu"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>

            {navLinks.map(({ id, label, icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, id)}
                >
                  <FontAwesomeIcon icon={icon} className="nav-icon" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={`menu-overlay${isMenuOpen ? ' active' : ''}`}
        id="menu-overlay"
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;
