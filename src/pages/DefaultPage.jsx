import React from 'react'
import ButtonReservation from '../components/buttons/ButtonReservation'
import backgroundImage from "../assets/background2.png"
import './styles/DefaultPage.css'
import image from './../assets/logo-blanco.png'

const DefaultPage = (props) => {
  return (
    <>
    <main className='main' style={{backgroundImage:`url(${backgroundImage})`}}>
        <section className={ props.actived==true ? 'logo':'hide'} >
            <img src={image} alt="logotipo"/>
        </section>
        {props.children}
        <ButtonReservation/>
        <footer>
        </footer>
    </main>
    </>
  )
}

export default DefaultPage