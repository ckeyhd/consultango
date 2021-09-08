import React, { Fragment, useState, useRef, useEffect } from 'react'
import { OTPInputGenerator } from './OTPInputGenerator'
import { Messages } from '../Messages/Messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

//CSS Import
import "./otp.css"

function OTP({ validationStatus, characters, setMessage }) {

  const [OTPKey, setOTPKey] = useState(" ")
  const [disabled, setDisabled] = useState(false)
  const [countAttempts, setCountAttempts] = useState(1)

  const inputOTP = useRef(null);

  useEffect(()=>{
    inputOTP.current.focus();
  },[])

  const validateChange = (e)=>{

    const OTPValue = e.target.value

    setOTPKey(OTPValue)
    setMessage({
      text: "",
      type: "error",
      position: "right"
    })

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

        //Validar cantidad de intentos de ingreso y lanzar notificación
        if(countAttempts >= 3){
          setDisabled(true)
          validationStatus("moreAttempts")
        }
      }
    }
  }

  return (
    <Fragment>
      {/* <Messages message= { error }/> */}
      <div className="wrapper__login__otp--inputs">
        <div className="wrapper__login__otp--input">
          <label htmlFor="">
            <FontAwesomeIcon icon={ faLock} />
          </label>
          <OTPInputGenerator qty={ characters } validateChange={ validateChange } OTPKey={ OTPKey } inputOTP={ inputOTP } disabled={ disabled }/>
        </div>
      </div>
    </Fragment>
  )
}

export { OTP }
