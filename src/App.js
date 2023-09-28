import './App.css';
import cielo3 from "./assets/cielo3.jpg";
import transporte2 from "./assets/transporte2.jpg";
import {AspectosDestacados} from "./componentes/AspectosDestacados";
import {Hoy} from "./componentes/Hoy";
import {MinMax} from "./componentes/MinMax";
import {RelojClima} from "./componentes/RelojClima";
import {ProgresPrueba} from "./componentes/ProgresPrueba"
const estilos = {
  header: {
    display: "flex",
  },
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
  fondoClima:{
    backgroundImage: `url(${cielo3})`,
    backgroundRepeat: "no-repeat",
    gridColumnstart: "1",
    gridColumnEnd: "2",
   
    
  },
  titleClima: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"xx-large",
    border: "solid 2px black",
    background:"#10113b"
  },
  titleTransporte: {
    fontFamily: "-apple-system",
    color: "#10113b",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"xx-large",
    border: "solid 2px black",
    background:"white"
  },
  p: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"x-large",
  },
  climaContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingRight:"3px"
  },
  climaLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  climaRight: {
    display: "flex",
    flexDirection: "column",
  },
  fondoTransporte:{
    backgroundImage: `url(${transporte2})`,
    backgroundRepeat: "no-repeat",
    gridColumnstart: "2",
    gridColumnEnd: "3",


    
  },
   
};

function App() {
  return (
      <header className="contenedorGeneral" style={estilos.header}>
      <div style={estilos.contenedorGeneral}>
         <section className='clima' style={estilos.fondoClima}>
          <h1 style={estilos.titleClima}>
            CLIMA
          </h1>
          <div className='climaContainer' style={estilos.climaContainer}>
            <div className='climaLeft' style={estilos.climaLeft}>
              <RelojClima/>
              <br></br>
              <MinMax/>
            </div>
            <div className='climaRight'style={estilos.climaRight}>
              <Hoy/>
              <AspectosDestacados/>
            </div>
          </div>

         </section>


         <section className='transporte' style={estilos.fondoTransporte}>
         <h1 style={estilos.titleTransporte}>
          TRANSPORTE
        </h1>
        <p style={estilos.p}>
          Práximamente, info sobre transporte!
        </p>
        <p style={estilos.p}>
          Práximamente, info sobre transporte!
        </p>
        <p style={estilos.p}>
          Práximamente, info sobre transporte!
        </p>
        <p style={estilos.p}>
          Práximamente, info sobre transporte! Práximamente, info sobre transporte!
        </p>
        <ProgresPrueba/>
         </section>
        </div>
      </header>
  );
}

export default App;
