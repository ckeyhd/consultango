(this.webpackJsonpconsultango=this.webpackJsonpconsultango||[]).push([[0],{29:function(e,t,a){},31:function(e,t){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logoParkSite.384a134a.jpeg"},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(23),c=a.n(n),i=(a(29),a(4)),s=a(8),o=a.n(s),l=a(13),d=a(9),u=a(24),p=(a(15),a(32),a(0));function j(e){var t=e.width,n=e.height,c=e.logged,s={url:a(34).default,alt:"Consultango\xae"},l=Object(r.useState)(s),u=Object(i.a)(l,2),j=u[0],m=u[1];return Object(r.useEffect)((function(){return function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("userInfo"));case 2:t=e.sent,console.group("Info de AVATAR"),console.log("valor de logged",c),console.log("valor de userInfo",t),console.log("estoy en getDataUser de Avatar"),console.groupEnd(),c?m({url:"https://ui-avatars.com/api/?name=".concat(t.name),alt:t.name}):(m(s),console.log("ingres\xf3"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){return!1}}),[c]),Object(p.jsx)("div",{className:"wrapper__avatar",children:Object(p.jsx)("img",{className:"wrapper__avatar--image",src:j.url,alt:j.alt,width:t,height:n})})}function m(e){var t=e.message,a="notify";return a+=" notify--".concat(t.type),a+=" notify--position-".concat(t.position),Object(p.jsx)(r.Fragment,{children:""!==t.text?Object(p.jsx)("div",{className:a,children:t.text}):""})}var b=a(6),g=a(7);a(40);function h(e){var t=e.validateUser,a=e.setMessage,n=e.disable,c=e.setDisable,s=Object(r.useState)({email:" "}),o=Object(i.a)(s,2),d=o[0],u=o[1];return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault()," "===d.email?(a({text:"El campo Email es obligatorio!",type:"error",position:"left"}),c(!1)):(t(d),console.log("Se envi\xf3!!!!"))},children:[Object(p.jsxs)("div",{className:"form__group--item",children:[Object(p.jsx)("label",{htmlFor:"",children:Object(p.jsx)(b.a,{icon:g.c})}),Object(p.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:function(e){u(Object(l.a)(Object(l.a)({},d),{},{email:e.target.value}))},value:d.email})]}),Object(p.jsx)("button",{className:"button--primary",type:"submit",disabled:n,children:"Continuar"})]})})}a(41);function O(e){var t=e.searchValue,a=e.setSearchValue;return Object(p.jsx)(r.Fragment,{children:Object(p.jsxs)("div",{className:"wrapper__procedure--search",children:[Object(p.jsx)("input",{className:"wrapper__procedure--search-input",type:"text",onChange:function(e){a(e.target.value),console.log("valor buscado",e.target.value)},value:t,placeholder:"Buscar tr\xe1mite"}),Object(p.jsx)("label",{children:Object(p.jsx)(b.a,{icon:g.f})})]})})}a(42);function f(e){var t=e.children;return Object(p.jsx)("ul",{className:"wrapper__procedure--list",children:t})}a(43);function x(e){var t=e.data,a=e.getDetails,n=Object(r.useRef)(t.id),c="wrapper__procedure--card-status";switch(t.status.toLowerCase().replace(/\s+/g,"")){case"finalizado":c+=" done";break;case"enprogreso":c+=" progress";break;default:c+=" error"}return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("li",{onClick:function(e){var t=n.current.attributes.getNamedItem("data-id").value;console.log("Valor de procedureID",t),a(Number(t))},className:"wrapper__procedure--card",ref:n,"data-id":t.id,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"wrapper__procedure--card-top",children:[Object(p.jsx)("span",{className:"wrapper__procedure--card-icon",children:Object(p.jsx)(b.a,{icon:g.a})}),Object(p.jsx)("h3",{children:t.name})]}),Object(p.jsxs)("div",{className:"wrapper__procedure--card-bottom",children:[Object(p.jsxs)("div",{className:"wrapper__procedure--card-date",children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{icon:g.d})}),Object(p.jsx)("p",{children:t.applicationDate})]})," "!=t.lastUpdate&&Object(p.jsxs)("div",{className:"wrapper__procedure--card-date",children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{icon:g.b})}),Object(p.jsx)("p",{children:t.lastUpdate})]})]}),Object(p.jsx)("p",{className:c,children:t.status})]})})})}a(44),a(45);function v(){return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("div",{className:"wrapper__spinner",children:Object(p.jsx)("div",{className:"spinner"})})})}function _(e){var t=e.logged,a=e.disconect,n=e.userInfo,c=e.getDetails,s=e.setMessage,l=[{id:1,clientId:1,name:"Compra de Vivienda",status:"En progreso",icon:"faHome",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 14:00"},{id:2,clientId:1,name:"Cr\xe9dito Leasing Veh\xedculo",status:"Finalizado",icon:"faCar",applicationDate:"2020-01-22 10:00",lastUpdate:"2020-07-10 08:00"},{id:3,clientId:1,name:"Tarjeta de Cr\xe9dito",status:"Finalizado",icon:"faCreditCard",applicationDate:"2006-09-27 15:00",lastUpdate:"2021-04-10 10:00"},{id:4,clientId:2,name:"Pr\xe9stamo personal",status:"En progreso",icon:"faCar",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 10:00"},{id:5,clientId:2,name:"Tarjeta de Cr\xe9dito",status:"En progreso",icon:"faCreditCard",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 10:00"},{id:6,clientId:1,name:"Compra de Vivienda",status:"En progreso",icon:"faHome",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 10:00"},{id:7,clientId:2,name:"Compra de Vivienda",status:"En progreso",icon:"faHome",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 10:00"},{id:1,clientId:3,name:"Compra de Vivienda",status:"En progreso",icon:"faHome",applicationDate:"2021-01-22 10:00",lastUpdate:"2021-04-10 14:00"},{id:2,clientId:3,name:"Cr\xe9dito Leasing Veh\xedculo",status:"Finalizado",icon:"faCar",applicationDate:"2020-01-22 10:00",lastUpdate:"2020-07-10 08:00"},{id:3,clientId:3,name:"Tarjeta de Cr\xe9dito",status:"Finalizado",icon:"faCreditCard",applicationDate:"2006-09-27 15:00",lastUpdate:"2021-04-10 10:00"}],u=Object(r.useState)([]),m=Object(i.a)(u,2),b=m[0],g=m[1],h=Object(r.useState)(""),_=Object(i.a)(h,2),w=_[0],I=_[1],N=Object(r.useState)(!0),S=Object(i.a)(N,2),C=S[0],D=S[1];Object(r.useEffect)((function(){setTimeout(Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.filter((function(e){return e.clientId===n.id}));case 2:t=e.sent,g(t),D(!1),0===t.length&&s({text:"No hay informaci\xf3n para mostrar...! \ud83d\ude2d",type:"error",position:"left"});case 6:case"end":return e.stop()}}),e)}))),1e3),console.log("Nuevo efecto!")}),[n.id]);var y=b.filter((function(e){var t=e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),a=w.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.includes(a)}));return Object(p.jsx)(r.Fragment,{children:Object(p.jsxs)("div",{className:"wrapper__dashboard--sidebar",children:[Object(p.jsxs)("header",{className:"wrapper__dashboard--sidebar-header",children:[Object(p.jsx)(j,{width:"70px",height:"70px",logged:t}),Object(p.jsx)(O,{searchValue:w,setSearchValue:I}),Object(p.jsx)("button",{className:"button--primary",onClick:a,children:"Logout"})]}),C?Object(p.jsx)(v,{}):Object(p.jsx)(f,{children:y.map((function(e){return Object(p.jsx)(x,{data:e,getDetails:c},e.id)}))})]})})}a(46);function w(e){var t=e.data,a=e.index,n="wrapper__procedure__detail--item";return n+=a%2?" pair":" odd",Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("li",{className:n,children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("h4",{children:["ID: ",t.id]}),Object(p.jsx)("span",{className:"wrapper__procedure__detail--item-number",children:a}),Object(p.jsx)("p",{className:"wrapper__procedure__detail--item-title",children:t.description}),Object(p.jsxs)("div",{className:"wrapper__procedure__detail--item-date",children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{icon:g.b})}),Object(p.jsx)("p",{children:t.dateCreated})]}),Object(p.jsxs)("div",{className:"wrapper__procedure__detail--item-date",children:[Object(p.jsx)("span",{children:Object(p.jsx)(b.a,{icon:g.g})}),Object(p.jsx)("p",{children:t.user})]}),Object(p.jsx)("span",{className:"wrapper__procedure__detail--item-scuare"})]})})})}a(47);function I(e){var t=e.children;return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("ul",{className:"wrapper__procedure__detail",children:t})})}a(48);function N(e){var t=e.procedureID,a=e.setMessage,n=[{id:1,clientID:1,procedureID:1,description:"Se inicia estudio de cr\xe9dito",dateCreated:"2021-01-22 10:00",user:"ataborda"},{id:2,clientID:1,procedureID:1,description:"La documentaci\xf3n enviada por el ciente es correcta y por eso realizaremos el siguiente paso que es muy importante",dateCreated:"2021-01-22 10:00",user:"mperez"},{id:3,clientID:1,procedureID:2,description:"El cliente solicita financiaci\xf3n del 50% del valor del veh\xedculo El cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculoEl cliente solicita financiaci\xf3n del 50% del valor del veh\xedculo",dateCreated:"2021-01-22 10:00",user:"gcardona"},{id:4,clientID:1,procedureID:3,description:"Se inicia estudio de cr\xe9dito para validaci\xf3n de TDC",dateCreated:"2006-09-27 15:00",user:"pholguin"},{id:5,clientID:1,procedureID:3,description:"No es posible dar el monto solicitado",dateCreated:"2006-09-27 16:30",user:"jpulido"},{id:6,clientID:1,procedureID:2,description:"Se autoriza el valor del monto solicitado por el cliente",dateCreated:"2021-01-22 14:00",user:"ataborda"},{id:7,clientID:1,procedureID:1,description:"Se pasa a firma de escritura",dateCreated:"2021-01-22 10:00",user:"potalora"},{id:8,clientID:1,procedureID:2,description:"No es posible realizar el desembolso por bloqueo de cuenta",dateCreated:"2021-02-08 08:15",user:"hmartinez"},{id:9,clientID:1,procedureID:3,description:"Validaci\xf3n en centrales aprobada",dateCreated:"2006-09-27 15:10",user:"jpulido"},{id:10,clientID:2,procedureID:4,description:"Se realiza desembolso a la cuenta del cliente",dateCreated:"2021-02-08 15:00",user:"hmartinez"},{id:11,clientID:2,procedureID:5,description:"Se realiza desembolso a la cuenta del cliente",dateCreated:"2021-02-08 15:00",user:"hmartinez"},{id:12,clientID:2,procedureID:4,description:"Se realiza desembolso a la cuenta del cliente",dateCreated:"2021-02-08 15:00",user:"hmartinez"},{id:13,clientID:2,procedureID:5,description:"Se realiza desembolso a la cuenta del cliente",dateCreated:"2021-02-08 15:00",user:"hmartinez"}],c=Object(r.useState)([]),s=Object(i.a)(c,2),l=s[0],u=s[1],j=Object(r.useState)(!1),m=Object(i.a)(j,2),b=m[0],g=m[1];return Object(r.useEffect)((function(){g(!0),a({}),setTimeout(Object(d.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.filter((function(e){return e.procedureID===t}));case 2:r=e.sent,console.log("valor de procedureDetailLIst",r),r.sort((function(e,t){return t.id-e.id})),u(r),g(!1),0===r.length&&a({text:"No hay informaci\xf3n para mostrar...! \ud83d\ude2d",type:"error",position:"right"});case 8:case"end":return e.stop()}}),e)}))),1500)}),[t]),Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("div",{className:"wrapper__dashboard--content",children:b?Object(p.jsx)(v,{}):Object(p.jsx)(I,{children:l.map((function(e,t){var a=l.length-t;return Object(p.jsx)(w,{data:e,index:a},e.id)}))})})})}a(49);function S(e){var t=e.logged,a=e.disconect,n=e.userInfo,c=Object(r.useState)(n.id),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(r.useState)({text:" "}),u=Object(i.a)(d,2),j=u[0],b=u[1];return Object(r.useEffect)((function(){var e=document.querySelector(".notify");return e&&(e.classList.contains("show")?(e.classList.remove("show"),e.classList.remove()):e.classList.add("show"),e.classList.add("show")),function(){return!1}}),[j.text]),console.log("valor de userInfo en dash",n),Object(p.jsx)(r.Fragment,{children:Object(p.jsxs)("div",{className:"wrapper__dashboard",children:[Object(p.jsx)(m,{message:j}),Object(p.jsx)(_,{logged:t,disconect:a,getDetails:function(e){console.log("Valor de procedureID",e),l(e)},userInfo:n,setMessage:b}),Object(p.jsx)(N,{procedureID:o,setMessage:b})]})})}function C(e){for(var t=e.qty,a=e.validateChange,n=e.OTPKey,c=e.inputOTP,i=e.disabled,s=[],o=0;o<t;o++)s.push(o);return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("input",{type:"number",name:"OPTKEY",onChange:a,value:n,ref:c,readOnly:i})})}a(50);function D(e){var t=e.validationStatus,n=e.characters,c=e.setMessage,s=Object(r.useState)(" "),o=Object(i.a)(s,2),l=o[0],d=o[1],u=Object(r.useState)(!1),j=Object(i.a)(u,2),m=j[0],h=j[1],O=Object(r.useState)(1),f=Object(i.a)(O,2),x=f[0],v=f[1],_=Object(r.useRef)(null);Object(r.useEffect)((function(){_.current.focus()}),[]);return Object(p.jsx)(r.Fragment,{children:Object(p.jsx)("div",{className:"wrapper__login__otp--inputs",children:Object(p.jsxs)("div",{className:"wrapper__login__otp--input",children:[Object(p.jsx)("label",{htmlFor:"",children:Object(p.jsx)(b.a,{icon:g.e})}),Object(p.jsx)(C,{qty:n,validateChange:function(e){var r=e.target.value;if(d(r),c({text:"",type:"error",position:"right"}),r.length===n)try{var i=localStorage.getItem("authEncrypt"),s=a(21),o=s.AES.decrypt(i.toString(),r),l=JSON.parse(o.toString(s.enc.Utf8));Number(r)===l&&(localStorage.setItem("logged","yes"),t("ok"))}catch(u){v(x+1),x>=3?(d(" "),h(!0),t("moreAttempts"),c({text:"Que mal... Intenta de nuevo!!! \ud83e\udd25 ",type:"error",position:"right"})):(c({text:"Codigo Errado!!!",type:"error",position:"right"}),d(" "))}},OTPKey:l,inputOTP:_,disabled:m})]})})})}a(75);function y(e){var t=e.characters,a=e.userInfo,n=e.logged,c=e.setLogged,s=e.message,o=e.setMessage,l=Object(r.useState)("El c\xf3digo fue enviado a su correo electr\xf3nico! \ud83d\ude80"),d=Object(i.a)(l,2),u=d[0],b=d[1],g=a.id,h=a.name;return Object(p.jsx)(r.Fragment,{children:n?Object(p.jsx)(S,{userInfo:a,logged:n,setLogged:c,message:s,setMessage:o}):Object(p.jsxs)("div",{className:"wrapper__login__otp",children:[Object(p.jsxs)("div",{className:"wrapper__login__otp--ribbons",children:[Object(p.jsx)("span",{className:"wrapper__login__otp--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login__otp--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login__otp--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login__otp--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login__otp--ribbons-item"})]}),Object(p.jsxs)("div",{className:"wrapper__login__otp--content",children:[Object(p.jsx)(j,{width:"100px",height:"100px",logged:n}),Object(p.jsx)("p",{children:u}),Object(p.jsx)(m,{message:s}),Object(p.jsx)(D,{validationStatus:function(e){if("ok"===e){var t={id:g,name:h};localStorage.setItem("userInfo",JSON.stringify(t)),c(!0)}else"moreAttempts"===e&&(b("Ser\xe1s redireccionado para intentarlo de nuevo."),setTimeout((function(){window.location.reload()}),3e3))},characters:t,setMessage:o})]})]})})}a(76);function E(e){var t=e.logged,n=e.setLogged,c=e.disconect,s=[{id:1,name:"Camilo Taborda",email:"ckey08@gmail.com",image:"",genere:"masculine",status:"block"},{id:2,name:"Lina Pineda",email:"marcelita-621@hotmail.com",image:"",genere:"female",status:"active"},{id:3,name:"ParkSite",email:"parknerco@gmail.com",image:"",genere:"masculine",status:"active"}],b=Object(r.useState)({id:" ",name:" ",email:" ",status:" ",authCode:" "}),g=Object(i.a)(b,2),O=g[0],f=g[1],x=Object(r.useState)({text:"",type:"error",position:"right"}),v=Object(i.a)(x,2),_=v[0],w=v[1],I=Object(r.useState)(!1),N=Object(i.a)(I,2),S=N[0],C=N[1];Object(r.useEffect)((function(){var e=document.querySelector(".notify");return e&&(e.classList.contains("show")?(e.classList.remove("show"),e.classList.remove()):e.classList.add("show"),e.classList.add("show")),console.log("valor de showHideMessage",e),console.log("valor de message",_),function(){return!1}}),[_.text]);var D=function(e){console.log("userInfo",e);var t="";t="female"===e.genere?"\ud83d\udd75\ud83c\udffc\u200d\u2640\ufe0f ":"\ud83d\udd75\ud83c\udffc\u200d\u2642\ufe0f ";var a=document.createElement("form"),r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","name"),r.setAttribute("value",e.name);var n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","appName"),n.setAttribute("value","Consultango\xae");var c=document.createElement("input");c.setAttribute("type","email"),c.setAttribute("name","email"),c.setAttribute("value",e.email);var i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","OTPKey"),i.setAttribute("value",e.authCode);var s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","emoji"),s.setAttribute("value",t),a.appendChild(r),a.appendChild(c),a.appendChild(i),a.appendChild(n),a.appendChild(s),u.a.sendForm("service_jtxky4h","template_5ki1qvn",a,"user_BapTsJqJ4slOEVBlqmvZc").then((function(t){200===t.status&&(console.log("SUCCESS!",t.status,t.text),f({id:e.id,name:e.name,email:e.email,status:"ok",authCode:i}))}),(function(e){console.log(e.text)}))};return Object(p.jsx)(r.Fragment,{children:"ok"===O.status?Object(p.jsx)(y,{characters:4,userInfo:O,logged:t,setLogged:n,message:_,setMessage:w,disconect:c}):Object(p.jsxs)("div",{className:"wrapper__login",children:[Object(p.jsxs)("div",{className:"wrapper__login--ribbons",children:[Object(p.jsx)("span",{className:"wrapper__login--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login--ribbons-item"}),Object(p.jsx)("span",{className:"wrapper__login--ribbons-item"})]}),Object(p.jsxs)("div",{className:"wrapper__login--content",children:[Object(p.jsx)(j,{width:"100px",height:"100px",logged:t}),Object(p.jsx)(m,{message:_}),Object(p.jsx)(h,{validateUser:function(e){s.filter(function(){var t=Object(d.a)(o.a.mark((function t(r){var n,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.email!==e.email){t.next=13;break}return t.next=3,s=4,Math.floor(Math.pow(10,s-1)+Math.random()*(Math.pow(10,s)-Math.pow(10,s-1)-1));case 3:return n=t.sent,c=a(21),i=c.AES.encrypt(n.toString(),n.toString()).toString(),localStorage.setItem("authEncrypt",i),t.next=9,D(Object(l.a)(Object(l.a)({},r),{},{authCode:n}));case 9:w({text:"Un momento por favor...!",type:"success",position:"left"}),C(!0),t.next=15;break;case 13:w({text:"El usuario no existe o se encuentra bloqueado!",type:"error",position:"left"}),C(!1);case 15:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}())},message:_,setMessage:w,disable:S,setDisable:C})]})]})})}function k(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(" "),s=Object(i.a)(c,2),o=s[0],l=s[1];Object(r.useEffect)((function(){if("yes"===localStorage.getItem("logged")){var e=JSON.parse(localStorage.getItem("userInfo"));e?l(e):n(!1),n(!0)}else localStorage.clear(),n(!1);return console.log("cambi\xf3 el estado"),function(){return!1}}),[a]);var d=function(){console.log("di click para hacer logout"),n(!1),localStorage.removeItem("logged"),localStorage.removeItem("authCode")};return Object(p.jsx)("div",{className:"App",children:a?Object(p.jsx)(S,{userInfo:o,disconect:d,logged:a}):Object(p.jsx)(E,{logged:a,setLogged:n,disconect:d})})}c.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.da0fc7a8.chunk.js.map