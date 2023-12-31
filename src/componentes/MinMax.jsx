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
      padding: "5px",
    },
    span: {
      fontSize:"xxx-large",
    },
    span3: {
      fontSize:"large",
    },
  };
  
  function MinMax({tempMinMax, setTempMinMax}){
    
    return (
        <div style={estilos.container}>
            <div style={estilos.minMax}>
              <span style={estilos.span}>{tempMinMax.max}</span>
              <br></br>
              <span style={estilos.span}>🌤️</span>
              <br></br>
              <span style={estilos.span3}>Máxima</span>
            </div>  
            <div style={estilos.minMax}>
              <span style={estilos.span}>{tempMinMax.min}</span>
              <br></br>
              <span style={estilos.span}>🌛</span>
              <br></br>
              <span style={estilos.span3}>Mínima</span>
            </div>
         </div>)
  }
  export {MinMax};