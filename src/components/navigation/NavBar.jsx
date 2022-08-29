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
                <NavLink to="./noreservation"><li>Reservation</li></NavLink>
                <NavLink to="./menu"><li>Menu</li></NavLink>
                <NavLink to="./contact"><li>Contact Us</li></NavLink>
            </ul>
            <div className="registration">
              <ul>
                <NavLink to="./login"><li>Login</li></NavLink>
                <NavLink to="./register"><li>Register</li></NavLink>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar