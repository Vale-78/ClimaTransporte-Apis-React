import { useState, useEffect } from "react";
import { RecepcionApiDesdeClima } from "./RecepcionApiDesdeClima";
import {CircularWithValueLabel} from "./CircularProgressWithLabel";

const estilos = {
 container: {
   margin: "0px"
 },
};

function Clima() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obtenerDatosDeAPI() {
      try {
        const respuesta = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code&hourly=temperature_2m,relative_humidity_2m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,wind_speed_10m_max&forecast_days=1"
        );
        if (!respuesta.ok) {
          throw new Error("No se puedo obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        setData(datos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    obtenerDatosDeAPI();
  }, []);
  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    
      <div style={estilos.container}>
        {error ? (
          <p>Error al obtener datos de la Api:{error.message}</p>
        ) : (
          <pre style={estilos.container}>
            {" "}
            {loading && 
            <div><h1>Cargando...</h1>
            <CircularWithValueLabel/></div>}
            {!loading && RecepcionApiDesdeClima && (
              <RecepcionApiDesdeClima
                data={data}
                setData={setData}
                error={error}
                setError={setError}
              />
            )}
          </pre>
        )}
      </div>
   
  );
}
export { Clima };
