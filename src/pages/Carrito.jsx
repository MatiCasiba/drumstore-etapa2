import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {

  useTitulo('Compras')    

  return (
    <>
      <h1>Mis compras</h1>
      <hr />

      <ListadoCarrito />

    </>
  )
}

export default Carrito