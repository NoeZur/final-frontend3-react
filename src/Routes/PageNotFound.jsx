import React from 'react'
import { useContextGlobal } from '../utils/Context'

const PageNotFound = () => {
  const { state, dispatch}= useContextGlobal();
  return (
    <div className={state.theme == 'light' ? "light" : "dark"}>
        <h1>Esta página existe en otro multiverso, pero en este No! 😊 Error 404</h1>
      
    </div>
  )
}

export default PageNotFound
