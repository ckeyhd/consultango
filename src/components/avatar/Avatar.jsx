import React, { Fragment, useState, useEffect } from 'react'

//CSS Import
import "./avatar.css"

function Avatar({width, height}) {

  let avatarUser = {
    url:require("../../images/logoParkSite.jpeg").default,
    alt:"Consultango®"
  }

  const [userAvatar, setUserAvatar] = useState(avatarUser)

  useEffect(()=>{
    const getDataUser = async ()=>{
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"))
      if(userInfo){
        setUserAvatar({
          url: `https://ui-avatars.com/api/?name=${userInfo.name}`,
          alt: userInfo.name
        })

      }else{
        await setUserAvatar(avatarUser)
        console.log("ingresó");
      }
    }

    getDataUser()
  },[])


  return (
    <div className="wrapper__avatar">
      <img className="wrapper__avatar--image" src={userAvatar.url} alt={userAvatar.alt} width={ width } height={ height }/>
    </div>
  )
}

export { Avatar }
