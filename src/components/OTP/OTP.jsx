import React, { Fragment, useState } from 'react'
import { OTPInputGenerator } from './OTPInputGenerator'
import { Messages } from '../Messages/Messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

//CSS Import
import "./otp.css"

function OTP({ validationStatus, characters, message, setMessage }) {

  const [OTPKey, setOTPKey] = useState(" ")
  const [countAttempts, setCountAttempts] = useState(1)

  const validateChange = (e)=>{

    const OTPValue = e.target.value

    setOTPKey(OTPValue)
    /* setMessage({
      text: "",
      type: "error",
      position: "right"
    }) */

    if(OTPValue.length === characters){
      const authCode = localStorage.getItem("authCode")
      if(authCode===OTPValue){
        localStorage.setItem("logged","yes")
        validationStatus('ok')
      }else{
        setCountAttempts(countAttempts+1)
        setMessage({
          text: "Codigo Errado!!!",
          type: "error",
          position: "right"
        })
        setOTPKey(" ")
      }
    }
  }

  //Validar cantidad de intentos de ingreso
  if(countAttempts > 3){
    setMessage({
      text: "Demasiados Intentos... Debe solicitar un nuevo código!!!!!!",
      type: "error",
      position: "right"
    })
    validationStatus("moreAttempts")
    /* setTimeout(()=>{
    },2000) */
  }

  return (
    <Fragment>
      {/* <Messages message= { error }/> */}
      <div className="wrapper__login__otp--inputs">
        <div className="wrapper__login__otp--input">
          <label htmlFor="">
            <FontAwesomeIcon icon={ faLock} />
          </label>
          <OTPInputGenerator qty={ characters } validateChange={ validateChange } OTPKey={ OTPKey }/>
        </div>
      </div>
    </Fragment>
  )
}

export { OTP }
