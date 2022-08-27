import React from 'react'
import DefaultPage from './DefaultPage'
import GroupCards from '../components/cards/GroupCards'
const MenuPage = () => {
  return (
    <DefaultPage actived={false} buttom={true}>
        <h2>Menu</h2>
        <GroupCards/>
    </DefaultPage>
  )
}

export default MenuPage;