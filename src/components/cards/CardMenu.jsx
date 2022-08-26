import React from 'react'
import './styles/CardMenu.css'
const CardMenu = (props) => {
  return (
    <section className='CardMenu'>
        <div className="container">
            <img src={props.img} alt="" />
            <div className="CardMenu__texto">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </section>
  )
}

export default CardMenu;