import React, { useEffect } from 'react'

const AvisoComponent = () => {

    useEffect(( ) => {
        // Cuando el componente se monta
        alert("El componente AvisoComponnet esta montado!!")

        // Cuando el commponente se desmonta
        return () => {
            alert("COMPONETE DESMONTADO!!!")
        };

    }, []); // Se ejecuta una vez porque le paso el array vacio.

  return (
    <div>
        <hr/>
      <h3>Saludos Jaime, Que tal estas? </h3>
      <button onClick={ e => {
        alert("Bienvenido!!")
      }}>Mostar alerta</button>
    </div>
  )
}

export default AvisoComponent
