import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import {useContextGlobal}from '../utils/Context'

//themmeContext = contextGlobal

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const {theme, handleTheme}= useContextGlobal()

  return (
    <nav>
      <Link to={routes.home}><h3 className='link'>Home</h3></Link>
      <Link to={routes.contact}><h3 className='link'>Contact</h3></Link>
      <Link to={routes.favs}><h3 className='link'>Favs</h3></Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar