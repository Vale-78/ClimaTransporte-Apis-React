import { Maps } from "./Maps";
import { useState, useEffect } from "react";
import { CircularWithValueLabel } from "./CircularProgressWithLabel";

const estilos = {
  p: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "x-large",
  },
  h1: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "x-large",
  },
};

function TranRouteShortName({ routeId, setRouteId }) {
  const [dataTransp, setDataTransp] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function obtenerDatosDeAPITransp(routeId) {
      try {
        const respuesta = await fetch(
          `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${routeId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
        );
        console.log(respuesta)
        if (!respuesta.ok) {
          throw new Error("No se puedo obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        if (respuesta.length===0){
          throw new Error("No se encuentra disponible esta línea");
        }
        setDataTransp(datos);
        setLoading(false);
        console.log(datos);
      } catch (error) {
        console.log("entró al catch")
        setError(error);
      }
    }
    const interval = setInterval(() => {
      obtenerDatosDeAPITransp(routeId);
    }, 31000);

    return () => clearInterval(interval);
  }, [routeId]);
  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    <div>
      {error ? (
        <p style={estilos.p}>
          Error al obtener datos de la Api:{error.message}
        </p>
      ) : (
        <pre>
          {" "}
          {loading && (
            <div>
              <h1 style={estilos.h1}>
                Cargando...{<CircularWithValueLabel />}
              </h1>
            </div>
          )}
          {!loading && Maps && (
            <Maps
              dataTransp={dataTransp}
              setDataTransp={setDataTransp}
              error={error}
              setError={setError}
              routeId={routeId}
              setRouteId={setRouteId}
            />
          )}
        </pre>
      )}
    </div>
  );
}
export { TranRouteShortName };
