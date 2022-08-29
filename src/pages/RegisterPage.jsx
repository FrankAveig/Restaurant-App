import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import DefaultPage from './DefaultPage'
const RegisterPage = () => {
  return (
    <DefaultPage actived={false} buttom={true}>
    <RegisterForm/>
</DefaultPage>
  )
}

export default RegisterPage