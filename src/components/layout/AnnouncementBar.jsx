function AnnouncementBar() {
  return (
    <div
      style={{
        background: 'rgb(var(--header-background))',
        color: 'rgb(var(--header-text))',
        textAlign: 'center',
        padding: '0.6rem var(--container-gutter)',
        fontSize: '0.8rem',
        letterSpacing: '0.05em',
        position: 'relative',
        zIndex: 50,
      }}
    >
      ✨ Livraison gratuite partout en Algérie à partir de{' '}
      <strong style={{ fontWeight: 600 }}>5 000 DA</strong> — Paiement à la livraison disponible ✨
    </div>
  )
}

export default AnnouncementBar
