import imagen from "../../assets/programador.png";
import imagen1 from "../../assets/It.png";
import imagen3 from "../../assets/poetry.png";
import imagen4 from "../../assets/passion.png";
import "./segmentos.css";

function Segmentos({ onSeleccionarSeccion }) {
  return (
    <div className="granCaja">
      <div className="cajaSegmentos">
        <div className="segmentoCaita" onClick={() => onSeleccionarSeccion("Development")}>
          <img src={imagen} alt="Development" className="imagen" />
          <h2>Development</h2>
        </div>
        <div className="segmentoCaita" onClick={() => onSeleccionarSeccion("IT")}>
          <img src={imagen1} alt="IT" className="imagen" />
          <h2>IT</h2>
        </div>
        <div className="segmentoCaita" onClick={() => onSeleccionarSeccion("Poetry")}>
          <img src={imagen3} alt="Poetry" className="imagen" />
          <h2>Poetry</h2>
        </div>
        <div className="segmentoCaita" onClick={() => onSeleccionarSeccion("This is me")}>
          <img src={imagen4} alt="Passions" className="imagen" />
          <h2>This is me</h2>
        </div>
      </div>
    </div>
  );
}

export default Segmentos;
