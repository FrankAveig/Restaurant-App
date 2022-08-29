import {Reac,useState,useEffect} from 'react'
import {collection,onSnapshot,addDoc } from "firebase/firestore";
import { db} from "../../firebase/firebase";
import { useAuth } from '../../context/authContext';


import './styles/FormReservation.css'
import ReservationCard from '../cards/ReservationCard';
const FormReservation = () => {
  
const {user} = useAuth()


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

   


//Create document

const userForm = user.email;
const formInicial = {
  name: '',
  phone: '',
  time: '',
  date: '',
  user: '',
};
const [form, setForm] = useState(formInicial);

const addReservation = async () => {
  setForm({...form,user:userForm})
    const colectionReservation = collection(db, "reservations");
    await addDoc(colectionReservation, form);
    
  };

//Delete Document


  return (
    <>
    <section className='reservation'>
    <h2>Reservations</h2>
        <form className='reservation__form'>
            <input type="text" placeholder='Name'  onChange={(e) => setForm({ ...form, name: e.target.value })}/>
            <input type="number" placeholder='Phone' onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
            <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })}/>
            <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })}/>
        </form>
        <button onClick={addReservation}>Book</button>
    </section>
    <h2>Tus reservaciones</h2>
    <div className="reservation__container">
      {reservations.filter((reservation) =>reservation.user.includes(userForm)).map((filteredReserv,index) =>{
        return <ReservationCard key={filteredReserv.id} id={filteredReserv.id}  name={filteredReserv.name} phone={filteredReserv.phone} time={filteredReserv.time} date={filteredReserv.date} index={index}/>
      })}
      </div>
    </>
  )
}

export default FormReservation