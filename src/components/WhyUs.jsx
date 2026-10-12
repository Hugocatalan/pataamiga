import React from 'react';
import { UserCircle, Heart, Package, House } from '@phosphor-icons/react';
import { WHY_US } from '../data/siteData';

const iconMap = {
  UserCircle,
  Heart,
  Package,
  House
};

export default function WhyUs() {
  return (
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
  );
}
