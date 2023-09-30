import { AspectosDestacados } from "../componentes/AspectosDestacados";
import { Hoy } from "../componentes/Hoy";
import { MinMax } from "../componentes/MinMax";
import { RelojClima } from "../componentes/RelojClima";
import cielo3 from "../assets/cielo3.jpg";
import JsonData from "../data.json";
import { useState } from "react";
const estilos = {
  fondoClima: {
    backgroundImage: `url(${cielo3})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  },
  titleClima: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "xx-large",
    border: "solid 2px black",
    background: "#10113b",
  },
  climaContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingRight: "3px",
  },
  climaLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  climaRight: {
    display: "flex",
    flexDirection: "column",
  },
};

function Clima() {
  const [tempActual, setTempActual] = useState(
    JsonData["current_weather"]["temperature"]
  );
  const [fecha, setFecha] = useState(
    JsonData["current_weather"]["time"]
  );
  const [tempMinMax, setTempMinMax] = useState({min:JsonData["daily"]["temperature_2m_min"],max:JsonData["daily"]["temperature_2m_max"]});
  console.log(tempActual);
  console.log(setTempActual);
  return (
    <section className="clima" style={estilos.fondoClima}>
      <h1 style={estilos.titleClima}>CLIMA</h1>
      <div className="climaContainer" style={estilos.climaContainer}>
        <div className="climaLeft" style={estilos.climaLeft}>
          <RelojClima tempActual={tempActual} setTempActual={setTempActual} fecha={fecha} setFecha={setFecha} />
          {/* <div>{JsonData["current_weather"]["temperature"]}</div> */}
          {/* <div>{JsonData["current_weather"]["time"]}</div>  */}
          {/* <div>{JsonData["daily"]["temperature_2m_min"]}</div> 
          <div>{JsonData["daily"]["temperature_2m_max"]}</div> */}
          <br></br>
          <MinMax tempMinMax={tempMinMax} setTempMinMax={setTempMinMax} />
        </div>
        <div className="climaRight" style={estilos.climaRight}>
          <Hoy />
          <AspectosDestacados />
        </div>
      </div>
    </section>
  );
}
export { Clima };
