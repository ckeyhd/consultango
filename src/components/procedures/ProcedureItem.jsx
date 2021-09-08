import React, { Fragment, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHome, faCar, faBookmark, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons';

//CSS Import
import "./procedureItem.css"

function ProcedureItem({ data, getDetails }) {

  const elementID = useRef(data.id);

  let className = "wrapper__procedure--card-status";

  //Eliminar espacios del estado para concatenar el estado a la clase
  let status = data.status.toLowerCase().replace(/\s+/g, '');
  switch (status) {
    case "finalizado":
      className += " done"
      break;
    case "enprogreso":
      className += " progress"
      break;
      default:
      className += " error"
      break;
  }

  const handlerClick = (e)=>{
    let procedureID = elementID.current.attributes.getNamedItem("data-id").value

    console.log("Valor de procedureID",procedureID);
    getDetails(Number(procedureID)) //Elevar el estado enviando el id del trámite

  }

  return (
    <Fragment >
      <li onClick={ handlerClick } className="wrapper__procedure--card" ref={ elementID } data-id={data.id} >
        <div>
          <div className="wrapper__procedure--card-top">
            <span className="wrapper__procedure--card-icon">
              {/* <FontAwesomeIcon icon={`${data.icon}`} /> */}
              <FontAwesomeIcon icon={faBookmark} />
            </span>
            {/* <span>{data.icon}</span> */}
            <h3>{data.name}</h3>
          </div>
          <div className="wrapper__procedure--card-bottom">
            <div className="wrapper__procedure--card-date">
              <span>
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              <p>{data.applicationDate}</p>
            </div>
            {data.lastUpdate !=" " && //Se muestra solo si hay actualización
              <div className="wrapper__procedure--card-date">
                <span>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <p>{data.lastUpdate}</p>
              </div>
            }
          </div>
          <p className={ className }>{data.status}</p>
        </div>
      </li>
    </Fragment>
  )
}

export { ProcedureItem }
