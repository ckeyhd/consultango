import React, { Fragment, useState, useEffect } from 'react'

//Components import
import { ProcedureSearch } from '../procedures/ProcedureSearch'
import { ProcedureList } from '../procedures/ProcedureList'
import { ProcedureItem } from '../procedures/ProcedureItem'

function SideBar({ disconect, clientID, getDetails }) {

  const procedureList = [
    {id:1, clientId: 1, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 14:00"},
    {id:2, clientId: 1, name:"Crédito Lising Vehículo", status:"Finalizado", icon:"icono2", applicationDate: "2020-01-22 10:00", lastUpdate: "2020-07-10 08:00"},
    {id:3, clientId: 1, name:"Tarjeta de Crédito", status:"Finalizado", icon:"icono", applicationDate: "2006-09-27 15:00", lastUpdate: "2021-04-10 10:00"},
    {id:4, clientId: 2, name:"Préstamo personal", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:5, clientId: 2, name:"Tarjeta de Crédito", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:6, clientId: 1, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:7, clientId: 2, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:1, clientId: 3, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 14:00"},
    {id:2, clientId: 3, name:"Crédito Lising Vehículo", status:"Finalizado", icon:"icono2", applicationDate: "2020-01-22 10:00", lastUpdate: "2020-07-10 08:00"},
    {id:3, clientId: 3, name:"Tarjeta de Crédito", status:"Finalizado", icon:"icono", applicationDate: "2006-09-27 15:00", lastUpdate: "2021-04-10 10:00"},
  ]

  //Se almacena la información del trámite del cliente traida del server
  const [procedures, setProcedures] = useState([])

  //Se almacena la información buscada por el usuario
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    //Se asigna el ID del cliente para filtrarlo dentro de la información a consultar
    getProcedures(clientID)
    console.log("Nuevo efecto!");
  },[clientID])


  //Obtener data según el ID del cliente
  const getProcedures = (clientId)=>{
    //Simular espera de llamada al server por la información del cliente
    setTimeout(async() => {
      const procedureUserLIst = await procedureList.filter(procedure => procedure.clientId === clientId);
      console.log("valor de procedureUserLIst",procedureUserLIst);
      setProcedures(procedureUserLIst)
    }, 1000);
  }

  //Se filtra la información según la búsqueda del usuario
  let searchedProcedures = procedures.filter(procedure=>{
    const getLowerDataText = procedure.name.toLowerCase()
    const lowerSearchText = searchValue.toLowerCase();
    return getLowerDataText.includes(lowerSearchText)
  });

  return (
      <Fragment>
        <div className="wrapper__content--sidebar">
          <ProcedureSearch disconect={ disconect } searchValue={ searchValue } setSearchValue = { setSearchValue }/>
          <ProcedureList>
            {
                searchedProcedures.map(procedure=>(
                  <ProcedureItem key={ procedure.id } data={ procedure } getDetails={ getDetails }/>
                ))
            }
          </ProcedureList>
        </div>
      </Fragment>
  )
}

export { SideBar }
