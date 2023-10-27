// import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
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

function Maps({ dataTransp, setDataTransp, error, setError, agency_id, setAgency_id}) {
  // const [position, setPosition]=useState([dataTransp[0]]);

    // const position = [dataTransp[0]["latitude"], dataTransp[0]["longitude"]];
    const position = [dataTransp[0]["latitude"], dataTransp[0]["longitude"]];
    const agencia = [dataTransp["agencia_id"]];
  return (
    <div>
      <p style={estilos.p}>{position}</p>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {dataTransp.map((element, index) => {
            return(
              <Marker
            position={[dataTransp[index]["latitude"], dataTransp[index]["longitude"]]}
            icon={icon}
              >
              <Popup>{[dataTransp[index]["agency_name"]]}<br/> {[dataTransp[index]["trip_headsign"]] }{agencia}<br/></Popup>
          </Marker>
            )
          })}
          
      </MapContainer>
    </div>
  );
}
export { Maps };
