import "./tituloPrincipal.css";

const TituloPrincipal = ({ texto = "Mi Portafolio Poético" }) => {
  return (
    <h1 className="titulo-principal">
      {texto.split("").map((char, index) => (
        <span
          key={index}
          className={char === " " ? "espacio" : ""}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default TituloPrincipal;
