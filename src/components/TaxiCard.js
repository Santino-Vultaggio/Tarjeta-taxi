// src/components/TaxiCard.js

import React from 'react';
import './TaxiCard.css';

const TaxiCard = () => {
  return (
    <div className="taxi-card">
      <div className="card-header">
        <i className="fas fa-taxi fa-3x"></i>
        <h2>Juan José Vultaggio</h2>
      </div>
      <div className="contact-info">
        <p>Taxi - Viajes Programados</p>
        <p>Servicio autorizado y habilitado</p>
        <a href="https://wa.me/+541162077576" className="whatsapp-button">Contactar por WhatsApp</a>
      </div>
      <div className="services">
        <ul>
          <li><i className="fas fa-check-circle"></i> Viajes con profesionalismo</li>
          <li><i className="fas fa-plane"></i> Viajes a aeropuerto</li>
          <li><i className="fas fa-umbrella-beach"></i> Viajes a la costa y otros destinos turísticos</li>
          <li><i className="fas fa-tree"></i> Viajes a estancias para pasar un día de campo</li>
          <li><i className="fas fa-calendar-alt"></i> Reserve su viaje</li>
          <li><i className="fas fa-question-circle"></i> Consultar por disponibilidad</li>
        </ul>
      </div>
    </div>
  );
}

export default TaxiCard;
