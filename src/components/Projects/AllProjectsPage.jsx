import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectModal from './ProjectModal';
import './AllProjectsPage.css';

const AllProjectsPage = ({ projects, images, onClose }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const apBodyRef = useRef(null);

  useEffect(() => {
    const apBody = apBodyRef.current;

    // ── Inside ap-body: stop events from bubbling to FullPageScroll
    //    but do NOT preventDefault so the browser still scrolls ap-body
    const stopBubble = (e) => e.stopPropagation();
    if (apBody) {
      apBody.addEventListener('wheel',      stopBubble, { passive: true });
      apBody.addEventListener('touchstart', stopBubble, { passive: true });
      apBody.addEventListener('touchend',   stopBubble, { passive: true });
    }

    // ── Outside ap-body (header, backdrop): block completely
    const blockOutside = (e) => {
      if (!apBody || !apBody.contains(e.target)) {
        e.stopPropagation();
        if (e.type === 'wheel') e.preventDefault();
      }
    };
    window.addEventListener('wheel',      blockOutside, { capture: true, passive: false });
    window.addEventListener('touchstart', blockOutside, { capture: true });
    window.addEventListener('touchend',   blockOutside, { capture: true });

    // ── Keyboard: scroll ap-body with arrows, close with Escape
    const blockKeys = (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'].includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
        if (apBody) {
          const amount = e.key.includes('Page') ? apBody.clientHeight * 0.85 : 80;
          const dir    = (e.key === 'ArrowDown' || e.key === 'PageDown') ? 1 : -1;
          apBody.scrollBy({ top: dir * amount, behavior: 'smooth' });
        }
      }
      if (e.key === 'Escape' && selectedIndex === null) onClose();
    };
    window.addEventListener('keydown', blockKeys, { capture: true });

    const activeFpsPage = document.querySelector('.fps-page.fps-current');
    if (activeFpsPage) activeFpsPage.style.overflowY = 'hidden';

    return () => {
      if (apBody) {
        apBody.removeEventListener('wheel',      stopBubble);
        apBody.removeEventListener('touchstart', stopBubble);
        apBody.removeEventListener('touchend',   stopBubble);
      }
      window.removeEventListener('wheel',      blockOutside, { capture: true });
      window.removeEventListener('touchstart', blockOutside, { capture: true });
      window.removeEventListener('touchend',   blockOutside, { capture: true });
      window.removeEventListener('keydown',    blockKeys,    { capture: true });

      const activeFpsPage = document.querySelector('.fps-page.fps-current');
      if (activeFpsPage) activeFpsPage.style.overflowY = '';
    };
  }, [onClose, selectedIndex]);

  return ReactDOM.createPortal(
    <>
      <div className="ap-overlay">
        {/* Sticky header */}
        <div className="ap-header">
          <button className="ap-back-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{t('projects.back')}</span>
          </button>
          <h2 className="ap-title">{t('projects.allTitle')}</h2>
          {/* spacer to balance back button */}
          <div className="ap-header-end" />
        </div>

        {/* Scrollable grid */}
        <div className="ap-body" ref={apBodyRef}>
          <div className="ap-grid">
            {projects.map((project, i) => (
              <div
                key={i}
                className="project-card ap-card"
                onClick={() => setSelectedIndex(i)}
              >
                <div className="project-media">
                  <img src={images[i]} alt={project.title} />
                  <div className="project-media-overlay" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{t('projects.buttons.code')}</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>{t('projects.buttons.demo')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          image={images[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>,
    document.body
  );
};

export default AllProjectsPage;
