import React from 'react';
import { MapPin, Clock, Phone, WhatsappLogo, ArrowUpRight } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../data/siteData';

export default function Contact({ whatsappClean }) {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-photo"></div>
      <div className="contact-info">
        <span className="eyebrow">Estamos para ayudarte</span>
        <h2>Te esperamos <span className="heart-span">♡</span></h2>
        <p>Consultanos por turnos, atención preventiva, nutrición o accesorios para tus mascotas.</p>
        
        <div className="contact-detail">
          <MapPin size={22} weight="duotone" />
          <div>
            <strong>Encontranos</strong>
            <span>{SITE_CONFIG.addressDisplay}</span>
          </div>
        </div>
        
        <div className="contact-detail">
          <Clock size={22} weight="duotone" />
          <div>
            <strong>Horarios de atención</strong>
            <span>
              {SITE_CONFIG.hours.weekdays}<br />
              {SITE_CONFIG.hours.saturdays}
            </span>
          </div>
        </div>

        <div className="contact-detail">
          <Phone size={22} weight="duotone" />
          <div>
            <strong>Teléfono / Consultas</strong>
            <span>{SITE_CONFIG.phoneLabel}</span>
          </div>
        </div>

        <a 
          className="button button-primary contact-whatsapp" 
          href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('Hola PataAmiga, quisiera comunicarme con ustedes.')}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <WhatsappLogo size={20} weight="fill" /> Escribinos por WhatsApp
        </a>
      </div>

      <div className="map-card">
        <div className="map-placeholder">
          <MapPin size={38} weight="fill" className="map-pin-icon" />
          <strong>PataAmiga</strong>
          <span>{SITE_CONFIG.city}</span>
          <p className="map-subtext">{SITE_CONFIG.addressDisplay}</p>
        </div>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.addressQuery)}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Cómo llegar en Google Maps <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}
