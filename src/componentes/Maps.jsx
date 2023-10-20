// import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";


const estilos = {
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
  const icon= new Icon({
    iconUrl:"https://upload.wikimedia.org/wikipedia/commons/1/10/Icono-autob%C3%BAs-rojo.svg",
    iconSize: [25,25]
  })

function Maps({ dataTransp, setDataTransp, error, setError }) {

    // const [position, setPosition]=useState([dataTransp[0]]);

//   const position = [51.505, -0.09];
//   console.log(position)
//  console.log([dataTransp]["latitude"], [dataTransp]["longitude"])
  
//   const position = [dataTransp["latitude"], dataTransp["longitude"]];
// [dataTransp[0]["latitude"], dataTransp[0]["longitude"]]
  
  return (
    <div>
    <p style={estilos.p}>{dataTransp[0]["latitude"]}</p>
    <MapContainer center={[dataTransp[0]["latitude"], dataTransp[0]["longitude"]]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[dataTransp[0]["latitude"], dataTransp[0]["longitude"]]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
export { Maps };
