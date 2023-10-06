// Importar modulos de react / dependencias

import React, {Fragment} from "react";

// Función del componente.
const MiComponente = () => {

    let nombre = "Jaime";
    let web = "jaimebarillasweb.es"

    let usuario = {
        nombre: "Jaime Barillas",
        apellidos: "MORALES",
        web: "v"
    }
    return (
        <div className="mi-componente">
        <hr/>
        <h2>Componente Creado</h2>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>Nombre: <strong>{nombre}</strong></li>
            <li>Web: <strong>{web}</strong></li>
        </ul>
        <p>Este es mi primer componente</p>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>
        </ul>
        </div>
    );
};

//Export

export default MiComponente;
