/**
 * ProductsPage.tsx
 * -----------------------------------------------------------------------------
 * Página "Produtos/EPIs": banner + categorias de produtos + FAQ.
 */
import PageBanner from '../components/PageBanner'
import ProductCategories from '../components/ProductCategories'
import FAQ from '../components/FAQ'

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        titulo="Produtos e EPIs"
        subtitulo="Mais de 10 mil itens catalogados na rede ValeSafe. Conheça nossas principais categorias e solicite seu orçamento."
      />
      <ProductCategories />
      <FAQ />
    </>
  )
}
