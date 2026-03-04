import React, { useMemo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../contexts/NavigationContext';
import GhostCursor from '../GhostCursor/GhostCursor';
import LogoLoop from '../LogoLoop/LogoLoop';
import './Hero.css';
import profileImage from '../../assets/profile.jpg';
import RotatingText from '../RotatingText/RotatingText';

const LANGS = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'PHP',
  'React', 'Next.js', 'Node.js', 'Express',
  'Ruby on Rails', 'Laravel', 'Flask',
  'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB',
  'Neo4j', 'Cassandra',
  'AWS', 'EC2', 'S3', 'VPC',
  'Vertex AI',
  'LLMs', 'GPT', 'Gemini',
  'RAG', 'Qdrant',
  'AI Agents', 'Agentic Flows',
  'Prompt Engineering',
  'CopilotKit',
  'n8n', 'Automation',
  'REST APIs', 'Webhooks',
  'CI/CD', 'GitHub Actions',
  'Docker', 'Coolify',
  'Web Scraping', 'Playwright', 'BeautifulSoup',
  'TensorFlow', 'Keras',
  'Data Extraction (PDF)',
  'Git/GitHub', 'Linux', 'Vite'
];

const generateOrganicCirclePositions = (items) => {
  const centerX = 50;
  const centerY = 50;
  const total = items.length;

  const baseRadius = 38;     
  const variance = 10;       

  return items.map((_, index) => {
    const angle = (index / total) * (2 * Math.PI);

    const dynamicRadius =
      baseRadius +
      Math.sin(index * 1.7) * variance;

    const x = centerX + dynamicRadius * Math.cos(angle);
    const y = centerY + dynamicRadius * Math.sin(angle);

    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    };
  });
};

const LANG_POS = generateOrganicCirclePositions(LANGS);

const REVEAL_RADIUS = 220; // px — should roughly match the glow blob size

const CV_LINKS = {
  en: 'https://drive.google.com/uc?export=download&id=1_r7ue0u9pi3yl0YlwsOmzt9370SUAS3C',
  es: 'https://drive.google.com/uc?export=download&id=1EV-2RKXdzAZyPbFM6k2qO3YDhv9F_d6k',
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { navigateTo } = useNavigation();

  const heroRef  = useRef(null);
  const chipRefs = useRef([]);

  const downloadCV = () => {
    const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
    const link = document.createElement('a');
    link.href = CV_LINKS[lang];
    link.download = `cv_sebastian_huertas_${lang}.pdf`;
    link.click();
  };

  // Track pointer and reveal chips based on distance to glow
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handlePointerMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      chipRefs.current.forEach((chip) => {
        if (!chip) return;
        const cr = chip.getBoundingClientRect();
        const cx = cr.left - rect.left + cr.width  / 2;
        const cy = cr.top  - rect.top  + cr.height / 2;
        const dist = Math.hypot(mx - cx, my - cy);
        // Smooth falloff: full opacity at center, 0 at REVEAL_RADIUS
        const opacity = Math.max(0, 1 - dist / REVEAL_RADIUS);
        chip.style.opacity = opacity;
      });
    };

    const handlePointerLeave = () => {
      chipRefs.current.forEach((chip) => {
        if (chip) chip.style.opacity = '0';
      });
    };

    hero.addEventListener('pointermove',  handlePointerMove,  { passive: true });
    hero.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      hero.removeEventListener('pointermove',  handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const mobileItems = useMemo(() => LANGS.map(lang => ({
    node: <span className="hero-lang-badge">{lang}</span>,
    ariaLabel: lang,
  })), []);

  return (
    <section ref={heroRef} id="hero" className="hero">
      {/* WebGL ghost cursor — desktop only */}
      <GhostCursor
        color="#7c3aed"
        brightness={2}
        bloomStrength={0.15}
        trailLength={60}
        inertia={0.55}
        fadeDelayMs={1200}
        zIndex={0}
        className="hero-ghost-cursor"
      />

      {/* Floating language chips — desktop only, revealed by cursor proximity */}
      <div className="hero-bg-langs" aria-hidden="true">
        {LANGS.map((lang, i) => (
          <span
            key={lang}
            className="hero-lang-chip"
            style={LANG_POS[i]}
            ref={el => { chipRefs.current[i] = el; }}
          >
            {lang}
          </span>
        ))}
      </div>

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
            <button className="btn-secondary" onClick={downloadCV}>
              {t('hero.cv')} ↓
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

      {/* LogoLoop — mobile only */}
      <div className="hero-mobile-langs" aria-label="Technologies">
        <LogoLoop
          logos={mobileItems}
          speed={55}
          direction="left"
          pauseOnHover
          gap={10}
          logoHeight={14}
          width="100%"
          fadeOut
          fadeOutColor="#0a0a0a"
        />
      </div>

      <button className="hero-scroll-hint" onClick={() => navigateTo(1)} aria-label="Scroll down">
        <span></span>
      </button>
    </section>
  );
};

export default Hero;


