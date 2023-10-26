import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Articulo from '../components/Articulo';
import Contacto from '../components/Contacto';
import Error from '../components/Error';
import Persona from '../components/Persona';
import PanelControl from '../components/PanelControl';
import InicioPrincipal from '../components/panel/Inicio';
import Crear from '../components/panel/Crear';
import Gestion from '../components/panel/Gestion';
import Acerca from '../components/panel/Acerca';


const RouterPrincipal = () => {
    return (
        <BrowserRouter>

            <h1>Cabecera</h1>
            <hr />

            <nav>
                <ul>
                    <NavLink
                        to="/inicio"
                        className={({ isActive }) => { return isActive ? "activado" : ""; }}>
                        Inicio
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to='/articulos'
                        className={({ isActive }) => { return isActive ? "activado" : ""; }}>
                        Articulo
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to='/contacto'
                        className={({ isActive }) => { return isActive ? "activado" : ""; }}>
                        Contacto
                    </NavLink>
                </ul>

                <ul>
                    <NavLink
                        to='/panel'
                        className={({ isActive }) => { return isActive ? "activado" : ""; }}>
                        Panel de control
                    </NavLink>
                </ul>
            </nav>

            <section className='contenido-principal'>
                {/*Cargar componentes*/}
                {/*Aqui se carga el componente que conicide con el path*/}
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulo />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                    <Route path='/persona/:nombre' element={<Persona />} />
                    <Route path='/persona' element={<Persona />} />
                    <Route path="/redirigir" element={<Navigate to="/persona/Jaime/Barillas" />} />

                    <Route path='/panel/*' element={<PanelControl />}>
                        <Route path='inicio' element={<InicioPrincipal />}/>
                        <Route path='crear-articulos' element={<Crear/>}/>
                        <Route path='gestion-usuarios' element={<Gestion/>}/>
                        <Route path='acerca-de' element={<Acerca/>}/>
                    </Route>

                    <Route path='*' element={<Error />} />

                </Routes>
            </section>

            <hr />
            <footer>
                Este es el pie de pagina
            </footer>
        </BrowserRouter>
    )
}

export default RouterPrincipal
