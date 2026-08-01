import { useMemo } from 'react';
import ProductCard from '../components/product/ProductCard';
import { bestSellers, newArrivals, allProducts } from '../data/products';

export default function Category({ category, addToCart }) {
  const filteredProducts = useMemo(() => {
    if (!category) return allProducts;
    
    const lowerCategory = category.toLowerCase().trim();
    
    if (lowerCategory === 'nouveautés' || lowerCategory === 'new') {
      return newArrivals;
    }
    if (lowerCategory === 'best-sellers') {
      return bestSellers;
    }
    if (lowerCategory === 'édition limitée' || lowerCategory === 'edition limitee') {
      return allProducts.filter(p => p.badge === 'Édition Limitée');
    }
    if (lowerCategory === 'coffrets & cadeaux' || lowerCategory === 'coffrets') {
      return allProducts.filter(p => p.category === 'Coffrets');
    }
    
    // Default by category tag (e.g. 'Yeux', 'Lèvres', 'Visage')
    return allProducts.filter(
      p => p.category && p.category.toLowerCase() === lowerCategory
    );
  }, [category]);

  const subtitle = useMemo(() => {
    const lowerCategory = category ? category.toLowerCase().trim() : '';
    if (lowerCategory === 'nouveautés') return "Les dernières créations Florasis disponibles en Algérie";
    if (lowerCategory === 'best-sellers') return "Les favoris de nos clientes en Algérie";
    return `Découvrez notre collection de produits pour : ${category}`;
  }, [category]);

  return (
    <main style={{ maxWidth: 1440, margin: '0 auto', padding: 'var(--section-spacing) var(--container-gutter)' }}>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--dark-teal)',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textTransform: 'capitalize'
        }}
      >
        {category}
      </h1>
      <p
        style={{
          textAlign: 'center',
          color: '#6b7b80',
          fontSize: '1rem',
          marginBottom: '3rem',
        }}
      >
        {subtitle}
      </p>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#6b7b80' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Aucun produit disponible dans cette catégorie pour le moment.</p>
        </div>
      ) : (
        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
        >
          {filteredProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAdd={addToCart} 
            />
          ))}
        </div>
      )}
    </main>
  );
}
