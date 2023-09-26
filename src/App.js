import './App.css';
import cielo3 from "./assets/cielo3.jpg";
import transporte from "./assets/transporte.jpeg";
import {AspectosDestacados} from "./componentes/AspectosDestacados";
import {Hoy} from "./componentes/Hoy";
import {MinMax} from "./componentes/MinMax";
import {RelojClima} from "./componentes/RelojClima";
const estilos = {
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "auto auto ",
    columnGap: "10px",
  },
  fondoClima:{
    backgroundImage: `url(${cielo3})`,
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "auto",
    
  },
  title: {
    fontFamily: "-apple-system",
    color: "rgb(40 36 108)",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"xx-large",
  },
  climaContainer: {
    display: "flex",
    justifyContent: "flex-start",
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
    backgroundImage: `url(${transporte})`,
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
        <p>
          Práximamente, info sobre transporte!
        </p>
        <p>
          Práximamente, info sobre transporte!
        </p>
        <p>
          Práximamente, info sobre transporte!
        </p>
        <p>
          Práximamente, info sobre transporte!
        </p>
         </section>
       
      
        
      </header>
  );
}

export default App;
