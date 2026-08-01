import { CloseIcon, InstaIcon, FbIcon, TikTokIcon } from '../ui/Icons'
import Link from '../ui/Link'

function MobileMenu({ open, onClose }) {
  if (!open) return null

  const items = [
    { label: 'Nouveautés', tag: 'New' },
    { label: 'Best-Sellers' },
    { label: 'Édition Limitée' },
    { label: 'Yeux' },
    { label: 'Lèvres' },
    { label: 'Visage' },
    { label: 'Soin de la peau' },
    { label: 'Coffrets & Cadeaux' },
    { label: 'Accessoires' },
    { label: 'Programme de Fidélité' },
  ]

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 60,
        }}
      />
      <div
        className="drawer-animate"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 'min(88vw, 380px)',
          background: '#fff',
          zIndex: 70,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '4px 0 24px rgba(0,0,0,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgb(var(--border-color))',
          }}
        >
          <img
            src="https://florasis.com/cdn/shop/files/20260703-113414.png?v=1783049681&width=240"
            alt="Florasis"
            style={{ height: 28 }}
          />
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'none',
            }}
            aria-label="Fermer"
          >
            <CloseIcon />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0' }}>
          <nav>
            {items.map((item) => (
              <Link
                key={item.label}
                to={`category:${item.label}`}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderBottom: '1px solid #f0f0f0',
                  color: 'var(--dark-teal)',
                }}
              >
                {item.label}
                {item.tag && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: 'var(--gold)',
                      color: 'var(--dark-teal)',
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.tag}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            padding: '1.25rem',
            borderTop: '1px solid rgb(var(--border-color))',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            <a href="#" style={{ color: 'var(--dark-teal)' }} aria-label="Instagram">
              <InstaIcon />
            </a>
            <a href="#" style={{ color: 'var(--dark-teal)' }} aria-label="Facebook">
              <FbIcon />
            </a>
            <a href="#" style={{ color: 'var(--dark-teal)' }} aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', opacity: 0.7 }}>
            Algérie — Livraison 24-48h
          </p>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
