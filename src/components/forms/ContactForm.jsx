import React from 'react'
import './styles/ContactForm.css'
const ContactForm = () => {
    const enviar = ()=>alert('enviado');
  return (
    <section className="formulario_main ">
    <div className="container">
                <form id="formulario" className="formulario">
                    <h2>Contáctanos</h2>
                    <div className="box-input">
                        <input name="nombre" id="nombre" type="text" required placeholder="Nombre" />
                    </div>
                    <div className="box-input">
                        <input name="apellidos" id="apellidos" type="text" required placeholder="Apellidos" />
                    </div>
                    <div className="box-input">
                        <input name="telefono" id="telefono" type="tel" required placeholder="Telefono" />
                    </div>
                    <div className="box-input">
                        <input name="email" id="email" type="email" required placeholder="Correo" />
                    </div>
                    <div className="box-input">
                        <textarea name="comentarios" id="comentarios" rows={4} cols={40} placeholder="Describe aquí tu consulta" defaultValue={""} />
                    </div>
                    <button id="submit" type="button" className="boton" onClick={enviar}><i className="fab fa-whatsapp" /> Enviar WhatsApp</button>
                </form>
    </div>
</section>
  )
}

export default ContactForm