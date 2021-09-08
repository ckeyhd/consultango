import React, { Fragment, useEffect, useState } from 'react'

//Libraries
import emailjs from 'emailjs-com';
import sha256 from 'crypto-js/sha256';

//Components Import
import { Avatar } from '../avatar/Avatar'
import { Messages } from '../Messages/Messages'
import { LoginForm } from './LoginForm'
import { LoginOTP } from './LoginOTP'

//CSS Import
import "./login.css"

function Login({ logged, setLogged, disconect}) {

  const users = [
    {id: 1, name: "Camilo Taborda", email: "ckey08@gmail.com", image:"", genere:"masculine", status: "block"},
    {id: 2, name: "Lina Pineda", email: "marcelita-621@hotmail.com", image:"", genere:"female", status: "active"},
    {id: 3, name: "ParkSite", email: "parknerco@gmail.com", image:"", genere:"masculine", status: "active"},
  ]

  const [ userExist, setUserExist ] = useState({id:" ", name:" ", email:" ", status: " ", authCode: " "})
  const [message, setMessage] = useState({text:"",type:""})
  const [disable, setDisable] = useState(false)

  const characteresLength = 4; //Cantidad de caracteres que lleva el código de autorización

  //Generar código random
  const generateOTPCode = (number) =>{
    // return Math.floor(Math.random() * Math.pow(10,number));
    return Math.floor(Math.pow(10, number-1) + Math.random() * (Math.pow(10, number) - Math.pow(10, number-1) - 1));
  }

  useEffect(() => {
    let isSubscribed = true;
    let showHideMessage = document.querySelector('.notify')
    if(showHideMessage){
      if(showHideMessage.classList.contains('show')){
        showHideMessage.classList.remove('show')
        showHideMessage.classList.remove()
      }else{
        showHideMessage.classList.add('show')
      }
      showHideMessage.classList.add('show')
    }

    console.log("valor de showHideMessage",showHideMessage);
    console.log("valor de message",message);
    return () => (isSubscribed = false)
  }, [message.text])

  const generateForm = (userInfo) =>{
    console.log("userInfo",userInfo);

    //Asignar emoji segun el genero del usuario
    let emojiType = ""
    if(userInfo.genere === "female"){
      emojiType = '🕵🏼‍♀️ '
    }else{
      emojiType = '🕵🏼‍♂️ '
    }

    let form = document.createElement("form");

    let name = document.createElement("input");
    name.setAttribute('type',"text");
    name.setAttribute('name',"name");
    name.setAttribute('value',userInfo.name);

    let appName = document.createElement("input");
    appName.setAttribute('type',"text");
    appName.setAttribute('name',"appName");
    appName.setAttribute('value',"Consultango®");

    let email = document.createElement("input");
    email.setAttribute('type',"email");
    email.setAttribute('name',"email");
    email.setAttribute('value',userInfo.email);

    let authCode = document.createElement("input");
    authCode.setAttribute('type',"text");
    authCode.setAttribute('name',"OTPKey");
    authCode.setAttribute('value',userInfo.authCode);

    let emoji = document.createElement("input");
    emoji.setAttribute('type',"text");
    emoji.setAttribute('name',"emoji");
    emoji.setAttribute('value',emojiType);

    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(authCode);
    form.appendChild(appName);
    form.appendChild(emoji);

    //Realizar envío del mensaje con el código OTP
    emailjs.sendForm('service_jtxky4h', 'template_5ki1qvn', form, 'user_BapTsJqJ4slOEVBlqmvZc')
    .then((result) => {
      if(result.status===200){
        console.log("SUCCESS!", result.status, result.text);
        setUserExist({
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          status: "ok",
          authCode: authCode
        })
      }
    }, (error) => {
        console.log(error.text);
    });
    /* setTimeout(()=>{
      setUserExist({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        status: "ok",
        authCode: authCode
      })
    },2000) */
  }

  //Función para validar existencia del usuario
  const validateUser = (details) => {
    users.filter(async (user) => {
      if(user.email === details.email){

        //Generar código aleatorio según la cantidad de caracteres mínimos
        const authCode = await generateOTPCode(characteresLength)
        console.log("authCode",authCode);

        //Encriptar y almacenar el código generado
        const CryptoJS = require("crypto-js");
        let authEncrypt = CryptoJS.AES.encrypt(authCode.toString(), authCode.toString()).toString();
        localStorage.setItem("authEncrypt",authEncrypt)

        await generateForm({...user,authCode})
        setMessage({
          text: "Un momento por favor...!",
          type: "success",
          position: "left"
        });
        setDisable(true)
      }else{
        setMessage({
          text: "El usuario no existe o se encuentra bloqueado!",
          type: "error",
          position: "left"
        });
        setDisable(false)
      }
    })
  }

  return (
    <Fragment>
      {(userExist.status === 'ok')
      ?
        <LoginOTP
          characters={ characteresLength }
          userInfo={ userExist }
          logged={ logged }
          setLogged={ setLogged }
          message= { message }
          setMessage={ setMessage }
          disconect={ disconect }
        />
      :
        <div className="wrapper__login">
          <div className="wrapper__login--ribbons">
            <span className="wrapper__login--ribbons-item"></span>
            <span className="wrapper__login--ribbons-item"></span>
            <span className="wrapper__login--ribbons-item"></span>
            <span className="wrapper__login--ribbons-item"></span>
            <span className="wrapper__login--ribbons-item"></span>
          </div>
          <div className="wrapper__login--content">
            <Avatar width="100px" height="100px" logged = { logged }/>
            <Messages message={ message } />
            <LoginForm
              validateUser = { validateUser }
              message={ message }
              setMessage={ setMessage }
              disable={ disable }
              setDisable={ setDisable }
            />
          </div>
        </div>
      }
    </Fragment>
  )
}

export { Login }
