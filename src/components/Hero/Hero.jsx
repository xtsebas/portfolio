import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">{t('hero.name')}</h1>
          <p className="hero-role">
            <span className="accent-text">{t('hero.role')}</span>
            <span className="hero-separator"> / </span>
            <span>{t('hero.roleAlt')}</span>
          </p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              {t('hero.cta')} ↓
            </a>
            <a href="#contact" className="btn-outline">
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Sebastián Huertas" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
