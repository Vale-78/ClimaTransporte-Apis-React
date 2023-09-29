import { ProgresPrueba } from "./ProgresPrueba";
import transporte2 from "../assets/transporte2.jpg";
const estilos = { 
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
  
    fondoTransporte:{
      backgroundImage: `url(${transporte2})`,
      backgroundRepeat: "no-repeat",
      gridColumnstart: "2",
      gridColumnEnd: "3", 
    }, 
  };

function Transporte() {
  return (
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
  );
}
export { Transporte };
