import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MenuPage  from '../pages/MenuPage';
import NavBar from '../components/navigation/NavBar';
import ReservationPage from '../pages/users/ReservationPage';
import ContactPage from '../pages/ContactPage';
import AddDish  from '../pages/admin/AddDish';
import { useAuth } from '../context/authContext';
import RegisterPage from '../pages/no-users/RegisterPage';
import LoginPage from '../pages/no-users/LoginPage';
import { UserRouter } from './UserRouter';
import NavAdmin from '../components/navigation/NavAdmin';
import ReservationNoUserPage from '../pages/no-users/ReservationNoUserPage';

const RestaurantRouter = () => {
  
  const {user} = useAuth() 
  console.log(user) 
  return (
    <BrowserRouter>
              
              <header>
                {user?[user.email==='ab@a.com'?< NavAdmin user={user.email} key='admin'/>:<h1>eres  user</h1>]:<NavBar/>}
                </header>
        
                <Routes>
                    <Route path='/' element={< HomePage/>} />
                    <Route path='/about' element={<AboutPage/>} />
                    <Route path='/menu' element={<MenuPage/>} />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path='/noreservation' element={<ReservationNoUserPage/>} />
                    <Route path='/register' element={<RegisterPage/>} />  
                    <Route path='/login' element={<LoginPage/>} />  
                    {/* Rutas Protegidas */}
                    <Route path='/new' element={<UserRouter><AddDish/></UserRouter>} /> 
                    <Route path='/reservation' element={<UserRouter><ReservationPage/></UserRouter>} />
                </Routes>
    
          </BrowserRouter>
  )
}

export default RestaurantRouter;