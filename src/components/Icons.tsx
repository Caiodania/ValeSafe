/**
 * Icons.tsx
 * -----------------------------------------------------------------------------
 * Ícones SVG inline (sem dependências externas). Cada ícone herda `currentColor`,
 * então a cor é controlada por classes Tailwind de texto (ex.: text-brand-yellow).
 *
 * O componente <Icon name="..." /> centraliza o mapeamento usado pelos dados
 * (setores, categorias, redes sociais) em src/data/content.ts.
 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

// Props padrão aplicadas a todos os ícones (tamanho controlado por className)
const base = (props: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
  ...props,
})

/* --- Ícones de setores / categorias --------------------------------------- */

const HardHat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4a7 7 0 0 0-7 7v3h14v-3a7 7 0 0 0-7-7Z" />
    <path d="M12 4v3M3 17h18M4 14v3M20 14v3" />
  </svg>
)

const Factory = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21V10l6 4V10l6 4V6l3 2v13H3Z" />
    <path d="M7 21v-4M11 21v-4M15 21v-4" />
  </svg>
)

const Utensils = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 3v7a2 2 0 0 0 2 2h0v9M6 3v6M8 3v6M17 3c-1.5 0-2.5 1.8-2.5 4.5S15.5 12 17 12v9" />
  </svg>
)

const Health = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.8 6.6a5 5 0 0 0-8.8-2 5 5 0 0 0-8.8 4.4C4.4 13 12 20 12 20s7.6-7 8.8-11.4a5 5 0 0 0 0-2Z" />
    <path d="M9 11h6M12 8v6" />
  </svg>
)

const Leaf = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20c8 0 16-4 16-14 0 0-13-2-13 8 0 3 2 6 5 7" />
    <path d="M8 16c3-3 6-4 9-5" />
  </svg>
)

const Building = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M16 21h3V9a1 1 0 0 0-1-1h-2" />
    <path d="M8 7h1M12 7h1M8 11h1M12 11h1M8 15h1M12 15h1M9 21v-3h3v3" />
  </svg>
)

const Ear = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9a6 6 0 1 1 12 0c0 3-2.5 3.5-3.5 5S13 18 12 19s-3 1-3.5-.5" />
    <path d="M9 9a3 3 0 0 1 6 0" />
  </svg>
)

const Glove = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 21v-6l-1.5-2A2 2 0 0 1 8 10.5l1 1V5a1.2 1.2 0 0 1 2.4 0v4M11.4 9V4.5a1.2 1.2 0 0 1 2.4 0V9M13.8 9V5.5a1.2 1.2 0 0 1 2.4 0V13c0 4-2 8-2 8" />
  </svg>
)

const Harness = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M8 11h8M8 11l-2 9M16 11l2 9M9 15h6" />
  </svg>
)

const Boot = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 3h3v9l7 3a3 3 0 0 1 2 3v3H7V3Z" />
    <path d="M7 18h13M10 12h3" />
  </svg>
)

const Raincoat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3a3 3 0 0 0-3 3L4 8v3h3v10h10V11h3V8l-5-2a3 3 0 0 0-3-3Z" />
    <path d="M12 6v6" />
  </svg>
)

/* --- Ícones utilitários / de interface ------------------------------------ */

const Star = (p: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
)

const WhatsApp = (p: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.45-.15-.64.15-.19.28-.73.94-.9 1.13-.16.19-.33.21-.61.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.39s1.02 2.77 1.16 2.96c.14.19 2 3.05 4.85 4.28.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
)

const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4h4l1.5 5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 5 1.5v4a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1Z" />
  </svg>
)

const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const MapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const Clock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const Truck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
)

const Store = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4h16l1 5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0l1-5Z" />
    <path d="M5 11v9h14v-9M10 20v-5h4v5" />
  </svg>
)

const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5 9-11" />
  </svg>
)

const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

/* --- Ícones de redes sociais ---------------------------------------------- */

const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const Facebook = (p: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
  </svg>
)

const Linkedin = (p: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.5c0-1.3-.02-3-1.9-3-1.9 0-2.2 1.45-2.2 2.9V21h-4z" />
  </svg>
)

const Youtube = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="18" height="12" rx="3" />
    <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
  </svg>
)

/* --- Mapa de nomes -> componente ------------------------------------------ */

const ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  hardhat: HardHat,
  factory: Factory,
  utensils: Utensils,
  health: Health,
  leaf: Leaf,
  building: Building,
  ear: Ear,
  glove: Glove,
  harness: Harness,
  boot: Boot,
  raincoat: Raincoat,
  star: Star,
  whatsapp: WhatsApp,
  phone: Phone,
  mail: Mail,
  mappin: MapPin,
  clock: Clock,
  truck: Truck,
  store: Store,
  shield: Shield,
  check: Check,
  chevrondown: ChevronDown,
  menu: Menu,
  close: Close,
  arrowright: ArrowRight,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
}

interface IconComponentProps extends IconProps {
  /** Nome do ícone (chaves em ICONS). */
  name: string
}

/** Renderiza um ícone pelo nome. Retorna null se o nome não existir. */
export default function Icon({ name, ...props }: IconComponentProps) {
  const Cmp = ICONS[name]
  if (!Cmp) return null
  return <Cmp {...props} />
}
