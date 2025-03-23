import Formulario from "../components/como-alta/Formulario"
import Tabla from "../components/como-alta/Tabla"
import useTitulo from "../hooks/useTitulo"

const Alta = () => {

  useTitulo('Alta')

  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <hr />
      <Formulario />
      <Tabla />
    </>
  )
}

export default Alta