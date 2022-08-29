import {useState,useEffect} from 'react'
import {collection,onSnapshot,deleteDoc,doc} from "firebase/firestore";
import { db } from '../../firebase/firebase';
import './styles/ReservationAdminCard.css'
const ReservationAdminCard = () => {

    const[reservations,setReservations] = useState([]);
    
    useEffect(()=>
        onSnapshot(collection(db , 'reservations'),(snapshot)=>{
            const data =snapshot.docs.map((reservation) => ({
                id:reservation.id,
                ...reservation.data(), }))
                setReservations(data)
            }
    )
    ,[]);

    const deleteReservation = async (id) => {
        const documento = doc(db, "reservations", id);
        await deleteDoc(documento);
      };   

  return (
    <>
        {reservations.map((reservation,index)=>{
            return(
                
                <div className="reserv">
          <h6>Reservation: {index+1}</h6>
          <p style={{textTransform:'Capitalize'}}>Name: {reservation.name}</p>
          <p style={{textTransform:'Capitalize'}}>Phone: {reservation.phone}</p>
          <p style={{textTransform:'Capitalize'}}>Hour: {reservation.time}</p>
          <p style={{textTransform:'Capitalize'}}>Date: {reservation.date}</p>
          <div className="buttons">
            <button onClick={()=>deleteReservation(reservation.id)}>Cancel Reservation</button>
          </div>
        </div>
       ) })}
    
    </>
  )
}

export default ReservationAdminCard