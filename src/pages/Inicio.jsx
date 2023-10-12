import { useContext } from 'react'
import Card from '../components/Card'
import './Inicio.scss'
import ProductoContext from '../contexts/ProductoContext.jsx'



const Inicio = () => {
  const { productos } = useContext(ProductoContext)
 

  return (
  <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Todos nuestros productos.</h1>
        <div className='section-cards__p'>
          {
            productos && productos.length <= 0 ? <p> No se encontraron ningun producto</p> : <p>Se encontraron {productos.length} productos</p>
          }
        </div>

        
      </header>

      <div className="cards-container">
        {
          productos && productos.map( (producto, idx) => (
            <Card key={idx} producto={producto} />
          ))
        }
        
      </div> {/* <!-- .cards-container --> */}

    </section> {/* <!-- .section-cards --> */}
  </main> 
  )
}

export default Inicio