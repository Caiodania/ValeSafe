/**
 * ProductCategories.tsx
 * -----------------------------------------------------------------------------
 * Seção "Categorias de EPIs": grid de cards.
 * Cada card tem uma área de imagem (placeholder) para foto real do produto.
 * Dados em src/data/content.ts (categorias).
 */
import { categorias, whatsappLink } from '../data/content'
import Icon from './Icons'

export default function ProductCategories() {
  return (
    <section id="produtos" className="bg-white py-16 lg:py-24" aria-labelledby="produtos-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nossos produtos</span>
          <h2 id="produtos-title" className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Categorias de EPIs
          </h2>
          <p className="mt-4 text-gray-600">
            Mais de 10 mil itens catalogados na rede. Confira as principais
            categorias e fale conosco para o que você precisa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat) => (
            <article
              key={cat.titulo}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/*
                SUBSTITUIR: foto real do produto.
                imgAlt já está definido em content.ts para o texto alternativo.
                Ex.: <img src="/produtos/luvas.jpg" alt={cat.imgAlt} className="h-full w-full object-cover" />
              */}
              <div
                role="img"
                aria-label={`Imagem ilustrativa: ${cat.imgAlt}`}
                className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-dark to-brand-graphite"
              >
                <Icon
                  name={cat.icon}
                  className="h-16 w-16 text-brand-yellow transition-transform group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-dark">{cat.titulo}</h3>
                <p className="mt-2 text-sm text-gray-600">{cat.descricao}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA para orçamento */}
        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
