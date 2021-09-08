import React, { Fragment, useState, useEffect } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Dashboard } from '../dashboard/Dashboard'
import { Messages } from '../Messages/Messages'
import { OTP } from '../OTP/OTP'

//CSS Import
import "./loginOTP.css"

function LoginOTP({ characters, userInfo , logged, setLogged, message, setMessage}) {

  const [title, setTitle] = useState("El código fue enviado a su correo electrónico! 🚀")

  const validationStatus = (status)=>{
    if(status === 'ok'){
      console.log("valor de userInfo en LOGIN",userInfo);
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
      setLogged(true)
    }else if(status==='moreAttempts'){
      setTitle("Serás redireccionado para intentarlo de nuevo.")
      setMessage({
        text: "Que mal... Intenta de nuevo!!! 🤥 ",
        type: "error",
        position: "right"
      })
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
  }

  return (
    <Fragment>
      {
        (logged)
        ? <Dashboard userInfo={ userInfo } logged={ logged } setLogged = { setLogged }/>
        :
        <div className="wrapper__login__otp">
          <div className="wrapper__login__otp--ribbons">
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
          </div>
          <div className="wrapper__login__otp--content">
            <Avatar width="100px" height="100px" logged = { logged }/>
            <p>{ title }</p>
            <Messages message={ message }/>
            <OTP validationStatus={ validationStatus } characters={ characters } setMessage={ setMessage }/>
          </div>
        </div>
      }
    </Fragment>
  )
}

export { LoginOTP }
