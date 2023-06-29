import { createContext, useContext, useEffect, useReducer } from "react";
import { useState, useMemo } from "react";

const initialState = {theme: "dark", favs: false}

const ContextGlobal = createContext(); //decia undefined
/*const initialState = []*/
const reducer = (state, action) =>{
  switch (action.type) {
    case "DARK":
      return [...state, action.payload]
    case "LIGHT":
      return [...state, action.payload]
    case "FAVS":
      return [...state, action.payload]
  
    default:
      throw new Error();
  }
}
const themes={
  light:{
    font: "black",
    background: "white"
  },
  dark:{
    font:"white",
    background:"black"
  }
  };

const ContextProvider = ({ children }) => {
  const [theme, setTheme]= useState(themes.light);
 const [state, dispatch] = useReducer (reducer, initialState)

  useEffect(()=> {
    console.log(state)
    localStorage.setItem("favs", JSON.stringify(state))
  },[state])

  const handleTheme = ()=>{ theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)}
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  //const providerValue = useMemo(()=>({theme, handleTheme}),[theme,handleTheme])  //adaptado del PG
  
  // el value del provider que sigue permite compartir un estado funciones etc
  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>

      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = ()=> useContext(ContextGlobal)  //useContextGlobal = useGlobalStates de la clase
