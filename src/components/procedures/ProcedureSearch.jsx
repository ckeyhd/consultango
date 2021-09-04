import React, { Fragment } from 'react'
import { Avatar } from '../avatar/Avatar'

function ProcedureSearch({ disconect }) {

  /* const logout = () =>{
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  } */

  return (
    <Fragment>
      <Avatar />
      <input type="text" />
      <button onClick={ disconect }>Logout</button>
    </Fragment>
  )
}

export { ProcedureSearch }
