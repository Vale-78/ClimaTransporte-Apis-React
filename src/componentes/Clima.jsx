import {AspectosDestacados} from "../componentes/AspectosDestacados";
import {Hoy} from "../componentes/Hoy";
import {MinMax} from "../componentes/MinMax";
import {RelojClima} from "../componentes/RelojClima";
import cielo3 from "../assets/cielo3.jpg";
const estilos = {
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
  };
  

function Clima() {
  return (
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
  );
}
export { Clima };
