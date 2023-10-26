import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Error 4040</h1>
      <p>Esta pagina no existe</p>
      <Link to='/inicio'>Volver al Inicio</Link>
    </div>
  )
}

export default Error
