import "./App.css";
import { Clima } from "./componentes/Clima";
// import { Transporte } from './componentes/Transporte';
import { TransporteApi } from "./componentes/TransporteApi";
import { useState } from "react";
import {UbicacionActual} from "./componentes/UbicacionActual"

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
 

  return (
    <header className="containerGeneral" style={estilos.header}>
      <div id="containerDiv" style={estilos.contenedorGeneral}>
      <UbicacionActual ubiLatitude={ubiLatitude} setUbiLatitude= {setUbiLatitude} ubiLongitude={ubiLongitude} setUbiLongitude={setUbiLongitude}/>
        <Clima ubiLatitude={ubiLatitude} setUbiLatitude= {setUbiLatitude} ubiLongitude={ubiLongitude} setUbiLongitude={setUbiLongitude}/>
        {/* <Transporte/> */}
        <TransporteApi />
      </div>
    </header>
  );
}
export default App;
