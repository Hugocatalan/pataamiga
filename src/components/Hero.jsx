import React from 'react';
import { Sparkle, ShieldCheck, Heart, CalendarCheck, WhatsappLogo } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../data/siteData';
import heroImg from '../../assets/hero-pataamiga.png';

export default function Hero({ onOpenAppointment, whatsappClean }) {
  return (
    <section className="hero-section" id="inicio" aria-label="Portada de bienvenida PataAmiga">
      <div className="hero-banner-container">
        <div className="hero-frame">
          <img
            src={heroImg}
            alt="PataAmiga: animales sonrientes y felices reunidos en un día soleado"
            fetchPriority="high"
            className="hero-image-display"
          />
          <div className="hero-tagline-pill">
            <Sparkle size={16} weight="fill" />
            <span>{SITE_CONFIG.tagline}</span>
          </div>
        </div>
        
        {/* Barra interactiva rápida de confianza y contacto */}
        <div className="hero-quick-bar">
          <div className="hero-quick-item">
            <ShieldCheck size={24} weight="duotone" className="quick-icon" />
            <div>
              <strong>Atención profesional</strong>
              <span>Prevención y cuidado responsable</span>
            </div>
          </div>
          <div className="hero-quick-divider"></div>
          <div className="hero-quick-item">
            <Heart size={24} weight="duotone" className="quick-icon" />
            <div>
              <strong>Cariño y respeto</strong>
              <span>Ambiente libre de estrés</span>
            </div>
          </div>
          <div className="hero-quick-divider"></div>
          <div className="hero-quick-actions">
            <button 
              className="button button-primary"
              onClick={() => onOpenAppointment()}
            >
              <CalendarCheck size={18} weight="bold" /> Solicitar turno
            </button>
            <a 
              className="button button-light"
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('Hola PataAmiga, me gustaría hacer una consulta.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={18} weight="fill" /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
