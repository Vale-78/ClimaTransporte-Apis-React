
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

function TraAgency({agencyId, setAgencyId}) {
  const [dataTransp, setDataTransp] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    async function obtenerDatosDeAPITransp(agencyId) {
      try {
        const respuesta = await fetch(
          `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?agency_id=${agencyId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
          );
        if (!respuesta.ok) {
          throw new Error("No se puede obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        setDataTransp(datos);
        console.log(datos)
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    const interval = setInterval(() => {
       obtenerDatosDeAPITransp(agencyId);
     }
    , 31000); 
    
    return () => clearInterval(interval)
  }, [agencyId]);
  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    <section className="transporte" style={estilos.fondoTransporte}>
      <div>
        {error ? (
          <p style={estilos.p}>Error al obtener datos de la Api: {error.message}</p>
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
                  agencyId= {agencyId} 
                  setAgencyId={setAgencyId}
                />           
            )}
          </pre>
        )}
      </div>
    </section>
  );
}
export { TraAgency };

// <option key={1} value={[dataTransp["agencyId"][82]]}>MICROOMNIBUS SAAVEDRA S.A.T.A.C.I.</option>
// <option key={2} value={[dataTransp["agencyId"][72]]}>MICRO OMNIBUS QUILMES S.A.C.I. Y F.</option>
// <option key={4} value={[dataTransp["agencyId"][14]]}>TRANSP. AUTOMOTORES 12 DE OCTUBRE S.A.C.</option>
// <option key={5} value={[dataTransp["agencyId"][63]]}>EL NUEVO HALCON S.A.</option>
// <option key={6} value={[dataTransp["agencyId"][20]]}>EMPRESA TANDILENSE S.A.C.I.F.I.Y DE S.</option>
// <option key={7} value={[dataTransp["agencyId"][430]]}>ERSA URBANO</option>
// <option key={8} value={[dataTransp["agencyId"][6]]}>TRANSPORTES AUTOMOTORES CALLAO S.A.</option>


