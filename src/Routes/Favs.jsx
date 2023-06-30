import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const { state, dispatch}= useContextGlobal();

  return (
    <div className={state.theme == 'light' ? "light" : "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
