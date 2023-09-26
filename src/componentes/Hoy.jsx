const estilos = {
    title: {
      fontFamily: "-apple-system",
      color: "rgb(39 41 209)",
      fontWeight: "bolder",
    },
    minMax: {
      
      fontFamily: "-apple-system",
      color: "rgb(39 41 209)",
      padding: "1em 2em",
      border: "solid 9px #35476c",
      fontWeight: "bolder",
    },
    container: {
      margin: "0 auto",
      padding: "25px 25px",
    },
    span: {
      fontSize:"medium",
      paddingLeft:"0.5rem"
    },
    span2: {
      fontSize:"xx-large",
      paddingLeft:"1.5rem"
    },
     
  };
  
  function Hoy(){
    
    return (
        <div style={estilos.container}>
            <h1 style={estilos.title}>Hoy</h1>
            <div style={estilos.minMax}>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
             <span style={estilos.span2}>▮</span>
              <br></br>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
              <span style={estilos.span}>12AM </span>
            </div>  
         </div>)
  }
  export {Hoy};