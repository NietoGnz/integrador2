import React from 'react'
import './contacto.scss'

const Contacto = () => {
  return (
    <>
    <div className="main-contacto">
      <div className="contacto-header">
        <h1>Bienvenidos a ByteBazaar,</h1>
        <h2>Contacto</h2>

          <div className="contacto-formularios">

          <h2>Información de Contacto:</h2>
          <p>Dirección: Calle Falsa 456</p>
          <p>Teléfono: +33 6 60 32 06 45</p>
          <p>Correo Electrónico: ByteBazaar.electronics@gmail.com</p>
          <p>Horario de Atención: Sabado a Domingo: [02:00h] - [08:00]</p>

          </div>

          <div className="contacto-formularios">

            <h2>Formulario de Contacto:</h2>
            <p>Si prefieres, también puedes enviarnos un mensaje a través de este formulario y te responderemos en breve:</p>

              <form className="contacto-formularios__message-form"> 
                <div>
                  <label htmlFor="Mensaje" className="contacto-formularios__message-label"></label>
                  <input type="text" className="contacto-formularios__message-text" id='Mensaje'/>
                  <button type="submit" className="contacto-formularios__message-submit btn btn-primary" >Enviar!</button>
                </div>
              </form>
          </div>
          <div className="contacto-formularios">
            <h2>Ubicación en el Mapa:</h2>
            <p>Aquí puedes encontrar nuestra ubicación en el mapa para visitarnos en persona:
            <img src="" alt="Local"/>
            </p>  
          </div>
    <div className="contacto-formularios__final">
      <h2>Atención al Cliente:</h2>
      <p> En ByteBazaar, la satisfacción del cliente es nuestra prioridad. Nuestro equipo de atención al cliente está aquí para ayudarte con cualquier consulta o problema que puedas tener. No dudes en ponerte en contacto con nosotros y haremos todo lo posible para brindarte la mejor experiencia.</p>
      <p>¡Esperamos escucharte pronto!</p>
      <p> Recuerda personalizar la información de contacto y el formulario según tus necesidades específicas. También puedes agregar cualquier otro detalle que creas que sea relevante para tus clientes. ¡Espero que esto te ayude a crear una página de contacto efectiva para ByteBazaar!</p>
    </div>
    </div>   
    </div>
    </>
  )
}

export default Contacto