import React, { Fragment } from 'react'

//CSS Import
import './detailProcedureList.css'

function DetailProcedureList( { children }) {
  return (
    <Fragment>
      <ul className="wrapper__procedure__detail">
        {children}
      </ul>
    </Fragment>
  )
}

export { DetailProcedureList }
