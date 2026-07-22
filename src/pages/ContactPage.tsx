/**
 * ContactPage.tsx
 * -----------------------------------------------------------------------------
 * Página "Contato": banner + contato/localização + FAQ.
 */
import PageBanner from '../components/PageBanner'
import ContactLocation from '../components/ContactLocation'
import FAQ from '../components/FAQ'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        titulo="Contato"
        subtitulo="Fale com a ValeSafe Indaiatuba pelo WhatsApp, telefone ou e-mail — ou venha nos visitar."
      />
      <ContactLocation />
      <FAQ />
    </>
  )
}
