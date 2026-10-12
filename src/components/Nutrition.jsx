import React from 'react';
import { BowlFood, ArrowRight } from '@phosphor-icons/react';
import nutricionImg from '../../assets/nutricion-mascotas.jpg';

export default function Nutrition({ whatsappClean }) {
  return (
    <section className="about-section section" id="nosotros">
      <div className="about-photo">
        <img 
          src={nutricionImg} 
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
  );
}
