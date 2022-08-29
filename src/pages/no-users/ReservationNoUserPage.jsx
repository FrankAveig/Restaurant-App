import React from 'react'
import DefaultPage from '../DefaultPage'
import {NavLink} from 'react-router-dom'
import'./styles/ReservationNoUser.css'
const ReservationNoUserPage = () => {
  return (
    <>
    <DefaultPage>
        <section className="noReservation">
            <h1>You must be Logged in to make a reservation<br/><br/>If you do not have a user Register Free</h1>
            <article className="buttons">
                <NavLink to='/register'><button>Register</button></NavLink>
                <NavLink to='/login'><button>Login</button></NavLink>
            </article>
        </section>        
    </DefaultPage>
    </>
  )
}

export default ReservationNoUserPage