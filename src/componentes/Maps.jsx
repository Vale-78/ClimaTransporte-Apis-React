import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
const icon = new Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Icono-autob%C3%BAs-rojo.svg",
  iconSize: [25, 25],
});

function Maps({dataTransp}) {
  let position = null
  let positionExist = false

  // useEffect(()=>{
    if(dataTransp[0]!==undefined & dataTransp[0]!==null){
      position = [dataTransp[0]["latitude"], dataTransp[0]["longitude"]];
      positionExist= true
    }
    else{
      position = [-34,-58]
      positionExist = false
      alert("En este momento esa línea no está en circulación Solucionar Loop Infinito")  
 }
  // })
  
 
  
  return (
    <div>
  
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positionExist && dataTransp.map((elemento) => {
          return (
            <Marker
              position={[elemento["latitude"], elemento["longitude"]]}
              icon={icon}
            >
              <Popup>
                {[elemento["agency_name"]]}
                <br /> {[elemento["trip_headsign"]]}
                <br /> {[elemento["route_short_name"]]}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
export { Maps };
