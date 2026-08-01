import Hero from '../components/home/Hero'
import ProductSection from '../components/product/ProductSection'
import FeatureBanner from '../components/home/FeatureBanner'
import { bestSellers, newArrivals } from '../data/products'
import InfiniteMarquee from '../components/layout/bande'
function Home({ addToCart }) {
  return (
    <main>
      <Hero />
      <InfiniteMarquee />
      <ProductSection
        id="best-sellers"
        title="Best-Sellers"
        subtitle="Les favoris de nos clientes en Algérie"
        products={bestSellers}
        onAdd={addToCart}
      />
        
      <FeatureBanner />
      <ProductSection
        id="nouveautes"
        title="Nouveautés"
        subtitle="Les dernières créations Florasis disponibles en Algérie"
        products={newArrivals}
        onAdd={addToCart}
      />
    
    </main>
  )
}

export default Home
