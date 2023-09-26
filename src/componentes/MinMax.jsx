const estilos = {
    minMax: {
      fontFamily: "-apple-system",
      color: "rgb(39 41 209)",
      padding: "18px 2em",
      border: "solid 9px #35476c",
      fontWeight: "bolder",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "auto auto ",
      columnGap: "10px",
      maxWidth: "950px",
      margin: "0 auto",
      padding: "25px 25px",
    },
    span: {
      fontSize:"xxx-large",
    },
  };
  
  function MinMax(){
    
    return (
        <div style={estilos.container}>
            <div style={estilos.minMax}>
              <span style={estilos.span}>29°</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
            </div>  
            <div style={estilos.minMax}>
              <span style={estilos.span}>13°</span>
              <br></br>
              <span style={estilos.span}>🌛</span>
            </div>
         </div>)
  }
  export {MinMax};