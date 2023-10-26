import React, { useEffect, useState } from 'react'
import AvisoComponent from './AvisoComponent';

const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jaime Barillas");
    const [ fecha, setFecha] = useState("01-01-1999")
    const [ contador, setContador ] = useState(0);
    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
      setFecha(Date.now());
    }

    // Solo se ejecuta una vez, solo al cargar el componente.
    useEffect(() => {
      console.log("Has cargo el componente PruebasComponent o has realizado un cambio en un componente!!");
    },[]);

    // Se ejecuta solo si cambio el nombre.
    useEffect(() => {
      setContador(contador+1);
      console.log("Has modificado el usuario: "+contador);

      
    }, [ fecha, usuario]);
  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
        <strong>{usuario}</strong>
        <strong className={ contador >= 10 ? 'labe label-green' : 'label'}>{ fecha }</strong>
        <p>
        <input 
            type='text' 
            onChange={ modUsuario } 
            placeholder='Cambiar el nombre'
            />

        <button onClick={ cambiarFecha }>Cambiar fecha</button>
        </p>

        { usuario == "JAIME" && <AvisoComponent/>}
    </div>
  )
}

export default PruebasComponent
