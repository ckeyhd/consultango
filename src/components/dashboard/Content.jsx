 import React, { Fragment, useState, useEffect } from 'react'
import { DetailProcedureItem } from '../proceduresDetails/DetailProcedureItem'
import { DetailProcedureList } from '../proceduresDetails/DetailProcedureList'

 function Content() {

  const proceduresDetails = [
    {id: 1, procedureID: 1, description: "Se inicia estudio de crédito", dateCreated: "2021-01-22 10:00", user: "ataborda"},
    {id: 2, procedureID: 1, description: "La documentación enviada por el ciente es correcta", dateCreated: "2021-01-22 10:00", user: "mperez"},
    {id: 7, procedureID: 1, description: "Se pasa a firma de escritura", dateCreated: "2021-01-22 10:00", user: "potalora"},
    {id: 3, procedureID: 2, description: "El cliente solicita financiación del 50% del valor del vehículo", dateCreated: "2021-01-22 10:00", user: "gcardona"},
    {id: 6, procedureID: 2, description: "Se autoriza el valor del monto solicitado por el cliente", dateCreated: "2021-01-22 14:00", user: "ataborda"},
    {id: 8, procedureID: 2, description: "No es posible realizar el desembolso por bloqueo de cuenta", dateCreated: "2021-02-08 08:15", user: "hmartinez"},
    {id: 10, procedureID: 2, description: "Se realiza desembolso a la cuenta del cliente", dateCreated: "2021-02-08 15:00", user: "hmartinez"},
    {id: 4, procedureID: 3, description: "Se inicia estudio de crédito para validación de TDC", dateCreated: "2006-09-27 15:00", user: "pholguin"},
    {id: 9, procedureID: 3, description: "Validación en centrales aprobada", dateCreated: "2006-09-27 15:10", user: "jpulido"},
    {id: 5, procedureID: 3, description: "No es posible dar el monto solicitado", dateCreated: "2006-09-27 16:30", user: "jpulido"},
  ]

  const [detailList, setDetailList] = useState([])
  // const [procedureID, setProcedureID] = useState(" ")

  useEffect(() => {
    const procedureID = 1 //Se asigna el ID del trámite para filtrarlo dentro de la información a consultar
    getProceduresDetails(procedureID)
  },[])


  //Obtener data según el ID del trámite del cliente
  const getProceduresDetails = (procedureID)=>{
    //Simular espera de llamada al server por la información del cliente
    setTimeout(async() => {
      const procedureDetailLIst = await proceduresDetails.filter(details => details.procedureID === procedureID);
      console.log("valor de procedureDetailLIst",procedureDetailLIst);
      procedureDetailLIst.sort((a,b)=>b.id - a.id) //Ordenar los detalles según el ID
      setDetailList(procedureDetailLIst)
    }, 3000);
  }

   return (
     <Fragment>
      <div className="wrapper__content--content">
        <DetailProcedureList>
          {
            detailList.map((detail)=>{
              return <DetailProcedureItem key={detail.id} data={ detail }/>
            })
          }
        </DetailProcedureList>
      </div>
     </Fragment>
   )
 }

 export { Content }
