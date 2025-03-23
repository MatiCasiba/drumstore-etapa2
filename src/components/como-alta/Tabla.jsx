import TablaFila from "./TablaFila"
import './Tabla.scss'

const Tabla = () => {
  return (
    <table className="tabla-alta">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Detalles</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <TablaFila />
        </tbody>
    </table>
  )
}

export default Tabla