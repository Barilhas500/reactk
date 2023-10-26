import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params =useParams();

    useEffect(() => {
        const proyecto = trabajos.filter(trabajo => trabajo.id === params.id);

        setProyecto(proyecto[0]);
    },[]);
  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={'/images/'+proyecto.id+".png"}/>
        </div>
        <h1 className='heading'> {proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={"https://"+proyecto.url} target='_blank'>Ir al proyecto</a>
    </div>
  )
}

export default Proyecto
