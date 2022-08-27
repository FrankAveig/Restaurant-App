import React from 'react'
import AddDishForm from '../components/forms/AddDishForm';
import FoodItem from '../components/cards/FoodItem';
import DefaultPage from './DefaultPage';
import EditDishForm from '../components/forms/EditDishForm';
import { id } from '../components/cards/FoodItem';
 const AddDish = () => {
    console.log(id)
  return (
    <DefaultPage  actived={false} button={false}>
        <div className="container_addDish">
            <AddDishForm />
            <EditDishForm id={id}/>
        </div>
            <div className="Container_FoodItem">
                <FoodItem/> 
            </div>

    </DefaultPage>
  )
}
export default AddDish;