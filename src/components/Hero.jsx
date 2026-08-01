function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8f6f3 0%, #fff 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        className="hero-inner"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '3rem var(--container-gutter)',
          display: 'flex',
          gap: '2rem',
          flexDirection: 'column',
        }}
      >
            <img
            src="https://florasis.com/cdn/shop/files/mega_0ff318a9-b148-4ac7-95ef-4d86f35507c9.jpg?v=1776136169"
            alt="Collection Florasis"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 4,
            }}
          />
          </div>
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: 'var(--dark-teal)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            L'Art du Maquillage Oriental
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#4a5a5e',
              maxWidth: 480,
              marginBottom: '1.75rem',
            }}
          >
            Découvrez la collection Florasis, alliant esthétique chinoise millénaire
            et technologie moderne. Des formules aux essences florales, conçues pour
            sublimer votre beauté naturelle.
          </p>
          <a
            href="#best-sellers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--dark-teal)',
              color: 'var(--gold)',
              padding: '0.9rem 2.2rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,59,74,0.18)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Découvrir la collection
          </a>
        <div>
        </div>
      </div>
    </section>
  )
}

export default Hero
