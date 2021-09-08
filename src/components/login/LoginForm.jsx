import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//CSS Import
import "./loginForm.css"

function LoginForm({validateUser, setMessage, disable, setDisable}) {

  const [userInfo, setUserInfo] = useState({email: " "})
  // const [error, setError] = useState(" ")

  const submitHandler = (e) => {
    e.preventDefault()
    if(userInfo.email === " "){
      setMessage({
        text: "El campo Email es obligatorio",
        type: "error",
        position: "left"
      })
      setDisable(false)
    }else{
      validateUser(userInfo)
      console.log("Se envió!!!!");
    }
  }

  const handlerChange = (e)=>{
    setUserInfo({...userInfo, email: e.target.value})
  }

  return (
    <div>
      <form onSubmit= { submitHandler }>
        <div className="form__group--item">
          <label htmlFor="">
            <FontAwesomeIcon icon={faEnvelope}/>
          </label>
          {/* <input type="email" placeholder="Email" name="email" onChange={e => setUserInfo({...userInfo, email: e.target.value})} value={userInfo.email}/> */}
          <input type="email" placeholder="Email" name="email" onChange={ handlerChange } value={userInfo.email}/>
        </div>
        <button className="button--primary" type="submit" disabled={ disable }>Continuar</button>
      </form>
    </div>
  )
}

export { LoginForm }
