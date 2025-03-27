import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContex"
import ItemCarrito from "./ItemCarrito";
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito } = useContext(CarritoContext)
    console.log(carrito);

    const handleComprar = () => {
        console.log('Comprando...')
        //guardarCarritoContext()
    }

    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        //limpiarCarritoContext()
    }

    return (
        <>
            <table className='tabla-carrito'>
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
                                <td colSpan={5} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>
            </table>
            <hr />
            {!carrito.length <= 0 && (
                <>
                    <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button onClick={handleComprar}>Comprar</button>
                </>
            )
            }
        </>
    )
}

export default ListadoCarrito