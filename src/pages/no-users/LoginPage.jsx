import React from 'react'
import LoginForm from '../../components/forms/LoginForm'
import DefaultPage from '../DefaultPage'

const LoginPage = () => {
  return (
    <DefaultPage actived={false} buttom={true}>
        <LoginForm/>
    </DefaultPage>
  )
}

export default LoginPage