import React, { Fragment } from 'react'

function ProcedureList({ children }) {
  return (
    <Fragment>
      <ul>
        { children }
      </ul>
    </Fragment>
  )
}

export { ProcedureList }
