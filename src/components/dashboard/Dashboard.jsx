//Import Components
import React, { Fragment, useState } from 'react'
import { SideBar } from './SideBar'
import { Content } from './Content'

//CSS Import Sections
import "./dashboard.css"

function Dashboard({ disconect, clientID }) {

  // const clientID = userInfo.id
  const [seeDetails, setSeeDetails] = useState(clientID)
  const getDetails = (procedureID)=>{
    console.log("Valor de procedureID",procedureID);
    setSeeDetails(procedureID)
  }

  console.log("valor de clientID en dash",clientID);
  return (
    <Fragment>
      <div className="wrapper__content">
        <SideBar disconect={disconect} getDetails={ getDetails } clientID={ clientID }/>
        <Content procedureID={ seeDetails }/>
      </div>
    </Fragment>
  )
}

export { Dashboard }
