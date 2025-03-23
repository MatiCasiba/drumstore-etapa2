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
import './Card.scss'

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

## Pages
Dentro de la carpeta page estará mis componentes Alta.jsx, Inicio.jsx, Carrito.jsx, Contacto.jsx, NoEncontrado.jsx y Nosotros.jsx.

### Inicio.jsx
Los contenedores que tengo con clases que uso para sass, osea todo el inicio de la página que contiene los productos, me los traigo a Inicio.jsx:

```sh
import './Inicio.scss'
import Card from "../components/Card"

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
            <Card />
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