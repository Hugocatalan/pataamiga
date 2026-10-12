import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Nutrition from './components/Nutrition';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ServiceModal, AppointmentModal } from './components/Modals';
import { SITE_CONFIG } from './data/siteData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

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
    if (serviceName) {
      setFormData((prev) => ({ ...prev, consulta: serviceName }));
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

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenAppointment={handleOpenAppointment}
        onScrollTo={handleScrollTo}
      />

      <main>
        <Hero
          onOpenAppointment={handleOpenAppointment}
          whatsappClean={whatsappClean}
        />

        <Services
          onSelectService={setSelectedService}
        />

        <Products
          whatsappClean={whatsappClean}
        />

        <WhyUs />

        <Gallery />

        <Nutrition
          whatsappClean={whatsappClean}
        />

        <Contact
          whatsappClean={whatsappClean}
        />
      </main>

      <Footer
        onScrollTo={handleScrollTo}
        onOpenAppointment={handleOpenAppointment}
        whatsappClean={whatsappClean}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenAppointment={handleOpenAppointment}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
        todayDate={todayDate}
      />
    </div>
  );
}
