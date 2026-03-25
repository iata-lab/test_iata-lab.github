import "./Home.css";
import photoProfileImg from "../assets/img/photo-profile.jpg";

const Home = () => {
  return (
    <section className="about-section">
      <article className="user-info">
        <div className="user-image">
          <img src={photoProfileImg} alt="Inigo Mata" />
        </div>

        <div className="user-text">
          <h1>Sobre mi</h1>
          <p>
            ¡Hola! Soy un emprendedor, deportista y amante de los viajes que ha
            explorado distintos caminos, lo que me ha dado una visión amplia del
            mundo y de cómo se hacen los negocios en contextos diversos.
          </p>
          <p>
            He trabajado en el Programa de las Naciones Unidas en Chile, en
            Banca de Inversión y también en la industria automovilística, donde
            desarolle una mentalidad analítica y una visión estratégica
            transversal que marcan mi forma de entender la realidad empresarial.
          </p>
          <p>
            Mi impulso por viajar me llevo a recorrer distintas regiones del
            mundo desde zonas rurales en Africa hasta más receintemente el norte
            de Noruega. En el camino, he aprendido que moverme entre países y
            desempeñar trabajos diversos me ha enseñado a adaptarme rápido,
            priorizar con claridad y conectar con la realidad de muchas
            personas.
          </p>
          <p>
            En mi día a día practico alpinismo y sigo aprendiendo sobre nuevas
            tecnologías. Tras un periodo intenso de estudio en estadística y
            economía en Bilbao, continúo formándome en lenguajes de programación
            y en inteligencia artificial.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Home;
