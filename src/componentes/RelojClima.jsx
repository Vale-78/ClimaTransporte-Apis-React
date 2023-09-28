import relojClima2 from "../assets/relojClima2.jpeg";
import { Temperatura } from "./Temperatura";
const estilos = {
  container: {
    maxWidth: "950px",
    margin: "0 auto",
    textAlign: "center",
  },
  span: {
    fontSize: "xx-large",
    color: "rgb(39 41 209)",
    fontWeight: "bolder",
  },
  span2: {
    fontSize: "large",
    color: "rgb(39 41 209)",
    fontWeight: "bolder",
  },
};

function RelojClima() {
  return (
    <div style={estilos.container}>
      <div>
        <img src={relojClima2} alt="Reloj de clima" />
      </div>
      <br></br>
      <Temperatura />
      <br></br>
      <span style={estilos.span}>🌥️</span>
      <br></br>
      <span style={estilos.span2}>Miércoles 16:00 hs</span>
    </div>
  );
}
export { RelojClima };
