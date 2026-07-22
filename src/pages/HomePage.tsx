/**
 * HomePage.tsx
 * -----------------------------------------------------------------------------
 * Página inicial: compõe as principais seções do site em sequência.
 */
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Sectors from '../components/Sectors'
import ProductCategories from '../components/ProductCategories'
import About from '../components/About'
import Mascot from '../components/Mascot'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactLocation from '../components/ContactLocation'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Sectors />
      <ProductCategories />
      <About />
      <Mascot />
      <Testimonials />
      <FAQ />
      <ContactLocation />
    </>
  )
}
