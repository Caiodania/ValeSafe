/**
 * FAQ.tsx
 * -----------------------------------------------------------------------------
 * Seção de Perguntas Frequentes (acordeão acessível).
 * Conteúdo genérico sobre prazos, formas de pagamento e atendimento.
 * Dados em src/data/content.ts (faq).
 */
import { useState } from 'react'
import { faq } from '../data/content'
import Icon from './Icons'

export default function FAQ() {
  // Índice do item aberto (null = todos fechados). Só um aberto por vez.
  const [aberto, setAberto] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-16 lg:py-24" aria-labelledby="faq-title">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2 id="faq-title" className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faq.map((item, i) => {
            const estaAberto = aberto === i
            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(estaAberto ? null : i)}
                    aria-expanded={estaAberto}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-brand-dark">
                      {item.pergunta}
                    </span>
                    <Icon
                      name="chevrondown"
                      className={`h-5 w-5 shrink-0 text-brand-yellowDark transition-transform ${
                        estaAberto ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {/* Resposta: renderizada apenas quando aberta */}
                {estaAberto && (
                  <div className="px-5 pb-5 text-gray-600">{item.resposta}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
