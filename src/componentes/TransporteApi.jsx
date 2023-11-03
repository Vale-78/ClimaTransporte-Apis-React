import transporte2 from "../assets/transporte2.jpg";
import { useState } from "react";
import { TraAgency0 } from "./TranAgency0";
import { SeleccionBusquedaTra } from "./SeleccionBusquedaTra";
import { TranRouteShortName0 } from "./TranRouteShortName0";

const estilos = {
  fondoTransporte: {
    backgroundImage: `url(${transporte2})`,
    backgroundRepeat: "no-repeat",
    minWidth: "100%,",
    display: "flex",
    flexDirection: "column",
  },
  titleTransporte: {
    fontFamily: "-apple-system",
    color: "#10113b",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "xx-large",
    border: "solid 2px black",
    background: "white",
  },
  p: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "x-large",
  },
  p2: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "large",
  },
  h1: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "x-large",
  },
};

function TransporteApi() {
  const [desbloqSelected, setDesbloqSelected] = useState(false);
  const [seleccion, setSeleccion] = useState(0)
  return (
    <section className="transporte" style={estilos.fondoTransporte}>
      <h1 style={estilos.titleTransporte}>TRANSPORTE</h1>
      <p style={estilos.p}>
        La info que buscás, aquí la encontrarás!!
      </p>
      <p style={estilos.p2}>
        Colectivos de la ciudad de Bs As
      </p>
      <SeleccionBusquedaTra desbloqSelected={desbloqSelected} setDesbloqSelected={setDesbloqSelected}seleccion={seleccion} setSeleccion={setSeleccion}/>
      {/* if (!desbloqSelected) return <TraAgency0 handleEvent={desbloqSelected} />;
      return <TranRouteShortName handleEvent={setDesbloqSelected} />; */}
      {desbloqSelected ? (
          <TraAgency0 />
      ) : (
          <TranRouteShortName0 />
      )}
    </section>
  );
}
export { TransporteApi };
