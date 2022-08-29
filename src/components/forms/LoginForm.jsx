import {React,useState} from 'react'

const LoginForm = () => {

    const [user,setUser] = useState({
        email:'',
        password:'',
    })

  return (
    <>
        <input type="password" name='password' id='password' />
        <input type="email" name='email' id='email' />
    </>
  )
}

export default LoginForm