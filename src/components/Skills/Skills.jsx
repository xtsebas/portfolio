import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs, faPython, faJava, faPhp,
  faReact, faNodeJs, faLaravel,
  faGithub, faDocker, faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const iconMap = {
  'JavaScript': faJs,
  'Python': faPython,
  'Java': faJava,
  'PHP': faPhp,
  'React': faReact,
  'Node.js': faNodeJs,
  'Laravel': faLaravel,
  'PostgreSQL': faDatabase,
  'MySQL': faDatabase,
  'Git/GitHub': faGithub,
  'Docker': faDocker,
  'Linux': faLinux,
};

const abbrMap = {
  'Next.js': 'Nx',
  'Vite': 'Vt',
  'SQL': 'SQL',
};

const SkillIcon = ({ name }) => {
  const icon = iconMap[name];
  const abbr = abbrMap[name] || name.slice(0, 2).toUpperCase();

  return (
    <div className="skill-item">
      <div className="skill-box">
        {icon
          ? <FontAwesomeIcon icon={icon} />
          : <span className="skill-abbr">{abbr}</span>
        }
      </div>
      <span className="skill-name">{name}</span>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const languages = t('skills.languages', { returnObjects: true });
  const tools = t('skills.tools', { returnObjects: true });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('skills.title')}</h2>
        </div>
        <div className="skills-block">
          <p className="skills-category-label">{t('skills.languagesTitle')}</p>
          <div className="skills-grid">
            {languages.map((skill, i) => (
              <SkillIcon key={i} name={skill} />
            ))}
          </div>
        </div>
        <div className="skills-divider"></div>
        <div className="skills-block">
          <p className="skills-category-label">{t('skills.toolsTitle')}</p>
          <div className="skills-grid">
            {tools.map((skill, i) => (
              <SkillIcon key={i} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
