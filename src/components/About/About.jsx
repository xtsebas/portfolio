import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const stats = t('about.stats', { returnObjects: true });

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
        </div>
        <div className="about-card">
          <p className="about-bio">{t('about.bio')}</p>
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value accent-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
