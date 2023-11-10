import "./App.css";
import { Clima } from "./componentes/Clima";
// import { Transporte } from './componentes/Transporte';
import { TransporteApi } from "./componentes/TransporteApi";
import { useEffect, useState } from "react";
import {ubicacionActual} from "./Servicios/ubicacionActual"

const estilos = {
  header: {
    justifyContent: "space-evenly",
  },
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    position: "relative",
  },
};
function App() {

  const [ubiLatitude, setUbiLatitude] = useState(null);
  const [ubiLongitude,  setUbiLongitude] = useState(null);
  useEffect(()=>{
     ubicacionActual(ubiLatitude, setUbiLatitude, ubiLongitude, setUbiLongitude)

  }, [])
 

  return (
    <header className="containerGeneral" style={estilos.header}>
      <div id="containerDiv" style={estilos.contenedorGeneral}>
      
        <Clima ubiLatitude={ubiLatitude} setUbiLatitude= {setUbiLatitude} ubiLongitude={ubiLongitude} setUbiLongitude={setUbiLongitude}/>
        {/* <Transporte/> */}
        <TransporteApi />
      </div>
    </header>
  );
}
export default App;
