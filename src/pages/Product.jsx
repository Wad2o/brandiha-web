import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import StarRating from '../components/product/StarRating';
import VariantSelector from '../components/product/VariantSelector';
import ProductMeta from '../components/product/ProductMeta';
import QuizSection from '../components/product/QuizSection';
import { PRODUCTS } from '../data/productDetails';
import ProductSection from '../components/ProductSection';
import { newArrivals } from '../data/products';

/* ── Scroll-driven image gallery ──
   No autoplay, no arrows/dots-as-controls: the user scrolls the panel
   itself (wheel, trackpad, or touch drag) and images snap into place
   one at a time. A slim rail on the right just reflects position. */
function ScrollGallery({ images, alt }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollTop / el.clientHeight);
    setActive(Math.min(images.length - 1, Math.max(0, idx)));
  }, [images.length]);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ top: i * el.clientHeight, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        style={{
          height: 640,
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          borderRadius: 4,
          scrollbarWidth: 'none',
        }}
        className="gallery-track"
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              height: 640,
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 4 }}
            />
          </div>
        ))}
      </div>

      {/* position rail */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: 14,
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: active === i ? 6 : 5,
                height: active === i ? 22 : 5,
                borderRadius: 4,
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: active === i ? '#f4d19e' : 'rgba(255,255,255,0.55)',
                boxShadow: '0 0 0 1px rgba(0,59,74,0.25)',
                transition: 'height 260ms ease, background 260ms ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Accordion description block ──
   Only the titles show by default; clicking a row slides its content
   open/closed with a smooth height animation (grid-template-rows trick,
   so no JS measuring of content height is needed). */
function DescriptionAccordion({ blocks }) {
  const [openSet, setOpenSet] = useState(() => new Set([0]));

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div>
      {blocks.map((block, i) => {
        const isOpen = openSet.has(i);
        return (
          <div key={i} style={{ borderBottom: '1px solid #e3e9ea' }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '20px 4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-heading)',
                  color: '#003b4a',
                  letterSpacing: 0.3,
                }}
              >
                {block.title}
              </span>
              <span
                style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  display: 'grid',
                  placeItems: 'center',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 320ms cubic-bezier(0.4, 0, 0.2, 1)',
                  color: '#003b4a',
                  fontSize: 20,
                  fontWeight: 300,
                }}
              >
                +
              </span>
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 380ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    lineHeight: 1.7,
                    color: '#444',
                    fontSize: 15,
                    padding: '0 4px 22px',
                    margin: 0,
                  }}
                >
                  {block.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Reel-style video slot (9:16), Instagram/TikTok style ── */
function ReelSlot({ reel, label }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '9 / 16',
        borderRadius: 8,
        overflow: 'hidden',
        background: '#003b4a',
      }}
    >
      {reel?.src ? (
        <video
          src={reel.src}
          poster={reel.poster}
          controls
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <>
          {reel?.poster && (
            <img
              src={reel.poster}
              alt={label}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
            />
          )}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: 'linear-gradient(180deg, rgba(0,59,74,0.15) 0%, rgba(0,59,74,0.65) 100%)',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1.5px solid #f4d19e',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '9px solid transparent',
                  borderBottom: '9px solid transparent',
                  borderLeft: '14px solid #f4d19e',
                  marginLeft: 3,
                }}
              />
            </div>
            <span
              style={{
                color: '#f4d19e',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                fontFamily: 'var(--font-heading)',
              }}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Product({ productId, onAddToCart }) {
  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === String(productId)) || PRODUCTS[0];
  }, [productId]);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQty(1);
  }, [product]);

  const currentSku = useMemo(() => selectedVariant.sku, [selectedVariant]);
  const currentGtin = useMemo(() => selectedVariant.gtin, [selectedVariant]);

  // Falls back to a single-image "gallery" if the product data doesn't
  // define an `images` array yet — add one per product for the full effect.
  const galleryImages = useMemo(() => {
    if (product.images?.length) return product.images;
    return [
      'https://cdn.shopify.com/s/files/1/0528/2486/7015/files/c10308005001_1.jpg?v=1734509172&width=900',
    ];
  }, [product]);

  const reels = product.reels || [];

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  }

  return (
    <div style={{ fontFamily: '"Noto Sans Japanese", sans-serif', color: 'rgb(0 59 74)', background: '#fff' }}>
      <style>{`.gallery-track::-webkit-scrollbar { display: none; }`}</style>
      <main style={{ paddingTop: 24, paddingBottom: 64 }}>
        {/* ── Product Hero ── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

          <ScrollGallery images={galleryImages} alt={product.title} />

          {/* Infos produit */}
          <div style={{ position: 'sticky', top: 100 }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: 400, textTransform: 'uppercase', fontFamily: 'var(--font-heading)', marginBottom: 12, lineHeight: 1.2 }}>
              {product.title}
            </h1>

            <StarRating value={product.rating.value} count={product.rating.count} />

            <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 24, color: '#003b4a' }}>
              ${product.price.toFixed(2)} {product.currency}
            </div>

            <VariantSelector
              variants={product.variants}
              selected={selectedVariant}
              onSelect={setSelectedVariant}
            />

            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              <div style={{ display: 'flex', border: '1px solid #d9e2e4', alignItems: 'center' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: 48, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#003b4a' }}>−</button>
                <span style={{ width: 40, textAlign: 'center', fontSize: 14 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: 48, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#003b4a' }}>+</button>
              </div>
              <button
                disabled={!selectedVariant.available}
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  height: 48,
                  background: selectedVariant.available ? '#003b4a' : '#d9e2e4',
                  color: selectedVariant.available ? '#f4d19e' : '#888',
                  border: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: selectedVariant.available ? 'pointer' : 'not-allowed',
                  letterSpacing: 1
                }}
              >
                {selectedVariant.available ? 'Add to Bag' : 'Sold Out'}
              </button>
            </div>

            <ProductMeta sku={currentSku} gtin={currentGtin} />
          </div>
        </section>

        {/* ── Description (accordion) + Reels ── */}
        <section style={{ maxWidth: 1000, margin: '64px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <DescriptionAccordion blocks={product.description} />
            <p style={{ fontSize: 13, color: '#777', fontStyle: 'italic', marginTop: 24 }}>
              {product.note}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1.2, fontFamily: 'var(--font-heading)', color: '#003b4a', marginBottom: 14, fontWeight: 400 }}>
              See It In Motion
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <ReelSlot reel={reels[0]} label="Watch" />
              <ReelSlot reel={reels[1]} label="Watch" />
            </div>
          </div>
        </section>

        <ProductSection
          id="nouveautes"
          title="Nouveautés"
          subtitle="Les dernières créations Florasis disponibles en Algérie"
          products={newArrivals}
          onAdd={handleAddToCart}
        />

        {/* ── Quiz Section ── */}
        <QuizSection />
      </main>
    </div>
  );
}