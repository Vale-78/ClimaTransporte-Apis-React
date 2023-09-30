import * as React from "react";
// import CircularProgress from '@mui/material/CircularProgress';
import { CircularDetConNumeros } from "./CircularDetConNumeros";

const estilos = {
  grilla: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
  },
  span: {
    fontSize: "xx-large",
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
  span4: {
    fontSize: "large",
    fontWeight: "bolder",
    color: "rgb(39 41 209)",
  },
};

function IndiceUV() {
  return (
    <div className="grid-item" style={estilos.grilla}>
      <br></br>
      <span style={estilos.span2}>Índice UV</span>
      <br></br>
      <br></br>

      <span style={estilos.span}>⛱️ </span>
      {/* <CircularProgress variant="determinate" value={25} /> */}
      <CircularDetConNumeros />
    </div>
  );
}
export { IndiceUV };