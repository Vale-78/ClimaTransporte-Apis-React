import './App.css';
import {Clima} from "./componentes/Clima";
import { Transporte } from './componentes/Transporte';

const estilos = {
  header: {
    justifyContent: "space-evenly",
  },
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap:"10px",
    position:"relative"
  },
};
function App() {
  // const mediaQueri= useMediaQuery( '(max-width: 700px)')
  return (
      <header className="contenedorGeneral" style={estilos.header}>
      <div style={estilos.contenedorGeneral}>
          <Clima/>
          <Transporte/>
        </div>
      </header>
  );
}

export default App;

// https://www.youtube.com/watch?v=mDnd5rCDk6s
// Video íconos
// https://bas.dev/work/meteocons página Íconos