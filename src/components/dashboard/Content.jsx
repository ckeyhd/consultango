import React, { Fragment, useState, useEffect } from 'react'

//Components Import
import { DetailProcedureItem } from '../proceduresDetails/DetailProcedureItem'
import { DetailProcedureList } from '../proceduresDetails/DetailProcedureList'

//CSS Import
import './content.css'

 function Content({ procedureID }) {

  const proceduresDetails = [
    {id: 1, clientID: 1,procedureID: 1, description: "Se inicia estudio de crédito", dateCreated: "2021-01-22 10:00", user: "ataborda"},
    {id: 2, clientID: 1, procedureID: 1, description: "La documentación enviada por el ciente es correcta y por eso realizaremos el siguiente paso que es muy importante", dateCreated: "2021-01-22 10:00", user: "mperez"},
    {id: 3, clientID: 1, procedureID: 2, description: "El cliente solicita financiación del 50% del valor del vehículo", dateCreated: "2021-01-22 10:00", user: "gcardona"},
    {id: 4, clientID: 1, procedureID: 3, description: "Se inicia estudio de crédito para validación de TDC", dateCreated: "2006-09-27 15:00", user: "pholguin"},
    {id: 5, clientID: 1, procedureID: 3, description: "No es posible dar el monto solicitado", dateCreated: "2006-09-27 16:30", user: "jpulido"},
    {id: 6, clientID: 1, procedureID: 2, description: "Se autoriza el valor del monto solicitado por el cliente", dateCreated: "2021-01-22 14:00", user: "ataborda"},
    {id: 7, clientID: 1, procedureID: 1, description: "Se pasa a firma de escritura", dateCreated: "2021-01-22 10:00", user: "potalora"},
    {id: 8, clientID: 1, procedureID: 2, description: "No es posible realizar el desembolso por bloqueo de cuenta", dateCreated: "2021-02-08 08:15", user: "hmartinez"},
    {id: 9, clientID: 1, procedureID: 3, description: "Validación en centrales aprobada", dateCreated: "2006-09-27 15:10", user: "jpulido"},
    {id: 10, clientID: 2, procedureID: 4, description: "Se realiza desembolso a la cuenta del cliente", dateCreated: "2021-02-08 15:00", user: "hmartinez"},
    {id: 11, clientID: 2, procedureID: 5, description: "Se realiza desembolso a la cuenta del cliente", dateCreated: "2021-02-08 15:00", user: "hmartinez"},
    {id: 12, clientID: 2, procedureID: 4, description: "Se realiza desembolso a la cuenta del cliente", dateCreated: "2021-02-08 15:00", user: "hmartinez"},
    {id: 13, clientID: 2, procedureID: 5, description: "Se realiza desembolso a la cuenta del cliente", dateCreated: "2021-02-08 15:00", user: "hmartinez"},
  ]

  const [detailList, setDetailList] = useState([])

  useEffect(() => {
      //Simular espera de llamada al server por la información del cliente
      setTimeout(async() => {
        const procedureDetailLIst = await proceduresDetails.filter(details => details.procedureID === procedureID);
        console.log("valor de procedureDetailLIst",procedureDetailLIst);
        procedureDetailLIst.sort((a,b)=>b.id - a.id) //Ordenar los detalles según el ID
        setDetailList(procedureDetailLIst)
      }, 1500);
  },[procedureID]);


   return (
     <Fragment>
      <div className="wrapper__dashboard--content">
          <DetailProcedureList>
            {
              detailList.map((detail, index)=>{
                let number = detailList.length - index
                return <DetailProcedureItem key={detail.id} data={ detail } index={ number }/>
              })
            }
          </DetailProcedureList>
      </div>
     </Fragment>
   )
 }

 export { Content }
