import './App.css';
import {Clima} from "./componentes/Clima";
import { Transporte } from './componentes/Transporte';
const estilos = {
  header: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contenedorGeneral: {
    display: "flex",
  },
};
function App() {
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
