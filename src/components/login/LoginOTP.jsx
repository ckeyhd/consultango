import React, { Fragment, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Dashboard } from '../dashboard/Dashboard'
import { OTP } from '../OTP/OTP'

function LoginOTP({ characters, disconect }) {
  const [logged, setLogged] = useState(false)

  const validationStatus = (status)=>{
    if(status === 'ok'){
      setLogged(true)
    }else if(status === 'moreAttempts'){
      window.location.reload(false);
    }
  }
  return (
    <Fragment>
      {
        (logged) ? <Dashboard disconect={ disconect }/>
        :
        <Fragment>
          <Avatar />
          <OTP validationStatus={ validationStatus } characters={ characters }/>
        </Fragment>
      }
    </Fragment>
  )
}

export { LoginOTP }
