import React from 'react'
import DefaultPage from './DefaultPage'
import ContactForm from '../components/forms/ContactForm'
const ContactPage = () => {
  return (
    <DefaultPage  actived={false} button={false}>
        <ContactForm/>
    </DefaultPage>
  )
}

export default ContactPage