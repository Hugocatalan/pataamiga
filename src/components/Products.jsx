import React from 'react';
import { ShoppingCart, CheckCircle, Heart, BowlFood, TennisBall } from '@phosphor-icons/react';

export default function Products({ whatsappClean }) {
  return (
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
  );
}
