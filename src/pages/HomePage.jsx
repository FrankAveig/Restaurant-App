import React from 'react'
import DefaultPage from './DefaultPage'

const HomePage = () => {
 
  return (
    <DefaultPage  actived={true} button={true}>
        <section className='description'>
            <p>Calle Josep Tarradellas, 29 - P. 2 PTA. 1, SANT CUGAT DEL VALLES</p>
        </section>
    </DefaultPage>
  )
}

export default HomePage