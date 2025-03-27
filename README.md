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

## main.jsx
El archivo main.jsx es el punto de entrada de la aplicación:
```sh
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'
import { CarritoProvider } from './contexts/CarritoContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <ProductosProvider>
        <App />
      </ProductosProvider>
    </CarritoProvider>

  </StrictMode>,
)

```
Este se encarga de importar dependencias como StricMode de react, createRoot para renderizar la app, los estilos (index.scss), y el componente principal (App.jsx). Encapsula la aplicación en los contestos CarritoProvider y ProductosProvider, para que sus datos estén disponibles en toda la app.

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
import './Card.scss'

const Card = ({producto}) => {
    return (
        <>
            <div className="card">
                <article className="card__article">
                    <div className="card__image-container">
                        <img className="card__image" src={producto.foto} alt={producto.nombre} />
                    </div>
                    <div className="card__content">
                        <h2 className="card__heading">{producto.nombre}</h2>
                        <div className="card__description">
                            <p><b>{producto.precio}</b></p>
                            <p>{producto.descripcion}</p>
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
#### Estilizando la tarjeta
Agregué un archivo Card.scss, con el motivo de poder estilizar la tarjeta. Como los demás estilos, lo tabrajo con media querys, para que la tarjeta se adapte tanto a dispositivos de pantallas chicas como de pantallas grandes:
```sh
@import '../index.scss';

main{
    background-color: $color-4;
}

.section-cards{
    display: flex;

    &__header{
        width: 100%;
        max-width: 1250px;
        margin: 0 auto;
    }
}

.cards-container{
    background-color: $color-4;
    padding: 3%;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

.card {
    display: flex;
    flex-direction: column;

    min-width: 316px;
    max-width: 500px;
    height: 200px;
    

    background-color:  $color-3;
    color: $color-1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);

    transition: transform .3s;

    &__article {
        display: flex;
    }
    &__image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__image-container {
        height: 200px;
        overflow: hidden;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    }

    &__content{
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        flex-grow: 1; 
        padding: 2%;

    }
    &__heading{
        font-size: 1.2rem;
    }
    &__description{
        margin-top: 5px;
        width: 250px;
        font-size: 0.9rem;
    }

    &__boton {
        text-decoration: none;
        font-size: 0.8rem;
        margin-top: auto; 
        display: block;
        text-align: center;
        padding: 10px;
        background-color: $color-1;
        color: $color-3;
        border-radius: 5px;
    }
    

    @media screen and (min-width: 992px) {
        & {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        &__article {
            flex-direction: column;
        }

        & &__image-container { /* .card .card__image-container */
            clip-path: polygon(0 0, 100% 0, 100% 200px, 0 180px);
        }
        &:hover &__image-container,
        &:focus &__image-container {
            clip-path: polygon(0 0, 100% 0, 100% 190px, 0 200px); 
        }

        &__heading {
            font-size: 1.5rem;
            
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1; 
            height: 100%; 
        }

        &__description{
            width: 300px;
            font-size: 1.2rem;
            font-weight: 600;
        }

        &__boton {
            margin-top: 20px; 
            display: block;
            text-align: center;
            padding: 10px;
            background-color: $color-1;
            color: $color-3;
            border-radius: 5px;
        }
    }

    @media screen and (min-width: 1200px) {
        & {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 5px;
        }
    
        &__image-container {
            height: 220px;
            overflow: hidden;
        }
    
        &__heading {
            font-size: 1.5rem;
            text-align: center;
            
        }
    
        &__description {
            margin-top: 15px;
            margin-left: 5px;
            width: 400px;
            font-size: 1rem;
        }
    
        &__content {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 0;
            
        }
    
        &__boton {
            margin-top: 20px;
            padding: 10px;
            text-align: center;
            display: block;
            width: 100%; 
            background-color: $color-1; 
            color: $color-3;
        }
    
        &:hover,
        &:focus {
            # radianes 2pi, gradianes 400, decimales 360 grdos, vueltas 1trun
            transform: scale(1) skew(0deg) rotate(2deg);
            transform-origin: bottom;
            box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.5);
        }
    }
    
}
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
import './Navbar.scss'

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
import './SearchBar.scss'

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
Todo lo que contiene header, estrá estilizado mediante las clases, todo los estilisos de mi cabecera se encuentra en los archivos Header.scss, Navbar.scss y SearchBar.scss:
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
``` 

* Navbar.scss:
```sh
@import "../index.scss";

.nav-bar{
    background: $color-3;
    display: none;

    &__nav-list{ #.nav-bar__navlist 
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
        padding: 1rem 2rem; # 16px y 32px 
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
            order: 2;
            width: 100%;
            background-color: $color-4;
        }
    }
}
```
* SearchBar.scss
```sh
@import "../index.scss";

/* SEARCH BAR */

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

/* MENU TOOGLE */

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
        & { /* menu-toogle */
            display: none;
        }
    }

}
```

### Footer.jsx
Tendré mi pie de página en un componente que se llama Footer.jsx, este pie lo voy a estar usando en App.jsx

```sh
import './Footer.scss'

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
#### Estilizando el footer
Eh creado un archivo Footer.scss, donde se encontará armado todo el estilo de mi pie de página:
```sh
@import "../index.scss";

footer{
    background-color: $color-3;
}
.content-footer{
    background: $color-3;
    color: $color-2;
    padding: 1em;
    margin-top: 5px;
    margin-bottom: 0;

    @media screen and (min-width: 1200px) {
        &{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    @media screen and (min-width: 1400px) {
        &{
            max-width: 1250px;
            margin: 0 auto;
        }
    }

    &__empresa{
        font-size: 1.2rem;

        @media screen and (min-width: 1200px) {
            max-width: 500px;
        }
    }
    &__logo-eslogan{
        padding: 10px;
    }

    &__logo-footer{
        display: flex;
        width: 150px;
        margin: auto;

        @media screen and (min-width: 768px){
            width: 250px;
        }

        @media screen and (min-width: 1200px) {
            width: 100px;
        }
    }
    &__titulo-footer{
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 10px;

        @media screen and (min-width: 768px){
            font-size: 2.3rem;
            letter-spacing: 4px;
        }
    }
    &__eslogan{
        text-align: center;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 40px;

        @media screen and (min-width: 768px){
            font-size: 1.7rem;
            letter-spacing: 4px;
        }
    }
    &__logo-redes{
        display: flex;
        width: 100%;
        gap: 30px;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        @media screen and (min-width: 768px){
            gap: 80px;
        }
    }
    &__loguito{
        width: 40px;

        @media screen and (min-width: 768px){
            width: 60px;
        }

        @media screen and (min-width: 1200px) {
            width: 45px;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;

            &:hover{
                transform: scale(1.3);
                filter: drop-shadow(20px 10px 2px #00000059);
            }
        }
    }

    &__pays{
        width: 100%;
        margin-top: 40px;

        @media screen and (min-width: 992px) {
            display: flex;
        }

        @media screen and (min-width: 1200px) {
            &{
                display: flex;
                width: 55%;
            }
        }

    }
    &__tarjetas-info{
        display: flex;
        width: 90%;
        margin: 0 auto;
        gap: 20px;

        @media screen and (min-width:992px){
            display: block;
        }

        @media screen and (min-width: 1200px) {
            &{
                display: block;
            }
        }
    }
    &__icons{
        width: 100px;

        @media screen and (min-width: 768px){
            width: 140px;
        }
        @media screen and (min-width: 992px) {
            display: flex;   
            margin: 0 auto;
        }

        @media screen and (min-width: 1200px) {
            &{
                width: 100px;
            }
        }
    }
    &__text-info{
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 10px;
        
        @media screen and (min-width: 768px){
            width: 400px;
            font-size: 1.4rem;
            font-weight: 600;
            margin-left: 15%;
            margin-top: 15px;
        }
        @media screen and (min-width:992px) {
            font-size: 1.5rem;
            width: 350px;
            text-align: center;
        }

        @media screen and (min-width: 1200px) {
            &{
                width: 200px;
                font-size: 1.4rem;
                margin: 0 auto;
                margin-top: 10px;
            }
        }
    }

    &__content-cardLogos{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;

        @media screen and (min-width: 992px) {
            width: 90%;
            margin: 0 auto;
            margin-top: 50px;
        }
    }
    &__logos-pays{
        width: 60px;

        @media screen and (min-width: 992px) {
            width: 75px;
        }
        @media screen and (min-width: 1200px) {
            width: 60px;
        }
    }
    
}
```

### Alta.jsx
En este componente, voy a tener un formulario y una tabla (estos dos son componetes dentro de Alta.jsx) de los productos
```sh
import Formulario from "../components/como-alta/Formulario"
import Tabla from "../components/como-alta/Tabla"
import useTitulo from "../hooks/useTitulo"

const Alta = () => {

  useTitulo('Alta')

  return (
    <>
      <h1>Formulario de alta de productos</h1>
      <hr />
      <Formulario />
      <Tabla />
    </>
  )
}

export default Alta
```

#### Formulario.jsx
En el formulario, el usuario ingresará información en las entradas
```sh
import { useContext, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Formulario = () => {

  const {crearProductoContext} = useContext(ProductosContext)

  const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcion: '',
    foto: '',
    envio: false
  }

  const [form, setForm] = useState(formInicial)

  const handleSubmit = (e) => {
    e.preventDefault()
    crearProductoContext(form)
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
  }

  return (
    <>
        <h2>Agregar : editar</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="lbl-nombre">Nombre</label>
                <input 
                    type="text" 
                    id="lbl-nombre" 
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-precio">Precio</label>
                <input 
                    type="text" 
                    id="lbl-precio" 
                    name="precio" 
                    value={form.precio} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-stock">Stock</label>
                <input 
                    type="text" 
                    id="lbl-stock" 
                    name="stock" 
                    value={form.stock} 
                    onChange={handleChange} 
                />
            </div>
            
            <div>
                <label htmlFor="lbl-marca">Marca</label>
                <input 
                    type="text" 
                    id="lbl-marca" 
                    name="marca" 
                    value={form.marca} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-categoria">Categoría</label>
                <input 
                    type="text" 
                    id="lbl-categoria" 
                    name="categoria" 
                    value={form.categoria} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-descripcion">Descripción</label>
                <input 
                    type="text" 
                    id="lbl-descripcion" 
                    name="descripcion" 
                    value={form.descripcion} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-foto">Foto</label>
                <input 
                    type="text" 
                    id="lbl-foto" 
                    name="foto" 
                    value={form.foto} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label htmlFor="lbl-envio">Envío</label>
                <input 
                    type="checkbox" 
                    id="lbl-envio" 
                    name="envio" 
                    checked={form.envio}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Guardar : Editar</button>
            <button type="reset" onClick={handleReset}>Limpiar</button>


        </form>
    </>
  )
}

export default Formulario
```

* Los form. dentro de los value, vienen del estado form, que manejo el inicio del formulario

* ### Crear producto en formulario
    * Haré una función para que se pueda crear un producto en el formulario (que el usuario ingrese los datos de su producto) y se muestre en la tabla:
```sh
# Formulario.jsx

const {crearProductoContext} = useContext(ProductosContext)

  const formInicial = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcion: '',
    foto: '',
    envio: false
  }

  const [form, setForm] = useState(formInicial)

  const handleSubmit = (e) => {
    e.preventDefault() # evita que la página se recargue
    crearProductoContext(form) # llamo a la función del contexto y le pasa el estado form
  }
  # dentro de esta función conecto el contexto de crearProductoContext que viene de ProductosContext.jsx y lo obtengo a trabes del useContext(ProductosContext). Al llamarlo, le paso el objeto form, que contiene los datos ingresados por el usuario

# este handeSubmit se lo pasaré al elemento form -> <form onSubmit={handleSubmit}> ... </form>
```
```sh
# ProductosContext.jsx

# dentro del contexto tengo que tener una funcion que cargue/guarde un producto en mi backend
    const crearProductoContext = async (productoNuevo) => {
        
        try {
            delete productoNuevo.id # borra el atributo/key id del objeto productoNuevo
            
            # peticion POST para enviar el nuevo producto al backend
            const options = {
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(productoNuevo)
            }

            # Envía la peticcion http con los datos del producto
            const prods = await peticionesHttp(url, options)

            # AGREGO EL NUEVO PRODUCTO AL ESTADO LOCAL
            const nuevoEstadoProductos = [...productos, prods]
            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[crearProductoContext]', error)
        }
    }

    const data = {
        productos,
        crearProductoContext
    }

``` 
Entonces Formulario.jsx obtiene crearProductoContext desde ProductosContext usando useContext(ProductosContext). Cuando el usuario completa y envía el formulario, handleSubmit llama a crearProductoContext(form), crearProductoContext dentro de ProductosContex.jsx procesa el producto, lo envía al backend y actualiza el estado global de productos. Cualquier componente que use "productos" (ej: una tabla que los muestra) se actualizará automaticamente gracias al estado global


#### Tabla.jsx
Dentro de la tabla habrá un encabezado y una fila de productos que se encuentra dentro del tbdoy, dentro de este elemento se encuentra el otro componetne que se llamna TablaFila.jsx
```sh
import TablaFila from "./TablaFila"
import './Tabla.scss'
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Tabla = () => {
    # uso el contexto y para tener la data de productos
  const {productos} = useContext(ProductosContext)

  return (
    <table className="tabla-alta">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            { # mapeo de los productos
                productos && productos.map((producto)=> (
                    <TablaFila producto={producto} key={producto.id} />
                                        #⬆️ lo paso como prop al componente
                ))
            }
        </tbody>
    </table>
  )
}

export default Tabla
```
* estilizo la tabla:
```sh
table.tabla-alta {
    border: 1px solid black;
    border-collapse: collapse;
    width: 95%;
    margin: 1px auto;

    th, td{
        border: 1px solid black;
        padding: 8px;
        text-align: left;
    }
}
```

#### TablaFila.jsx
En este componente se encontrará organizado los productos con sus acciones también (ver, editar y borrar)
```sh
#                   ⬇️recibe la prop que viene del componete Tabla.jsx
const TablaFila = ({producto}) => {
  return (
    <>
        <tr>
        #                 ⬇️uso el nombre correcto que tengo el en db.json para que se pueda ver los detalles del producto
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.marca}</td>
            <td>{producto.categoria}</td>
            <td>{producto.descripcion}</td>
            <td>
                <img src={producto.foto} alt={producto.nombre} style={{width: '40px'}}/>
            </td>
            <td>{producto.envío ? 'si' : 'no'}</td>
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
```
* Respecto al ternario donde se encuentra producto.envio ({producto.envio ? 'si' : 'no'}), lo hago porque dentro de este se encuentra un booleano (true o false), React no entiende que esa info es un booleano por lo que en lugar de mostrar true o false, voy a colocar 'si' o 'no', para que el usuario sepa cual tiene envío y cual no.

* ### Elimino productos de la tabla
    * En cada productos se encuentran acciones, una de ellas es eliminar, a ese botón de eliminar lo pondré a funcionar, se eliminará el producto de la tabla y a la vez en mi back:
```sh
# ProductosContext
# Voy a crear en el contexto dicha funcion para eliminar los porductos, que después se lo pasaré a TablaFila.jsx
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
```
Esta función se va a encargar de eliminar el producto de la APIy luego va a actualizar el estado global de productos.
    * Primero se construye la url agregando el id para apuntar al porducto específico que se va a eliminar
    * Después realizo la petición http delete usuando peticionesHttp()
    * Este filtra la lista de productos en el estado global, eliminando el producto con el id dado
    * Finalmente voy a actualizar el estado con setProductos(), dejando fuera el producto eliminado
```sh
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Swal from "sweetalert2"

const TablaFila = ({producto}) => {
  
  # Uso el contexto que tengo en ProductosContexto
  const {eliminarProductoContex} = useContext(ProductosContext)

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

  return (
    <>
        <tr>
            ...
            <td>
                <button>Ver</button>
                <button>Editar</button>
                <button 
                    onClick={()=>handleEliminar(producto.id)}>Borrar</button>
            </td>
        </tr>
    </>
  )
}

export default TablaFila
```
handleEliminar() maneja el evento cuando el usuario jace click sobre el botón de eliminar.
    * Primero muestro una alertad e confirmación usando Swal.fire(), para que este me funcione tuve que instalar el sweetalert2 (npm install sweetalert2)
    * Si el usuario confirma, se ejecuta eliminarProductoContext(id), eliminando el producto de la API (db.json) y del estado global
    * Si se elimina, muestro una alerta de confirmación y si el usuario cancela, muestra una alerta que le va indicar que no se eliminó

### Edito los productos
Otra de las acciones que tengo también es la de editar, cuando el usuario seleccione el botón de editar, este producto se cargará en el formuario, luego el formulario detecta si el usuario está queriendo editar o crear un nuevo producto.
* Producto Context.jsx
```sh
const [productoAEditar, setProductoAEditar] = useState(null)

const actualizarProductoContext = async (productoAEditar) => {
        try {
            const options = {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(productoAEditar)
            }
            const urlActualizar = url + productoAEditar.id
            const productoEditado = await peticionesHttp(urlActualizar, options)

            const nuevoEstadoProductos = productos.map(prod=>prod.id === productoEditado.id ? productoEditado : prod)

            setProductos(nuevoEstadoProductos)

        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }
}
```
const actualizarProductoContext, lo que hace es enviar una petición PUT a la API para actualizar el producto con los nuevos datos. Busca en productos el producto con el mismo id y lo reemplaza con el editado, actualiza el estado global (setProductos(nuevoEstadoProductos)) con la nueva lista de productos

* TablaFila.jsx
```sh
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Swal from "sweetalert2"

const TablaFila = ({producto}) => {

  const {eliminarProductoContex, setProductoAEditar} = useContext(ProductosContext)

  const handleEliminar = (id)=> {
    ...
  }

    # cuando el usuario hace click en el botón editar, esta funcion se ejecuta
  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <>
        <tr>
            ...
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
```
Que es lo que hace el handle editar? llama a setProductoAEditar(producto), que actualiza el estado global del contexto con el producto seleccionado. Como setProductoAEditar está en ProductosContext, cualquier componente que use productoAEditar recibirá el producto seleccionado automáticamente

* Formulario.jsx
```sh
import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Formulario = () => {

    # recibo las props mediante el contexto
  const {
    crearProductoContext, 
    productoAEditar, 
    setProductoAEditar, 
    actualizarProductoContext} = useContext(ProductosContext)

  const formInicial = {
    ...
  }
  
  # Cuando handleEditar actualiza productoAEditar, el useEffect en Formulario.jsx detecta el cambio:
  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar])

  const [form, setForm] = useState(formInicial)

  # Cuando el usuario presiona "editar" (botón de submit), handleSubmit decide si se crea o se actualiza el producto
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.id === null){
        crearProductoContext(form)
    } else {
        actualizarProductoContext(form)
    }
  } 

  const handleChange = (e) => {
    ...
  }

  const handleReset = () => {
    setForm(formInicial)
    setProductoAEditar(null)
  }

  return (
    <>
        <h2>Agregar : editar</h2>
        <form onSubmit={handleSubmit}>
            ...

            <button type="submit">
                {productoAEditar ? 'Editar' : 'Guardar'}
            </button>
            # dentro del boton hago un ternario que cambiará su texto a editar o guardar, dependiendo la accion que decida realizar el ususario

            <button type="reset" onClick={handleReset}>Limpiar</button>


        </form>
    </>
  )
}

export default Formulario
```
Lo que hace useEffect es ver Ss hay un producto seleccionado para editar, rellena el formulario con sus datos. Si productoAEditar es null, significa que el usuario quiere agregar un nuevo producto, entonces se usa el formulario vacío (formInicial).

### Componentes para carrito 
Eh agregado el contexto CarritoContexto.jsx, ListadoCarrito.jsx y ItemCarrito.jsx, te explicaré como se van complementando estos para que funcione el carrito, lo que va a hacer es almacenar los productos:
* #### CarritoContex.jsx
```sh
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

# Creación del contexto
const CarritoContext = createContext()

# Armado del provider
const CarritoProvider = ({children}) => {

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto){
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        # 1-> El producto ya etsa en el carrito
        # 0-> no esta en el carrito
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto){
        # si encuentra el producto lo retorna
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar contexto', producto);

        # Averiguo si esta op no esta en el carrito y hago en consecuencia
        if(!elProductoEstaEnElCarrito(producto)){
            console.log('No está en el carrito');
            producto.cantidad = 1
            agregarAlCarrito(producto) # agregar el producto en el LocalStorage y modificar el estado
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

# Exportaciones
export {CarritoProvider}
export default CarritoContext
```
Este va a definir un contexto global para el carrito, utilizando el hook useLocalStorage para manejar los datos en localStorage y el estado del carrito. La función agregarProductoAlcarritoContext se va a encargar de agregar un producto al carrito si no está, en el caso de que esté, incrementa la cantidad y se va a actualizar el localStorage

* #### useLocalStorage.jsx
Este hook se encuentra en la carpeta de src/hooks:
```sh
import { useState } from "react"

export const useLocalStorage = ( clave, valorInicial = []) => {

    const getValorAlmacenado = () => {

        try {
            const valorAlmacenado = window.localStorage.getItem(clave)
            return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }

    }

    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => {

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo] # creo un nuevo array con lo que tenía más lo nuevo
            setValorAlmacenado(nuevoValorAlmacenado) # seteo el estado (Cambiar el estado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }

    }

    const eliminarValor = (id) => {
        try {
            # const nuevoValorAlmacenado = valorAlmacenado # copia
            const nuevoValorAlmacenado = [...valorAlmacenado] # clona el array

            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id) # Busco indice del producto que están queriendo eliminadar dentro del array clonado
            nuevoValorAlmacenado.splice(indice, 1) # Busco dentro del array clonado, el producto y lo borro
            console.log(nuevoValorAlmacenado) # Acá tengo todo el array del estado menos el producto eliminado
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al eliminar ${clave} del localstorage con ${id} del producto ${error}`)
        }
    }

    const limpiarValores = () => {
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }
    #           0
    return [ guardarValor, eliminarValor, limpiarValores, valorAlmacenado ]

}
```
Este me va a permitir almacenar, obtener, eliminar y limpiar valores en el localStorage, la funciones principales de este hook:
    * guardarValor: agrega un producto al carrtio en localStorage
    * eliminarValor: se va a encargar de eliminar un producto por id
    * limpiarValores: va a limpiar todo el carrito

* #### ListadoCarrito.jsx
Este componente muestra los productos del carrito en una tabla:
```sh
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContex"
import ItemCarrito from "./ItemCarrito";

const ListadoCarrito = () => {

    const { carrito } = useContext(CarritoContext)
    console.log(carrito);

    const handleComprar = () => {
        console.log('Comprando...')
        //guardarCarritoContext()
    }

    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        //limpiarCarritoContext()
    }

    return (
        <>
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>
            </table>
            <hr />
            {!carrito.length <= 0 && (
                <>
                    <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button onClick={handleComprar}>Comprar</button>
                </>
            )
            }
        </>
    )
}

export default ListadoCarrito
```
Se usa useContext(CarritoContext) para poder acceder al carrito global, también se impementan botones para vaciar el carrito (handleLimpiarCarrito), y realizar la compra (handleComprar)

* #### ItemsCarrito.jsx
Este componente representa una fila de producto dentro del carrito:
```sh
import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContex'

const ItemCarrito = ({producto}) => {

    const {eliminarProductoDelCarritoContext} = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log('Eliminando el producto...', id)
        //eliminarProductoDelCarritoContext(id)
    }

  return (
    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
        </td>
        <td>{producto.nombre}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default ItemCarrito
```


## menuItems.js
eh creado un archivo para los items del menú que tengo en la página, este archivo js lo encontrarás en src/constants/ :
```sh
const menuItems = [
    {id: 1, nombre: 'Inicio', ruta: '/'},
    {id: 2, nombre: 'Alta', ruta: '/alta'},
    {id: 3, nombre: 'Nosotros', ruta: '/nosotros'},
    {id: 4, nombre: 'Contacto', ruta: '/contacto'}
]

export default menuItems
```
### Uso del menuItems.js
obviamente le voy a dar utilidad, lo estaré usando Navbar.jsx, dentro de este componente. se encontrarpa otro componenten que se llama NavItems.jsx (también está dentrod de la carpeta components):
* Navbar.jsx
```sh
import menuItems from '../constants/menuItems' # traigo el menú itemns
import './Navbar.scss'
import NavItem from './NavItem'

const Navbar = () => {

  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-bar__nav-list">
        # antes estaba todo con elementos li, en lugar de eso, llamno al NavItemen, que contendrá los items del menú
          {
            menuItems.map((item) => (
              <NavItem item={item} key={item.id} />
            ))
          }        
        </ul>
      </nav>
    </>
  )
}

export default Navbar
```

* NavItem.jsx:
```sh
import { NavLink } from "react-router"

const NavItem = ({item}) => {
    return (
        <>
            <li className="nav-bar__nav-item">
                <NavLink to={item.ruta} className="nav-bar__nav-link">
                    {item.nombre}
                </NavLink>
            </li>
        </>
    )
}

export default NavItem
```
Entonces mediante, habrá acceso inicio, alta, nosotros y contacto. Otra cosa a destacar es el uso que doy de NavLink, al elemento <a>, lo eh reemplazado por el NavLink. ¿Que hace esto? optimiza mejor la navegación de la página, con el elemento a, en mi página se veia como una carga cuando accedía a algunos de los items, ahora con esto es más instantáneo por así decirlo, no hay tal efecto de carga/refresco.

## Pages
Dentro de la carpeta page estará mis componentes Alta.jsx, Inicio.jsx, Carrito.jsx, Contacto.jsx, NoEncontrado.jsx y Nosotros.jsx.

### Inicio.jsx
Los contenedores que tengo con clases que uso para sass, osea todo el inicio de la página que contiene los productos, me los traigo a Inicio.jsx:

```sh
import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const Inicio = () => {

  const {productos} = useContext(ProductosContext)  

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
          {
            productos && productos.map((producto)=> (
              <Card producto={producto} key={producto.id} />
            ))
          }
          
        </section>
      </main>
      # el footer estará en un componete aparte y también se encuentra en App.jsx
    </>
  )
}

export default Inicio
```
* Nota: antes tenia class y en los label tenía for, a esto los eh remplazado por los nombres className y htmlFor.

#### Estilo del inicio
Eh agregado un archivo Inicio.sass que estará esstilizando al componente Inicio.jsx:
```sh
@import '../index.scss';

.section-cards{
    background-color: $color-4;
    padding: 1rem;
}

.cards-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
}
```

### Carrito.jsx
Carrito va almacenar los productos que el usario decida comprar:
```sh
import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {

  useTitulo('Compras')    

  return (
    <>
      <h1>Mis compras</h1>
      <hr />

      <ListadoCarrito />

    </>
  )
}

export default Carrito
```

#### Accediendo a la sección de carrito
Cuando el usuario seleccione el carrito, se le mostrará en la página la sección de carrito que vendria ser sus compras, el responsable de este viaje lo encontrarás en el componente SearchBar.jsx:
```sh
<div className="search-bar__carrito-container">
    <Link to="/carrito"><img className="search-bar__cart-logo" src="/logo/cart-logo.png" alt="logo de carro" /></Link>
</div>

# en parte el responsable de viajes viene de la direccion de rutas, lo que tengo ahi, será la misma en el to=""
```

## Hooks
Dentro de hooks para los títulos de mi página, verás en la pestaña que cuando seleccionas algún item del menú, dira "Drumstore" - al itemn donde hayas accedido.
```sh
import { useEffect } from "react"

#                                ⬇️ en el caso de que la busqueda sea indefinida
const useTitulo = (textoTitutlo = 'Sin título') => {
  useEffect(()=> {
    document.title = `Drumstore - ${textoTitutlo}`
  }, [])
}

export default useTitulo
```
* Este hook para que funcione, lo voy a estar llevando a los componetes de la carpeta page, lo verás siendo usado de esta manera:
```sh
# un ejemplo:
useTitulo('Inicio')
```

## Contexts
Dentro de la carpeta context, tengo un archivo llamado ProductoContext, que me va a proporcionar los productos, el proveedor ProductosProvider maneja la lógica de la solicitud http y comparte los productos con todos los componentes que lo consuman:
* ProductosContext
```sh
import { useState } from "react";
import { createContext } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";
import { useEffect } from "react";

# 1. CREO EL CONTEXTO
const ProductosContext = createContext() # servirá para compartir los datos en toda la aplicacion sin necesidad de que tenga que pasar las props manualmente (prop drilling)

# 2. ARMO EL PROVIDER
# este envolverá otros componentes para darles acceso al ProductosContext
const ProductosProvider = ({children}) => {

    # manejo del estado y la url
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null) # creo el estado de productos
    # el estado va a almacenar los productos obtenidos

    # asegura que los productos se carguen apenas se rendereiza la aplicación
    useEffect(() => {
      getAllProductos() # cuando el componente se monte, voy a realizar el getAllProductos
    }, [])
    
    

    # pido los productos
    const getAllProductos = async () => {
        try {
            const prods = await peticionesHttp(url, {}) # llama a peticiones para obtener los datos
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

    const data = {
        productos, # contiene los productos obtenidos
        crearProductoContext
    }

    # permiten que los componentes hijos accedan a la info de data
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
    # children representa cualquier componente hijo que esté dentro del ProductosProvider
}

# 3. EXPORTO EL CONTEXT Y PROVIDER
export {ProductosProvider} # para envolver la app y proveer datos
export default ProductosContext # para que otros componentes accedan a los productos
``` 
* Uso del Provider en main.jsx
```sh
createRoot(document.getElementById('root')).render(
  <StrictMode>

    # envielvo mi aplicación con este
    <ProductosProvider>
      <App /> 
    </ProductosProvider>
    
  </StrictMode>,
)
```
* Uso del ProductosContext en Inicio.jsx
```sh
import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const Inicio = () => {

  # me permite acceder a los datos que están en el ProductosContext.jsx
  const {productos} = useContext(ProductosContext)

  return (
    <>

      <main>
        <div className="slider"></div>
        <section className="section-cards">
          ...
        </section> 

        <section className="cards-container" id="container-productos">
          {
            productos && productos.map((producto)=> (
              <Card producto={producto} key={producto.id} />
            ))
          }
          
        </section>
      </main>

    </>
  )
}

export default Inicio
```
Explicando mejor el mapeo, lo que hago es verificar que productos no sea null (producos && evita errores si a´´un no ha llegado los datos). Con .map recorro el array de productos, en cada iteración se crea un componente Card para cada producto, se pasa el objeto producto como prop (producto={producto}) y uso key, porque necesito una clave única para cada elemento de la lista y me evito de repeticiones.

## Helpers
Dentro de la carpeta helper, tendré un archivo peticiones-http.js, con el motivo de llamar a esta función y automáticamente le voy a pasar la url y las opciones:
```sh

export const peticionesHttp = async (url, options) => {
    try {
        
        const res = await fetch(url, options)
        # con await hago que la ejecución espere a que la respuesta se reciba antes de continuar

        if(!res.ok) throw new Error("No se pudo realizar", res.status);
        # res.ok es un booleano que indica si la petición se realizó (true o false), en el caso que falla, lanza un mensaje

        const data = await res.json() # convierte la respuesta a json (res.json()), cómo es una promesa, también uso await
        return data
        # devuelve los datos obtenidos
        

    } catch (error) {
        console.error('[peticionesHttp]', error)
    }
}
```
* url: será la direccion a la que se hará la peticion
* options: es un objeto con configuraciones para la peticion, como por ejemplo método GET, POST, PUT, etc

### Modifico la peticion
En lugar de la url, ahora tendré la url de mockapi
```sh
export const peticionesHttp = async (urlMockapi, options) => {
    try {
        
        const res = await fetch(urlMockapi, options)
        if(!res.ok) throw new Error("No se pudo realizar", res.status);
        const data = await res.json()
        return data
        

    } catch (error) {
        console.error('[peticionesHttp]', error)
    }
}
```

## Data
Eh creado una carpeta llamada data, dentro de esta carpeta, tendré un archivo db.json, donde tengo almacenado todos los productos que verás en la página:
```sh
{
    "productos": [
        {
            "id": 1,
            "nombre": "Armory",
            "foto": "image/armory.webp",
            "descripcion": "Armory Shell - Mapex AR628SFU",
            "precio": "$ 1.819.000,00",
            "stock": 4,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 2,
            "nombre": "Equinox",
            "foto": "image/equinox.webp",
            "descripcion": "Equinox - Mapex BPDLE628XFB",
            "precio": "US$ 4.899,00",
            "stock": 5,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 3,
            "nombre": "Mars Birch",
            "foto": "image/mars-birch.webp",
            "descripcion": "Mapex Mars Birch Shell Pack 529SF 5-Pc Rock ...",
            "precio": "US$ 699,00",
            "stock": 2,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 4,
            "nombre": "Mars Maple",
            "foto": "image/mars-maple.webp",
            "descripcion": "Mars Maple Shell Pack - MAPEX MM529SFOG",
            "precio": "$ 1.242.140,00",
            "stock": 5,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 5,
            "nombre": "Saturn Evolution",
            "foto": "image/saturn-evolution.webp",
            "descripcion": "Saturn Evo - Mapex SE529XMPQ",
            "precio": "$ 2.249.990,00",
            "stock": 2,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 6,
            "nombre": "Venus",
            "foto": "image/venus.webp",
            "descripcion": "Venus - Mapex VE5294FTVC",
            "precio": "$ 1.098.535,00",
            "stock": 4,
            "marca":"Mapex",
            "envio": true
        },
        {
            "id": 7,
            "nombre": "DW 50th anniversary",
            "foto": "image/dw-50th-anniversary.webp",
            "descripcion": "Construidos con una combinación de caqui  y abeto ",
            "precio": "US$ 11.999,00",
            "stock": 1,
            "marca":"DW",
            "envio": false
        },
        {
            "id": 8,
            "nombre": "Parches Uno by Evans",
            "foto": "image/set-parches-evans-uno.webp",
            "descripcion": "Set Parches Uno By Evans UPG2CLS22 12'',13'',16''...",
            "precio": "$ 104.061,50",
            "stock": 20,
            "marca":"Evans", 
            "envio": true
        },
        {
            "id": 9,
            "nombre": "Zildjian - Planet Z",
            "foto": "image/platillos-zildjian-planet-z.webp",
            "descripcion": "Set De Platillos Zildjian Planet Z Zp4pk 14-16-20",
            "precio": "$ 639.981,30",
            "stock": 8,
            "marca":"Zildjian",
            "envio": true
        }
    ]
}
```