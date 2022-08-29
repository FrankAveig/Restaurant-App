import React from 'react'
import {doc,deleteDoc} from "firebase/firestore";
import { db} from "../../firebase/firebase";
const ReservationCard = (props) => {
    
    const deleteReservation = async (id) => {
        const documento = doc(db, "reservations", id);
        await deleteDoc(documento);
      };   


  return (
    <div className="reserv">
          <h6>Reservation: {props.index+1}</h6>
          <p style={{textTransform:'Capitalize'}}>Name: {props.name}</p>
          <p style={{textTransform:'Capitalize'}}>Phone: {props.phone}</p>
          <p style={{textTransform:'Capitalize'}}>Hour: {props.time}</p>
          <p style={{textTransform:'Capitalize'}}>Date: {props.date}</p>
          <div className="buttons">
            <button onClick={()=>deleteReservation(props.id)}>Cancel Reservation</button>
          </div>
        </div>
  )
}

export default ReservationCard