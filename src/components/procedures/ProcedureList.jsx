import React, { Fragment } from 'react'

//CSS Import
import './procedureList.css'
function ProcedureList({ children }) {
  return (
    <div className="wrapper__procedure--list">
      <ul>
        { children }
      </ul>
    </div>
  )
}

export { ProcedureList }
