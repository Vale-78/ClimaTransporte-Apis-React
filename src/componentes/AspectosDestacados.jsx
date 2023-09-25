const estilos = {
    title: {
      fontFamily: "-apple-system",
      color: "rgb(135 65 193)",
      padding: "18px 2em",
      border: "solid 9px rgb(92 55 124)",
      fontWeight: "bolder",
    },
    container: {
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "25px 25px",
    },
     
  };
  
  function AspectosDestacados(){
    
    return (
        <div style={estilos.container}>
            <h1 style={estilos.title}>AspectosDestacados</h1>
         </div>)
  }
  export {AspectosDestacados};