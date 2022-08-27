import React from 'react'
import DefaultPage from './DefaultPage'
import FormReservation from '../components/forms/ReservationForm';
const ReservationPage = () => {
    
  return (
    <DefaultPage actived={false} buttom={false}>
        <FormReservation/>
    </DefaultPage>
  )
}

export default ReservationPage