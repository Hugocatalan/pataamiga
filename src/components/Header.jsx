import React from 'react';
import { HeartHalf, PawPrint, CalendarCheck, List, X } from '@phosphor-icons/react';

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenAppointment,
  onScrollTo
}) {
  return (
    <header className="site-header">
      <a 
        className="brand" 
        href="#inicio" 
        onClick={(e) => onScrollTo(e, 'inicio')}
        aria-label="PataAmiga, ir al inicio"
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

      <button 
        className="menu-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={mobileMenuOpen}
        aria-controls="main-nav"
      >
        {mobileMenuOpen ? <X size={26} /> : <List size={26} />}
      </button>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} id="main-nav">
        <a href="#inicio" onClick={(e) => onScrollTo(e, 'inicio')}>Inicio</a>
        <a href="#servicios" onClick={(e) => onScrollTo(e, 'servicios')}>Servicios</a>
        <a href="#productos" onClick={(e) => onScrollTo(e, 'productos')}>Productos</a>
        <a href="#nosotros" onClick={(e) => onScrollTo(e, 'nosotros')}>Nosotros</a>
        <a href="#consejos" onClick={(e) => onScrollTo(e, 'consejos')}>Historias</a>
        <a href="#contacto" onClick={(e) => onScrollTo(e, 'contacto')}>Contacto</a>
      </nav>

      <button 
        className="button button-primary header-cta" 
        type="button" 
        onClick={() => onOpenAppointment()}
      >
        <CalendarCheck size={18} weight="bold" />
        <span>Solicitar turno</span>
      </button>
    </header>
  );
}
