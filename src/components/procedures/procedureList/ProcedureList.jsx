import React, { Fragment } from 'react'

//CSS Import
import './procedureList.css'

function ProcedureList({ children }) {
  return (
    <ul className="wrapper__procedure--list">
      { children }
    </ul>
  )
}

export { ProcedureList }
