
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
       {/* <CircularProgress variant="determinate" value={25} />
<CircularProgress variant="determinate" value={50} />
<CircularProgress variant="determinate" value={75} />
<CircularProgress variant="determinate" value={100} />
<CircularProgress variant="determinate" value={progress} /> */}
{/* 
<CircularProgressWithLabel value={progress} /> */} 
{/* circulo hasta 100% */}
        </div>
    );
  }
  export { Visibilidad };
  