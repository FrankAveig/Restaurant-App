import{useState} from 'react'
import {  useAuth} from "../../context/authContext";
import{useNavigate,NavLink } from 'react-router-dom'

const RegisterForm = () => {
    const[user,setUser] = useState({
        email:'',
        password:'',
    })
    const [error,setError] = useState();

    const {singUp} = useAuth()
    const navigate =useNavigate()

    const handleChange = ({target:{name,value}}) =>{
        setUser({...user,[name]:value})
    }
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        try{
            await singUp(user.email,user.password)
            navigate('/')
        }catch(error){
            if (error.code === 'auth/invalid-email'){
                setError('Invalid Email')
            }else if(error.code ==='auth/weak-password' ) {
                setError('Password should be at least 6 characters')
            }
        }
    }

    return (
        
<>
          <div className="error" style={{ visibility:error?'visible':'hidden'}}  >
             {error?<p>{error}</p>:<p></p>}
            </div>
        <section className='formulario'>

        <form  onSubmit={handleSubmit} action="">
        <h1>REGISTER</h1>

            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>

            <input type="password" name='password' placeholder='password' onChange={handleChange} />

            <button style={{cursor:'pointer'}} type='submit'>Register</button>
        </form>
        <ul>
            <li>If you already have an account  <NavLink to="/login">Log in</NavLink></li>
        </ul>
    </section>
</>
    )
}

export default RegisterForm