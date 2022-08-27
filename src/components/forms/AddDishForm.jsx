import React, { useState } from "react";
import './styles/AddDishForm.css'
import { db } from "../../firebase/firebase";
import { collection,addDoc} from "firebase/firestore"; 

    const formInicial = {
        name: "",
        description: "",
        img: '',
    };

const AddDishForm = (props) => {
    const [form, setForm] = useState(formInicial);

    const addDish = async () => {
        const colectionDish = collection(db, "dishes");
        await addDoc(colectionDish, form);
      };

  return (
    <section className="addMenu">
        <form className='addMenu__form'>
                <input type="text" placeholder='Name'onChange={(e)=>setForm({...form,name: e.target.value})} />
                <input type="text" placeholder='URL IMG' onChange={(e)=>setForm({...form,img: e.target.value})} />
                <textarea type="text" placeholder='Description' onChange={(e)=>setForm({...form,description: e.target.value})} />
                <button type="button" onClick={addDish}>Add Dish</button>
        </form>
    </section>
  )
}

export default AddDishForm