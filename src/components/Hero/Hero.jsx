import React, { useMemo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../contexts/NavigationContext';
import GhostCursor from '../GhostCursor/GhostCursor';
import LogoLoop from '../LogoLoop/LogoLoop';
import './Hero.css';
import profileImage from '../../assets/profile.jpg';
import RotatingText from '../RotatingText/RotatingText';

const LANGS = [
  'JavaScript', 'Python', 'Java', 'PHP',
  'React', 'Node.js', 'Laravel', 'Next.js',
  'PostgreSQL', 'MySQL', 'Git/GitHub', 'Docker',
  'Linux', 'Vite',
];

const LANG_POS = [
  { top: '9%',    left: '3%'    },
  { top: '25%',   left: '1%'    },
  { top: '55%',   left: '2%'    },
  { top: '75%',   left: '7%'    },
  { bottom: '6%', left: '32%'   },
  { bottom: '4%', left: '58%'   },
  { top: '6%',    right: '3%'   },
  { top: '28%',   right: '1%'   },
  { top: '52%',   right: '2%'   },
  { top: '74%',   right: '5%'   },
  { bottom: '10%',right: '18%'  },
  { top: '7%',    left: '44%'   },
  { top: '14%',   right: '19%'  },
  { top: '64%',   left: '42%'   },
];

const REVEAL_RADIUS = 220; // px — should roughly match the glow blob size

const Hero = () => {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  const heroRef  = useRef(null);
  const chipRefs = useRef([]);

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
