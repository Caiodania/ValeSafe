/**
 * Header.tsx
 * -----------------------------------------------------------------------------
 * Cabeçalho fixo no topo:
 *   - Logo à esquerda (link para Home)
 *   - Menu de navegação (React Router)
 *   - Botão de destaque "Fale no WhatsApp"
 *   - Menu hambúrguer responsivo no mobile
 */
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, whatsappLink } from '../data/content'
import Logo from './Logo'
import Icon from './Icons'

export default function Header() {
  const [aberto, setAberto] = useState(false) // menu mobile aberto?
  const [comScroll, setComScroll] = useState(false) // aplica sombra ao rolar
  const location = useLocation()

  // Fecha o menu mobile sempre que a rota muda
  useEffect(() => {
    setAberto(false)
  }, [location.pathname])

  // Detecta rolagem para dar um leve destaque ao header
  useEffect(() => {
    const onScroll = () => setComScroll(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-brand-dark/95 backdrop-blur transition-shadow ${
        comScroll ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label="Ir para a Home da ValeSafe Indaiatuba">
          <Logo variant="light" />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-yellow'
                      : 'text-gray-200 hover:text-brand-yellow'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA WhatsApp (desktop) */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden text-sm lg:inline-flex"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Fale no WhatsApp
        </a>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="text-white lg:hidden"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          <Icon name={aberto ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </nav>

      {/* Menu mobile expansível */}
      {aberto && (
        <div className="border-t border-white/10 bg-brand-dark lg:hidden">
          <ul className="container-page flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white/5 text-brand-yellow'
                        : 'text-gray-200 hover:bg-white/5 hover:text-brand-yellow'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 px-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Fale no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
