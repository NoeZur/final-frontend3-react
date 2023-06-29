import React from 'react'
import { useContextGlobal } from '../utils/Context'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme, handleTheme}= useContextGlobal()

  const [detail, setDetail] = useState([])
  const params= useParams()
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    
    axios(url).then((response) => setDetail(response.data))
  }, [])
  console.log(detail)


  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      {detail.map((detailItem)=> 
      <>
      <h3>{detailItem.name}</h3>
      <h3>{detailItem.email}</h3>
      <h3>{detailItem.phone}</h3>
      <h3>{detailItem.website}</h3>
      </>)}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail