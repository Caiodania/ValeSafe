/**
 * Mascot.tsx
 * -----------------------------------------------------------------------------
 * Seção do mascote "Casquito": tartaruga cartoon usando capacete amarelo,
 * luvas pretas e cinto/arnês laranja e preto. Reforça a mensagem de segurança.
 *
 * A ilustração aqui é um placeholder com Icon de capacete. Substituir pela
 * arte oficial do Casquito (src/assets/casquito.png).
 */
import Icon from './Icons'

export default function Mascot() {
  return (
    <section className="bg-brand-yellow py-16 lg:py-24" aria-labelledby="mascote-title">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        {/* Ilustração / placeholder do mascote */}
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-brand-dark shadow-xl sm:h-80 sm:w-80">
            {/*
              SUBSTITUIR: ilustração oficial do mascote "Casquito"
              (tartaruga com capacete amarelo, luvas pretas e arnês laranja/preto).
            */}
            <Icon name="hardhat" className="h-28 w-28 text-brand-yellow" />
            <span className="absolute bottom-6 rounded-full bg-brand-orange px-4 py-1 text-sm font-bold text-white">
              Casquito
            </span>
          </div>
        </div>

        {/* Texto do mascote */}
        <div className="order-1 lg:order-2">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-dark/70">
            Nosso mascote
          </span>
          <h2 id="mascote-title" className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Conheça o Casquito
          </h2>
          <p className="mt-4 text-lg font-medium text-brand-dark/80">
            "Eu não tenho um casco qualquer: carrego um capacete amarelo,
            resistente e firme."
          </p>
          <p className="mt-4 text-brand-dark/70">
            O Casquito é a tartaruga que representa a proteção ValeSafe. Simpático
            e sempre equipado — capacete amarelo, luvas e arnês de segurança — ele
            lembra que trabalhar protegido é o que permite voltar bem para casa
            todos os dias.
          </p>
        </div>
      </div>
    </section>
  )
}
