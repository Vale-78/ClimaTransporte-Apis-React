import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const icon = new Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Icono-autob%C3%BAs-rojo.svg",
  iconSize: [25, 25],
});

function Maps({dataTransp}) {
  const position = [dataTransp[0]["latitude"], dataTransp[0]["longitude"]];
  return (
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataTransp.map((elemento) => {
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
