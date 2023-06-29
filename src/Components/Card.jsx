import React from "react";
import { useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//ver porque no me renderiza una card por dentista!!!
const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const [dentist, setDentist]= useState ([])
  //const url = `https://jsonplaceholder.typicode.com/users/`;

  //useEffect(() => {
    //axios(url).then((response) => setDentist(response.data))
  //}, [])
  //console.log(dentist)

  const addFav = ()=>{ 
    setIsFavorite(true);

    useEffect(()=> {
    const initialState = JSON.parse(localStorage.getItem("favs")) || []  //le pido que si existe busque favs sino que cree un array
    const updatedState = [...initialState, id];  //lo q sea que tenia el iS, le agregue el id q seleccione
    localStorage.setItem('favs', JSON.stringify(updatedState));  // agregalo como favs en el LS y convertilo a
  }, [id]);
}

   /* const reducer = (state, action) =>{
    switch (action.type) {
    case "FAVORITE":
      return {dentist:[...state, action.payload]}
    case "UNFAVORITE":
      return state.filter((item)=> item !== action.payload); //ver como borrarlo del local storage
  
    default:
      throw new Error();
  }
};
  const [state, dispatch] = useReducer (reducer, initialState);

  dispatch({type: "FAVORITE", payload: id});

    localStorage.setItem("favs", JSON.stringify(state))
  },[id])*/
    // Aqui iria la logica para agregar la Card en el localStorage
  

  return (
    
    <div className="card">
      <img src= "/images/doctor.jpg" alt="Dentist img" className="DentistImg"/>
       {/*</div>{dentist.map((dentistItem) => ( 
    <Link to = {'detail'} key={dentistItem.index}>*
      
          <h3 >{dentistItem.name}</h3>
          <h3>{dentistItem.username}</h3>
          <h4>{dentistItem.id}</h4>
      
  
     {/*}<Link to = {'detail/:{id}'}>
          <h3 >{name}</h3>
          <h3>{username}</h3>
          <h4>{id}</h4>
  
         
        </Link>*/} 

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton" disabled= {isFavorite}>Add fav </button>
  
    </div>
  );
};

export default Card;
