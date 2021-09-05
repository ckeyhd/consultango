import React, { Fragment } from 'react'

function DetailProcedureList( { children }) {
  return (
    <Fragment>
      <ul className="procedure__detail">
        {children}
      </ul>
    </Fragment>
  )
}

export { DetailProcedureList }
