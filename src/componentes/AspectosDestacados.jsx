const estilos = {
  title: {
    fontFamily: "-apple-system",
    color: "#10113b",
    fontWeight: "bolder",
    fontSize:"xx-large",
    textAlign: "center",
  },
  container: {
    margin: "0 ",
    display: "grid",
    columnGap: "5px",
    rowGap: "10px",
    gridTemplateColumns: "auto auto auto",
  },
  
  grilla: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
  },
  span: {
    fontSize:"x-large",
    color: "rgb(39 41 209)",
    fontWeight: "bolder",
  },
  span2: {
    fontSize:"large",
    fontWeight: "bolder",
  },
  span3: {
    fontSize:"large",
    fontWeight: "bolder",
  },
};

function AspectosDestacados() {
  return (
    <div>
      <h1 style={estilos.title}>AspectosDestacados</h1>
      <div style={estilos.container}>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Índice UV</span>
              <br></br>
              <br></br>
              <span style={estilos.span}>⛱️</span>
              <span style={estilos.span}>6</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Estado del viento</span>
              <br></br>
              <br></br>
              <span style={estilos.span}>🍃</span>
              <span style={estilos.span}>11.12 Km/h</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Salida del sol</span>
              <br></br>
              <span style={estilos.span}>🌅</span>
              <span style={estilos.span}>6:35 AM</span>
              <br></br>
              <span style={estilos.span2}>Puesta del sol</span>
              <br></br>
              <span style={estilos.span}>🌄</span>
              <span style={estilos.span}>7:22PM</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Humedad</span>
        <br></br>
              <br></br>
              <span style={estilos.span}>⛈️</span>
              <span style={estilos.span}>11.12 Km/h</span>
              <br></br>
              <br></br>
              <span style={estilos.span3}>Normal</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Visibilidad</span>
        <br></br>
              <br></br>
              <span style={estilos.span}>👁️‍🗨️</span>
              <span style={estilos.span}>11.12 Km/h</span>
              <br></br>
              <br></br>
              <span style={estilos.span3}>Promedio</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span2}>Calidad del aire</span>
        <br></br>
              <br></br>
              <span style={estilos.span}>☀️</span>
              <span style={estilos.span}>11.12 Km/h</span>
              <br></br>
              <br></br>
              <span style={estilos.span3}>Fresco</span>
        </div>
      </div>
    </div>
  );
}
export { AspectosDestacados };
