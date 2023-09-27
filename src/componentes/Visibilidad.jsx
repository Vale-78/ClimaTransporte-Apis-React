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
  
  function Visibilidad() {
    return (
        <div class="grid-item" style={estilos.grilla}>
        <br></br>
        <span style={estilos.span2}>Visibilidad</span>
        <br></br>
              <br></br>
              <span style={estilos.span}>👁️‍🗨️</span>
              <span style={estilos.span}>11.12 Km/h</span>
              <br></br>
              <br></br>
              <span style={estilos.span3}>Promedio</span>
        </div>
    );
  }
  export { Visibilidad };
  