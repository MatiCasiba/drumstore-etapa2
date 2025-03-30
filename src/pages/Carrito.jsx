import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import './Carrito.scss'

const Carrito = () => {

  useTitulo('Compras')    

  return (
    <>
      <div className="contenedor-compra">
        <h1>Mis compras</h1>
        <ListadoCarrito />
      </div>

    </>
  )
}

export default Carrito