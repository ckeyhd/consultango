import React,{ Fragment } from 'react'

function Messages({ message }) {

  let clasName = "notify";

  clasName+=` notify--${message.type}`
  clasName+=` notify--position-${message.position}`


  return (
    <Fragment>
      {
        (message.text !== "") ?
        <div className={ clasName }>
          {message.text}
        </div>
       : ""
      }
    </Fragment>
  )
}

export { Messages }
