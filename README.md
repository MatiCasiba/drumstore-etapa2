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

### Resets, tipografía y variables
En el archivo index.scss, coloqué resets, la tipografía y las variables que eh creado donde puse los colores con los que estuve trabajando en la página:
```sh
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

# reset
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

# tipografia 
body {
    font-family: "Open Sans", sans-serif;
    font-size: 100%; // default navegadores 16px
}

# variables 
$color-1: #403d39;
$color-2: #252422;
$color-3: #eb5e28;
$color-4: #F6F6F6;
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
Dentro de la carpeta componentes tendré los componentes Card.jsx Footer.jsx Header.jsx Navbar.jsx Searchbar.jsx y estilos de la página. 

### Card.jsx
En Card.jsx estará el código de las tarjetas, osea armaré toda la tarjeta dentro de este componente:
```sh
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
```
* Esta tarjeta me la llevaré en Inicio.jsx, lo colocaré en el section de tarjetas:
```sh
<section className="cards-container" id="container-productos">
  <Card />
</section>
```

### Header.jsx
En este componente se encontrará la cabecera de la página, que contendrá 2 componentes dentro, el Navbar.jsx y SearchBar.jsx, eh separado estos códigos html que tenía todo junto en cabecera, si bien lo sigue teniendo, pero se encuentran dentro de cada componente, para ser más ordeado:

```sh
import './Header.scss'
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
#### Estilos del Header.scss
Todo lo que contiene header, estrá estilizado mediante las clases, todo los estilisos de mi cabecera se encuentra en el archivo Header.scss:
```sh
@import "../index.scss";

# HEADER

.main-header{
    display: flex;
    flex-direction: column-reverse;
    background: $color-3;

    @media screen and (min-width: 992px){
        &{
            flex-direction: column;
        }
    }

    
    @media screen and (min-width: 1200px){
        & {
            flex-direction: column;
            align-items: center;
        }
    }
}

@keyframes dropdown{
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
}

#menu {
    display: none;

    # hacer funcionar el checkbox -> hacer funcionar el menu toggle
    &:checked + .nav-bar {
        display: block;
        animation: dropdown 0.5s ease-in-out;
    }

    &:checked ~ .search-bar .menu-toogle {
        .menu-toogle__top-bread {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toogle__meat {
            opacity: 0;
        }

        .menu-toogle__bottom-bread {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    }
}

# NAVBAR */

.nav-bar{
    background: $color-3;
    display: none;

    &__nav-list{ # .nav-bar__navlist
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
        background: $color-3;
        font-size: 1rem;

        @media screen and (min-width: 992px){
            &{
                flex-direction: row;
                justify-content: center;
                
            }
        }

    }

    &__nav-item{
        text-align: center;
    }

    &__nav-link{
        display: block;
        background-color: $color-3;
        padding: 1rem 2rem; /* 16px y 32px */
        color: white;
        text-decoration: none;
        position: relative;

        &:active {
            color: black;
        }

        @media screen and (min-width: 992px) {
            &{
                font-size: 1rem;
                font-weight: 600;
                letter-spacing: 2px;
            }
            &:active{
                color: $color-1;
            }
        }

        @media screen and (min-width: 1200px) {
            &{
                background: $color-3;
                color: $color-4;
                font-size: .9rem;
            }
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 2px;
                border-radius: 100%;
                margin-bottom: 10px;
                background-color: $color-4;
                transition: width 0.3s ease-in-out;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }

    @media screen and (min-width: 992px){
        &{
            display: block;
        }
    }

    @media screen and (min-width: 1200px){
        & {
            order: 2; # aseguro que nva-bar esté debajo del serach-bar
            width: 100%;
            background-color: $color-4;
        }
    }
}

# SEARCH BAR

.search-bar{
    display: flex;
    background: $color-3;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    height: 3.7rem;
    margin: 0 auto;
    
    &__logo-container{
        width: 5.75rem;
        height: 3.5rem;

        @media screen and (min-width: 992px){
            &{
                width: 5rem;
                height: 4rem;
                margin-left: 10px;
            }
        }
    }

    &__logo-img{
        opacity: 0;

        @media screen and (min-width: 576px) {
            &{
                opacity: 1;
                width: 60px;
                object-fit: contain;
                
            }
        }

        @media screen and (min-width:1200px) {
            &{
               width: 100px;
               position: relative; 
            }
        }
    }

    &__form-container{
        
        padding: 1rem;
        display: flex;
        flex-basis: 1000px;
        justify-content: center;

        @media screen and (min-width: 992px){
            &{
                max-width: 100%;
            }
        }
    }

    &__form-label{
        background-color: none;
        
    }
    &__logo-search{
        opacity: 0;
        min-width: 20px;
        min-height: 20px;
        max-width: 30px; 
        max-height: 30px;
        object-fit: contain;
        flex-shrink: 0;    

        @media screen and (min-width: 576px) {
            opacity: 1;
        }
        
        
        @media screen and (min-width: 992px){
            &{
                max-height: 35px;
            }
        }
        
    }

    &__form-search{
        background-color: $color-4;
        margin-left:10px;
        padding-left: 10px;
        border-radius: 10px;
        width: 100px;

        @media screen and (min-width: 576px) {
            &{
                width: 180px;
            }
        }
        @media screen and (min-width: 768px) {
            & {
                width: 70%;
            }
        }

        @media screen and (min-width: 992px){
            &{
                width: 30%;
                margin-left: 20px;
            }
        }

        @media screen and (min-width: 1200px) {
            & {
                width: 50%;
            }
        }
    }

    &__form-submit{
        background-color: $color-4;
        margin-left: 2px;
        border-radius: 10px;
        font-size: 0.8rem;
        padding: 5px;

        @media screen and (min-width: 1200px) {
            &:hover{
                background-color: $color-3;
            }
        }
    }

    &__carrito-container{
        flex: 0 0 3rem;
        margin: auto;

        @media screen and (min-width: 992px){
            &{
                flex: 0 0 5rem;
                margin: auto;
                background: none;
            }
        }
    }

    &__cart-logo{
        min-width: 20px;
        min-height: 20px;
        max-width: 30px; 
        max-height: 30px;
        object-fit: contain;
        flex-shrink: 0;
        
        @media screen and (min-width: 768px){
            max-height: 35px;
        }
    }

    @media screen and (min-width: 1200px) {
        & {
            order: 1;
            width: 100%;
        }
    }
}

# MENU TOOGLE 

.menu-toogle{
    display: block;
    flex: 0 0 3rem;
    position: relative;
    cursor: pointer;
    height: 50px;

    &__label {
        display: block;
        height: 100%;
    }

    &__top-bread,
    &__meat,
    &__bottom-bread{
        display: block;
        background-color: #333;
        height: .2rem;
        position: absolute;
        left: .5rem;
        right: .5rem;
        transition: all 0.3s ease-in-out;
    }

    &__top-bread{
        top: .8rem;
    }

    &__meat{
        top: 50%;
        margin-top: -.1rem;
    }

    &__bottom-bread{
        bottom: .8rem;
    }

    @media screen and (min-width: 992px) {
        & { # menu-toogle
            display: none;
        }
    }

}
``` 

### Footer.jsx
Tendré mi pie de página en un componente que se llama Footer.jsx, este pie lo voy a estar usando en App.jsx

```sh

const Footer = () => {
  return (
    <>
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

export default Footer
```

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

      # el footer estará en un componete aparte y también se encuentra en App.jsx
    </>
  )
}

export default Inicio
```
* Nota: antes tenia class y en los label tenía for, a esto los eh remplazado por los nombres className y htmlFor.