import React from 'react'
import './styles/ButtonNav.css'

const ButtonNav = (props) => {
    const login = ()=>{
        alert('estoy logeado');
      }
      const register = ()=>{
        alert('estoy registrado');
      }
  return (
    <>
        <button className='buttonNav' onClick={()=>props.action =='login'? login() : register()}>{props.name}</button>
    </>
  )
}

export default ButtonNav