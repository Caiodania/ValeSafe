/**
 * ContactLocation.tsx
 * -----------------------------------------------------------------------------
 * Seção de contato e localização:
 *   - Endereço completo, telefone, WhatsApp, e-mail e horário de funcionamento
 *   - Mapa incorporado (iframe do Google Maps, sem API key)
 */
import { contato, whatsappLink, mapaEmbedUrl } from '../data/content'
import Icon from './Icons'

export default function ContactLocation() {
  return (
    <section id="contato" className="bg-brand-dark py-16 text-white lg:py-24" aria-labelledby="contato-title">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Fale com a gente</span>
          <h2 id="contato-title" className="text-3xl font-extrabold sm:text-4xl">
            Contato e localização
          </h2>
          <p className="mt-4 text-gray-300">
            Venha nos visitar ou fale pelo WhatsApp. Atendemos em loja e também
            entregamos a domicílio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Coluna de informações */}
          <div className="space-y-5">
            {/* Endereço */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-5">
              <Icon name="mappin" className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-sm text-gray-300">{contato.enderecoLinha1}</p>
                <p className="text-sm text-gray-300">{contato.enderecoLinha2}</p>
              </div>
            </div>

            {/* Telefones / WhatsApp */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-5">
              <Icon name="phone" className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <p className="font-semibold">Telefone / WhatsApp</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-300 transition-colors hover:text-brand-yellow"
                >
                  {contato.whatsappDisplay} (WhatsApp)
                </a>
                <a
                  href={`tel:+${contato.telefoneFixo.replace(/\D/g, '')}`}
                  className="block text-sm text-gray-300 transition-colors hover:text-brand-yellow"
                >
                  {contato.telefoneFixo} (fixo)
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-5">
              <Icon name="mail" className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div>
                <p className="font-semibold">E-mail</p>
                <a
                  href={`mailto:${contato.email}`}
                  className="break-all text-sm text-gray-300 transition-colors hover:text-brand-yellow"
                >
                  {contato.email}
                </a>
              </div>
            </div>

            {/* Horário de funcionamento */}
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-5">
              <Icon name="clock" className="h-6 w-6 shrink-0 text-brand-yellow" />
              <div className="w-full">
                <p className="font-semibold">Horário de funcionamento</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-300">
                  {contato.horario.map((h) => (
                    <li key={h.dia} className="flex justify-between gap-4">
                      <span>{h.dia}</span>
                      <span className="text-gray-400">{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Coluna do mapa (iframe do Google Maps, sem API key) */}
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Mapa da ValeSafe Indaiatuba no Google Maps"
              src={mapaEmbedUrl}
              className="h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
