function Footer() {
  const shopLinks = ['Nouveautés', 'Best-Sellers', 'Édition Limitée', 'Coffrets Cadeaux', 'Promotions']
  const helpLinks = ['Nous contacter', 'Livraison & Retours', 'FAQ', 'Guide des teintes', 'Politique de confidentialité']

  return (
    <footer
      style={{
        background: 'rgb(var(--footer-background))',
        color: 'rgb(var(--footer-text))',
        padding: '3rem var(--container-gutter) 1.5rem',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gap: '2.5rem',
            gridTemplateColumns: '1fr',
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="https://florasis.com/cdn/shop/files/20260703-113414.png?v=1783049681&width=240"
              alt="Florasis"
              style={{
                height: 32,
                marginBottom: '1rem',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <p
              style={{
                fontSize: '0.85rem',
                opacity: 0.8,
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              Florasis (Huaxizi) perpétue la philosophie de l'esthétique chinoise
              en alliant traditions millénaires et technologies modernes. Désormais
              disponible officiellement en Algérie.
            </p>
          </div>

          {/* Boutique */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              Boutique
            </h4>
            {shopLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="footer-link"
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  opacity: 0.75,
                  marginBottom: '0.6rem',
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Aide */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              Aide
            </h4>
            {helpLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="footer-link"
                style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  opacity: 0.75,
                  marginBottom: '0.6rem',
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              Contact Algérie
            </h4>
            <a
              href="tel:+213550123456"
              className="footer-link"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                opacity: 0.75,
                marginBottom: '0.6rem',
              }}
            >
              +213 550 12 34 56
            </a>
            <a
              href="mailto:dz@florasis.com"
              className="footer-link"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                opacity: 0.75,
                marginBottom: '0.6rem',
              }}
            >
              dz@florasis.com
            </a>
            <span
              style={{
                display: 'block',
                fontSize: '0.85rem',
                opacity: 0.75,
                marginBottom: '0.6rem',
              }}
            >
              Lun-Sam : 9h00 - 18h00
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.85rem',
                opacity: 0.75,
                marginBottom: '0.6rem',
              }}
            >
              Instagram : @florasis.algerie
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(244,209,158,0.15)',
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '0.8rem',
            opacity: 0.7,
          }}
        >
          <p>© 2026 Florasis Algérie. Tous droits réservés.</p>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            {['COD', 'CIB', 'EDAHABIA'].map((p) => (
              <span
                key={p}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: 4,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
