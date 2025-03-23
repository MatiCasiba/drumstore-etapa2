import './Card.scss'

const Card = () => {
    return (
        <>
            <div className="card">
                <article className="card__article">
                    <div className="card__image-container">
                        <img className="card__image" src="${prod.foto}" alt="texto foto" />
                    </div>
                    <div className="card__content">
                        <h2 className="card__heading">Nombre</h2>
                        <div className="card__description">
                            <p><b>precio</b></p>
                            <p>$descripción</p>
                        </div>
                        <a className="card__boton" href="#">COMPRAR</a>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Card