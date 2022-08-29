import React from 'react'
import AddDishForm from '../../components/forms/AddDishForm';
import FoodItem from '../../components/cards/FoodItem';
import DefaultPage from '../DefaultPage';
import EditDishForm from '../../components/forms/EditDishForm';



 const AddDish = () => {
  return (
    <DefaultPage  actived={false} button={false}>
        <div className="container_addDish">
            <AddDishForm />
        </div>
        <h2>Existing menu</h2>
            <div className="Container_FoodItem">
                <FoodItem/> 
            </div>

    </DefaultPage>
  )
}
export default AddDish;