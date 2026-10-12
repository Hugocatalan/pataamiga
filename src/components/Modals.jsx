import React from 'react';
import { CalendarCheck, WhatsappLogo } from '@phosphor-icons/react';

export function ServiceModal({ service, onClose, onOpenAppointment }) {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal__close" 
          type="button" 
          onClick={onClose} 
          aria-label="Cerrar modal"
        >
          ×
        </button>
        <p className="eyebrow">NUESTROS SERVICIOS</p>
        <h2>{service.title}</h2>
        <p className="modal-desc">{service.fullDesc}</p>
        <div className="modal-footer-action">
          <button 
            className="button button-primary" 
            type="button" 
            onClick={() => onOpenAppointment(service.title)}
          >
            <CalendarCheck size={18} weight="bold" /> Solicitar turno para este servicio
          </button>
        </div>
      </div>
    </div>
  );
}

export function AppointmentModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit,
  todayDate
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal__close" 
          type="button" 
          onClick={onClose} 
          aria-label="Cerrar modal"
        >
          ×
        </button>
        <form className="appointment-form" onSubmit={onSubmit}>
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
  );
}
