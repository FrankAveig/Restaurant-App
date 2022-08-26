import React from 'react'
import ButtonNav from '../buttons/ButtonNav'
import './styles/Navbar.css'
const NavBar = () => {
 
  return (
    <>
        <nav className='navBar'>
            <ul>
                <a href=""><li>About</li></a>
                <a href=""><li>Menu</li></a>
                <a href=""><li>Reservation</li></a>
                <a href=""><li>Contact Us</li></a>
            </ul>
            <div className="registration">
              <ButtonNav name='Login' action='login' />
              <ButtonNav name='register'  action='register' />
            </div>
        </nav>
    </>
  )
}

export default NavBar