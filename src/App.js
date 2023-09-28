import './App.css';
import cielo3 from "./assets/cielo3.jpg";
import transporte2 from "./assets/transporte2.jpg";
import {AspectosDestacados} from "./componentes/AspectosDestacados";
import {Hoy} from "./componentes/Hoy";
import {MinMax} from "./componentes/MinMax";
import {RelojClima} from "./componentes/RelojClima";
import {ProgresPrueba} from "./componentes/ProgresPrueba"
const estilos = {
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
  },
  fondoClima:{
    backgroundImage: `url(${cielo3})`,
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "auto",
    
  },
  title: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"xx-large",
    border: "solid 2px black",
    background:"#10113b"
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
    justifyContent: "space-around",
  },
  climaRight: {
    display: "flex",
    flexDirection: "column",
  },
  fondoTransporte:{
    backgroundImage: `url(${transporte2})`,
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "auto",
    
  },
   
};

function App() {
  return (
      <header className="contenedorGeneral" style={estilos.contenedorGeneral}>
         <section className='clima' style={estilos.fondoClima}>
          <h1 style={estilos.title}>
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
         <h1 style={estilos.title}>
          TRANSPORTE
        </h1>
        <ProgresPrueba/>
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
          Práximamente, info sobre transporte!
        </p>
         </section>
       
      
        
      </header>
  );
}

export default App;
