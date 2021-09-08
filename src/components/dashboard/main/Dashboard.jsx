//Import Components
import React, { Fragment, useState } from 'react'
import { SideBar } from '../sidebar/SideBar'
import { Content } from '../content/Content'

//CSS Import Sections
import "./dashboard.css"

function Dashboard({ logged, disconect, userInfo }) {

  const [seeDetails, setSeeDetails] = useState(userInfo.id)
  const getDetails = (procedureID)=>{
    console.log("Valor de procedureID",procedureID);
    setSeeDetails(procedureID)
  }

  console.log("valor de userInfo en dash",userInfo);
  return (
    <Fragment>
      <div className="wrapper__dashboard">
        <SideBar logged={logged} disconect={ disconect } getDetails={ getDetails } userInfo={ userInfo }/>
        <Content procedureID={ seeDetails }/>
      </div>
    </Fragment>
  )
}

export { Dashboard }
