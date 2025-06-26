import { useState } from "react";
import "./NeoScrollPoetry.css";
import poetryData from "./poemas.json";
import PoetryIndex from "./PoetryIndex";

function NeoScrollPoetry() {
  const [poemaActual, setPoemaActual] = useState(0);
  const poema = poetryData[poemaActual];

  return (
    <div className="neo-scroll-container">
      <h2 className="neo-scroll-title">🤖 Poetry & Writings 📜</h2>

      <div className="neo-scroll-index">
        <PoetryIndex
          titulos={poetryData.map((p) => p.titulo)}
          onSeleccionar={setPoemaActual}
          seleccionado={poemaActual}
        />
      </div>

      <div className="neo-scroll-content">
        <h3 className="neo-scroll-subtitle">{poema.titulo}</h3>
        <div className="neo-scroll-text">
          {poema.contenido.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>

        <div className="neo-scroll-navegacion">
          <button
            onClick={() => setPoemaActual((prev) => Math.max(prev - 1, 0))}
            disabled={poemaActual === 0}
          >
            ⬅ Before
          </button>
          <button
            onClick={() =>
              setPoemaActual((prev) => Math.min(prev + 1, poetryData.length - 1))
            }
            disabled={poemaActual === poetryData.length - 1}
          >
            Following ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default NeoScrollPoetry;
