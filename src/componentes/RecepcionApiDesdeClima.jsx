import { AspectosDestacados } from "../componentes/AspectosDestacados";
import { Hoy } from "../componentes/Hoy";
import { MinMax } from "../componentes/MinMax";
import { RelojClima } from "../componentes/RelojClima";
import { useState } from "react";
import cielo3 from "../assets/cielo3.jpg";
import cieloNoche from "../assets/cieloNoche.jpg";

const estilosDia = {
  backgroundImage: `url(${cielo3})`,
  backgroundRepeat: "no-repeat",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
};
const estilosNoche = {
  backgroundImage: `url(${cieloNoche})`,
  backgroundRepeat: "no-repeat",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
};

const estilos = {
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
    paddingTop: "0px",
  },
  climaLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: "0px",
  },
  climaRight: {
    display: "flex",
    flexDirection: "column",
  },
};

function RecepcionApiDesdeClima({ data }) {
  const [esDia, setEsDia] = useState(data["current"]["is_day"]);

  console.log(esDia);
  const cambiarDiaNoche = () => {
    if (esDia === 1) {
      return estilosDia;
    } else if (esDia === 0) {
      return estilosNoche;
    }
  };
  const diaONoche = cambiarDiaNoche();
  console.log(cambiarDiaNoche());

  const [tempActual, setTempActual] = useState(
    data["current"]["temperature_2m"]
  );
  const [fecha, setFecha] = useState(data["current"]["time"]);
  const [tempMinMax, setTempMinMax] = useState({
    min: data["daily"]["temperature_2m_min"],
    max: data["daily"]["temperature_2m_max"],
  });

  const [grafTempXHora, setGrafTempXHora] = useState(
    data["hourly"]["temperature_2m"].filter(
      (value, index) => index in [0, 3, 6, 9, 12, 15, 18, 21]
    )
  );

  const [uv, setUv] = useState(data["daily"]["uv_index_max"]);
  const [windStatus, setWindStatus] = useState(
    data["daily"]["windspeed_10m_max"]
  );

  const [salidaYPuestaSol, setSalidaYPuestaSol] = useState({
    min: data["daily"]["sunrise"],
    max: data["daily"]["sunset"],
  });

  const [humedad, setHumedad] = useState(
    data["hourly"]["relative_humidity_2m"][
      data["hourly"]["time"].indexOf(
        data["current"]["time"].slice(0, 13) + ":00"
      )
    ]
  );

  const [visibilidad, setVisibilidad] = useState(
    data["hourly"]["visibility"][
      data["hourly"]["time"].indexOf(
        data["current"]["time"].slice(0, 13) + ":00"
      )
    ]
  );
  const [calidadDelAire, setCalidadDelAire] = useState(
    data["current"]["weather_code"]
  );

  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    <section className="clima" style={diaONoche}>
      <h1 style={estilos.titleClima}>CLIMA</h1>
      <div className="climaContainer" style={estilos.climaContainer}>
        <div className="climaLeft" style={estilos.climaLeft}>
          <RelojClima
            tempActual={tempActual}
            setTempActual={setTempActual}
            fecha={fecha}
            setFecha={setFecha}
            calidadDelAire={calidadDelAire}
            setCalidadDelAire={setCalidadDelAire}
            esDia={esDia}
            setEsDia={setEsDia}
          />
          <br></br>
          <MinMax tempMinMax={tempMinMax} setTempMinMax={setTempMinMax} />
        </div>
        <div className="climaRight" style={estilos.climaRight}>
          <Hoy
            grafTempXHora={grafTempXHora}
            setGrafTempXHora={setGrafTempXHora}
          />
          <AspectosDestacados
            uv={uv}
            setUv={setUv}
            windStatus={windStatus}
            setWindStatus={setWindStatus}
            salidaYPuestaSol={salidaYPuestaSol}
            setSalidaYPuestaSol={setSalidaYPuestaSol}
            humedad={humedad}
            setHumedad={setHumedad}
            visibilidad={visibilidad}
            setVisibilidad={setVisibilidad}
            calidadDelAire={calidadDelAire}
            setCalidadDelAire={setCalidadDelAire}
          />
        </div>
      </div>
    </section>
  );
}
export { RecepcionApiDesdeClima };
