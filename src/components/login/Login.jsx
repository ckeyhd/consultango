import React, { Fragment, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Errors } from '../errors/Errors'
import { LoginForm } from './LoginForm'
import { LoginOTP } from './LoginOTP'

function Login() {

  const users = [
    {id: 1, name: "Camilo Taborda", email: "ckey08@gmail.com", image:"", status: "block"},
    {id: 2, name: "Lina Pineda", email: "marcelita-621@hotmail.com", image:"", status: "active"},
  ]

  const [ userExist, setUserExist ] = useState({id: " ", status: " "})
  const [error, setError] = useState(" ")

  const characteresLength = 4; //Cantidad de caracteres que lleva el código de autorización

  const generateCode = (number) =>{
    return Math.floor(Math.random() * Math.pow(10,number));
  }

  const validateUser = (details) => {
    users.map(e => {
      if(e.email == details.email){
        const authCode = generateCode(characteresLength)
        localStorage.setItem("authCode",authCode)
        localStorage.setItem("authCodeMD5",authCode)
        console.log("valor de authCode",authCode);
        console.log("valor de e.id",e.id);
        setUserExist({
          id: e.id,
          status: "ok"
        })
      }else{
        if(details.email != ""){
          return setError("El usuario no existe!");
        }
      }
    })
  }

  return (
    <Fragment>
      {(userExist.status === 'ok') ? <LoginOTP characters={ characteresLength } clientID={ userExist.id } /> :
        <Fragment>
          <Avatar />
          <Errors message={ error } />
          <LoginForm validateUser = { validateUser } />
        </Fragment>
      }
    </Fragment>
  )
}

export { Login }
