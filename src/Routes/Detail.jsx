import React from 'react'
import { useContextGlobal } from '../utils/Context'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const { state, dispatch}= useContextGlobal();

  //const [detail, setDetail] = useState([])
  const params= useParams()
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
    .then(response => {console.log(response);
      dispatch ({type: 'GET_ONE_DENTIST', payload: response.data})})
  }, [])
  


  return (
    <div className={state.theme == 'light' ? "light" : "dark"}>
      <h1>Contact Detail Dentist</h1>
      
      <h3>😷: {state.dentistDetail.name}</h3>
      <h3>📩: {state.dentistDetail.email}</h3>
      <h3>📲{state.dentistDetail.phone}</h3>
      <h3>🦷🌎{state.dentistDetail.website}</h3>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail