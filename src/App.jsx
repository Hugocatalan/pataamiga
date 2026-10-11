import React, { useState } from 'react';
import {
  PawPrint,
  HeartHalf,
  List,
  X,
  CalendarCheck,
  Stethoscope,
  Syringe,
  Heartbeat,
  Tooth,
  Bathtub,
  BowlFood,
  ShoppingCart,
  CheckCircle,
  Heart,
  TennisBall,
  UserCircle,
  Package,
  House,
  MapPin,
  Clock,
  Phone,
  WhatsappLogo,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkle
} from '@phosphor-icons/react';
import { SITE_CONFIG, SERVICES, WHY_US, GALLERY_IMAGES } from './data/siteData';

const iconMap = {
  Stethoscope,
  Syringe,
  Heartbeat,
  Tooth,
  Bathtub,
  BowlFood,
  UserCircle,
  Heart,
  Package,
  House
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedService, setSelectedService] = useState(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  
  const [formData, setFormData] = useState({
    nombre: '',
    mascota: '',
    consulta: '',
    fecha: '',
    comentario: ''
  });

  const whatsappClean = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  const todayDate = new Date().toISOString().slice(0, 10);

  const handleOpenAppointment = (serviceName = '') => {
    setSelectedService(null);
    setPrefilledService(serviceName || '');
    if (serviceName) {
      setFormData(prev => ({ ...prev, consulta: serviceName }));
    }
    setIsAppointmentOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hola PataAmiga, quisiera solicitar un turno.',
      `Nombre: ${formData.nombre}`,
      `Mascota: ${formData.mascota}`,
      `Consulta: ${formData.consulta || 'Consulta general'}`,
      formData.fecha ? `Fecha preferida: ${formData.fecha}` : '',
      formData.comentario ? `Comentario: ${formData.comentario}` : ''
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${whatsappClean}?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsAppointmentOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* 1. Encabezado y Navegación */}
      <header className="site-header">
        <a 
          className="brand" 
          href="#inicio" 
          onClick={(e) => scrollToSection(e, 'inicio')}
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
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a>
          <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a>
          <a href="#productos" onClick={(e) => scrollToSection(e, 'productos')}>Productos</a>
          <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a>
          <a href="#consejos" onClick={(e) => scrollToSection(e, 'consejos')}>Historias</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
        </nav>

        <button 
          className="button button-primary header-cta" 
          type="button" 
          onClick={() => handleOpenAppointment()}
        >
          <CalendarCheck size={18} weight="bold" />
          <span>Solicitar turno</span>
        </button>
      </header>

      <main>
        {/* 2. Hero Principal Optimizado */}
        <section className="hero-section" id="inicio" aria-label="Portada de bienvenida PataAmiga">
          <div className="hero-banner-container">
            <div className="hero-frame">
              <img
                src="/assets/hero-pataamiga.png"
                alt="PataAmiga: animales sonrientes y felices reunidos en un día soleado"
                fetchPriority="high"
                className="hero-image-display"
              />
              <div className="hero-tagline-pill">
                <Sparkle size={16} weight="fill" />
                <span>{SITE_CONFIG.tagline}</span>
              </div>
            </div>
            
            {/* Barra interactiva inferior del Hero: accesibilidad directa y funcional */}
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
                  onClick={() => handleOpenAppointment()}
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

        {/* 3. Servicios Veterinarios */}
        <section className="section services-section" id="servicios">
          <div className="section-heading">
            <span className="eyebrow">Nuestros servicios</span>
            <h2>Cuidado integral en cada etapa de su vida</h2>
            <p>Atención clínica profesional, prevención y calidez para quienes son parte fundamental de tu familia.</p>
          </div>
          <div className="service-grid">
            {SERVICES.map((srv) => {
              const IconComp = iconMap[srv.icon] || Stethoscope;
              return (
                <button
                  key={srv.id}
                  className="service-card"
                  type="button"
                  onClick={() => {
                    if (srv.scrollTo) {
                      document.querySelector(srv.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setSelectedService(srv);
                    }
                  }}
                >
                  <div className="service-icon">
                    <IconComp size={28} weight="duotone" />
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.shortDesc}</p>
                  <span className="service-card-action">
                    {srv.scrollTo ? 'Ver productos →' : 'Conocer más →'}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="small-note">Servicios coordinados y personalizados según las necesidades de tu animal.</p>
        </section>

        {/* 4. Productos, Alimentos y Accesorios (Pet Shop) */}
        <section className="products-section" id="productos">
          <div className="products-copy">
            <span className="eyebrow">Pet shop · Nutrición y bienestar</span>
            <h2>Todo lo que necesita<br />para estar <em>bien.</em></h2>
            <p>Alimentos balanceados de calidad, snacks nutritivos, juguetes y accesorios pensados para su bienestar diario.</p>
            <a 
              className="button button-primary" 
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('Hola PataAmiga, quisiera consultar por alimentos y productos para mascotas.')}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ShoppingCart size={18} weight="bold" /> Consultar productos
            </a>
            <div className="product-tags">
              <span><CheckCircle size={18} weight="fill" /> Asesoramiento nutricional personalizado</span>
              <span><CheckCircle size={18} weight="fill" /> Variedad de marcas para cada etapa y tamaño</span>
            </div>
          </div>
          <div className="product-visual" role="img" aria-label="Mascotas felices y productos de nutrición y juego">
            <div className="product-badge">
              <Heart size={26} weight="fill" />
              <span>Elegí con<br />confianza</span>
            </div>
            <div className="floating-product">
              <BowlFood size={22} weight="duotone" />
              <span>Nutrición balanceada</span>
            </div>
            <div className="floating-product second">
              <TennisBall size={22} weight="duotone" />
              <span>Juegos y bienestar</span>
            </div>
          </div>
        </section>

        {/* 5. Diferenciales */}
        <section className="section why-section">
          <div className="section-heading">
            <span className="eyebrow">¿Por qué elegir PataAmiga?</span>
            <h2>Más que una veterinaria</h2>
            <p>Queremos que vos y tu compañero se sientan acompañados, tranquilos y seguros desde la primera visita.</p>
          </div>
          <div className="why-grid">
            {WHY_US.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Heart;
              return (
                <article key={idx} className={idx === 3 ? "why-item-desktop-only" : ""}>
                  <div className="why-icon-wrap">
                    <IconComp size={36} weight="duotone" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 6. Galería de Animales e Historias */}
        <section className="patients-section" id="consejos">
          <div className="patients-overlay"></div>
          <div className="patients-content">
            <span className="eyebrow">Patas, bigotes y mucho amor</span>
            <h2>Historias que nos inspiran <span className="heart-span">♡</span></h2>
            <p>Cada animal tiene su personalidad única. Todos merecen cuidado, respeto y una vida plena y feliz.</p>
            <div className="patient-gallery">
              {GALLERY_IMAGES.slice(0, 3).map((img, i) => (
                <div key={i} className="gallery-item-wrap">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                  />
                </div>
              ))}
              {/* Fotos adicionales sólo para pantallas de escritorio */}
              {GALLERY_IMAGES.slice(3).map((img, i) => (
                <div key={`extra-${i}`} className="gallery-item-wrap desktop-only-gallery">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Especialistas en Nutrición y Alimentación Saludable */}
        <section className="about-section section" id="nosotros">
          <div className="about-photo">
            <img 
              src="/assets/nutricion-mascotas.jpg" 
              alt="Perro y gato junto a un plato de alimento balanceado y saludable en la clínica veterinaria" 
              loading="lazy" 
            />
            <span className="photo-sticker">
              <BowlFood size={24} weight="duotone" /> Nutrición<br />saludable
            </span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Nutrición y Cuidado Diario</span>
            <h2>Alimentación balanceada,<br />vitalidad en cada etapa.</h2>
            <p>
              En PataAmiga sabemos que una nutrición de calidad es la base de una vida larga y feliz. 
              Te asesoramos para elegir el alimento ideal según la edad, tamaño y requerimientos específicos de tu compañero, 
              combinando salud digestiva, energía y el mejor sabor.
            </p>
            <div className="about-highlights">
              <div className="highlight-pill">
                <strong>Alimentos premium</strong>
                <span>Fórmulas completas y naturales</span>
              </div>
              <div className="highlight-pill">
                <strong>Asesoría veterinaria</strong>
                <span>Planes dietarios a medida</span>
              </div>
            </div>
            <a 
              className="text-link" 
              href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent('Hola PataAmiga, quisiera consultar por opciones de alimento para mi mascota.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por alimentos y asesoramiento <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </section>

        {/* 8. Ubicación, Horarios y Contacto (SEO Local & GEO) */}
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
      </main>

      {/* 9. Pie de Página */}
      <footer className="site-footer">
        <a 
          className="brand footer-brand" 
          href="#inicio"
          onClick={(e) => scrollToSection(e, 'inicio')}
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
          <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a>
          <a href="#productos" onClick={(e) => scrollToSection(e, 'productos')}>Productos</a>
          <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PataAmiga. Todos los derechos reservados. Ubicación: {SITE_CONFIG.city}.</span>
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Volver arriba ↑</a>
        </div>
      </footer>

      {/* Barra de acción rápida fija inferior en móviles (Quick Sticky Bar) */}
      <aside className="mobile-bottom-bar" aria-label="Acciones rápidas de contacto">
        <button 
          className="mobile-bar-btn primary"
          type="button" 
          onClick={() => handleOpenAppointment()}
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

      {/* MODAL: Detalle de Servicio */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal__close" 
              type="button" 
              onClick={() => setSelectedService(null)} 
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <p className="eyebrow">NUESTROS SERVICIOS</p>
            <h2>{selectedService.title}</h2>
            <p className="modal-desc">{selectedService.fullDesc}</p>
            <div className="modal-footer-action">
              <button 
                className="button button-primary" 
                type="button" 
                onClick={() => handleOpenAppointment(selectedService.title)}
              >
                <CalendarCheck size={18} weight="bold" /> Solicitar turno para este servicio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Solicitud de Turno */}
      {isAppointmentOpen && (
        <div className="modal-backdrop" onClick={() => setIsAppointmentOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal__close" 
              type="button" 
              onClick={() => setIsAppointmentOpen(false)} 
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <form className="appointment-form" onSubmit={handleFormSubmit}>
              <p className="eyebrow">PATAAMIGA</p>
              <h2>Solicitá tu turno</h2>
              <p className="modal__intro">
                Completá los datos y te ayudaremos a coordinar el día y horario directamente por WhatsApp.
              </p>

              <label>
                Tu nombre
                <input 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  autoComplete="name" 
                  required 
                  placeholder="Ej. María Pérez" 
                />
              </label>

              <label>
                Nombre de tu mascota
                <input 
                  name="mascota" 
                  value={formData.mascota}
                  onChange={(e) => setFormData({ ...formData, mascota: e.target.value })}
                  required 
                  placeholder="Ej. Firulais" 
                />
              </label>

              <label>
                Tipo de consulta
                <select 
                  name="consulta" 
                  value={formData.consulta}
                  onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
                  required
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="Consultas veterinarias">Consulta veterinaria</option>
                  <option value="Vacunación">Vacunación</option>
                  <option value="Controles de salud">Control de salud preventivo</option>
                  <option value="Salud dental">Salud dental</option>
                  <option value="Baño y estética">Baño y estética</option>
                  <option value="Otra consulta">Otra consulta</option>
                </select>
              </label>

              <label>
                Fecha preferida
                <input 
                  name="fecha" 
                  type="date" 
                  min={todayDate}
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                />
              </label>

              <label>
                Comentario o motivo de la visita (opcional)
                <textarea 
                  name="comentario" 
                  rows="3" 
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  placeholder="Contanos brevemente qué necesita tu compañero" 
                />
              </label>

              <button className="button button-primary form-submit" type="submit">
                <WhatsappLogo size={20} weight="fill" /> Enviar solicitud por WhatsApp
              </button>
              <p className="form-note">
                La solicitud no reserva automáticamente; la disponibilidad se confirma en el chat de WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
