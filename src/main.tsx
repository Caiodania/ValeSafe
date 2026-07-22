/**
 * main.tsx
 * -----------------------------------------------------------------------------
 * Ponto de entrada da aplicação React.
 * Monta o App dentro do BrowserRouter (React Router) no elemento #root.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
