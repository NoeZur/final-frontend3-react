import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import {useContextGlobal}from '../utils/Context'

//themmeContext = contextGlobal

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {state, dispatch}= useContextGlobal();

  return (
    <nav>
      <div className={state.theme == 'light' ? "light" : "dark"}><img src= "public/DH.ico" alt= "logo DH" /></div>
      
      <Link to={routes.home}><h3 className='link'>Home</h3></Link>
      <Link to={routes.contact}><h3 className='link'>Contact</h3></Link>
      <Link to={routes.favs}><h3 className='link'>Favs</h3></Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: "HANDLE_THEME", payload: state.theme== 'light' ? 'dark' : 'light' })}>Change theme</button>
    </nav>
  )
}

export default Navbar