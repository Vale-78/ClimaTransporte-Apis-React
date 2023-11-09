import React, { useEffect} from 'react';

const UbicacionActual = ({ubiLatitude, setUbiLatitude, ubiLongitude, setUbiLongitude}) => {
  useEffect(() => {
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
  }, [setUbiLatitude, setUbiLongitude]);
console.log(ubiLatitude)
console.log(ubiLongitude)
  return (
    <div>
    </div>
  );
};

export {UbicacionActual};
 
 // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };
  // function success({ubiLatitude, setUbiLatitude, ubiLongitude, setUbiLongitude, pos}) {  
  //   console.log("Your current position is:");
  //   console.log(`Latitude : ${pos.coords.latitude}`);
  //   console.log(`Longitude: ${pos.coords.longitude}`);
  //   console.log(`More or less ${pos.coords.accuracy} meters.`);
  //   ubiLatitude=pos.coords.latitude
  //   ubiLongitude= pos.coords.longitude
  // }
  // navigator.geolocation.getCurrentPosition(success, options);
  // navigator.geolocation.getCurrentPosition(function(position ) {
  //   console.log("Latitude is :", position.coords.latitude); 
  //   console.log("Longitude is :", position.coords.longitude);
  //  });
  //  navigator.geolocation.getCurrentPosition(ubiLatitude,ubiLongitude )
