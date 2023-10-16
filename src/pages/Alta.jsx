import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import "./Alta.scss";

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>
    <div className="nosotros__split"></div>
    <div className='formulario'>
      <h1 className='formulario-h1'>Formulario de alta de productos</h1>
      <h2 className='formulario-h2'>Agregar producto</h2>
      <Formulario  productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
      </div>
    </>
  )
}

export default Alta