import React, {useState} from 'react';


const PrimerComponente = () => {

//let nombre = "Jaime";
let web = "jaiimebarilhasweb.es";

const [nombre, setNombre] = useState("Frank");

let cursos = [
    "Master en JavaScript",
    "Master en PHP",
    "Master en React",
    "Master en CSS"
];

const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
}

  return (
    <div>
    <h2>Primer Componente</h2>
    <p>ESte es un texto en mi componente</p>
    <p>Mi Nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}> {nombre} </strong></p>
    <p>Mi web es: {web} </p>


    <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='Cambiar Nombre'/>
    
    <button onClick={ e => cambiarNombre("Jaime Barillas WeB") }>
        Cambiar Nombre
    </button>

    <h2>Cursos:</h2>
    <ul>
        {
            cursos.map((curso, indice) => {
                return (<li key={indice}>
                    {
                        curso
                    }
                </li>)
            })
        }
    </ul>
    </div>
  )
}

export default PrimerComponente
