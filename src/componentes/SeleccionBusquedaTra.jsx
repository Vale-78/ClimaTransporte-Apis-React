const estilos = {
    selectContainer: {
      fontFamily: "-apple-system",
      color: "#3f4089",
      fontWeight: "bolder",
      textAlign: "center",
      fontSize:"large",
      marginBottom: "10px",
    },
  };
  
  
function SeleccionBusquedaTra({desbloqSelected, setDesbloqSelected, seleccion, setSeleccion}) {
    function iniciarBúsqueda(e) {
        setSeleccion(e.target.value);
        setDesbloqSelected(!desbloqSelected);
      }
  return (
    <div style={estilos.selectContainer}>
    <select style={estilos.selectContainer} defaultValue={""} onChange= {iniciarBúsqueda}>
      <option key={0} value={0}>
      Buscar por línea
      </option>
      <option key={1} value={1}>
      Buscar por empresa
      </option>      
    </select>
    {/* <p style={estilos.p}>Selección: {seleccion}</p> */}
    </div>    
  );
}
export { SeleccionBusquedaTra };
