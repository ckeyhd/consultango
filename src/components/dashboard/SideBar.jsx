import React, { Fragment, useState, useEffect } from 'react'
import { ProcedureSearch } from '../procedures/ProcedureSearch'
import { ProcedureList } from '../procedures/ProcedureList'
import { ProcedureItem } from '../procedures/ProcedureItem'
import { waitFor } from '@testing-library/dom'

function SideBar({ disconect }) {

  const procedureList = [
    {id:1, clientId: 1, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 14:00"},
    {id:2, clientId: 1, name:"Crédito Lising Vehículo", status:"Finalizado", icon:"icono2", applicationDate: "2020-01-22 10:00", lastUpdate: "2020-07-10 08:00"},
    {id:3, clientId: 1, name:"Tarjeta de Crédito", status:"Finalizado", icon:"icono", applicationDate: "2006-09-27 15:00", lastUpdate: "2021-04-10 10:00"},
    {id:4, clientId: 2, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:5, clientId: 2, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:6, clientId: 1, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
    {id:7, clientId: 2, name:"Compra de Vivienda", status:"En progreso", icon:"icono", applicationDate: "2021-01-22 10:00", lastUpdate: "2021-04-10 10:00"},
  ]

  const [procedures, setProcedures] = useState([])

  useEffect(() => {
    const clientId = 1 //Se asigna el ID del cliente para filtrarlo dentro de la información a consultar
    getProcedures(clientId)
  },[])


  //Obtener data según el ID del cliente
  const getProcedures = (clientId)=>{
    //Simular espera de llamada al server por la información del cliente
    setTimeout(async() => {
      const procedureUserLIst = await procedureList.filter(procedure => procedure.clientId === clientId);
      console.log("valor de procedureUserLIst",procedureUserLIst);
      setProcedures(procedureUserLIst)
    }, 3000);
  }

  return (
    <Fragment>
      <div className="wrapper__content--sidebar">
        <ProcedureSearch disconect={ disconect }/>
        <ProcedureList>
          {
              procedures.map((procedure)=>{
              return <ProcedureItem key={ procedure.id } data={ procedure }/>
            })
          }
        </ProcedureList>
      </div>
    </Fragment>
  )
}

export { SideBar }
