/**
 * Layout.tsx
 * -----------------------------------------------------------------------------
 * Estrutura comum a todas as páginas:
 *   - Header fixo
 *   - <Outlet /> (conteúdo da rota atual)
 *   - Footer
 *   - Botão flutuante de WhatsApp
 *   - ScrollToTop ao mudar de rota
 */
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloatingButton from './WhatsAppFloatingButton'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      {/* main recebe o conteúdo de cada página via Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
