function ModalMensaje({ modalOpen, setModalOpen }) {
    const style = {
      with: "500px",
      height: "500px",
      position: "relative",
      top: "500px",
      left: "500px",
      backgroundColor: "green"
    }
    if(modalOpen) {
      return (
        <div style={style}>
          La línea que estás buscando no está disponible en este momento
          <button onClick={() => setModalOpen(false)}>Cerrar</button>
        </div>
      )
    }
    else {
      <></>
    }
  }
  
  export {ModalMensaje};