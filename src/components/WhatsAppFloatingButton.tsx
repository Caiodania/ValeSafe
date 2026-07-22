/**
 * WhatsAppFloatingButton.tsx
 * -----------------------------------------------------------------------------
 * Botão flutuante fixo de WhatsApp, presente em todas as páginas.
 * Link: https://wa.me/5519971407064 (definido em content.ts).
 */
import { whatsappLink } from '../data/content'
import Icon from './Icons'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a ValeSafe Indaiatuba"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <Icon name="whatsapp" className="h-8 w-8" />
      {/* Pulso decorativo */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  )
}
