import './App.css';
import {Clima} from "./componentes/Clima";
import { Transporte } from './componentes/Transporte';
const estilos = {
  header: {
    display: "flex",
  },
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },

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
  climaContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingRight:"3px"
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
