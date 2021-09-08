//Import Components
import React, { Fragment, useState, useEffect } from 'react'
import { SideBar } from '../sidebar/SideBar'
import { Content } from '../content/Content'

//CSS Import Sections
import "./dashboard.css"
import { Messages } from '../../Messages/Messages'

function Dashboard({ logged, disconect, userInfo }) {

  const [seeDetails, setSeeDetails] = useState(userInfo.id)
  const [message , setMessage] = useState({text:" "})

  const getDetails = (procedureID)=>{
    console.log("Valor de procedureID",procedureID);
    setSeeDetails(procedureID)
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

    return () => (isSubscribed = false)
  }, [message.text])

  console.log("valor de userInfo en dash",userInfo);
  return (
    <Fragment>
      <div className="wrapper__dashboard">
        <Messages message={ message} />
        <SideBar
          logged={logged}
          disconect={ disconect }
          getDetails={ getDetails }
          userInfo={ userInfo }
          setMessage={ setMessage}
        />
        <Content procedureID={ seeDetails } setMessage={ setMessage}/>
      </div>
    </Fragment>
  )
}

export { Dashboard }
