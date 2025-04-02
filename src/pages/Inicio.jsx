import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'
import Slider from '../components/Slider'

const Inicio = () => {

  const {productos} = useContext(ProductosContext)
  useTitulo('Inicio')

  return (
    <>

      <main>
        <Slider />
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Nuestros productos:</h1>
            <p>Mapex - DW - Zildjian - Evans</p>
          </header>
        </section> 

        <section className="cards-container" id="container-productos">
          {
            productos && productos.map((producto)=> (
              <Card producto={producto} key={producto.id} />
            ))
          }
          
        </section>
      </main>

    </>
  )
}

export default Inicio