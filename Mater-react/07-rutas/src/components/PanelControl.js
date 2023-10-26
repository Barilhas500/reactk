import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
      <h1>PANEL DE CONTROL</h1>
      <p>Elige una de estas pociones</p>
      <nav>
        <ul>
            <li>
                <NavLink to="/panel/inicio">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
            </li>
            <li>
                <NavLink to="/panel/gestion-usuarios">Gestion usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/panel/acerca-de">Acerca de</NavLink>
            </li>
        </ul>
      </nav>
      <div>
        {/*Quiero cargar aqui los componentes de las subrutas */}

        <Outlet/>

      </div>
    </div>
  )
}

export default PanelControl
