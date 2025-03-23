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

    const data = {
        productos
    }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

//! 3. EXPORTO EL CONTEXT Y PROVIDER
export {ProductosProvider}
export default ProductosContext