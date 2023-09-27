import { CalidadAire } from "./CalidadAire";
import { EstadoViento } from "./EstadoViento";
import { Humedad } from "./Humedad";
import { IndiceUV } from "./IndiceUV";
import { SalidaPuestaSol } from "./SalidaPuestaSol";
import { Visibilidad } from "./Visibilidad";
const estilos = {
  title: {
    fontFamily: "-apple-system",
    color: "#10113b",
    fontWeight: "bolder",
    fontSize: "xx-large",
    textAlign: "center",
  },
  container: {
    margin: "0 ",
    display: "grid",
    columnGap: "5px",
    rowGap: "10px",
    gridTemplateColumns: "auto auto auto",
    marginLeft: "5%",
    marginRight: "5%",
    maxWidth: "90%",
  },
};

function AspectosDestacados() {
  return (
    <div>
      <h1 style={estilos.title}>AspectosDestacados</h1>
      <div style={estilos.container}>
        <EstadoViento />
        <IndiceUV />
        <SalidaPuestaSol />
        <Humedad />
        <Visibilidad />
        <CalidadAire />
      </div>
    </div>
  );
}
export { AspectosDestacados };
