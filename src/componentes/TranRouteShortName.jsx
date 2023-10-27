
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

function TraAgency() {
  const [dataTransp, setDataTransp] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [route_id, setRoute_id] = useState("") ;
  const [agency_id, setAgency_id] = useState(["6", "14", "20", "63", "72" , "82", "430"]);
  const [route_short_name, setRoute_short_name] = useState("");
  useEffect(() => {
   
    async function obtenerDatosDeAPITransp() {
      try {
        const respuesta = await fetch(
          `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple? route_id=${route_id}& agency_id=${agency_id}& route_short_name =${route_short_name}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
        );
        if (!respuesta.ok) {
          throw new Error("No se puedo obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        setDataTransp(datos);
        setLoading(false);
        setRoute_id(datos)
        setRoute_short_name(datos)
        setAgency_id(datos)
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
 
  const infoAgencias= dataTransp["agency_id"];
  return (
    <section className="transporte" style={estilos.fondoTransporte}>
    <h1 style={estilos.titleTransporte}>
     TRANSPORTE
   </h1>
   <p style={estilos.p}>La info que buscás, aquí la encontrarás!!<br/>Colectivos de la ciudad de Bs As</p>
   <div>
   
   </div>
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
              <div>
              <select value={infoAgencias} onChange={(e) => setAgency_id(e.target.value)}>
              <option value={""}>Empresas Disponibles</option>
              <option key={1} value={82}>MICROOMNIBUS SAAVEDRA S.A.T.A.C.I.</option>
              <option key={2} value={72}>MICRO OMNIBUS QUILMES S.A.C.I. Y F.</option>
              <option key={3} value={14}>TRANSP. AUTOMOTORES 12 DE OCTUBRE S.A.C.</option>
              <option key={4} value={63}>EL NUEVO HALCON S.A.</option>
              <option key={5} value={20}>EMPRESA TANDILENSE S.A.C.I.F.I.Y DE S.</option>
              <option key={6} value={430}>ERSA URBANO</option>
              <option key={7} value={6}>TRANSPORTES AUTOMOTORES CALLAO S.A.</option>
              
              </select>
              <p style={estilos.p}>Empresa: {infoAgencias}</p>
                <Maps
                  dataTransp={dataTransp}
                  setDataTransp={setDataTransp}
                  error={error}
                  setError={setError}
                />  
                </div>              
            )}
          </pre>
        )}
      </div>
    </section>
  );
}
export { TraAgency };

// <option key={1} value={[dataTransp["agency_id"][82]]}>MICROOMNIBUS SAAVEDRA S.A.T.A.C.I.</option>
// <option key={2} value={[dataTransp["agency_id"][72]]}>MICRO OMNIBUS QUILMES S.A.C.I. Y F.</option>
// <option key={4} value={[dataTransp["agency_id"][14]]}>TRANSP. AUTOMOTORES 12 DE OCTUBRE S.A.C.</option>
// <option key={5} value={[dataTransp["agency_id"][63]]}>EL NUEVO HALCON S.A.</option>
// <option key={6} value={[dataTransp["agency_id"][20]]}>EMPRESA TANDILENSE S.A.C.I.F.I.Y DE S.</option>
// <option key={7} value={[dataTransp["agency_id"][430]]}>ERSA URBANO</option>
// <option key={8} value={[dataTransp["agency_id"][6]]}>TRANSPORTES AUTOMOTORES CALLAO S.A.</option>


