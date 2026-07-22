/**
 * PageBanner.tsx
 * -----------------------------------------------------------------------------
 * Faixa de topo reutilizável nas páginas internas (fundo escuro), com título
 * e subtítulo. Mantém consistência visual entre as rotas.
 */
interface PageBannerProps {
  titulo: string
  subtitulo?: string
}

export default function PageBanner({ titulo, subtitulo }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark pb-14 pt-32 text-white lg:pt-40">
      {/* Brilho amarelo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl"
      />
      <div className="container-page relative">
        <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{titulo}</h1>
        {subtitulo && (
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{subtitulo}</p>
        )}
      </div>
    </section>
  )
}
