import React, { Fragment, useState, useEffect } from 'react'
import { Avatar } from '../../avatar/Avatar'
import { Dashboard } from '../../dashboard/main/Dashboard'
import { Messages } from '../../Messages/Messages'
import { OTP } from '../../OTP/main/OTP'

//CSS Import
import "./loginOTP.css"

function LoginOTP({ characters, userInfo , logged, setLogged, message, setMessage}) {

  const [title, setTitle] = useState("El código fue enviado a su correo electrónico! 🚀")

  const {id, name} = userInfo

  const validationStatus = (status)=>{
    if(status === 'ok'){
      const saveInfoUser = {id,name}
      localStorage.setItem("userInfo",JSON.stringify(saveInfoUser))
      setLogged(true)
    }else if(status==='moreAttempts'){
      setTitle("Serás redireccionado para intentarlo de nuevo.")
      setTimeout(()=>{
        window.location.reload()
      },3000)
    }
  }

  return (
    <Fragment>
      {
        (logged)
        ? <Dashboard userInfo={ userInfo } logged={ logged } setLogged = { setLogged } message={ message } setMessage={ setMessage }/>
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
