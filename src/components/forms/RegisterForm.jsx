import{useState} from 'react'
import {  useAuth} from "../../context/authContext";
import{useNavigate } from 'react-router-dom'

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
        

    <section onSubmit={handleSubmit} className='formulario'>
        {error?<p>{error}</p>:<p></p>}

        <form action="">
            <label htmlFor="email">email</label>
            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>

            <label htmlFor="password">password</label>
            <input type="password" name='password' placeholder='password' onChange={handleChange} />

            <button type='submit'>Register</button>
        </form>
    </section>
    )
}

export default RegisterForm