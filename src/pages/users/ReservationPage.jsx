import React from 'react'
import DefaultPage from '../DefaultPage'
import FormReservation from '../../components/forms/ReservationForm';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';
const ReservationPage = () => {
    
  return (
    <DefaultPage actived={false} buttom={false}>
        <FormReservation/>
    </DefaultPage>
  )
}

export default ReservationPage