import React from 'react'
import NavBar from '../components/navigation/NavBar'
import './styles/HomePage.css'
import backgroundImage from "../assets/background2.png"
import image from './../assets/logo-blanco.png'
import ButtonReservation from '../components/buttons/ButtonReservation'

const HomePage = () => {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main className='main' style={{backgroundImage:`url(${backgroundImage})`}}>
        <section className='logo'>
            <img src={image} alt="" />
        </section>
        <section>
            <p>Calle Josep Tarradellas, 29 - P. 2 PTA. 1, SANT CUGAT DEL VALLES</p>
        </section>
        <ButtonReservation/>
    </main>
    </>

  )
}

export default HomePage