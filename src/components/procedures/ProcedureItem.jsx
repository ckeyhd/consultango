import React, { Fragment, useState } from 'react'

function ProcedureItem({ data, getDetails }) {

  const handlerClick = (e)=>{
    let procedureID = "";
    if(e.target.id!=""){
      procedureID = e.target.id;
    }else if(e.target.parentElement.id != ""){
      procedureID = e.target.parentElement.id
    }

    getDetails(Number(procedureID)) //Elevar el estado enviando el id del trámite

  }

  return (
    <Fragment >
      <li onClick={ handlerClick }>
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
