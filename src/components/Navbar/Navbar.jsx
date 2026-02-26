import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const navLinks = ['about', 'experience', 'projects', 'skills', 'contact'];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-brand">SH.</a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(key => (
            <a key={key} href={`#${key}`} onClick={handleLinkClick}>
              {t(`navbar.links.${key}`)}
            </a>
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
