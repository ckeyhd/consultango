import React, { Fragment, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Dashboard } from '../dashboard/Dashboard'
import { OTP } from '../OTP/OTP'

//CSS Import
import "./loginOTP.css"

function LoginOTP({ characters, userInfo }) {
  const [logged, setLogged] = useState(false)

  const validationStatus = (status)=>{
    if(status === 'ok'){
      localStorage.setItem("userInfo",JSON.stringify(userInfo))
      setLogged(true)
    }else if(status === 'moreAttempts'){
      window.location.reload(false);
    }
  }
  return (
    <Fragment>
      {
        (logged) ? <Dashboard userInfo={ userInfo }/>
        :
        <div className="wrapper__login__otp">
          <div className="wrapper__login__otp--ribbons">
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
            <span className="wrapper__login__otp--ribbons-item"></span>
          </div>
          <Avatar width="100px" height="100px"/>
          <OTP validationStatus={ validationStatus } characters={ characters }/>
        </div>
      }
    </Fragment>
  )
}

export { LoginOTP }
