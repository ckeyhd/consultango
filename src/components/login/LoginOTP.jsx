import React, { Fragment, useEffect } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Dashboard } from '../dashboard/Dashboard'
import { Messages } from '../Messages/Messages'
import { OTP } from '../OTP/OTP'

//CSS Import
import "./loginOTP.css"

function LoginOTP({ characters, userInfo , logged, setLogged, message, setMessage, disconect}) {

  useEffect(()=>{
    setMessage({})
  },[])

  const validationStatus = (status)=>{
    if(status === 'ok'){
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
      setLogged(true)
    }else if(status === 'moreAttempts'){
      window.location.reload(false);
      /* setTimeout(() => {
      }, 2000); */
    }
  }

  const handlerClick = ()=>{
    window.location.reload()
  }

  return (
    <Fragment>
      {
        (logged) ? <Dashboard userInfo={ userInfo } logged={ logged } setLogged = { setLogged }/>
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
            <Avatar width="100px" height="100px"/>
            <p>El código fue enviado a su correo electrónico!</p>
            <Messages message={ message }/>
            <OTP validationStatus={ validationStatus } characters={ characters } message={ message } setMessage={ setMessage }/>
            <button onClick={ handlerClick }>Enviar nuevamente...</button>

          </div>
        </div>
      }
    </Fragment>
  )
}

export { LoginOTP }
