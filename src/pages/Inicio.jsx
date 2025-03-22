
const Inicio = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />
      
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
      </header>

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