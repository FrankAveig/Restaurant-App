import React from 'react'
import ButtonNav from '../buttons/ButtonNav'
import {NavLink} from 'react-router-dom'
import './styles/Navbar.css'
const NavBar = () => {
 
  return (
    <>
        <nav className='navBar'>
            <ul>
                <NavLink to="./"><li>Home</li></NavLink>
                <NavLink to="./about"><li>About</li></NavLink>
                <NavLink to="./reservation"><li>Reservation</li></NavLink>
                <NavLink to="./menu"><li>Menu</li></NavLink>
                <NavLink to="./contact"><li>Contact Us</li></NavLink>
                <NavLink to="./New"><li>Menu Add</li></NavLink>
            </ul>
            <div className="registration">
              <ButtonNav name='LOGIN' action='login' />
              <ButtonNav name='REGISTER'  action='register' />
            </div>
        </nav>
    </>
  )
}

export default NavBar