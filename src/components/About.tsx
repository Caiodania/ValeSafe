/**
 * About.tsx
 * -----------------------------------------------------------------------------
 * Seção "Sobre a ValeSafe Indaiatuba":
 *   - História da rede (fundada em 2012 em Taubaté)
 *   - Missão, Visão e Valores
 *   - Parágrafo específico da unidade local
 */
import { company } from '../data/content'
import Icon from './Icons'

export default function About() {
  return (
    <section id="sobre" className="bg-brand-dark py-16 text-white lg:py-24" aria-labelledby="sobre-title">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Texto principal / história */}
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 id="sobre-title" className="text-3xl font-extrabold sm:text-4xl">
              Sobre a ValeSafe {company.unidade}
            </h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                A ValeSafe nasceu em {company.fundacao}, em{' '}
                {company.cidadeFundacao}, com o propósito de proteger quem move o
                Brasil. Hoje somos {company.unidades} unidades pelo país,{' '}
                {company.produtosCatalogados} tipos de EPIs catalogados e mais de{' '}
                {company.clientesAtendidos.replace('+', '')} clientes atendidos —{' '}
                {company.slogan.toLowerCase()}.
              </p>
              <p>
                A unidade <strong className="text-white">{company.unidade}</strong>{' '}
                traz toda essa estrutura para perto de você, com atendimento
                especializado, produtos certificados e entrega a domicílio na
                região. Nosso time conhece as Normas Regulamentadoras e ajuda a
                escolher o EPI certo para cada tarefa.
              </p>
            </div>

            {/* Placeholder para foto da fachada/loja */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-4">
              <Icon name="store" className="h-10 w-10 shrink-0 text-brand-yellow" />
              <p className="text-sm text-gray-400">
                [ Espaço para foto da fachada amarela da loja — substituir por
                imagem real ]
              </p>
            </div>
          </div>

          {/* Missão / Visão / Valores */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-brand-graphite p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-brand-yellow">
                <Icon name="arrowright" className="h-5 w-5" /> Missão
              </h3>
              <p className="mt-2 text-sm text-gray-300">{company.missao}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-graphite p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-brand-yellow">
                <Icon name="arrowright" className="h-5 w-5" /> Visão
              </h3>
              <p className="mt-2 text-sm text-gray-300">{company.visao}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-graphite p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-brand-yellow">
                <Icon name="shield" className="h-5 w-5" /> Valores
              </h3>
              <ul className="mt-3 space-y-2">
                {company.valores.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-gray-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
