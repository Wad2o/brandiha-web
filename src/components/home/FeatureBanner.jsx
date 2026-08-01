function FeatureBanner() {
  return (
    <section
      style={{
        background: 'var(--dark-teal)',
        color: 'var(--gold)',
        padding: '3rem var(--container-gutter)',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          marginBottom: '0.75rem',
        }}
      >
        Livraison en Algérie
      </h2>
      <p
        style={{
          maxWidth: 600,
          margin: '0 auto 1.5rem',
          opacity: 0.9,
        }}
      >
        Profitez de la livraison express vers Alger, Oran, Constantine, Annaba et
        toutes les wilayas d'Algérie. Paiement sécurisé ou paiement à la livraison.
      </p>
      <a
        href="#"
        style={{
          background: 'var(--gold)',
          color: 'var(--dark-teal)',
          padding: '0.85rem 2rem',
          fontWeight: 700,
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          display: 'inline-block',
        }}
      >
        Voir les conditions de livraison
      </a>
    </section>
  )
}

export default FeatureBanner
