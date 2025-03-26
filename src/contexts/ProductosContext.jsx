import { useState } from "react";
import { createContext } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";
import { useEffect } from "react";

//! 1. CREO EL CONTEXTO
const ProductosContext = createContext()

//! 2. ARMO EL PROVIDER
const ProductosProvider = ({children}) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)

    
    useEffect(() => {
      getAllProductos()
    }, [])
    
    const getAllProductos = async () => {
        try {
            const prods = await peticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {
        
        try {
            delete productoNuevo.id // borra el atributo/key id del objeto productoNuevo
            // ! peticion post
            const options = {
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(productoNuevo)
            }

            const prods = await peticionesHttp(url, options)
            const nuevoEstadoProductos = [...productos, prods]
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[crearProductoContext]', error)
        }
    }

    const actualizarProductoContext = (productoAEditar) => {

    }

    const eliminarProductoContex = async (id) => {
        try {
            const urlEliminacion = url + id
            const options = {
                method: 'DELETE'
                
            }
            const prodEliminado = await peticionesHttp(urlEliminacion, options)
            console.log(prodEliminado);
            const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)
            setProductos(nuevoEstadoProductos)
        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }
    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContex
    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

//! 3. EXPORTO EL CONTEXT Y PROVIDER
export {ProductosProvider}
export default ProductosContext