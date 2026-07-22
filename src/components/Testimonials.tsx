/**
 * Testimonials.tsx
 * -----------------------------------------------------------------------------
 * Seção de depoimentos de clientes.
 *   - Desktop: grid com todos os depoimentos
 *   - Mobile: carrossel simples (um por vez) com botões e indicadores
 * Dados em src/data/content.ts (depoimentos).
 */
import { useState } from 'react'
import { depoimentos, type Depoimento } from '../data/content'
import Icon from './Icons'

// Card reutilizável de depoimento
function CardDepoimento({ d }: { d: Depoimento }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex text-brand-yellow" aria-label={`${d.estrelas} de 5 estrelas`}>
        {Array.from({ length: d.estrelas }).map((_, i) => (
          <Icon key={i} name="star" className="h-5 w-5" />
        ))}
      </div>
      <blockquote className="flex-1 text-gray-700">"{d.texto}"</blockquote>
      <figcaption className="mt-4 border-t border-gray-100 pt-4">
        <p className="font-bold text-brand-dark">{d.nome}</p>
        <p className="text-sm text-gray-500">{d.cargo}</p>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const [atual, setAtual] = useState(0)

  const anterior = () =>
    setAtual((i) => (i === 0 ? depoimentos.length - 1 : i - 1))
  const proximo = () =>
    setAtual((i) => (i === depoimentos.length - 1 ? 0 : i + 1))

  return (
    <section id="depoimentos" className="bg-gray-50 py-16 lg:py-24" aria-labelledby="depoimentos-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O que dizem sobre nós</span>
          <h2 id="depoimentos-title" className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Depoimentos de clientes
          </h2>
          <p className="mt-4 text-gray-600">
            A confiança de quem leva segurança a sério para o dia a dia de
            trabalho.
          </p>
        </div>

        {/* Desktop / tablet: grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((d) => (
            <CardDepoimento key={d.nome} d={d} />
          ))}
        </div>

        {/* Mobile: carrossel de um por vez */}
        <div className="mt-12 sm:hidden">
          <CardDepoimento d={depoimentos[atual]} />

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={anterior}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 rotate-180 items-center justify-center rounded-full border border-gray-300 bg-white text-brand-dark transition-colors hover:border-brand-yellow hover:text-brand-yellowDark"
            >
              <Icon name="arrowright" className="h-5 w-5" />
            </button>

            {/* Indicadores (bolinhas) */}
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAtual(i)}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  aria-current={i === atual}
                  className={`h-2.5 rounded-full transition-all ${
                    i === atual ? 'w-6 bg-brand-yellow' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={proximo}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-brand-dark transition-colors hover:border-brand-yellow hover:text-brand-yellowDark"
            >
              <Icon name="arrowright" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
