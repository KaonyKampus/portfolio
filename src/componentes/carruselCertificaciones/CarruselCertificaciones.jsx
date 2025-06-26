import { useState } from "react";
import "./CarruselCertificaciones.css";
import data from "./certificaciones.json";
import { imagenesCertificaciones } from "./imagenesCertificaciones";

function CarruselCertificaciones({ onInteraccion, onImagenClick }) {
  const [indice, setIndice] = useState(0);

  const manejarClick = (callback) => {
    onInteraccion();
    callback();
  };

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const { titulo } = data[indice];
  const imagen = imagenesCertificaciones[titulo];

  return (
    <div className="carrusel-contenedor">
      <h2 className="carrusel-titulo">Certifications</h2>
      <div className="carrusel">
        <button onClick={() => manejarClick(anterior)} className="carrusel-boton">
          ←
        </button>

        <div className="carrusel-item">
          <img
            src={imagen || "/imagen-no-disponible.png"}
            alt={titulo}
            onClick={() => onImagenClick && onImagenClick(imagen)}
            onError={(e) => {
              e.target.src = "/imagen-no-disponible.png";
              e.target.alt = "Imagen no disponible";
            }}
            className="carrusel-imagen"
            style={{ cursor: "pointer" }}
          />
          <h3>{titulo}</h3>
        </div>

        <button onClick={() => manejarClick(siguiente)} className="carrusel-boton">
          →
        </button>
      </div>
    </div>
  );
}

export default CarruselCertificaciones;
