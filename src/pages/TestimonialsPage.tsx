/**
 * TestimonialsPage.tsx
 * -----------------------------------------------------------------------------
 * Página "Depoimentos": banner + depoimentos + números de credibilidade.
 */
import PageBanner from '../components/PageBanner'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        titulo="Depoimentos"
        subtitulo="A confiança de quem leva a segurança do trabalho a sério todos os dias."
      />
      <Testimonials />
      <Stats />
    </>
  )
}
