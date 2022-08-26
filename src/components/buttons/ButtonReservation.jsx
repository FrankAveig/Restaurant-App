import React from 'react'
import './styles/ButtonReservation.css'
const ButtonReservation = (props) => {
  const reservation =()=>{
    alert('Vamos a hacer una reservacion')
  }

  return (
    <button className='buttonReservation' onClick={reservation}>Reeservation</button>
  )
}

export default ButtonReservation