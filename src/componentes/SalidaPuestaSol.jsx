const estilos = {
  grilla: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
  },
  span2: {
    fontSize: "large",
    fontWeight: "bolder",
  },
  span4: {
    fontSize: "large",
    fontWeight: "bolder",
    color: "rgb(39 41 209)",
  },
};

function SalidaPuestaSol({ salidaYPuestaSol }) {
  let salidaSol = salidaYPuestaSol.min.toString().split("T")[1];
  let puestaSol = salidaYPuestaSol.max.toString().split("T")[1];
  return (
    <div className="grid-item" style={estilos.grilla}>
      <br></br>
      <span style={estilos.span2}>Salida del sol</span>
      <br></br>
      <span style={estilos.span4}>🌅</span>
      <span style={estilos.span4}>{salidaSol}</span>
      <br></br>
      <span style={estilos.span2}>Puesta del sol</span>
      <br></br>
      <span style={estilos.span4}>🌄</span>
      <span style={estilos.span4}>{puestaSol}</span>
      <br></br>
      <br></br>
    </div>
  );
}
export { SalidaPuestaSol };
