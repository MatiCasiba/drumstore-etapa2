
const TablaFila = ({producto}) => {
  return (
    <>
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.marca}</td>
            <td>{producto.categoria}</td>
            <td>{producto.descripcion}</td>
            <td>
                <img src={producto.foto} alt={producto.nombre} style={{width: '40px'}} />
            </td>
            <td>{producto.envio ? 'si' : 'no' }</td>
            <td>
                <button>Ver</button>
                <button>Editar</button>
                <button>Borrar</button>
            </td>
        </tr>
    </>
  )
}

export default TablaFila