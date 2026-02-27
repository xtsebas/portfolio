import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../contexts/NavigationContext';
import './Hero.css';
import profileImage from '../../assets/profile.jpg';
import RotatingText from '../RotatingText/RotatingText';

const Hero = () => {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  return (
    <section id="hero" className="hero">
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">{t('hero.name')}</h1>
          <p className="hero-role">
            <span className="accent-text"><RotatingText /></span>
            {' '}
            <span className="role-suffix">{t('hero.roleSuffix')}</span>
            <span className="hero-separator"> / </span>
            <span>{t('hero.roleAlt')}</span>
          </p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigateTo(3)}>
              {t('hero.cta')} →
            </button>
            <button className="btn-outline" onClick={() => navigateTo(5)}>
              {t('hero.ctaContact')}
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Sebastián Huertas" />
          </div>
        </div>
      </div>

      <button className="hero-scroll-hint" onClick={() => navigateTo(1)} aria-label="Scroll down">
        <span></span>
      </button>
    </section>
  );
};

export default Hero;
