import { useState } from "react";
import { createContext } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";
import { useEffect } from "react";

//! 1. CREO EL CONTEXTO
const ProductosContext = createContext()

//! 2. ARMO EL PROVIDER
const ProductosProvider = ({children}) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null) // creo el estado de productos

    
    useEffect(() => {
      getAllProductos() // cuando el componente se monte, voy a realizar el getAllProductos
    }, [])
    

    // pido los productos
    const getAllProductos = async () => {
        try {
            const prods = await peticionesHttp(url, {})

            setProductos(prods) // para llenar productos con el array de objetos que viene del json

        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const data = {
        productos
    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

//! 3. EXPORTO EL CONTEXT Y PROVIDER
export {ProductosProvider} // como un objeto lo exporto
export default ProductosContext