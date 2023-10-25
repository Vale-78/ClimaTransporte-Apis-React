
// CON Api

import transporte2 from "../assets/transporte2.jpg";
import { Maps } from "./Maps";
import { useState, useEffect } from "react";
import { CircularWithValueLabel } from "./CircularProgressWithLabel";


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
    fontSize:"xx-large",
    border: "solid 2px black",
    background:"white",
  },
  p: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"x-large",
  },
  h1: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"x-large",
  },
  // @media screen and (maxWidth:"700px"){

  // }
};

function TransporteApi() {
  const [dataTransp, setDataTransp] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   
    async function obtenerDatosDeAPITransp() {
      try {
        const respuesta = await fetch(
          "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"
        );
        if (!respuesta.ok) {
          throw new Error("No se puedo obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        setDataTransp(datos);
        setLoading(false);
        console.log(datos)
      } catch (error) {
        setError(error);
      }
    }
    const interval = setInterval(() => {
       obtenerDatosDeAPITransp();
     }
    , 31000); 
    
    return () => clearInterval(interval)
  }, []);
  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    <section className="transporte" style={estilos.fondoTransporte}>
    <h1 style={estilos.titleTransporte}>
     TRANSPORTE
   </h1>
   <p style={estilos.p}>
     La info que buscás, aquí la encontrarás!!
   </p>
      <div>
        {error ? (
          <p style={estilos.p}>Error al obtener datos de la Api:{error.message}</p>
        ) : (
          <pre>
            {" "}
            {loading && (
              <div>
                <h1 style={estilos.h1}>Cargando...{<CircularWithValueLabel />}</h1>
              </div>
            )}
            
            {!loading && Maps && (
                <Maps
                  dataTransp={dataTransp}
                  setDataTransp={setDataTransp}
                  error={error}
                  setError={setError}
                />                
            )}
          </pre>
        )}
      </div>
    </section>
  );
}
export { TransporteApi };



