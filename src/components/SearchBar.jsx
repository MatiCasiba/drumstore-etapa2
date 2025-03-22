
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