import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/authContext'
const NavUsers = (props) => {
    const{user,logout,loading}=useAuth();
    const navigate = useNavigate();
    const handleLogout =async ()=>{
      await logout()
      navigate('/');
      if(loading) return <h1>Loading</h1>
    }

  return (
    <>
        <nav className='navBar'>
            <ul>
                <NavLink to="./"><li>Home</li></NavLink>
                <NavLink to="./about"><li>About</li></NavLink>
                <NavLink to="./reservation"><li>Reservation</li></NavLink>
                <NavLink to="./menu"><li>Menu</li></NavLink>
                <NavLink to="./contact"><li>Contact Us</li></NavLink>
            </ul>
            <div className="registration">
              <ul>
                <li style={{textTransform:'lowercase'}}>{props.user}</li>
                <li style={{cursor:'pointer'}} onClick={handleLogout}>Logout</li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavUsers