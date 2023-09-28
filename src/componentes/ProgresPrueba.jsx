import Button from '@mui/material/Button';
import {CircularDeterminate }from "./CircularDeterminate";
import {CircularWithValueLabel} from "./CircularProgressWithLabel";
// import {GraficoBarras} from "./GraficoBarras";
// import {GraficoBarBasic} from "./GraficoBarBasic";
const estilos = {
    grilla: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "5px solid #10113b",
      fontSize: "medium",
      textAlign: "center",
    },
    span: {
      fontSize: "x-large",
      color: "rgb(39 41 209)",
      fontWeight: "bolder",
    },
    span2: {
      fontSize: "large",
      fontWeight: "bolder",
    },
    span3: {
      fontSize: "large",
      fontWeight: "bolder",
    },
  };
  
  function ProgresPrueba() {
    return (
        <div class="grid-item" style={estilos.grilla}>
         <p>
          Prueba de MUI!
        </p>
        <Button variant="contained">Hello world</Button>;
        <CircularDeterminate/>
        <br></br>
        <CircularWithValueLabel/>
        <br></br>
        {/* <GraficoBarras/> */}
        {/* <GraficoBarBasic/> */}

{/* <CircularProgressWithLabel value={progress} />  */}
{/* circulo hasta 100% */}
        </div>
    );
  }
  export { ProgresPrueba };
  