import React from "react";
import { useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useContextGlobal}from '../utils/Context'


const Card = ({ name, username, id }) => {
  const { state, dispatch}= useContextGlobal();
  
  const [dentist, setDentist]= useState ([])
  //const url = `https://jsonplaceholder.typicode.com/users/`;

  //useEffect(() => {
    //axios(url).then((response) => setDentist(response.data))
  //}, [])
  //console.log(dentist)

  const addFav = ()=>{ dispatch ({type: 'ADD_FAV', payload: {name: name, username: username, id: id}});

    useEffect(()=> {
    const initialState = JSON.parse(localStorage.getItem("favs")) || []  //le pido que si existe busque favs sino que cree un array
    const updatedState = [...initialState, id];  //lo q sea que tenia el iS, le agregue el id q seleccione
    localStorage.setItem('favs', JSON.stringify(updatedState));  // agregalo como favs en el LS y convertilo a
  }, [id]);
}
const removeFav = () => { dispatch({type: 'QUIT_FAV', payload: {id: id}})
}

   /* const reducer = (state, action) =>{
    switch (action.type) {
    case "FAVORITE":
      return {dentist:[...state, action.payload]}
    case "UNFAVORITE":
      return state.filter((item)=> item !== action.payload); //ver como borrarlo del local storage
  
    default:
      throw new Error();
*/
    // Aqui iria la logica para agregar la Card en el localStorage
  
  return (
    
    <div className="card">
      
    <Link to = {'detail/:id'}>
          <img src= "/images/doctor.jpg" alt="Dentist img" className="DentistImg"/>
          <h3 >{name}</h3>
          <h3>{username}</h3>
          <h4>{id}</h4>
     
  
     {/*}<Link to = {'detail/:{id}'}>
          <h3 >{name}</h3>
          <h3>{username}</h3>
          <h4>{id}</h4>*/} 
  
         
        </Link>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton" >Add fav </button>
  {/*FALTA LA LOGICA PARA QUE ENTRE AL DISPATCH DE QUIT_FAV*/}
    </div>
  );
};

export default Card;
