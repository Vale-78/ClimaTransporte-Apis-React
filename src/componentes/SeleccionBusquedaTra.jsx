import { useState } from "react";

const estilos = {
 

    p: {
      fontFamily: "-apple-system",
      color: "white",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "x-large",
    },
  };
  
  
function SeleccionBusquedaTra({desbloqSelected}) {
   
    function iniciarBúsqueda(e) {
        setSeleccion(e.target.value);
        desbloqSelected(1);
      }
    const [seleccion, setSeleccion] = useState("Buscar por Linea")
  return (
    <div>
    <select defaultValue={""} onChange= {iniciarBúsqueda}>
      <option key={1} value={"Buscar por Linea"}>
      Buscar por línea
      </option>
      <option key={2} value={"Buscar por Empresa"}>
      Buscar por empresa
      </option>      
    </select>
    <p style={estilos.p}>Selección: {seleccion}</p>
    </div>    
  );
}
export { SeleccionBusquedaTra };
