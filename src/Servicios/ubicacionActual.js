const ubicacionActual = (ubiLatitude, setUbiLatitude, ubiLongitude, setUbiLongitude) => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUbiLatitude(position.coords.latitude);
          setUbiLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
console.log(ubiLatitude)
console.log(ubiLongitude)
};

export {ubicacionActual};
//servicio, función. 
//Se usa mucho para hacer fetch y funciones--- 
//servicios por un lado, js .. que no serán componentes. 
//Y por otro lado los componentes que tiene lo visual.
