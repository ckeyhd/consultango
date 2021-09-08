import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'

//CSS Import
import './detailProcedureItem.css'

function DetailProcedureItem({ data , index }) {

  let className = "wrapper__procedure__detail--item"
  if(index % 2){
    className+=" pair"
  }else{
    className+=" odd"
  }
  // {id: 5, procedureID: 3, decription: "No es posible dar el monto solicitado", dateCreated: "2006-09-27 16:30", user: "jpulido"},

  return (
    <Fragment>
      <li className={ className }>
        <div>
          <h4>ID: { data.id }</h4>
          <span className="wrapper__procedure__detail--item-number">{index}</span>
          <p className="wrapper__procedure__detail--item-title">{data.description}</p>
          <div className="wrapper__procedure__detail--item-date">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            <p>{data.dateCreated}</p>
          </div>
          <div className="wrapper__procedure__detail--item-date">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p>{data.user}</p>
          </div>
        </div>
      </li>
    </Fragment>
  )
}

export { DetailProcedureItem }
