import { useState, useContext } from 'react'
import { NavigationContext } from '../context/NavigationContext'

function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false)
  const { navigateTo } = useContext(NavigationContext)

  const handleAdd = (e) => {
    e.stopPropagation() // don't trigger the card's navigation
    setAdded(true)
    onAdd()
    setTimeout(() => setAdded(false), 1500)
  }

  const goToProduct = () => {
    navigateTo('product', product.id)
  }

  return (
    <article
      className="product-card"
      onClick={goToProduct}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToProduct()
        }
      }}
      style={{
        background: '#fff',
        border: '1px solid rgb(var(--border-color))',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '4/5',
        background: '#f8f8f8',
      }}>
        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            background: 'var(--dark-teal)',
            color: 'var(--gold)',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
            letterSpacing: '0.05em',
            zIndex: 2,
          }}>
            {product.badge}
          </span>
        )}
        <img
          src={product.img}
          alt={product.title}
          className="product-image-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h3 style={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'rgb(var(--text-primary))',
          lineHeight: 1.4,
          minHeight: '2.4em',
          marginBottom: '0.4rem',
        }}>
          {product.title}
        </h3>
        <div style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--dark-teal)',
          marginBottom: '0.75rem',
        }}>
          {product.price}
        </div>
        <button
          onClick={handleAdd}
          style={{
            width: '100%',
            padding: '0.65rem',
            border: '1.5px solid var(--dark-teal)',
            color: added ? 'var(--gold)' : 'var(--dark-teal)',
            background: added ? 'var(--dark-teal)' : 'transparent',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {added ? 'Ajouté !' : 'Ajouter au panier'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard