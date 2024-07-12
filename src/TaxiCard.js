import React from 'react';
import phoneIcon from './phone-icon.png'; // Asegúrate de tener esta imagen en la carpeta src

function TaxiCard() {
  return (
    <div className="card">
      <div className="left-side">
        <div className="icon">
          <img src={phoneIcon} alt="Phone Icon" />
        </div>
        <div className="authorized">
          SERVICIO AUTORIZADO Y HABILITADO
        </div>
      </div>
      <div className="right-side">
        <div className="name">
          JUAN JOSÉ VULTAGGIO
        </div>
        <div className="service">
          TAXI - VIAJES PROGRAMADOS
        </div>
        <div className="phone-number">
          1162077576
        </div>
      </div>
    </div>
  );
}

export default TaxiCard;
