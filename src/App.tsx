/**
 * App.tsx
 * -----------------------------------------------------------------------------
 * Define as rotas do site usando React Router.
 * Todas as páginas compartilham o mesmo Layout (Header/Footer/WhatsApp).
 */
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import SectorsPage from './pages/SectorsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      {/* Layout comum envolve todas as rotas filhas */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="produtos" element={<ProductsPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="setores" element={<SectorsPage />} />
        <Route path="depoimentos" element={<TestimonialsPage />} />
        <Route path="contato" element={<ContactPage />} />
        {/* Rota curinga: página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
