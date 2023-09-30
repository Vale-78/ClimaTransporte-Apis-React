import { ProgresPrueba } from "./ProgresPrueba";
import transporte2 from "../assets/transporte2.jpg";
const estilos = { 
    fondoTransporte:{
        backgroundImage: `url(${transporte2})`,
        backgroundRepeat: "no-repeat",
        minWidth:"100%,",
        display:"flex",
        flexDirection: "column"
      }, 
    titleTransporte: {
      fontFamily: "-apple-system",
      color: "#10113b",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize:"xx-large",
      border: "solid 2px black",
      background:"white",
    },
    p: {
      fontFamily: "-apple-system",
      color: "white",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize:"x-large",
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
