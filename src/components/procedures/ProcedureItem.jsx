import React, { Fragment } from 'react'

function ProcedureItem({ data }) {
  return (
    <Fragment >
      <li>
        <span>{data.icon}</span>
        <h3>{data.name}</h3>
        <p>{data.applicationDate}</p>
        <p>{data.lastUpdate}</p>
        <p>{data.status}</p>
      </li>
    </Fragment>
  )
}

export { ProcedureItem }
