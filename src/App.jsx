import { useEffect, useRef, useState } from "react";
import Segmentos from "./componentes/segmentos/Segmentos";
import Footer from "./componentes/footer/Footer";
import TituloPrincipal from "./componentes/tituloPrincipal/TituloPrincipal";
import ListaDeProyectos from "./componentes/listaDeProyectos/ListaDeProyectos";
import CarruselCertificaciones from "./componentes/carruselCertificaciones/CarruselCertificaciones";
import NeoScrollPoetry from "./componentes/neoScroll/NeoScrollPoetry";
import ThisIsMe from "./componentes/thisIsMe/ThisIsMe";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [mostrarProyectos, setMostrarProyectos] = useState(false);
  const [mostrarCarrusel, setMostrarCarrusel] = useState(false);
  const [mostrarPoetry, setMostrarPoetry] = useState(false);
  const [mostrarThisIsMe, setMostrarThisIsMe] = useState(false);
  const [imagenModal, setImagenModal] = useState(null);

  const proyectosRef = useRef(null);
  const carruselRef = useRef(null);
  const poetryRef = useRef(null);
  const thisismeRef = useRef(null);
  const acordeonRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const ignoreNextScroll = useRef(false);
  const desdeSeleccion = useRef(false);

  const pausarScrollTemporalmente = () => {
    ignoreNextScroll.current = true;
    setTimeout(() => {
      ignoreNextScroll.current = false;
    }, 1000);
  };

  const manejarSeleccion = (seccion) => {
    ignoreNextScroll.current = true;
    desdeSeleccion.current = true;

    setMostrarProyectos(false);
    setMostrarCarrusel(false);
    setMostrarPoetry(false);
    setMostrarThisIsMe(false);

    if (seccion === "Development") {
      setMostrarProyectos(true);
      setTimeout(() => {
        proyectosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => (ignoreNextScroll.current = false), 500);
      }, 100);
    } else if (seccion === "IT") {
      setMostrarCarrusel(true);
      setTimeout(() => {
        if (carruselRef.current) {
          const offsetTop = carruselRef.current.offsetTop;
          const height = carruselRef.current.offsetHeight;
          const scrollY = offsetTop - (window.innerHeight - height) / 2;
          window.scrollTo({ top: scrollY > 0 ? scrollY : 0, behavior: "smooth" });
        }
        setTimeout(() => (ignoreNextScroll.current = false), 500);
      }, 400);
    } else if (seccion === "Poetry") {
      setMostrarPoetry(true);
      setTimeout(() => {
        poetryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          ignoreNextScroll.current = false;
          desdeSeleccion.current = false;
        }, 500);
      }, 100);
    } else if (seccion === "This is me") {
      setMostrarThisIsMe(true);
      setTimeout(() => {
        thisismeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          ignoreNextScroll.current = false;
          desdeSeleccion.current = false;
        }, 500);
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ignoreNextScroll.current) return;

      const scrollActual = window.scrollY;
      const scrollUp = scrollActual < lastScrollY.current - 50;

      if (scrollUp) {
        setMostrarProyectos(false);
        setMostrarCarrusel(false);
        if (!desdeSeleccion.current) {
          setMostrarPoetry(false);
          setMostrarThisIsMe(false);
        }
      }

      lastScrollY.current = scrollActual;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ignoreNextScroll.current) {
          setMostrarProyectos(false);
          setMostrarCarrusel(false);
          if (!desdeSeleccion.current) {
            setMostrarPoetry(false);
            setMostrarThisIsMe(false);
          }
        }
      },
      { root: null, threshold: 0.3 }
    );

    if (acordeonRef.current) observer.observe(acordeonRef.current);
    return () => {
      if (acordeonRef.current) observer.unobserve(acordeonRef.current);
    };
  }, []);

  return (
    <div className="cajaPrincipal">
      <TituloPrincipal texto="David Stiven Silva Velandia" />
      <div ref={acordeonRef}>
        <Segmentos onSeleccionarSeccion={manejarSeleccion} />
      </div>

      <AnimatePresence>
        {mostrarProyectos && (
          <motion.div
            ref={proyectosRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <ListaDeProyectos />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarCarrusel && (
          <motion.div
            ref={carruselRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#121212",
              padding: "6rem 0",
            }}
          >
            <CarruselCertificaciones
              onInteraccion={pausarScrollTemporalmente}
              onImagenClick={(src) => setImagenModal(src)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarPoetry && (
          <motion.div
            ref={poetryRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "4rem 1rem",
              backgroundColor: "#0a0a1a",
            }}
          >
            <NeoScrollPoetry />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarThisIsMe && (
          <motion.div
            ref={thisismeRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "4rem 1rem",
              backgroundColor: "#0a0a1a",
            }}
          >
            <ThisIsMe />
          </motion.div>
        )}
      </AnimatePresence>

      {imagenModal && (
        <div
          className="modal-overlay"
          onClick={() => setImagenModal(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagenModal(null)}
              aria-label="Cerrar"
              title="Cerrar"
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff0044"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.2s ease, stroke 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "rotate(90deg)";
                  e.currentTarget.style.stroke = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg)";
                  e.currentTarget.style.stroke = "#ff0044";
                }}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={imagenModal}
              alt="Certificación"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
              }}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
