import {collection,onSnapshot,doc,deleteDoc } from "firebase/firestore";
import { db} from "../../firebase/firebase";
import React, { useState,useEffect } from "react";
import EditDishForm from "../forms/EditDishForm";
import './styles/FoodItem.css'

export let id ='aa';
const FoodItem = () => {
    const[dishes,setDishes] = useState([]);
    
    useEffect(()=>
        onSnapshot(collection(db , 'dishes'),(snapshot)=>{
            const data =snapshot.docs.map((dish) => ({
                id:dish.id,
                ...dish.data(), }))
                setDishes(data)
            }
    )
    ,[]);

    const eliminarDish = async (idDish) => {
        const documento = doc(db, "dishes", idDish);
        await deleteDoc(documento);
      };        


  return (
    <>
    {dishes.map((dish) =>{
        return (
        <div key={dish.id} className="itemsFood">
            
            <div className="item">
                <h3>{dish.name}</h3>
                <div className="buttons">
                    <button type="button" onClick={() => eliminarDish(dish.id)}>Eliminar</button>
                    <button type="button" onClick={() => id=dish.id}>Editar</button>
                </div>
            </div>
        </div>
    )
    
    })}
    </>
  )
}

export default FoodItem