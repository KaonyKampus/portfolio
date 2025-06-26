import "./thisIsMe.css";
import imagenCiclismo from "../../assets/ciclismo.jpg";
import imagenEscribiendo from "../../assets/poetry.png";
import imagenPerfil from "../../assets/imagenPerfil.jpg";

function ThisIsMe() {
  return (
    <section className="this-is-me-container">
      <h2 className="this-is-me-title">This is me</h2>
      <div className="panels-container">
        <div className="panel">
          <img src={imagenPerfil} alt="David" />
          <p>
            My name is David, I’m 25 years old. I am a software engineering student and this portfolio represents who I am.
          </p>
        </div>
        <div className="panel">
          <img src={imagenCiclismo} alt="Cycling" />
          <p>
            Cycling taught me discipline and persistence. Even after years, it's part of how I face life.
          </p>
        </div>
        <div className="panel">
          <img src={imagenEscribiendo} alt="Writing" />
          <p>
            Writing and poetry are where I express myself deeply. This portfolio has three faces: Development, IT and Poetry — the pillars of my identity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThisIsMe;
