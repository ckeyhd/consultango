import React, { Fragment } from 'react'

function DetailProcedureItem({ data }) {

  let className = "procedure__detail--item"
  if(data.id % 2){
    className+=" pair"
  }else{
    className+=" odd"
  }
  // {id: 5, procedureID: 3, decription: "No es posible dar el monto solicitado", dateCreated: "2006-09-27 16:30", user: "jpulido"},

  return (
    <Fragment>
      <li className={ className }>
        <div>
          <span>{data.id}</span>
          <p>{data.description}</p>
          <p>{data.dateCreated}</p>
          <span>{data.user}</span>
        </div>
      </li>
    </Fragment>
  )
}

export { DetailProcedureItem }
