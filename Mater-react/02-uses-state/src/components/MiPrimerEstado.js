import react, {useState} from 'react'

const MiPrimerEstado = () => {
    /*
    let nombre = "Jaime Barillas"

    const cambiarNombre = e => {
        nombre = "Paquito Fernandz";
    }
    */

    const [ nombre, setNombre ] = useState("Jaime Barillas");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target)
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Johan")}>Cambiar nombre por Fran</button>
        
        &nbsp;
        <input type="text" onChange={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre'/>
        
    </div>
  )
}

export default MiPrimerEstado
