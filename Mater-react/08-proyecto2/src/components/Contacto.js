import React from 'react'

const Contacto = () => {
  return (
    <div className='page' action="mailto:jaarbamo@gmail.com">
      <h1 className='heading'>Contacto</h1>

      <form className='contact'>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellidos'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'/>
        <input type='submit' value="Enviar"/>
        
      </form>

    </div>
  )
}

export default Contacto
