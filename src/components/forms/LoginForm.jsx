import{useState,useRef } from 'react'
import {  useAuth} from "../../context/authContext";
import{useNavigate,NavLink,Navigate } from 'react-router-dom'
import './styles/LoginForm.css'
const LoginForm = () => {
    const[user,setUser] = useState({
        email:'',
        password:'',
    })
    const [error,setError] = useState();

    const {login} = useAuth()
    const navigate =useNavigate()

    const handleChange = ({target:{name,value}}) =>{
        setUser({...user,[name]:value})
    }
    let errorP = useRef();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await login(user.email,user.password)
            navigate('/')
        }catch(error){
            if (error.code === 'auth/user-not-found'){
                setError('User not Found')
            }else if(error.code ==='auth/wrong-password' ) {
                setError('Wrong Password')
            }else if(error.code === 'auth/too-many-requests'){
                setError('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later')
            }else if(error.code === 'auth/invalid-email'){
                setError('Invalid Email')
            }
        }
    }



    return (
        <>
    <div ref={errorP} className="error" style={{ visibility:error?'visible':'hidden'}}>
        {error?<p>{error}</p>:<p></p>}
    </div>
    <section  className='formulario'>

        <form onSubmit={handleSubmit} action="">
            <h1>LOGIN</h1>
            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>

            <input type="password" name='password' placeholder='password' onChange={handleChange} />

            <button style={{cursor:'pointer'}} type='submit'>Login</button>
        </form>
            <ul>
            <li>If you already have an account  <NavLink to="/register">Register Free</NavLink></li>
            </ul>
    </section>
        </>
    )
}

export default LoginForm