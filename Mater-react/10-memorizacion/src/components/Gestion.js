import React, { useEffect, useRef, useState } from 'react'
import Empleados from './Empleados';

const Gestion = () => {

    const [nombre, setNombre ] = useState("");
    
    useEffect(() => {
        console.log("La vista se ha renderizado");
    })
    const gestorInput = useRef();

    const asignarGestor = e => {

        setNombre(e.target.value);
        
    }


    return (
        <div>
            
            <h1>Nombre del gestor: {nombre}</h1>
            <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='Intruduce tu nombre de gestor'/>

            <h2>Listado de empleados:</h2>
            <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder...</p>
            <Empleados/>
        </div>
    )
}

export default Gestion
