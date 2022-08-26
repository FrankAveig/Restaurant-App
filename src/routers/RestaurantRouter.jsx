import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage  from '../pages/MenuPage';
import NavBar from '../components/navigation/NavBar';
import ReservationPage from '../pages/ReservationPage';


const RestaurantRouter = () => {
  return (
    <BrowserRouter>
        <header>
            <NavBar/>
        </header>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/menu' element={<MenuPage/>} />
            <Route path='/reservation' element={<ReservationPage/>} />

            
        </Routes>
    </BrowserRouter>
  )
}

export default RestaurantRouter;