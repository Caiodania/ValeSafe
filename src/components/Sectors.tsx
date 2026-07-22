/**
 * Sectors.tsx
 * -----------------------------------------------------------------------------
 * Seção "Setores que atendemos": grid de cards com ícone + descrição curta.
 * Dados em src/data/content.ts (setores).
 */
import { setores } from '../data/content'
import Icon from './Icons'

export default function Sectors() {
  return (
    <section id="setores" className="bg-gray-50 py-16 lg:py-24" aria-labelledby="setores-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Onde atuamos</span>
          <h2 id="setores-title" className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Setores que atendemos
          </h2>
          <p className="mt-4 text-gray-600">
            Do canteiro de obras ao agronegócio: fornecemos os EPIs certos para
            cada ambiente de trabalho.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {setores.map((setor) => (
            <article
              key={setor.titulo}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-yellowDark transition-colors group-hover:bg-brand-yellow group-hover:text-brand-dark">
                <Icon name={setor.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">{setor.titulo}</h3>
              <p className="mt-2 text-sm text-gray-600">{setor.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
