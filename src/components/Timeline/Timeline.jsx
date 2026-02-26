import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

const Timeline = () => {
  const { t } = useTranslation();
  const items = t('timeline.items', { returnObjects: true });

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('timeline.title')}</h2>
        </div>
        <div className="timeline">
          {items.map((item, i) => (
            <div key={i} className={`timeline-item ${item.type}`}>
              <div className="timeline-icon">
                <FontAwesomeIcon
                  icon={item.type === 'work' ? faBriefcase : faGraduationCap}
                />
              </div>
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-end-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
