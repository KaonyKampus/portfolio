import "./NeoScrollPoetry.css";

function PoetryIndex({ titulos, onSeleccionar, seleccionado }) {
  return (
    <ul className="poetry-index">
      {titulos.map((titulo, i) => (
        <li
          key={i}
          className={`poetry-index-item ${i === seleccionado ? "activo" : ""}`}
          onClick={() => onSeleccionar(i)}
        >
          {titulo}
        </li>
      ))}
    </ul>
  );
}

export default PoetryIndex;
