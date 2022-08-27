import React, { useState,useEffect } from "react";
import CardMenu from './CardMenu';
import { db } from "../../firebase/firebase";
import './styles/GroupCards.css'
import {collection,onSnapshot} from "firebase/firestore";


const GroupCards = () => {  
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

    return (
        <section className="menuDishes">
        <article  className="cards">
            {dishes.map((dish)=>{
                return <CardMenu key={dish.id} img={dish.img} title={dish.name} description={dish.description}/>
            })}
        </article>
    </section>
  )
}

export default GroupCards