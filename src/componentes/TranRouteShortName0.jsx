import { useState } from "react";
import { TranRouteShortName} from "./TranRouteShortName";


const estilos = {
  selectContainer: {
    fontFamily: "-apple-system",
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize:"medium",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
};

function TranRouteShortName0() {
  const [routeId, setRouteId] = useState("1468") ;       
  return (
    <div>
      <div style={estilos.container} >
          <select style={estilos.selectContainer} defaultValue={""} onChange={(e) => setRouteId(e.target.value)}>
            <option key={0}>Líneas Disponibles</option>
            <option key={1} value={"1468"}>
            153A a B° Nuevo
            </option>
            <option key={2} value={"1466"}>
            321A a LIBERTAD
            </option>
            <option key={3} value={"1464"}>
            253A a Liniers 
            </option>
            <option key={4} value={"1650"}>
            152A a Olivos
            </option>
            <option key={5} value={"1695"}>
            159E hacia Berazategui
            </option>
            <option key={6} value={"634"}>
            148B C - Capilla
            </option>
            <option key={7} value={"316"}>
            148D a Constitución
            </option>
            <option key={8} value={"31"}>
            10A a PARANÁ (Barrio Mercantil)
            </option>
            <option key={9} value={"1523"}>
            99A a Pte. La Noria
            </option>
            <option key={10} value={"174"}>
            12A a Barracas
            </option>
            <option key={11} value={"197"}>
            130A a Est. Bulogne
            </option>
            <option key={12} value={"2029"}>
            26A a B° Rivadavia
            </option>
            <option key={13} value={"1724"}>
            133D Est. Transf. Vte. López
            </option>
            <option key={14} value={"1719"}>
            133A a Barracas
            </option>
            <option key={15} value={"1980"}>
            148A 2 - Pque. Avellaneda x Guillermo Marconi
            </option>
            <option key={16} value={"1465"}>
            253A a LIBERTAD
            </option>
            <option key={17} value={"1467"}>
            321A a Est. CASTELAR
            </option>
          </select>   
        </div>
        <TranRouteShortName routeId={routeId} setRouteId={setRouteId}/>
       
      </div>
  
  );
}

export { TranRouteShortName0 };

