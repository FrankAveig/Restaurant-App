import React from 'react'
import DefaultPage from './DefaultPage'
import CardMenu  from '../components/cards/CardMenu'
import './styles/MenuPage.css'
const MenuPage = () => {
  return (
    <DefaultPage actived={false}>
        <h2>Menu</h2>
        <section className="menu">
            <article className="cards">
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            
            </article>
        </section>
    </DefaultPage>
  )
}

export default MenuPage;