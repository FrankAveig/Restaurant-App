import React, { useState } from "react";
import './styles/AddDishForm.css'
import { db } from "../../firebase/firebase";
import { collection,addDoc,doc,updateDoc} from "firebase/firestore"; 

    const formInicial = {
        name: "",
        description: "",
        img: '',
    };

const EditDishForm = (props) => {
    const [form, setForm] = useState(formInicial);

    const updateDish = async (idDish) => {
        const documento = doc(db, "dishes", idDish);
        await updateDoc(documento, form);
      };

  return (
    <section className="addMenu">
        <form className='addMenu__form'>
                <input type="text" placeholder='Name'onChange={(e)=>setForm({...form,name: e.target.value})} />
                <input type="text" placeholder='URL IMG' onChange={(e)=>setForm({...form,img: e.target.value})} />
                <textarea type="text" placeholder='Description' onChange={(e)=>setForm({...form,description: e.target.value})} />
                <h1>{props.id}</h1>
                <button type="button" onClick={()=>updateDish(props.id)}>Edit Dish</button>
        </form>
    </section>
  )
}

export default EditDishForm