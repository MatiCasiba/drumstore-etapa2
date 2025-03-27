import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContex'

const Card = ({producto}) => {

    const {agregarProductoAlCarritoContext} = useContext(CarritoContext)

    const handleAgregar = (producto) => {
        agregarProductoAlCarritoContext(producto)
    }

    return (
        <>
            <div className="card">
                <article className="card__article">
                    <div className="card__image-container">
                        <img className="card__image" src={producto.foto} alt={producto.nombre} />
                    </div>
                    <div className="card__content">
                        <h2 className="card__heading">{producto.nombre}</h2>
                        <div className="card__description">
                            <p><b>{producto.precio}</b></p>
                            <button 
                                className="card__boton" 
                                onClick={()=>handleAgregar(producto)}
                            >
                                COMPRAR
                            </button>
                        </div>
                        
                    </div>
                </article>
            </div>
        </>
    )
}

export default Card