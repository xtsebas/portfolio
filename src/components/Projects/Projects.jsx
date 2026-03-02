import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LogoLoop from '../LogoLoop/LogoLoop';
import ProjectModal from './ProjectModal';
import AllProjectsPage from './AllProjectsPage';
import './Projects.css';

const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

import animeBlog from '../../assets/animeblog.gif';
import smartyou from '../../assets/smartyou.gif';
import agentsgt from '../../assets/agents.gif';
import convoai from '../../assets/convo.gif';
import app from '../../assets/raices.gif';
import therapistTrack from '../../assets/therapisttrack.png';
import jackscave from '../../assets/jackscave.jpg';
import uvgshop from '../../assets/uvgshop.png';
import othelloAI from '../../assets/othello.png';

const projectImages = [agentsgt, convoai, therapistTrack, jackscave,  othelloAI, animeBlog, smartyou, uvgshop, app];

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const logoItems = useMemo(() => projects.map((project, i) => ({
    node: (
      <div
        className="project-card project-card--clickable"
        onClick={() => { if (isDesktop()) setSelectedIndex(i); }}
      >
        <div className="project-media">
          <img src={projectImages[i]} alt={project.title} />
          <div className="project-media-overlay"></div>
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
    ),
    ariaLabel: project.title,
  })), [projects, t]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>
      </div>
      <LogoLoop
        logos={logoItems}
        speed={70}
        direction="left"
        pauseOnHover
        gap={24}
        logoHeight={16}
        width="100%"
        fadeOut
        fadeOutColor="#0f0f23"
        ariaLabel="Projects"
      />

      <div className="projects-footer">
        <button className="projects-see-more-btn" onClick={() => setShowAll(true)}>
          <span>{t('projects.seeMore')}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          image={projectImages[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      {showAll && (
        <AllProjectsPage
          projects={projects}
          images={projectImages}
          onClose={() => setShowAll(false)}
        />
      )}
    </section>
  );
};

export default Projects;
