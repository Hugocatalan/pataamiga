import React from 'react';
import { GALLERY_IMAGES } from '../data/siteData';

export default function Gallery() {
  return (
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
          {/* Fotos adicionales mostradas en pantallas de escritorio */}
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
  );
}
