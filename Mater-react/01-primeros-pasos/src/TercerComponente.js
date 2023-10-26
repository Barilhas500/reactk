
import React from 'react'; 
import PropTypes  from "prop-types";

export const TercerComponente = ({
                                  nombre,
                                  apellidos, 
                                  ficha
                                }) => {

  console.log()

  return (
    <div>
      <h1>Comunicacion entre componentes</h1>
      
        <ul>  
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
  
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}


TercerComponente.defaultProps = {
  nombre: "Aroldo",
  apellidos: "Liebhard",
}
export default TercerComponente