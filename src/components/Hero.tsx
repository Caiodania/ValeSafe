/**
 * Hero.tsx
 * -----------------------------------------------------------------------------
 * Seção principal da Home (fundo escuro):
 *   - Título de impacto sobre segurança do trabalhador
 *   - Subtítulo citando a unidade Indaiatuba
 *   - Dois CTAs: "Fale conosco" (WhatsApp) e "Ver categorias de EPIs"
 *   - Imagem de colaborador com EPIs (placeholder) + ícones flutuantes de categorias
 */
import { Link } from 'react-router-dom'
import { company, contato, whatsappLink } from '../data/content'
import Icon from './Icons'

// Ícones que "flutuam" ao redor da imagem, representando categorias de produto
const iconesFlutuantes = [
  { name: 'hardhat', label: 'Capacetes', pos: 'left-0 top-6', delay: '0s' },
  { name: 'ear', label: 'Proteção auditiva', pos: 'right-2 top-16', delay: '0.6s' },
  { name: 'glove', label: 'Luvas', pos: 'left-4 bottom-24', delay: '1.2s' },
  { name: 'boot', label: 'Calçados', pos: 'right-0 bottom-10', delay: '1.8s' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* Brilho amarelo decorativo ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl"
      />

      <div className="container-page grid items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:pb-24 lg:pt-40">
        {/* Coluna de texto */}
        <div className="animate-fadeUp">
          <span className="eyebrow">Unidade {company.unidade} · SP</span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Proteção que{' '}
            <span className="text-brand-yellow">cuida de quem</span> faz acontecer
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Somos a ValeSafe {company.unidade}: loja especializada em Equipamentos
            de Proteção Individual (EPIs) e Coletiva (EPCs). {company.slogan}.
          </p>

          {/* CTAs lado a lado */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Fale conosco
            </a>
            <Link to="/produtos" className="btn-secondary">
              Ver categorias de EPIs
              <Icon name="arrowright" className="h-5 w-5" />
            </Link>
          </div>

          {/* Serviços em destaque */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            {contato.servicos.map((s) => (
              <span key={s} className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-yellow" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Coluna da imagem (placeholder) com ícones flutuantes */}
        <div className="relative mx-auto w-full max-w-md">
          {/*
            SUBSTITUIR: foto real de colaborador usando EPIs
            (capacete amarelo, óculos de proteção, protetor auricular).
            Sugestão: colocar em src/assets/hero-colaborador.jpg e usar <img src=... />.
          */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-graphite to-brand-darker shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <Icon name="shield" className="h-20 w-20 text-brand-yellow" />
              <p className="text-sm font-medium text-gray-400">
                [ Espaço para foto do colaborador com EPIs ]
              </p>
              <p className="text-xs text-gray-600">
                Substitua por uma imagem real da equipe/loja
              </p>
            </div>
          </div>

          {/* Ícones flutuantes de categorias */}
          {iconesFlutuantes.map((it) => (
            <div
              key={it.name}
              className={`absolute ${it.pos} flex items-center gap-2 rounded-2xl border border-white/10 bg-brand-graphite/90 px-3 py-2 shadow-lg backdrop-blur animate-float`}
              style={{ animationDelay: it.delay }}
            >
              <Icon name={it.name} className="h-5 w-5 text-brand-yellow" />
              <span className="text-xs font-medium text-gray-200">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
