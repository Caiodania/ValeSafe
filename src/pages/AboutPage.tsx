/**
 * AboutPage.tsx
 * -----------------------------------------------------------------------------
 * Página "Sobre nós": banner + história/missão/visão/valores + mascote + números.
 */
import PageBanner from '../components/PageBanner'
import About from '../components/About'
import Mascot from '../components/Mascot'
import Stats from '../components/Stats'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        titulo="Sobre a ValeSafe"
        subtitulo="Uma rede nacional especializada em EPIs, presente na sua cidade através da unidade Indaiatuba."
      />
      <About />
      <Mascot />
      <Stats />
    </>
  )
}
