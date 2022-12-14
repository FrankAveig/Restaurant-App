import { useAuth } from '../context/authContext'
import {Navigate} from 'react-router-dom'

export const UserRouter = ({children}) => {
    const {user,loading}=useAuth()
    if(loading) return <h1>loading</h1>
    if(!user) return <Navigate to='/login'/>
  return <>{children}</>
  
}

