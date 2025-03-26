import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Swal from "sweetalert2"

const TablaFila = ({producto}) => {

  const {eliminarProductoContex, setProductoAEditar} = useContext(ProductosContext)

  const handleEliminar = (id)=> {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContex(id)
        Swal.fire({
          title: "Deleted!",
          text: "Se eliminó tu el producto.",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "No lo borraste!",
          text: "El producto no se borro",
          icon: "info"
        });
      }
    });

  }

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

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
                <button onClick={()=>handleEditar(producto)}>Editar</button>
                <button onClick={()=>handleEliminar(producto.id)}>Borrar</button>
            </td>
        </tr>
    </>
  )
}

export default TablaFila