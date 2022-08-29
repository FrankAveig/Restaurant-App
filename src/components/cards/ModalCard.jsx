import React from 'react'
import {useState} from 'react'
import { useAuth } from '../../context/authContext'

const ModalCard = () => {
const [flag, setFlag] = useState(true)
const cerrar= ()=>{
  setFlag(false)
}
const open = ()=>{
  setFlag(true)
}
const {user} = useAuth()
  return (
    <>
    <div className="modal" style={{visibility:user||!flag?'hidden':'visible'}}>
    <div className="container">
      <h6>!!Como usar la aplicación!!</h6>
      <p>Existen dos roles con los que puedes logearte y las barras de navegacion cambian segun el rol</p>
      <p><strong>Administrador:</strong> Con este rol puedes editar el menu añadiendo nuevos platos
        o editando los existentes, ademas tambien puedes ver las reservaciones de todos
        los usuarios.
      </p>
      <p><strong>Usuario:</strong> Con este rol puedes realizar reservaciones, y cancelarlas tambien</p>

      <p><strong>Para ingresar como admin usa las siguientes credenciales</strong></p>
      <p>email: admin@admin.com</p>
      <p>password: 123456</p>
      <p><strong>Para ingresar como usuario usar la cuenta ya creada o puedes registrar una nueva en la seccion
        de register</strong></p>
      <p>email:invitado@invitado.com</p>
      <p>email:123456</p>
      <button onClick={cerrar}>Cerrar</button>
    </div>
  </div>
    <button  onClick={open}>How to use the page</button>

    </>
  
  )
}

export default ModalCard