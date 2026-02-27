import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectModal.css';

const ProjectModal = ({ project, image, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Block all scroll from reaching FullPageScroll (wheel, touch, keyboard)
    const blockWheel = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };
    const blockTouch = (e) => {
      e.stopPropagation();
    };
    const blockKeys = (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'].includes(e.key)) {
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.key === 'Escape') onClose();
    };

    // Capture phase so we intercept before FullPageScroll's window listeners
    window.addEventListener('wheel',      blockWheel, { capture: true, passive: false });
    window.addEventListener('touchstart', blockTouch, { capture: true });
    window.addEventListener('touchend',   blockTouch, { capture: true });
    window.addEventListener('keydown',    blockKeys,  { capture: true });

    // Also freeze the current fps-page so its CSS overflow-y doesn't scroll
    const activePage = document.querySelector('.fps-page.fps-current');
    if (activePage) activePage.style.overflowY = 'hidden';

    return () => {
      window.removeEventListener('wheel',      blockWheel, { capture: true });
      window.removeEventListener('touchstart', blockTouch, { capture: true });
      window.removeEventListener('touchend',   blockTouch, { capture: true });
      window.removeEventListener('keydown',    blockKeys,  { capture: true });

      const activePage = document.querySelector('.fps-page.fps-current');
      if (activePage) activePage.style.overflowY = '';
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="pm-header">
          <h2 className="pm-title">{project.title}</h2>
          <button className="pm-close" onClick={onClose} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Media */}
        <div className="pm-media">
          <img src={image} alt={project.title} />
        </div>

        {/* Content */}
        <div className="pm-content">
          <div className="pm-left">
            <div className="pm-section">
              <h3 className="pm-section-label">{t('projects.modal.overview')}</h3>
              <p className="pm-overview">{project.description}</p>
            </div>

            {project.features?.length > 0 && (
              <div className="pm-section">
                <h3 className="pm-section-label">{t('projects.modal.keyFeatures')}</h3>
                <ul className="pm-features">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pm-right">
            <div className="pm-section">
              <h3 className="pm-section-label">{t('projects.modal.technologies')}</h3>
              <div className="pm-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            {(project.repo || project.demo) && (
              <div className="pm-section">
                <h3 className="pm-section-label">{t('projects.modal.links')}</h3>
                <div className="pm-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pm-link">
                      <FontAwesomeIcon icon={faGithub} />
                      <span>{t('projects.modal.viewGithub')}</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="pm-link">
                      <FontAwesomeIcon icon={faGlobe} />
                      <span>{t('projects.modal.liveDemo')}</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {project.status && (
              <div className="pm-section">
                <h3 className="pm-section-label">{t('projects.modal.status')}</h3>
                <span className="pm-status-badge">{project.status}</span>
              </div>
            )}

            {project.timeline && (
              <div className="pm-section">
                <h3 className="pm-section-label">{t('projects.modal.timeline')}</h3>
                <span className="pm-timeline-text">{project.timeline}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
