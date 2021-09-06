//Import Components
import React, { Fragment, useState } from 'react'
import { SideBar } from './SideBar'
import { Content } from './Content'

//CSS Import Sections
import "./dashboard.css"

function Dashboard({ disconect, userInfo }) {

  const [seeDetails, setSeeDetails] = useState(userInfo.id)
  const getDetails = (procedureID)=>{
    console.log("Valor de procedureID",procedureID);
    setSeeDetails(procedureID)
  }

  console.log("valor de userInfo en dash",userInfo);
  return (
    <Fragment>
      <div className="wrapper__content">
        <SideBar disconect={disconect} getDetails={ getDetails } userInfo={ userInfo }/>
        <Content procedureID={ seeDetails }/>
      </div>
    </Fragment>
  )
}

export { Dashboard }
