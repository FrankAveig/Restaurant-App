import React from 'react'
import ModalCard from '../components/cards/ModalCard'
import DefaultPage from './DefaultPage'


const HomePage = () => {



  return (

    <DefaultPage  actived={true} button={true}>

        
        <section className='description'>
            <p>Calle Josep Tarradellas, 29 - P. 2 PTA. 1, SANT CUGAT DEL VALLES</p>
            <p><br/>Attention to the public schedule: Monday - Sunday 1:00 p.m. - 11:00 p.m.</p>
        </section>
        <ModalCard/>
    </DefaultPage>
  )
}

export default HomePage