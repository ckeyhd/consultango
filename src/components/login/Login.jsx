import React, { Fragment, useEffect, useState } from 'react'

//Libraries
import emailjs from 'emailjs-com';

//Components Import
import { Avatar } from '../avatar/Avatar'
import { Errors } from '../errors/Errors'
import { LoginForm } from './LoginForm'
import { LoginOTP } from './LoginOTP'

function Login() {

  const users = [
    {id: 1, name: "Camilo Taborda", email: "ckey08@gmail.com", image:"", status: "block"},
    {id: 2, name: "Lina Pineda", email: "marcelita-621@hotmail.com", image:"", status: "active"},
  ]

  const [ userExist, setUserExist ] = useState({id:" ", name:" ", email:" ", status: " ", authCode: " "})
  const [error, setError] = useState(" ")

  const characteresLength = 4; //Cantidad de caracteres que lleva el código de autorización

  //Generar código random
  const generateOTPCode = (number) =>{
    return Math.floor(Math.random() * Math.pow(10,number));
  }

  useEffect(() => {
    if(userExist.email !== " "){
      generateForm(userExist)
    }
  }, [userExist.email])

  const generateForm = (userExist) =>{
    console.log("userExist",userExist);
    let form = document.createElement("form");

    let name = document.createElement("input");
    name.setAttribute('type',"text");
    name.setAttribute('name',"name");
    name.setAttribute('value',userExist.name);

    let appName = document.createElement("input");
    appName.setAttribute('type',"text");
    appName.setAttribute('name',"appName");
    appName.setAttribute('value',"Consultango®");

    let email = document.createElement("input");
    email.setAttribute('type',"email");
    email.setAttribute('name',"email");
    email.setAttribute('value',userExist.email);

    let authCode = document.createElement("input");
    authCode.setAttribute('type',"text");
    authCode.setAttribute('name',"OTPKey");
    authCode.setAttribute('value',userExist.authCode);

    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(authCode);
    form.appendChild(appName);

    //Realizar envío del mensaje con el código OTP
    emailjs.sendForm('service_jtxky4h', 'template_5ki1qvn', form, 'user_BapTsJqJ4slOEVBlqmvZc')
    .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  //Función para validar existencia del usuario
  const validateUser = (details) => {
    users.map(async (e) => {
      if(e.email == details.email){
        const authCode = await generateOTPCode(characteresLength)
        localStorage.setItem("authCode",authCode)
        localStorage.setItem("authCodeMD5",authCode)
        console.log("valor de authCode",authCode);
        console.log("valor de e.id",e.id);
        setUserExist({
          id: e.id,
          name: e.name,
          email: e.email,
          status: "ok",
          authCode: authCode
        })
      }else{
        if(details.email !== " "){
          return setError("El usuario no existe!");
        }
      }
    })
  }

  return (
    <Fragment>
      {(userExist.status === 'ok') ? <LoginOTP characters={ characteresLength } clientID={ userExist.id } /> :
        <Fragment>
          <Avatar />
          <Errors message={ error } />
          <LoginForm validateUser = { validateUser } />
        </Fragment>
      }
    </Fragment>
  )
}

export { Login }
