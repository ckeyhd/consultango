import React, { Fragment, useState } from 'react'
import { Avatar } from '../avatar/Avatar'

function ProcedureSearch({ disconect, searchValue, setSearchValue }) {

  /* const logout = () =>{
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  } */

  const proceduresChangeHandler = (e)=>{
    setSearchValue(e.target.value)
    console.log("valor buscado",e.target.value);
  }

  return (
    <Fragment>
      {<Avatar width="70px" height="70px"/>}
      <input type="text" onChange={ proceduresChangeHandler } value={searchValue}/>
      <button onClick={ disconect }>Logout</button>
    </Fragment>
  )
}

export { ProcedureSearch }
