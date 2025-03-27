import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// ! Creación del contexto
const CarritoContext = createContext()

// ! Armado del provider
const CarritoProvider = ({children}) => {

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto){
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        // 1-> El producto ya etsa en el carrito
        // 0-> no esta en el carrito
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto){
        // sie encuentra el producto lo retorna
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar contexto', producto);

        // Averiguo si esta op no esta en el carrito y hago en consecuencia
        if(!elProductoEstaEnElCarrito(producto)){
            console.log('No está en el carrito');
            producto.cantidad = 1
            agregarAlCarrito(producto) // agregar el producto en el LocalStorage y modificar el estado
        } else {
            console.log('Ya esta en el carrito');
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito);
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const data = {
        agregarProductoAlCarritoContext,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>

}

//! Exportaciones
export {CarritoProvider}
export default CarritoContext