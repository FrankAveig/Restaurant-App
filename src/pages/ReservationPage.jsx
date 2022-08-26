import React from 'react'
import DefaultPage from './DefaultPage'
const ReservationPage = () => {
    const tablesAvailable = 22;
  return (
    <DefaultPage actived={false}>
        <h2>Reservation</h2>
        <form>
            <input type="text" placeholder='Nombres' />
            <input type="time" />
            <input type="date" />
        </form>
        <h2>TABLES AVAILABLE: {tablesAvailable}</h2>


    </DefaultPage>
  )
}

export default ReservationPage