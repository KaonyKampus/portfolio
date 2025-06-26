import "./tarjetaProyecto.css";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ImageModal from "./ImageModal";

function TarjetaProyecto({ titulo, imagen, github, demo }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="tarjeta-proyecto">
      <img
        src={imagen}
        alt={titulo}
        className="imagen-proyecto"
        onClick={() => setModalAbierto(true)}
      />
      <h3>{titulo}</h3>
      <div className="botones-proyecto">
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt /> Demo
        </a>
      </div>

      {modalAbierto && (
        <ImageModal imagenSrc={imagen} onClose={() => setModalAbierto(false)} />
      )}
    </div>
  );
}

export default TarjetaProyecto;
