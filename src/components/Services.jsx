import React from 'react';
import { Stethoscope, Syringe, Heartbeat, Tooth, Bathtub, BowlFood } from '@phosphor-icons/react';
import { SERVICES } from '../data/siteData';

const iconMap = {
  Stethoscope,
  Syringe,
  Heartbeat,
  Tooth,
  Bathtub,
  BowlFood
};

export default function Services({ onSelectService }) {
  return (
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
                  onSelectService(srv);
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
  );
}
