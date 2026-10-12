import React from 'react';
import { HeartHalf, PawPrint, CalendarCheck, WhatsappLogo } from '@phosphor-icons/react';
import { SITE_CONFIG } from '../data/siteData';

export default function Footer({ onScrollTo, onOpenAppointment, whatsappClean }) {
  return (
    <>
      <footer className="site-footer">
        <a 
          className="brand footer-brand" 
          href="#inicio"
          onClick={(e) => onScrollTo(e, 'inicio')}
        >
          <span className="brand-mark">
            <HeartHalf weight="fill" />
            <PawPrint weight="fill" className="paw-overlay" />
          </span>
          <span className="brand-copy">
            <strong>Pata<span>Amiga</span></strong>
            <small>VETERINARIA & PET SHOP</small>
          </span>
        </a>
        <p>Más bienestar, más juegos, más momentos felices juntos.</p>
        <div className="footer-links">
          <a href="#servicios" onClick={(e) => onScrollTo(e, 'servicios')}>Servicios</a>
          <a href="#productos" onClick={(e) => onScrollTo(e, 'productos')}>Productos</a>
          <a href="#nosotros" onClick={(e) => onScrollTo(e, 'nosotros')}>Nosotros</a>
          <a href="#contacto" onClick={(e) => onScrollTo(e, 'contacto')}>Contacto</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PataAmiga. Todos los derechos reservados. Ubicación: {SITE_CONFIG.city}.</span>
          <a href="#inicio" onClick={(e) => onScrollTo(e, 'inicio')}>Volver arriba ↑</a>
        </div>
      </footer>

      {/* Barra de acción rápida fija inferior para dispositivos móviles */}
      <aside className="mobile-bottom-bar" aria-label="Acciones rápidas de contacto">
        <button 
          className="mobile-bar-btn primary"
          type="button" 
          onClick={() => onOpenAppointment()}
        >
          <CalendarCheck size={18} weight="bold" />
          <span>Pedir turno</span>
        </button>
        <a 
          className="mobile-bar-btn whatsapp"
          href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('Hola PataAmiga, me gustaría hacer una consulta.')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappLogo size={20} weight="fill" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
