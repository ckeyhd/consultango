import React, { Fragment, useState } from 'react'

//Components Import
import { Errors } from '../errors/Errors'

function LoginForm({validateUser}) {

  const [userInfo, setUserInfo] = useState({email: " "})
  const [error, setError] = useState(" ")

  const submitHandler = (e) => {
    e.preventDefault()
    if(userInfo.email === " "){
      setError("El campo Email es obligatorio")
    }else{
      validateUser(userInfo)
      setError(" ")
      console.log("Se envió!!!!");
    }
  }

  return (
    <Fragment>
      <form onSubmit= { submitHandler }>
        <Errors message={ error }/>
        <div className="form-group">
          <input type="email" placeholder="Email" name="email" onChange={e => setUserInfo({...userInfo, email: e.target.value})} value={userInfo.email}/>
        </div>
        <input type="submit" value="Continuar" />
      </form>
    </Fragment>
  )
}

export { LoginForm }
