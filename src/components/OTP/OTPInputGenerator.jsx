import React, { Fragment } from 'react'

function OTPInputGenerator({qty, validateChange, OTPKey}) {

  //Crear cantidad de imputs según props
  const arrInputs = [];
  for (let index = 0; index < qty; index++) {
    arrInputs.push(index)
  }

  return (
    <Fragment>
      {
        <input type="number" name="OPTKEY" onChange={ validateChange } value={OTPKey} />
        /* arrInputs.map((e)=>(
          <input type="number" key={e} name="" onChange={ e=>setOTPKey([...OTPKey,e.target.value]) } value={OTPKey[e]}/>
        )) */
      }
    </Fragment>
  )
}

export { OTPInputGenerator }
