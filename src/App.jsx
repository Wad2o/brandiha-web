import { useState, useEffect, useContext } from 'react'
import AnnouncementBar from './components/layout/AnnouncementBar'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import { NavigationContext } from './context/NavigationContext'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const { currentPage, selectedProductId, selectedCategory } = useContext(NavigationContext)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const addToCart = () => setCartCount((c) => c + 1)

  return (
    <>
      <AnnouncementBar />
      <Header
        cartCount={cartCount}
        onMenuToggle={() => setMenuOpen((o) => !o)}
      />
      <MobileMenu 
        open={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
      
      {currentPage === 'home' && (
        <Home addToCart={addToCart} />
      )}
      {currentPage === 'category' && (
        <Category category={selectedCategory} addToCart={addToCart} />
      )}
      {currentPage === 'product' && (
        <Product productId={selectedProductId} onAddToCart={addToCart} />
      )}
      
      <Footer />
    </>
  )
}

export default App
