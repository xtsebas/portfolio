import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../contexts/NavigationContext';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { currentSection, navigateTo } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  // Maps nav key → section index
  const navLinks = [
    { key: 'about',      index: 1 },
    { key: 'experience', index: 2 },
    { key: 'projects',   index: 3 },
    { key: 'skills',     index: 4 },
    { key: 'contact',    index: 5 },
  ];

  const handleLinkClick = (index) => {
    navigateTo(index);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button className="navbar-brand" onClick={() => navigateTo(0)}>SH.</button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ key, index }) => (
            <button key={key} onClick={() => handleLinkClick(index)}>
              {t(`navbar.links.${key}`)}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="lang-btn" onClick={toggleLang}>
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
