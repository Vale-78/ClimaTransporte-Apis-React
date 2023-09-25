import './App.css';
import cielo from "./assets/cielo.jpeg";
import transporte from "./assets/transporte.jpeg";
import {AspectosDestacados} from "./componentes/AspectosDestacados";
import {Hoy} from "./componentes/Hoy";
import {MinMax} from "./componentes/MinMax";
import {RelojClima} from "./componentes/RelojClima";
const estilos = {
  contenedorGeneral: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-around",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "(100%, auto)",
  },
  fondoClima:{
    backgroundImage: `url(${cielo})`,
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "auto",
    gridColumn: 1,
    gridRow: 1,
  },
  title: {
    fontFamily: "-apple-system",
    color: "rgb(40 36 108)",
    fontWeight: "bolder",
    textAlign: "center",
  },
  fondoTransporte:{
    backgroundImage: `url(${transporte})`,
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "auto",
    gridColumn: 2 ,
    gridRow: 1,
  },
   
};

function App() {
  return (
    <>
      <header className="contenedorGeneral" style={estilos.contenedorGeneral}>
         <section className='clima' style={estilos.fondoClima}>
          <h1 style={estilos.title}>
            Clima
          </h1>
          <RelojClima/>
          <Hoy/>

          <AspectosDestacados/>
          <MinMax/>
         </section>


         <section className='transporte' style={estilos.fondoTransporte}>
         <h1 style={estilos.title}>
          Transporte
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
    </>
  );
}

export default App;
