/**
 * Logo.tsx
 * -----------------------------------------------------------------------------
 * Wordmark "valesafe" reproduzido em texto/SVG:
 *   - "vale" em tom claro (branco ou escuro conforme o fundo)
 *   - "safe" em amarelo/dourado
 *   - pequeno ícone de asa/onda dourada acima
 *   - "EPI's" em texto pequeno abaixo do nome
 *
 * OBS: Este é um wordmark aproximado. Substituir por SVG/PNG oficial da marca
 * quando disponível (colocar em src/assets/ e importar aqui).
 */

interface LogoProps {
  /** 'light' para fundos escuros (vale em branco); 'dark' para fundos claros. */
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const valeColor = variant === 'light' ? 'text-white' : 'text-brand-dark'

  return (
    <span className={`inline-flex flex-col leading-none ${className}`} aria-label="ValeSafe EPI's">
      {/* Ícone de asa/onda dourada estilizada acima do nome */}
      <svg
        viewBox="0 0 48 12"
        className="mb-0.5 h-2.5 w-10 text-brand-yellow"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 10c8-6 14-8 22-8 8 0 14 3 22 8-9-3-15-4-22-4S11 7 2 10Z" />
      </svg>

      <span className="text-2xl font-extrabold tracking-tight">
        <span className={valeColor}>vale</span>
        <span className="text-brand-yellow">safe</span>
      </span>

      {/* Sufixo "EPI's" pequeno, alinhado à direita do wordmark */}
      <span
        className={`self-end text-[0.6rem] font-semibold uppercase tracking-[0.25em] ${
          variant === 'light' ? 'text-gray-300' : 'text-gray-500'
        }`}
      >
        EPI's
      </span>
    </span>
  )
}
