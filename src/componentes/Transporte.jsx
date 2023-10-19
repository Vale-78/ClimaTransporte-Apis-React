import transporte2 from "../assets/transporte2.jpg";
import { Maps} from './Maps';

const estilos = { 
    fondoTransporte:{
        backgroundImage: `url(${transporte2})`,
        backgroundRepeat: "no-repeat",
        minWidth:"100%,",
        display:"flex",
        flexDirection: "column",
      }, 
    
    // @media screen and (maxWidth:"700px"){

    // }
   
  };
 

function Transporte() {
  
  return (
    <section className='transporte' style={estilos.fondoTransporte}>
     <Maps/>
    </section>
  );
}
export { Transporte };
