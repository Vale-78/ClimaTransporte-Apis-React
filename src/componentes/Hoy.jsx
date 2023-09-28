import {GraficoBarSimple} from "./GraficoBarSimple"
const estilos = {
    title: {
      fontFamily: "-apple-system",
      color: "#10113b",
      fontWeight: "bolder",
      fontSize:"xx-large",
      textAlign: "center",
    },
 
    container: {
      margin: "0",
    },     
  };
  
  function Hoy(){
    
    return (
        <div style={estilos.container}>
            <h1 style={estilos.title}>Pronóstico de hoy</h1> 
            <GraficoBarSimple/>
         </div>)
  }
  export {Hoy};