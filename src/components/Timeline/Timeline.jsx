import React, { useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

const Timeline = () => {
  const { t } = useTranslation();
  // Reverse so oldest item is first (leftmost)
  const items = [...t('timeline.items', { returnObjects: true })].reverse();

  const scrollRef   = useRef(null);
  const progressRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el  = scrollRef.current;
    const bar = progressRef.current;
    if (!el || !bar) return;
    const max = el.scrollWidth - el.clientWidth;
    bar.style.width = max > 0 ? `${(el.scrollLeft / max) * 100}%` : '0%';
  }, []);

  return (
    <section id="experience" className="timeline-section">

      <div className="tl-header container">
        <h2 className="section-title">{t('timeline.title')}</h2>
        <p className="tl-hint">
          <span className="tl-hint-arrow">↔</span>
          {t('timeline.scrollHint')}
        </p>
      </div>

      <div
        className="fps-h-scroll tl-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <div className="tl-track">
          <div className="tl-cap" aria-hidden="true" />

          {items.map((item, i) => (
            <div
              key={i}
              className={`tl-item ${i % 2 === 0 ? 'tl-above' : 'tl-below'}`}
            >
              {/* Dot — absolutely pinned to center line */}
              <div className={`tl-dot ${item.type}`} aria-hidden="true">
                <FontAwesomeIcon
                  icon={item.type === 'work' ? faBriefcase : faGraduationCap}
                />
              </div>

              {/* Connector from dot to card */}
              <div className="tl-connector" aria-hidden="true" />

              {/* Card */}
              <div className={`tl-card ${item.type}`}>
                <span className="tl-period">{item.period}</span>
                <h3 className="tl-role">{item.role}</h3>
                <p className="tl-company">{item.company}</p>
                <p className="tl-description">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="tl-cap" aria-hidden="true" />
        </div>
      </div>

      <div className="tl-progress-track" aria-hidden="true">
        <div className="tl-progress-fill" ref={progressRef} />
      </div>

    </section>
  );
};

export default Timeline;
