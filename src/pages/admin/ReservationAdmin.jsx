import React from 'react'
import ReservationAdminCard from '../../components/cards/ReservationAdminCard'
import DefaultPage from '../DefaultPage'
import './styles/ReservationAdmin.css'
const ReservationAdmin = () => {
  return (
    <DefaultPage actived={false} buttom={false}>
        <h1>All Reservations</h1>
        <section className="reservations">

            <ReservationAdminCard/>
        </section>
    </DefaultPage>
  )
}

export default ReservationAdmin