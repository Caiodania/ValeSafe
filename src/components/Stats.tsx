/**
 * Stats.tsx
 * -----------------------------------------------------------------------------
 * Seção de números / credibilidade (fundo branco):
 *   - Nota do Google (4,9★ com 133 avaliações) como selo
 *   - Anos de mercado da rede / unidades
 *   - +10 mil produtos catalogados / +14 mil clientes
 */
import { company } from '../data/content'
import Icon from './Icons'

// Ano atual usado para calcular o tempo de mercado da rede
const anosDeMercado = new Date().getFullYear() - company.fundacao

const numeros = [
  { valor: `${anosDeMercado}+`, legenda: 'Anos de mercado' },
  { valor: company.unidades, legenda: 'Unidades no Brasil' },
  { valor: company.produtosCatalogados, legenda: 'Tipos de EPIs catalogados' },
  { valor: company.clientesAtendidos, legenda: 'Clientes atendidos' },
]

export default function Stats() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-labelledby="stats-title">
      <div className="container-page">
        {/* Selo de avaliação do Google */}
        <div className="mx-auto mb-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-3xl font-extrabold text-brand-dark">
              {company.google.nota}
            </span>
            <div className="flex text-brand-yellow" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5" />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-brand-dark">Avaliação no Google</p>
            <p>
              {company.google.nota} de 5 · {company.google.avaliacoes} avaliações
              de clientes
            </p>
          </div>
        </div>

        <h2 id="stats-title" className="sr-only">
          Números da ValeSafe
        </h2>

        {/* Grade de números grandes */}
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {numeros.map((n) => (
            <div key={n.legenda}>
              <dt className="text-4xl font-extrabold text-brand-dark lg:text-5xl">
                {n.valor}
              </dt>
              <dd className="mt-2 text-sm text-gray-500">{n.legenda}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
