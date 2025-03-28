import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './Formulario.scss'

const Formulario = () => {

  const {
    crearProductoContext, 
    productoAEditar, 
    setProductoAEditar, 
    actualizarProductoContext} = useContext(ProductosContext)

  const formInicial = {
    id: null,
    nombre: '',
    foto: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcion: '',
    envio: false
  }
  
  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])

  const [form, setForm] = useState(formInicial)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.id === null){
        crearProductoContext(form)
    } else {
        actualizarProductoContext(form)
    }

    handleReset()
  } 

  const handleChange = (e) => {
    const {type, name, checked, value} = e.target

    setForm({
        ...form,
        [name] : type === 'checkbox' ? checked : value
    })
  }

  const handleReset = () => {
    setForm(formInicial)
    setProductoAEditar(null)
  }

  return (
    <>
        <div className="formulario">
            <h2 className="formulario__titulos">{productoAEditar ? 'Editar' : 'Guardar producto'}</h2>
            <form className="formulario__contendor-datos" onSubmit={handleSubmit}>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-nombre">Nombre</label>
                    <input
                        type="text"
                        id="lbl-nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-foto">Foto</label>
                    <input
                        type="text"
                        id="lbl-foto"
                        name="foto"
                        value={form.foto}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-precio">Precio</label>
                    <input
                        type="text"
                        id="lbl-precio"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-stock">Stock</label>
                    <input
                        type="text"
                        id="lbl-stock"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
            
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-marca">Marca</label>
                    <input
                        type="text"
                        id="lbl-marca"
                        name="marca"
                        value={form.marca}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-categoria">Categoría</label>
                    <input
                        type="text"
                        id="lbl-categoria"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__datos">
                    <label className="formulario__labels" htmlFor="lbl-descripcion">Descripción</label>
                    <input
                        type="text"
                        id="lbl-descripcion"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                        className="formulario__entrada-datos"
                    />
                </div>
                <div className="formulario__checkbox">
                    <label className="formulario__labels" htmlFor="lbl-envio">Envío</label>
                    <input
                        type="checkbox"
                        id="lbl-envio"
                        name="envio"
                        checked={form.envio}
                        onChange={handleChange}
                        className="formulario__check"
                    />
                </div>
                <div className="formulario__botones">
                    <button className="formulario__boton" type="submit">
                        {productoAEditar ? 'Editar' : 'Guardar'}
                    </button>

                    <button className="formulario__boton" type="reset" onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Formulario