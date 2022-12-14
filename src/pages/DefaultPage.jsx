import React from 'react'
import { useAuth } from "../context/authContext";
import ButtonReservation from '../components/buttons/ButtonReservation'
import backgroundImage from "../assets/background2.png"
import './styles/DefaultPage.css'
import image from './../assets/logo-blanco.png'
import { useNavigate } from "react-router-dom";
const DefaultPage = (props) => {

  return (
    <>
    
    <main className='main' style={{backgroundImage:`url(${backgroundImage})`}}>
        
        <div className="space"></div>
     
        <section className={ props.actived==true ? 'logo':'hide'} >
            <img src={image} alt="logotipo"/>
        </section>
        {props.children}

        <ButtonReservation button={props.button} />
        <div className="space-min"></div>
    </main>
        <footer>
          <h2>Developed by: Frank Aveiga</h2>
        </footer>
    </>
  )
}

export default DefaultPage