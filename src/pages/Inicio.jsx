import './Inicio.scss'
import Card from "../components/Card"

const Inicio = () => {
  return (
    <>

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

    </>
  )
}

export default Inicio