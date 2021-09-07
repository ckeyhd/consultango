import React,{ Fragment } from 'react'

function Messages({ message }) {
  console.log("valor de text", message.text);
  console.log("valor de type", message.type);

  let clasName = "notify";
  /* if(message.type === "success"){
    clasName+=" notify--success"
  }else if(message.type === "error"){
  } */

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
