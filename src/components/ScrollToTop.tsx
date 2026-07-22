/**
 * ScrollToTop.tsx
 * -----------------------------------------------------------------------------
 * Ao trocar de rota, rola a página de volta ao topo (comportamento esperado
 * em navegação por páginas). Não renderiza nada.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
