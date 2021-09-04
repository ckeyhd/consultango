import React, { Fragment, useState } from 'react'
import { OTPInputGenerator } from './OTPInputGenerator'
import { Errors } from '../errors/Errors'

function OTP({ validationStatus, characters }) {

  const [OTPKey, setOTPKey] = useState(" ")
  const [countAttempts, setCountAttempts] = useState(1)
  const [error, setError] = useState(" ")

  const validateChange = (e)=>{

    const OTPValue = e.target.value

    setOTPKey(OTPValue)
    setError(" ")

    if(OTPValue.length === characters){
      const authCode = localStorage.getItem("authCode")
      if(authCode===OTPValue){
        localStorage.setItem("logged","yes")
        validationStatus('ok')
      }else{
        setCountAttempts(countAttempts+1)
        setError("Codigo Errado!!!")
        setOTPKey(" ")
      }
    }
  }

  //Validar cantidad de intentos de ingreso
  if(countAttempts > 3){
    // setError("Demasiados Intentos... Debe solicitar un nuevo código!!!")
    validationStatus("moreAttempts")
  }

  return (
    <Fragment>
      <Errors message= { error }/>
      <div className="wrapper">
        <OTPInputGenerator qty={ characters } validateChange={ validateChange } OTPKey={ OTPKey }/>
      </div>
      <button>Enviar nuevamente...</button>
    </Fragment>
  )
}

export { OTP }
