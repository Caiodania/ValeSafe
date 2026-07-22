/**
 * Footer.tsx
 * -----------------------------------------------------------------------------
 * Rodapé do site:
 *   - Logo + slogan
 *   - Links rápidos (navegação)
 *   - Contato resumido
 *   - Redes sociais
 *   - Aviso de direitos autorais
 */
import { Link } from 'react-router-dom'
import { navItems, contato, redesSociais, company, whatsappLink } from '../data/content'
import Logo from './Logo'
import Icon from './Icons'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-brand-darker text-gray-400">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca + slogan */}
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm">
            {company.slogan}. Unidade {company.unidade} — proteção e segurança
            para o seu trabalho.
          </p>
          {/* Redes sociais */}
          <div className="mt-5 flex gap-3">
            {redesSociais.map((rede) => (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.nome}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                <Icon name={rede.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-brand-yellow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato resumido */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="mappin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                {contato.enderecoLinha1}, {contato.enderecoLinha2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">
                {contato.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-yellow" />
              <a href={`mailto:${contato.email}`} className="break-all hover:text-brand-yellow">
                {contato.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Horário */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Horário
          </h3>
          <ul className="space-y-2 text-sm">
            {contato.horario.map((h) => (
              <li key={h.dia} className="flex flex-col">
                <span className="text-gray-300">{h.dia}</span>
                <span>{h.horas}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra de direitos autorais */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {ano} {company.nome} — Unidade {company.unidade}. Todos os direitos
            reservados.
          </p>
          <p>
            Franquia da rede ValeSafe · Fundada em {company.fundacao} em{' '}
            {company.cidadeFundacao}
          </p>
        </div>
      </div>
    </footer>
  )
}
