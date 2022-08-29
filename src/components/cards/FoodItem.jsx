import {collection,onSnapshot,doc,deleteDoc,updateDoc,getDoc } from "firebase/firestore";
import { db} from "../../firebase/firebase";
import React, { useState,useEffect,useRef } from "react";
import EditDishForm from "../forms/EditDishForm";
import './styles/FoodItem.css'



let formInicial = {
    name: "",
    description: "",
    img: '',
}
let id = ''


const FoodItem = () => {
    const[dishes,setDishes] = useState([]);
    const [form, setForm] = useState(formInicial);

    
    
    let refName = useRef();
    let refUrl = useRef();
    let refDescription = useRef();
    let editMenu = useRef()

    const fillFormEdit = (name,url,description, idDish)=>{

        editMenu.current.style.visibility="visible"

        refName.current.value = name;
        refUrl.current.value = url;
        refDescription.current.value = description;
        
        setForm({
            name:name,
            description:description,
            img:url,
        })
       
        id=idDish;
        
        console.log(form);
    }


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

      const updateDish = async (idDish) => {
        const documento = doc(db, "dishes", idDish);
        await updateDoc(documento, form);
        editMenu.current.style.visibility="hidden"

        console.log('me ejecute update')
      };

      const getDish = async (idDish) => {
        const resp = await getDoc(doc(db,"dishes",idDish));
        const data = resp.data();
       
      };


  return (
    <>
        <div ref={editMenu} className="editMenu " style={{visibility:'hidden'}}>
                    <form className='editMenu__form'>
                            <h3>EDITAR</h3>
                            <input type="text" ref={refName} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                            <input type="text" ref={refUrl} placeholder='URL IMG' onChange={(e) => setForm({ ...form, img: e.target.value })} />
                            <input type="text" ref={refDescription} placeholder='Description' onChange={(e) => setForm({ ...form, description: e.target.value })}/>
                            <div className="buttonsEdit">
                                <button type="button" onClick={()=>updateDish(id)}>Edit Dish</button>
                                <button type="button" onClick={()=>editMenu.current.style.visibility="hidden"}>Close</button>
                            </div>
                    </form>
        </div>
    {dishes.map((dish) =>{
        return (
            
        <div key={dish.id} className="itemsFood">
            
            <div className="item">
                <h3>{dish.name}</h3>
                <div className="buttons">
                    <button type="button" onClick={() => eliminarDish(dish.id)}>Eliminar</button>
                    <button type="button" onClick={()=> fillFormEdit(dish.name,dish.img,dish.description,dish.id)}>Editar</button>
                </div>
            </div>

                
        </div>
    )
    })}
     
    </>
  )
}

export default FoodItem