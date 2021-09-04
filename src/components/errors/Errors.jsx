import React,{ Fragment } from 'react'

function Errors({message}) {

  return (
    <Fragment>
      {
        (message != "") ?
        <div className="error">
          {message}
        </div>
       : ""
      }
    </Fragment>
  )
}

export { Errors }
