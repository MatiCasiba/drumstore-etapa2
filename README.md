* Nombre: Matias Casiba
* Link github repo: https://github.com/MatiCasiba/drumstore-etapa2
* Link Netlify:

# Integrador etapa 2

## Drumstore
En esta segunda etapa del integrador, seguiré con la página que habia armado en la primera parte (https://github.com/MatiCasiba/drumstore), que se trataba de una tienda con productos para el instrumento de la batería, es ese proyecto trabajé con SASS, HTML y JavaScript. Ahora en esta segunda parte trabajaré más con SASS, REACT y también tendré un archivo JSON para simular un backend.

## SASS
Como voy a estar trabajando los estilos con sass, tendré que instalarlo:
```sh
npm install -D sass-embedded
```
Luego lo que tenga escrito con "css" lo modificaré al nombre por "scss", ej: index.css -> index.scss.

* main.jsx, voy a tener que cambiar el nombre de la importación
```sh
import './index.scss'
```

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
Dentro de App.jsx estaré importando los componentes Header.jsx y Footer.jsx:
```sh
import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Rutas />

      <Footer />
      
    </BrowserRouter>
  )
}

export default App

# siempre dentro del BrowserRouter, que es el enrutador y lo utlizio para sincronizar la interfaz de usuario con la url del navegador, permite que las url sean más legibles y optimizadas para SEO
```

## Components

## Pages
Dentro de la carpeta page estará mis componentes Alta.jsx, Inicio.jsx, Carrito.jsx, Contacto.jsx, NoEncontrado.jsx y Nosotros.jsx.

### Inicio.jsx
Los contenedores que tengo con clases que uso para sass, osea todo el inicio de la página que contiene los productos, me los traigo a Inicio.jsx:

```sh
const Inicio = () => {
  return (
    <>
      # el header estará en un componente aparte y se encontrará en App.jsx

      <main>
        <div className="slider"></div>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Nuestros productos:</h1>
            <p>Mapex - DW - Zildjian - Evans</p>
          </header>
        </section> 

        <section className="cards-container" id="container-productos">

        </section>
      </main>

      <footer>
        <div className="content-footer">

          <div className="content-footer__empresa">
            <div className="content-footer__logo-eslogan">
              <img className="content-footer__logo-footer" src="/logo/ds-logo-sf.png" alt="logo drumstore" />
              <h2 className="content-footer__titulo-footer">DrumStore</h2>
              <p className="content-footer__eslogan">Baterias, parches, platillos y palillos de calidad</p>
            </div> 
            <div className="content-footer__logo-redes">
              <a href="https://www.threads.net/@s.a.c.m.a.t" target="_blank" title="threads">
                <img className="content-footer__loguito" src="/icons-footer/threads-icon.png" alt="logo threads" />
              </a>
              <a href="https://www.instagram.com/s.a.c.m.a.t?igsh=cDJ1Yno0ZHppdnR1" target="_blank" title="s.a.c.m.a.t">
                <img className="content-footer__loguito"  src="/icons-footer/instagram-icon.png" alt="logo instagram" />
              </a>
              <a href="mailto:casibagabriel@gmail.com" target="_blank" title="correo">
                <img className="content-footer__loguito"  src="/icons-footer/mail-icon.png" alt="logo email" />
              </a>
              <a href="https://github.com/MatiCasiba" title="github-MatiCasiba" target="_blank">
                <img className="content-footer__loguito"  src="/icons-footer/github-icon.png" alt="logo github" />
              </a>
            </div> 
          </div> 

          <div className="content-footer__pays">

            <div className="content-footer__tarjetas-info">
              <img className="content-footer__icons" src="/icons-footer/home-icon.png" alt="imagen casa" />
              <p className="content-footer__text-info">Sumá los productos que quieras al carrito. Te los llevamos hasta dónde estés.</p>
            </div>
            <div className="content-footer__tarjetas-info">
              <img className="content-footer__icons" src="/icons-footer/icon-cards.webp" alt="imagen tarjeta de pago" />
              <p className="content-footer__text-info">Pagá con tarjeta o en efectivo. Tu dinero está protegido con Mercado Pago</p>
            </div> 

          </div> 

          <div className="content-footer__content-cardLogos">
            <img src="/icons-footer/visa-icon.png" alt="imagen tarjeta visa" className="content-footer__logos-pays" />
            <img src="/icons-footer/american-express-icon.png" alt="imagen tarjeta american express" className="content-footer__logos-pays" />
            <img src="/icons-footer/mastercard.png" alt="imagen tarjeta mastercard" className="content-footer__logos-pays" />
            <img src="/icons-footer/paypal-icon.png" alt="imagen paypal" className="content-footer__logos-pays" />
          </div> 
        </div> 
      </footer>
    </>
  )
}

export default Inicio
```
* Nota: antes tenia class y en los label tenía for, a esto los eh remplazado por los nombres className y htmlFor.

### Header.jsx
En este componente se encontrará la cabecera de la página, que contendrá 2 componentes dentro, el Navbar.jsx y SearchBar.jsx, eh separado estos códigos html que tenía todo junto en cabecera, si bien lo sigue teniendo, pero se encuentran dentro de cada componente, para ser más ordeado:

```sh
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <>
            <header className="main-header">
                <input type="checkbox" id="menu" />

                <Navbar />

                <SearchBar />
                
            </header>
        </>
    )
}

export default Header
```

#### Navbar.jsx
Contendrá los links de las navegaciones
```sh
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-bar__nav-list">
          <li className="nav-bar__nav-item">
            <a href="" className="nav-bar__nav-link">Inicio</a>
          </li>
          <li className="nav-bar__nav-item">
            <a href="" className="nav-bar__nav-link">Alta</a>
          </li>
          <li className="nav-bar__nav-item">
            <a href="src/pages/nosotros/nosotros.html" target="_self" className="nav-bar__nav-link">Nosotros</a>
          </li>
          <li className="nav-bar__nav-item">
            <a href="src/pages/contacto/contacto.html" target="_self" className="nav-bar__nav-link">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
```

#### SearchBar.jsx
Contendrá la barra buscadora
```sh
const SearchBar = () => {
    return (
        <>
            <div className="search-bar">
                <div className="search-bar__logo-container">
                    <img className="search-bar__logo-img" src="/logo/ds-logo-sf.png" alt="logo ds" />
                </div>
                <button className="theme-toggle">⚫</button>
                <form action="#" className="search-bar__form-container">
                    <label htmlFor="busqueda" className="search-bar__form-label">
                        <img className="search-bar__logo-search" src="/logo/logo-search.png" alt="logo del bucador" />
                    </label>
                    <input type="search" id="busqueda" className="search-bar__form-search" />
                    <button type="submit" className="search-bar__form-submit">Buscar</button>
                </form>
                <div className="search-bar__carrito-container">
                    <img className="search-bar__cart-logo" src="/logo/cart-logo.png" alt="logo de carro" />
                </div>
                <div className="menu-toogle">
                    <label htmlFor="menu" className="menu-toogle__label">
                        <span className="menu-toogle__top-bread"></span>
                        <span className="menu-toogle__meat"></span>
                        <span className="menu-toogle__bottom-bread"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default SearchBar
```