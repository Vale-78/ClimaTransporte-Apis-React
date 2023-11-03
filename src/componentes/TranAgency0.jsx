import { useState } from "react";
import { TraAgency } from "./TraAgency";

const estilos = {
  selectContainer: {
    fontFamily: "-apple-system",
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "medium",
  },

  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};

function TraAgency0() {
  const [agencyId, setAgencyId] = useState(82);
  return (
    <div>
      <div style={estilos.container}>
        <select
          style={estilos.selectContainer}
          defaultValue={""}
          onChange={(e) => setAgencyId(e.target.value)}
        >
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
      </div>
      <TraAgency agencyId={agencyId} setAgencyId={setAgencyId} />
    </div>
  );
}
export { TraAgency0 };
