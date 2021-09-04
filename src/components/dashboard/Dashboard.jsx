//Import Components
import React, { Fragment } from 'react'
import { SideBar } from './SideBar'
import { Content } from './Content'

//CSS Import Sections
import "./dashboard.css"

function Dashboard({ disconect }) {
  return (
    <Fragment>
      <div className="wrapper__content">
        <SideBar disconect={ disconect }/>
        <Content />
      </div>
    </Fragment>
  )
}

export { Dashboard }
