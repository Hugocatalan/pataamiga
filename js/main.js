// Configuración editable antes de publicar.
const SITE_CONFIG = {
  // Número internacional sin +, espacios ni guiones. Reemplazar por el WhatsApp real del comercio.
  whatsapp: "543420000000",
  phoneLabel: "+54 342 000 0000",
  addressQuery: "Av. San Martín 1234, Santa Fe, Argentina"
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const appointmentModal = document.querySelector("#appointment-modal");
  const serviceModal = document.querySelector("#service-modal");
  const appointmentForm = document.querySelector("#appointment-form");
  const whatsappNumber = SITE_CONFIG.whatsapp.replace(/\D/g, "");

  // Menú responsive.
  menuToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuToggle.innerHTML = isOpen ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) { menuToggle.setAttribute("aria-label", "Abrir menú"); menuToggle.innerHTML = '<i class="ph ph-list"></i>'; }
  }));

  // Acciones que desplazan hacia una sección.
  document.querySelectorAll("[data-scroll]").forEach(control => control.addEventListener("click", () => {
    const target = document.querySelector(control.dataset.scroll);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }));

  // Abrir/cerrar formularios.
  document.querySelectorAll("[data-open-appointment]").forEach(button => button.addEventListener("click", () => {
    if (serviceModal?.open) serviceModal.close();
    appointmentModal?.showModal();
  }));
  document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", () => button.closest("dialog")?.close()));
  [appointmentModal, serviceModal].forEach(dialog => dialog?.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

  // Cada tarjeta de servicio abre su detalle. Alimentos lleva a productos.
  document.querySelectorAll("[data-service]").forEach(card => card.addEventListener("click", () => {
    const title = document.querySelector("#service-title");
    const description = document.querySelector("#service-description");
    if (title) title.textContent = card.dataset.service || "Servicio";
    if (description) description.textContent = card.dataset.description || "Consultanos para conocer más sobre este servicio.";
    serviceModal?.showModal();
  }));

  // Enlaces de contacto configurados desde un solo lugar.
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola PataAmiga, quisiera consultar por los servicios.")}`;
    link.target = "_blank"; link.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-whatsapp-products]").forEach(link => {
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola PataAmiga, quisiera consultar por alimentos y productos para mascotas.")}`;
    link.target = "_blank"; link.rel = "noopener noreferrer";
  });
  document.querySelectorAll("[data-phone-label]").forEach(el => el.textContent = SITE_CONFIG.phoneLabel);
  const mapLink = document.querySelector("[data-maps]");
  if (mapLink) mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.addressQuery)}`;
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // No permitir una fecha anterior a hoy.
  const dateInput = appointmentForm?.elements.namedItem("fecha");
  if (dateInput) {
    const now = new Date();
    dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  // El formulario prepara el mensaje y abre WhatsApp; no confirma una reserva automática.
  appointmentForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (!appointmentForm.reportValidity()) return;
    const data = new FormData(appointmentForm);
    const lines = [
      "Hola PataAmiga, quisiera solicitar un turno.",
      `Nombre: ${data.get("nombre")}`,
      `Mascota: ${data.get("mascota")}`,
      `Consulta: ${data.get("consulta")}`,
      data.get("fecha") ? `Fecha preferida: ${data.get("fecha")}` : "",
      data.get("comentario") ? `Comentario: ${data.get("comentario")}` : ""
    ].filter(Boolean);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    appointmentModal?.close();
  });

  // Resaltar en el menú la sección visible.
  const navLinks = [...document.querySelectorAll(".main-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, .2, .5] });
    sections.forEach(section => observer.observe(section));
  }

  // Aparición sutil de tarjetas y galería al desplazarse.
  if ("IntersectionObserver" in window) {
    const animated = document.querySelectorAll(".service-card, .why-grid article, .patient-gallery img");
    const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    animated.forEach(el => { el.classList.add("reveal"); revealObserver.observe(el); });
  }
});
