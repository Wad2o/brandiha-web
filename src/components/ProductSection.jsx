import ProductCard from './ProductCard'

function ProductSection({ id, title, subtitle, products, onAdd }) {
  return (
    <section
      id={id}
      style={{
        maxWidth: 1440,
        margin: '0 auto',
        padding: 'var(--section-spacing) var(--container-gutter)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          color: 'var(--dark-teal)',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          textAlign: 'center',
          color: '#6b7b80',
          fontSize: '0.95rem',
          marginBottom: '2.5rem',
        }}
      >
        {subtitle}
      </p>
      <div
        className="product-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}
      >
        {products?.length ? (
          products.map((p, i) => {
            if (!p) {
              console.warn(`ProductSection "${id}": produit undefined à l'index ${i}`, products)
              return null
            }
            return <ProductCard key={p.id ?? i} product={p} onAdd={onAdd} />
          })
        ) : (
          console.warn(`ProductSection "${id}": "products" est vide ou undefined`, products)
        )}
      </div>
    </section>
  )
}

export default ProductSection