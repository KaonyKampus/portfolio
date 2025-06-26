import proyectos from "../../data/proyectos.json"; 
import TarjetaProyecto from "../tarjetaProyecto/TarjetaProyecto";
import "./ListaDeProyectos.css";
import { imagenes } from "./imagenesMap";

function ListaDeProyectos() {
  return (
    <div className="lista-proyectos">
      <h1 className="tituloProyectos">Projects</h1>
      {proyectos.map((proyecto, index) => (
        <div
          key={index}
          className={`fila-proyecto ${index % 2 === 0 ? "normal" : "invertido"}`}
        >
          {/* Parte izquierda - descripción extendida */}
          <div className="descripcion-proyecto">
            <h1>{proyecto.titulo}</h1>
            <p className="descripcion-larga">{proyecto.description}</p>
            <ul className="detalles-extra">
              <li><strong>Technologies:</strong> {proyecto.technologies}</li>
              <li><strong>Duration:</strong> {proyecto.duration}</li>
              <li><strong>Role:</strong> {proyecto.role}</li>
            </ul>
          </div>

          {}
          <TarjetaProyecto
            titulo={proyecto.titulo}
            github={proyecto.github}
            demo={proyecto.demo}
            imagen={imagenes[proyecto.imagen]}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaDeProyectos;
