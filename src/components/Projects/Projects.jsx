import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

import animeBlog from '../../assets/animeblog.gif';
import calculator from '../../assets/calculator.gif';
import apibloganime from '../../assets/apibloganime.png';
import smartyou from '../../assets/smartyou.gif';

const projectImages = [animeBlog, calculator, apibloganime, smartyou];

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-media">
                <img src={projectImages[i]} alt={project.title} loading="lazy" />
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
    </section>
  );
};

export default Projects;
