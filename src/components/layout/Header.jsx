import { useState, useEffect } from 'react'
import { MenuIcon, SearchIcon, UserIcon, CartIcon } from '../ui/Icons'
import Link from '../ui/Link'
import SearchOverlay from '../ui/SearchOverlay'

function Header({ cartCount, onMenuToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = ['Nouveautés', 'Best-Sellers', 'Yeux', 'Lèvres', 'Visage', 'Coffrets']

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: '#fff',
          borderBottom: '1px solid rgb(var(--border-color))',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '0 var(--container-gutter)',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: 'var(--header-height)',
            gap: '1rem',
          }}
        >
          <button
            onClick={onMenuToggle}
            className="mobile-menu-btn"
            style={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
            aria-label="Ouvrir le menu"
          >
            <MenuIcon />
          </button>

          <Link to="home" style={{ display: 'block' }}>
            <img
              src="https://florasis.com/cdn/shop/files/20260703-113414.png?v=1783049681&width=240"
              alt="Florasis"
              style={{ height: 34, width: 'auto' }}
            />
          </Link>

          <nav className="desktop-nav" style={{ display: 'none' }} aria-label="Navigation principale">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`category:${item}`}
                    className="nav-link-animated"
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'rgb(var(--text-primary))',
                      position: 'relative',
                      padding: '0.25rem 0',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.5rem',
            }}
          >
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f0f4f5'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
              aria-label="Rechercher"
            >
              <SearchIcon />
          </button>
          <Link
            to="home"
            style={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
            aria-label="Compte"
          >
            <UserIcon />
          </Link>
          <Link
            to="home"
            style={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              position: 'relative',
            }}
            aria-label="Panier"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  width: 16,
                  height: 16,
                  background: 'var(--dark-teal)',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
