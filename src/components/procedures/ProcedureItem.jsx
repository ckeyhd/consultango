import React, { Fragment, useState } from 'react'

function ProcedureItem({ data }) {

  const [itemClick,setItemClick] = useState("")

  const handlerClick = (e)=>{
    let procedureID = e.target.parentElement.id;
    console.log("Valor de e",e);
    console.log("Valor de procedureID",procedureID);
  }
  return (
    <Fragment >
      <li onClick = { handlerClick }>
        <div id={data.id}>
          <span>{data.icon}</span>
          <h3>{data.name}</h3>
          <p>{data.applicationDate}</p>
          <p>{data.lastUpdate}</p>
          <p>{data.status}</p>
        </div>
      </li>
    </Fragment>
  )
}

export { ProcedureItem }
