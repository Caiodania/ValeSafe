/**
 * NotFoundPage.tsx
 * -----------------------------------------------------------------------------
 * Página 404 para rotas inexistentes.
 */
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-brand-dark px-4 text-center text-white">
      <div>
        <Icon name="shield" className="mx-auto h-16 w-16 text-brand-yellow" />
        <p className="mt-6 text-6xl font-extrabold">404</p>
        <h1 className="mt-2 text-2xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-gray-400">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}
