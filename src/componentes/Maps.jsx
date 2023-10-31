// import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
// import { useState } from "react";
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
  // @media screen and (maxWidth:"700px"){

  // }
};
const icon = new Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Icono-autob%C3%BAs-rojo.svg",
  iconSize: [25, 25],
});

function Maps({ dataTransp, setDataTransp, agencyId, setAgencyId}) { 
    const position = [dataTransp[0]["latitude"], dataTransp[0]["longitude"]];
    console.log(agencyId)
    // const indiceAgencia= dataTransp.indexOf(dataTransp[agencyId]);
     //colecciones indexadas
    let indices=[]
    let idx = dataTransp.indexOf(dataTransp["agency_id".agencyId]);
    while (idx !== -1) {
      indices.push(idx);
      idx = dataTransp.indexOf(dataTransp["agency_id".agencyId], idx + 1);
    }
    //me devuelve número de id agencia
   
     
    console.log(indices);
    // const indiceAgency = dataTransp.findIndex(index => index.agency_id=== agencyId)
    // const indiceAgenciLatitude = dataTransp["agency_id"].indexOf(dataTransp["agencyId"])
    // const indiceAgenciLongitude = dataTransp["agency_id"].indexOf(dataTransp["agencyId"])
    // console.log(indiceAgenciLatitude)
    // console.log(indiceAgenciLongitude)
    // data["hourly"]["relativehumidity_2m"][data["hourly"]["time"].indexOf(data["current_weather"]["time"].slice(0,13) + ":00")]
    // console.log(indiceAgency)


    // const [rutaId, setRutaId] = useState(dataTransp["route_id"]);
    // const [selectLinea, setSeletLinea] =useState(1468);

    // const handleSelectChange =(e) => {setSeletLinea(e.target.value)};
    // const indiceData = dataTransp.findIndex(index => index.route_Id=== selectLinea ) 
    
  return (
    <div>
      <p style={estilos.p}>{position}</p>
   
      {/* <select defaultValue={""} onChange={() => setDataTransp.route_id.map()}>
        <option value="2468">153A a B° Nuevo</option>
       </select> */}
       {/* <select className="linea" id="busLinea" value={selectLinea} onChange={handleSelectChange}>
          <option >Lineas Disponibles</option>
          <option key={1} value="1468">153A a B° Nuevo</option>
          <option key={2} value="1464">253A a Liniers</option>
          <option key={3} value="1467">321A a Est. CASTELAR</option>
          <option  key={4} value="1466">321A a LIBERTAD</option>
        </select>
       
        <p style={estilos.p}>Línea: {selectLinea} </p>
        console.log({indiceData})
         */}
       
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
           
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataTransp.map((elemento) => {
            return(
              <Marker
          
            position={[elemento["latitude"], elemento["longitude"]]}
            icon={icon}
            
            //position={[dataTransp[rutaId]].indexOf([dataTransp["latitude"], dataTransp["longitude"]])}
            //  position={dataTransp.findIndex(dataTransp[agencyId])}
              >
              <Popup>{[elemento["agency_name"]]}<br/> {[elemento["trip_headsign"]]}<br/> {[elemento["route_short_name"]]}<br/></Popup>
          </Marker>
            )
          })}
          
      </MapContainer>
    </div>
  );
}
export { Maps };
