import React from 'react'
import DefaultPage from './DefaultPage'

const AboutPage = () => {
  return (
    <DefaultPage  actived={true}>
        <section className='description'>
            <p>
                At the Frank's Restaurant there is a space dedicated to Italian cuisine, 
                its name is Orvietto. It is ideal for lovers of elegance and comfort, 
                in addition to the sweet vibration emitted by the piano every night, it 
                completes the charm of the place accompanied by its main dishes such as Robalo 
                a la Beatriz, Baby Beef, Fettuccine with Chicken , Risotto.
            </p>
        </section>
    </DefaultPage>
  )
}

export default AboutPage