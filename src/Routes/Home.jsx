import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContextGlobal } from '../utils/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = (props) => {
  const {theme, handleTheme}= useContextGlobal()
  
  const [dentist, setDentist]= useState ([])
  const url = `https://jsonplaceholder.typicode.com/users/`;

  useEffect(() => {
  axios(url).then(response =>{
    console.log(response) 
    setDentist(response.data)})
}, [])
  console.log(dentist)

  return (
    <main className="home">
      <h1>Home</h1>
      <h2>This are our Dentists!!</h2> 
      <div className='card-grid'>
        
        {dentist.map((dentistItem) => (     
    <Link to = {'detail/'+ dentistItem.id} key={dentistItem.index}>
      
       <h3 >{dentistItem.name}</h3>
          <h3>{dentistItem.username}</h3>
        <h4>{dentistItem.id}</h4>
        <Card />
      </Link>
        ))}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home