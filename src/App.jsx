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
