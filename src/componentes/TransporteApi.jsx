// CON Api

import transporte2 from "../assets/transporte2.jpg";
import { useState } from "react";
import { TraAgency} from "./TraAgency";

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
  h1: {
    fontFamily: "-apple-system",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "x-large",
  },
  // @media screen and (maxWidth:"700px"){

  // }
};

function TransporteApi() {
  const [agencyId, setAgencyId] = useState(82);
  // const [route_short_name, setRoute_short_name] = useState("");
  // const [route_id, setRoute_id] = useState("");
  // const ruteShortNameToRouteId= {
  //   "153A a B° Nuevo":1468,
  //   "321A a LIBERTAD":1466,    
  //   "253A a Liniers" :1464,
  //   "148J I x Pasco" : 1650,
  //   "159E hacia Berazategui": 1695,
  //   "148B C - Capilla": 634,
  //   "148D a Constitución":316 ,
  //   "C - Alpino": 1636,
  //   "H - V. del Plata":315,
  // "12A a Barracas": "1745",
  // "159C L (Roja) Correo Central": "839",
  // "26A a B° Rivadavia": "2029",
  // "133D Est. Transf. Vte. López": "1724",
  // "133A Barracas": "1719",
  // "148A 2 - Pque. Avellaneda x Guillermo Marconi": "1980",
  // "153A a B° Nuevo": "1468",
  // "253A a Liniers": "1464",
  // "253A a LIBERTAD": "1465",
  // "321A a Est. CASTELAR": "1467",
  // "321A a LIBERTAD": "1466",
  // }
  return (
    <section className="transporte" style={estilos.fondoTransporte}>
      <h1 style={estilos.titleTransporte}>TRANSPORTE</h1>
      <p style={estilos.p}>
        La info que buscás, aquí la encontrarás!!
        <br />
        Colectivos de la ciudad de Bs As
      </p>
      <div></div>
      <div>
        <select defaultValue={""} onChange={(e) => setAgencyId(e.target.value)}>
          <option key={0}>Empresas Disponibles</option>
          <option key={1} value={82}>
          MICROOMNIBUS SAAVEDRA S.A.T.A.C.I.
          </option>
          <option key={2} value={72}>
            MICRO OMNIBUS QUILMES S.A.C.I. Y F.
          </option>
          <option key={3} value={14}>
            TRANSP. AUTOMOTORES 12 DE OCTUBRE S.A.C.
          </option>
          <option key={4} value={63}>
            EL NUEVO HALCON S.A.
          </option>
          <option key={5} value={20}>
            EMPRESA TANDILENSE S.A.C.I.F.I.Y DE S.
          </option>
          <option key={6} value={430}>
            ERSA URBANO
          </option>
          <option key={7} value={6}>
            TRANSPORTES AUTOMOTORES CALLAO S.A.
          </option>
        </select>
       
        <p style={estilos.p}>Empresa: {agencyId}</p>
        <TraAgency agencyId={agencyId} setAgencyId={setAgencyId}/>
      </div>
    </section>
  );
}
export { TransporteApi };
