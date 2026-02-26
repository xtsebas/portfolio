import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const info = t('contact.info', { returnObjects: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('contact.form.name')}</label>
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.namePlaceholder')}
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.form.email')}</label>
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.form.message')}</label>
              <textarea
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              {t('contact.form.send')}
            </button>
          </form>

          <div className="contact-info">
            <h3 className="contact-info-title">{info.title}</h3>
            <div className="contact-details">
              <a href={`mailto:${info.email}`} className="contact-detail">
                <div className="contact-detail-icon-wrap">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>{info.email}</span>
              </a>
              <div className="contact-detail">
                <div className="contact-detail-icon-wrap">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>{info.phone}</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon-wrap">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span>{info.location}</span>
              </div>
            </div>

            <div className="contact-social-wrap">
              <p className="contact-follow-title">{info.followTitle}</p>
              <div className="contact-socials">
                <a href="https://github.com/xtsebas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/sebastián-huertas-gomez-53b749207" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/xtsebas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://x.com/xtsebas744" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
