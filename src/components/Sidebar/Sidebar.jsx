import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faBriefcase,
  faCode,
  faLayerGroup,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../contexts/NavigationContext';
import './Sidebar.css';

const NAV_ITEMS = [
  { icon: faHouse,      key: 'home',       index: 0 },
  { icon: faUser,       key: 'about',      index: 1 },
  { icon: faBriefcase,  key: 'experience', index: 2 },
  { icon: faCode,       key: 'projects',   index: 3 },
  { icon: faLayerGroup, key: 'skills',     index: 4 },
  { icon: faEnvelope,   key: 'contact',    index: 5 },
];

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const { currentSection, navigateTo } = useNavigation();
  const [hoveredKey, setHoveredKey] = useState(null);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ icon, key, index }) => {
          const isActive = currentSection === index;
          return (
            <button
              key={key}
              className={`sidebar-item${isActive ? ' active' : ''}`}
              onClick={() => navigateTo(index)}
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
              aria-label={t(`navbar.links.${key}`)}
            >
              {/* Animated active indicator */}
              {isActive && (
                <motion.div
                  className="sidebar-indicator"
                  layoutId="sidebar-indicator"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon */}
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />
              </span>

              {/* Hover label — slides in from right to left */}
              <AnimatePresence>
                {hoveredKey === key && (
                  <motion.span
                    className="sidebar-label"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.14 }}
                  >
                    {t(`navbar.links.${key}`)}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Language toggle */}
      <button
        className="sidebar-lang"
        onClick={toggleLang}
        aria-label="Toggle language"
      >
        {i18n.language === 'en' ? 'ES' : 'EN'}
      </button>
    </aside>
  );
};

export default Sidebar;
