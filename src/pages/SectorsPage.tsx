/**
 * SectorsPage.tsx
 * -----------------------------------------------------------------------------
 * Página "Setores atendidos": banner + grid de setores + categorias de EPIs.
 */
import PageBanner from '../components/PageBanner'
import Sectors from '../components/Sectors'
import ProductCategories from '../components/ProductCategories'

export default function SectorsPage() {
  return (
    <>
      <PageBanner
        titulo="Setores atendidos"
        subtitulo="Da construção civil ao agronegócio: soluções em EPIs e EPCs para cada ambiente de trabalho."
      />
      <Sectors />
      <ProductCategories />
    </>
  )
}
