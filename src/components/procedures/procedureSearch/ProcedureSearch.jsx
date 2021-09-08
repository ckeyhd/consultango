import React, {Fragment, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//CSS Import
import "./procedureSearch.css"

function ProcedureSearch({ searchValue, setSearchValue }) {

  const proceduresChangeHandler = (e)=>{
    setSearchValue(e.target.value)
    console.log("valor buscado",e.target.value);
  }

  return (
      <Fragment>
          {/* <Avatar width="70px" height="70px"/> */}
          <div className="wrapper__procedure--search">
            <input className="wrapper__procedure--search-input" type="text" onChange={ proceduresChangeHandler } value={searchValue} placeholder="Buscar trámite"/>
            <label>
              <FontAwesomeIcon icon={ faSearch } />
            </label>
          </div>
        {/* <button className="button--primary" onClick={ disconect }>Logout</button> */}
      </Fragment>
  )
}

export { ProcedureSearch }
