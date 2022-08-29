import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage  from '../pages/MenuPage';
import NavBar from '../components/navigation/NavBar';
import ReservationPage from '../pages/ReservationPage';
import ContactPage from '../pages/ContactPage';
import AddDish  from '../pages/AddDish';
import { useAuth } from '../context/authContext';
import RegisterPage from '../pages/RegisterPage';

const RestaurantRouter = () => {
  
  const {user:{login}} = useAuth() 
  
  console.log(login)

  return (
    <BrowserRouter>
              
              <header>
         {login ? <NavBar/>:<h1>no eres user</h1>}             

                </header>
        
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/about' element={<AboutPage/>} />
                    <Route path='/menu' element={<MenuPage/>} />
                    <Route path='/reservation' element={<ReservationPage/>} />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path='/new' element={<AddDish/>} />  
                    <Route path='/register' element={<RegisterPage/>} />  
                </Routes>
    
          </BrowserRouter>
  )
}

export default RestaurantRouter;