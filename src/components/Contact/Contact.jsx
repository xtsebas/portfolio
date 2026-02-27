import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faCircleCheck, faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY = { name: '', email: '', message: '' };

const Contact = () => {
  const { t } = useTranslation();
  const info = t('contact.info', { returnObjects: true });
  const [form, setForm]     = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

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
                disabled={isSending}
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
                disabled={isSending}
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
                disabled={isSending}
              ></textarea>
            </div>

            {/* Feedback banner */}
            {status === 'success' && (
              <div className="contact-feedback contact-feedback--success">
                <FontAwesomeIcon icon={faCircleCheck} />
                {t('contact.form.successMsg', 'Message sent! I\'ll get back to you soon.')}
              </div>
            )}
            {status === 'error' && (
              <div className="contact-feedback contact-feedback--error">
                <FontAwesomeIcon icon={faCircleXmark} />
                {t('contact.form.errorMsg', 'Something went wrong. Please try again.')}
              </div>
            )}

            <button type="submit" className="contact-submit" disabled={isSending}>
              {isSending ? (
                <span className="contact-submit-spinner" />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
              {isSending
                ? t('contact.form.sending', 'Sending…')
                : t('contact.form.send')}
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
