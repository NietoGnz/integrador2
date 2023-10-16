import { useContext } from "react";
import "./Carrito.scss";
import CarritoContext from "../contexts/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id)
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  const calcularTotalProductos = () => {
  let sumaCantidad = carrito.reduce ((totalProductos, prod) => {
    return totalProductos + prod.cantidad
  }, 0)
  return sumaCantidad
  }


  const handleComprar = () => {
    guardarCarritoContext()
  }

  return (
    <>
      <div className="nosotros__split"></div>
      <h1>Listado de productos en el carrito</h1>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            carrito.length <= 0 ? (
              <tr>
                <td colSpan={5} style={{textAlign: 'center'}}><strong>No hay productos</strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={producto.foto} alt={producto.nombre} width="50px" />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio*producto.cantidad}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )
          }
          <tr>
            <td colSpan={1}><strong>Cantidad total de productos</strong></td>
            <td><strong>{parseFloat(calcularTotalProductos())}</strong></td>
            <td colSpan={1}><strong>Total</strong></td>
            <td><strong>${parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      { !carrito.length <= 0 && <button className="btn btn-success" id="comprar" onClick={handleComprar}>Comprar</button>}
    </>
  );
};

export default Carrito;
