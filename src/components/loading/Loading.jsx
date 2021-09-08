import React, { Fragment } from 'react'

//CSS Import
import "./loading.css"

function Loading() {
  return (
    <Fragment>
      <div className="wrapper__spinner">
        <div className="spinner"></div>
      </div>
    </Fragment>
  )
}

export { Loading }
