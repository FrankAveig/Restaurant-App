import React from 'react'
import CardMenu from './CardMenu'
import './styles/GroupCards.css'
const GroupCards = () => {
  return (
    <section className="menuDishes">
        <article   article className="cards">
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
            <CardMenu img="https://i.ytimg.com/vi/wy0ljTQjOmI/maxresdefault.jpg" title="Robalo a la plancha" description="Bass fish fillets seasoned with salt and pepper, and grilled in a greased pan."/>
        </article>
    </section>
  )
}

export default GroupCards