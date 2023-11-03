import "./App.css";
import { Clima } from "./componentes/Clima";
// import { Transporte } from './componentes/Transporte';
import { TransporteApi } from "./componentes/TransporteApi";

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
  // const mediaQueri= useMediaQuery( '(max-width: 700px)')
  return (
    <header className="containerGeneral" style={estilos.header}>
      <div id="containerDiv" style={estilos.contenedorGeneral}>
        <Clima />
        {/* <Transporte/> */}
        <TransporteApi />
      </div>
    </header>
  );
}
export default App;
