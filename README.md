* Nombre: Matias Casiba
* Link github repo:
* Link Netlify:

# Integrador etapa 2

## Drumstore
En esta segunda etapa del integrador, seguiré con la página que habia armado en la primera parte (https://github.com/MatiCasiba/drumstore), que se trataba de una tienda con productos para el instrumento de la batería, es ese proyecto trabajé con SASS, HTML y JavaScript. Ahora en esta segunda parte trabajaré más con SASS, REACT y también tendré un archivo JSON para simular un backend.

## Rutas
Para el manejo de las rutas, eh instalado el react router:
```sh
npm i react-router
```
Gracias a este obtengo el hook de useRoutes, que lo manejaré en Rutasa.jsx, este archivo se encuentran en src/routes/:

### Rutas.jsx
```sh
# IMPORTO EL HOOK DEL REACT ROUTER
import { useRoutes } from 'react-router'

const Rutas = () => {

    # creo una constante y uso el hook
    const hookRutas = useRoutes(
        # creo las rutas
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/alta',
                element: <Alta />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/carrito',
                element: <Carrito />
            },
            {
                path: '*',
                element: <NoEncontrado />
            },
        ]
    )
    
    # después retorno la constante
    return hookRutas
}

export default Rutas
```
* Importación de los archivos de la carpeta page
```sh
import Inicio from '../pages/Inicio'
import Alta from '../pages/Alta'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import Carrito from '../pages/Carrito'
import NoEncontrado from '../pages/NoEncontrado'
```

#### Importo BrowserRouter y Rutas
El BrowserRouter y Rutas.jsx, los voy a importar en App.jsx:
```sh
import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"

const App = () => {
  return (
    <BrowserRouter>

      <Rutas />
      
    </BrowserRouter>
  )
}

export default App
```
## App.jsx
En App.jsx estará toda mi página conectada con los demás archivos para que funcione

#### Importo componentes en el App
Dentro de App.jsx estaré importando los componentes Navbar.jsx y Footer.jsx:
```sh
import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Rutas />

      <Footer />
      
    </BrowserRouter>
  )
}

export default App

# siempre dentro del BrowserRouter, que es el enrutador y lo utlizio para sincronizar la interfaz de usuario con la url del navegador, permite que las url sean más legibles y optimizadas para SEO
```

## Components

