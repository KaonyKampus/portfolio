import "./Passion.css";

const temas = [
  {
    titulo: "Literature",
    descripcion:
      "Entre las letras encuentro mundos paralelos, donde las emociones toman forma y el lenguaje se vuelve eterno.",
    imagen: "/assets/literature.jpg", // Asegúrate de tener esta imagen o ilustración
  },
  {
    titulo: "Cycling",
    descripcion:
      "En la ruta, el cuerpo se convierte en motor y la mente en viento. El ciclismo es mi meditación en movimiento.",
    imagen: "/assets/cycling.jpg",
  },
  {
    titulo: "Philosophy",
    descripcion:
      "Cuestiono el mundo, lo observo con una mezcla de asombro y crítica. Pensar es mi forma de resistir.",
    imagen: "/assets/thought.jpg",
  },
];

function Passion() {
  return (
    <section className="passion-section">
      <h2 className="passion-title">Passion</h2>
      <div className="passion-cards">
        {temas.map((tema, i) => (
          <div className="passion-card" key={i}>
            <img src={tema.imagen} alt={tema.titulo} />
            <div className="passion-overlay">
              <h3>{tema.titulo}</h3>
              <p>{tema.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Passion;