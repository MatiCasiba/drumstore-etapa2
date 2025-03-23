import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ProductosProvider>
      <App /> 
    </ProductosProvider>
    
  </StrictMode>,
)
