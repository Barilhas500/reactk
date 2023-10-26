import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("has dado click al botton !!"+nombre);
    }

    function hasDadoDobleClick(e){
        alert("has dado doble click!!");
    }

    const hasEntrado = (e, accion) => {
        console.log(`has ${accion} entrado a la caja con el mause!!`)
    }

    const estasDentro = e => {
        console.log("Estas dentro del input, mete tu nombre!!");
    }

    const estasFuera = e => {
        console.log("Estas FUERA del input, CHAO!!")
    }

  return (
    <div>
      <h1>Eventos en React</h1>

        <p>
            {/*Evento click*/}
            <button onClick={e => hasDadoClick(e, "Jaime")}>Dame click</button>
        </p>
        <p>
            {/*Evento doble click*/}
            <button onDoubleClick={hasDadoDobleClick}>Dame doble click</button>
        </p>

        <div id="caja" 
                onMouseEnter={ e => hasEntrado(e, "entrado" ) }
                onMouseLeave={ e => hasEntrado(e, "salido") }
        >
            {/*Evento onMauseEnter onMauseLeave*/}
            Pasa por encima!!
        </div>

        <p>
            {/*Evento focus  blur*/}
            <input type="text" 
                onFocus={ estasDentro } 
                onBlur={ estasFuera }
                placeholder="Introduce tu nombre..."/>
        </p>
    </div>
  )
}

export default EventosComponente
