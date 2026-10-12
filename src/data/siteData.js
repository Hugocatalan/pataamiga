import mascotasJuntasImg from '../../assets/mascotas-juntas.jpg';
import gatosJuntosImg from '../../assets/gatos-juntos.jpg';
import perrosAtardecerImg from '../../assets/perros-atardecer.jpg';
import cerditoImg from '../../assets/cerdito.jpg';

export const SITE_CONFIG = {
  name: "PataAmiga",
  commercialName: "PataAmiga | Veterinaria & Pet Shop",
  tagline: "Su bienestar, nuestra pasión",
  whatsapp: "543420000000",
  phoneLabel: "+54 342 000 0000",
  city: "Santa Fe, Argentina",
  addressQuery: "Av. San Martín 1234, Santa Fe, Argentina",
  addressDisplay: "Av. San Martín 1234 · Santa Fe, Argentina",
  hours: {
    weekdays: "Lunes a viernes: 9:00 a 20:00",
    saturdays: "Sábados: 9:00 a 13:00"
  }
};

export const SERVICES = [
  {
    id: "consultas",
    title: "Consultas veterinarias",
    shortDesc: "Prevención, diagnóstico y seguimiento.",
    fullDesc: "Atención clínica, prevención, diagnóstico y seguimiento personalizado para cuidar la salud integral de tu mascota.",
    icon: "Stethoscope"
  },
  {
    id: "vacunacion",
    title: "Vacunación",
    shortDesc: "Protección para cada etapa de vida.",
    fullDesc: "Orientación sobre el plan de vacunación adecuado según la edad, hábitos y antecedentes de tu mascota.",
    icon: "Syringe"
  },
  {
    id: "controles",
    title: "Controles de salud",
    shortDesc: "Chequeos para cuidar su bienestar.",
    fullDesc: "Chequeos preventivos periódicos para acompañar el crecimiento, vitalidad y salud de tu compañero en cada etapa.",
    icon: "Heartbeat"
  },
  {
    id: "dental",
    title: "Salud dental",
    shortDesc: "Prevención y cuidado bucodental.",
    fullDesc: "Controles de higiene bucal, recomendaciones dietéticas y pautas para prevenir sarro y afecciones dentales.",
    icon: "Tooth"
  },
  {
    id: "estetica",
    title: "Baño y estética",
    shortDesc: "Rutinas de higiene y bienestar.",
    fullDesc: "Servicio de higiene, corte y cuidado cosmético enfocado en el bienestar, comodidad y reducción de estrés de los animales.",
    icon: "Bathtub"
  },
  {
    id: "alimentos",
    title: "Alimentos y accesorios",
    shortDesc: "Opciones para acompañar su cuidado.",
    fullDesc: "Nutrición balanceada, suplementos, golosinas saludables y juguetes seleccionados para su estimulación diaria.",
    icon: "BowlFood",
    scrollTo: "#productos"
  }
];

export const WHY_US = [
  {
    icon: "UserCircle",
    title: "Atención profesional",
    desc: "Un trato responsable, ético y enfocado en el bienestar de cada animal."
  },
  {
    icon: "Heart",
    title: "Cercanía y confianza",
    desc: "Escuchamos tus dudas y te orientamos con empatía en cada etapa."
  },
  {
    icon: "Package",
    title: "Productos seleccionados",
    desc: "Alimentos y accesorios elegidos para su nutrición y entretenimiento cotidiano."
  },
  {
    icon: "House",
    title: "Un espacio amigable",
    desc: "Un entorno pensado para recibirlos con calma, calidez y seguridad."
  }
];

export const GALLERY_IMAGES = [
  { src: mascotasJuntasImg, alt: "Grupo de animales mirando a cámara" },
  { src: gatosJuntosImg, alt: "Grupo de animales domésticos juntos" },
  { src: perrosAtardecerImg, alt: "Perros al aire libre disfrutando del atardecer" },
  { src: gatosJuntosImg, alt: "Gatos descansando juntos plácidamente" },
  { src: cerditoImg, alt: "Cerdito curioso y saludable mirando a cámara" }
];
