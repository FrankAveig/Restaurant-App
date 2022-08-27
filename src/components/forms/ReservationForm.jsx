import React from 'react'
import './styles/FormReservation.css'
const FormReservation = () => {
    const tablesAvailable = 22;
    const book = ()=>{
        alert('reservado')
    }
  return (
    <section className='reservation'>
    <h2>Reservation</h2>
        <form className='reservation__form'>
            <input type="text" placeholder='Name' />
            <input type="number" placeholder='Phone' />
            <input type="time" />
            <input type="date" />
        </form>
        <button onClick={book}>Book</button>
        <h2>TABLES AVAILABLE: {tablesAvailable}</h2>
    </section>
  )
}

export default FormReservation