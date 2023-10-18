import transporte2 from "../assets/transporte2.jpg";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const estilos = { 
    fondoTransporte:{
        backgroundImage: `url(${transporte2})`,
        backgroundRepeat: "no-repeat",
        minWidth:"100%,",
        display:"flex",
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
    // @media screen and (maxWidth:"700px"){

    // }
   
  };
 

function Transporte() {
  const position = [51.505, -0.09]
  return (
    <section className='transporte' style={estilos.fondoTransporte}>
    <h1 style={estilos.titleTransporte}>
     TRANSPORTE
   </h1>
   <p style={estilos.p}>
     La info que buscás, aquí la encontrarás!!
   </p>
   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

    </section>
  );
}
export { Transporte };
