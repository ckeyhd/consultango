import React, { Fragment, useState, useEffect } from 'react'

//CSS Import
import "./avatar.css"

function Avatar({width, height, logged}) {

  let avatarUser = {
    url:require("../../images/logoParkSite.jpeg").default,
    alt:"Consultango®"
  }

  const [userAvatar, setUserAvatar] = useState(avatarUser)

  useEffect(()=>{
    let isSubscribed = true
    const getDataUser = async ()=>{
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"))
      console.group("Info de AVATAR")
      console.log("valor de logged",logged);
      console.log("valor de userInfo",userInfo);
      console.log("estoy en getDataUser de Avatar");
      console.groupEnd()

      if(logged){
        setUserAvatar({
          url: `https://ui-avatars.com/api/?name=${userInfo.name}`,
          alt: userInfo.name
        })

      }else{
        setUserAvatar(avatarUser)
        console.log("ingresó");
      }
    }

    getDataUser()
    return () => (isSubscribed = false)
  },[logged])


  return (
    <div className="wrapper__avatar">
      <img className="wrapper__avatar--image" src={userAvatar.url} alt={userAvatar.alt} width={ width } height={ height }/>
    </div>
  )
}

export { Avatar }
