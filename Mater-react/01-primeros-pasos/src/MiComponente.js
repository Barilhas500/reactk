// Importar modulos de react / dependencias

import React, {Fragment} from "react";

// Función del componente.
const MiComponente = () => {

    let nombre = "Jaime";
    let web = "jaimebarillasweb.es"

    let usuario = {
        nombre: "Jaime Barillas",
        apellidos: "MORALES",
        web: "jaimbe Barillas web"
    }

console.log(usuario)

    return (
        <div className="mi-componente">
        <hr/>
        <h2>Componente Creado</h2>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>Web: <strong>{usuario.web}</strong></li>
            <li>Apellido: <strong>{usuario.apellidos}</strong></li>
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
