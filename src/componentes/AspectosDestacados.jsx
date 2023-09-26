const estilos = {
  title: {
    fontFamily: "-apple-system",
    color: "rgb(40 36 108)",
    fontWeight: "bolder",
  },
  container: {
    margin: "0 auto",
    display: "grid",
    columnGap: "10px",
    rowGap: "10px",
    gridTemplateColumns: "auto auto auto",
    padding: "10px",
  },
  
  grilla: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "medium",
    textAlign: "center",
  },
};

function AspectosDestacados() {
  return (
    <div>
      <h1 style={estilos.title}>AspectosDestacados</h1>
      <div style={estilos.container}>
        <div class="grid-item" style={estilos.grilla}>
              <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
        <div class="grid-item" style={estilos.grilla}>
        <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
        </div>
      </div>
    </div>
  );
}
export { AspectosDestacados };
