// Each variant now includes a `color` (hex) field so the UI can render
// a color swatch for the shade instead of just showing the shade name.

export const PRODUCTS = [
  {
    id: '6582680289479',
    title: 'Blooming Rouge Love Lock Lipstick',
    price: 49.00,
    currency: 'USD',
    rating: { value: 4.8, count: 74 },
    sku: 'C10308005001',
    gtin: '6971084554922',
    description: [
      {
        title: 'Loving Legacies Engraved',
        text: 'Reproducing the eastern miniature relief craftsmanship, with each turn of the bullet, you\'ll discover an ancient Chinese romance told in intricate engravings to convey romantic and everlasting love.'
      },
      {
        title: 'A 5,000-Year-Old Inspiration',
        text: 'In ancient China, Love Locks were once a symbol of happiness, love, and marriage. Created in collaboration with Master locksmith, Love Lock unites virtuosic artistry, ancient heritage, and the blessing of unbreakable love into a portable romantic emblem.'
      },
      {
        title: 'Rich Pigment with Unprecedented Feel',
        text: 'Enriched with jojoba and "the king of flowers", peony seed oils, this innovative flexible formula enhances lip vitality and color vibrancy for lightweight wear, delivering a soft matte, non-sticky finish.'
      },
      {
        title: 'A Harmony of Makeup and Skincare',
        text: 'Taking inspiration from the skincare recipes used by Empress Dowager Cixi, the formula is infused with botanical extracts of Madonna lily, Cotton rose and Summer snowflake to provide lips with deep moisture and natural antioxidant benefits.'
      }
    ],
    note: 'Please note: The lipstick case and refill are packaged separately for certain shades. Kindly consider this shipping format before placing your order. We appreciate your understanding.',
    variants: [
      { id: '41365652046023', name: 'M520 I Love You', sku: 'C10308005001', gtin: '6971084554922', available: true, color: '#C2185B' },
      { id: '41365651914951', name: 'M1311 My One and Only', sku: 'C10308003001', gtin: '6974245582185', available: true, color: '#B23A48' },
      { id: '41365651849415', name: 'M1314 Together Forever', sku: 'C10019033010', gtin: '6971084554939', available: true, color: '#A6304A' },
      { id: '44112801562823', name: 'M9420 Just Love You', sku: 'C10026025001', gtin: '6974245587296', available: true, color: '#D6486B' },
      { id: '44579107438791', name: 'M1777 Cupid\'s Kiss', sku: 'C10026046001', gtin: '6975987745623', available: true, color: '#E0607E' },
      { id: '44579134668999', name: 'M555 Memories in Rouge', sku: 'C10026048001', gtin: '6975987745647', available: true, color: '#8E2439' },
      { id: '44579147153607', name: 'M165 Heartbreak Anniversary', sku: 'C10026049001', gtin: '6975987745654', available: false, color: '#7A1F30' },
      { id: '44579125592263', name: 'M1920 Everlasting Affection', sku: 'C10026047001', gtin: '6975987745630', available: false, color: '#C94F6D' },
      { id: '44112801431751', name: 'M521 Yes I Do', sku: 'C10026023001', gtin: '6974245587272', available: true, color: '#CC3355' },
      { id: '41365651947719', name: 'M1666 Bed of Roses', sku: 'C10026020001', gtin: '6971084553147', available: true, color: '#D94F6E' },
      { id: '44112801464519', name: 'M1888 Fuchsia Fame', sku: 'C10026021001', gtin: '6974245587258', available: true, color: '#B32B6D' },
      { id: '41365652078791', name: 'M7319 Love Remains', sku: 'C10026019001', gtin: '6974245582161', available: true, color: '#9C2B45' },
      { id: '44112801530055', name: 'M9213 Love You Always', sku: 'C10026024001', gtin: '6974245587289', available: true, color: '#BF3960' },
    ],
  },

  {
    id: '6582680355015',
    title: 'Phoenix Silk Velvet Blush',
    price: 39.00,
    currency: 'USD',
    rating: { value: 4.7, count: 58 },
    sku: 'C10412006001',
    gtin: '6971084561142',
    description: [
      {
        title: 'Feather-Light Silk Powder',
        text: 'Micro-milled pigments glide onto skin like silk, blending seamlessly for a soft-focus finish that mimics natural, healthy-looking skin rather than sitting on top of it.'
      },
      {
        title: 'Inspired by the Phoenix Rebirth Myth',
        text: 'Drawing on the ancient Chinese legend of the phoenix rising renewed from flame, each shade is designed to bring warmth and radiance back to the complexion.'
      },
      {
        title: 'Buildable, Blurring Formula',
        text: 'A weightless powder-to-cream texture that layers without caking, letting you build from a natural flush to a fuller, more defined color.'
      },
      {
        title: 'Skin-Loving Botanicals',
        text: 'Infused with camellia seed oil and white peony extract to soothe and hydrate while delivering long-wearing color payoff.'
      }
    ],
    note: 'Please note: Compact mirrors are packaged separately from the powder pan for certain shades. Kindly consider this shipping format before placing your order. We appreciate your understanding.',
    variants: [
      { id: '51365652046101', name: 'P101 Dawn Blossom', sku: 'C10412006001', gtin: '6971084561142', available: true, color: '#F3A6B2' },
      { id: '51365652046102', name: 'P102 Coral Ember', sku: 'C10412006002', gtin: '6971084561159', available: true, color: '#E8785C' },
      { id: '51365652046103', name: 'P103 Rosewood Flame', sku: 'C10412006003', gtin: '6971084561166', available: true, color: '#B85C57' },
      { id: '51365652046104', name: 'P104 Apricot Glow', sku: 'C10412006004', gtin: '6971084561173', available: true, color: '#EFA173' },
      { id: '51365652046105', name: 'P105 Plum Rebirth', sku: 'C10412006005', gtin: '6971084561180', available: false, color: '#8E4B5C' },
      { id: '51365652046106', name: 'P106 Peach Nirvana', sku: 'C10412006006', gtin: '6971084561197', available: true, color: '#F0B79A' },
    ],
  },

  {
    id: '6582680412183',
    title: 'Jade Dynasty Nourishing Lip Oil',
    price: 32.00,
    currency: 'USD',
    rating: { value: 4.9, count: 121 },
    sku: 'C10520007001',
    gtin: '6971084572148',
    description: [
      {
        title: 'Jade-Carved Applicator',
        text: 'A cooling, jade-inspired doe-foot applicator glides on with a gentle massaging motion, echoing centuries-old jade beauty rituals believed to boost circulation.'
      },
      {
        title: 'Legends of Everlasting Beauty',
        text: 'Inspired by tales of jade amulets passed down through generations as symbols of protection and lasting beauty, each bottle is designed as a keepsake as much as a cosmetic.'
      },
      {
        title: 'High-Shine, Non-Sticky Gloss',
        text: 'A weightless oil-gel hybrid delivers glass-like shine without the tacky feel, layering beautifully over lipstick or worn alone.'
      },
      {
        title: 'Nourishing Botanical Complex',
        text: 'Formulated with camellia oil, green tea extract and vitamin E to condition lips and lock in moisture for hours of comfortable wear.'
      }
    ],
    note: 'Please note: The lip oil wand and refill pods ship separately for certain shades. Kindly consider this shipping format before placing your order. We appreciate your understanding.',
    variants: [
      { id: '61365652046201', name: 'J201 Jade Whisper', sku: 'C10520007001', gtin: '6971084572148', available: true, color: '#8FBFA3' },
      { id: '61365652046202', name: 'J202 Amber Dynasty', sku: 'C10520007002', gtin: '6971084572155', available: true, color: '#C77B45' },
      { id: '61365652046203', name: 'J203 Rose Quartz', sku: 'C10520007003', gtin: '6971084572162', available: true, color: '#E3A3AC' },
      { id: '61365652046204', name: 'J204 Coral Silk', sku: 'C10520007004', gtin: '6971084572179', available: true, color: '#E88B72' },
      { id: '61365652046205', name: 'J205 Berry Lantern', sku: 'C10520007005', gtin: '6971084572186', available: false, color: '#9C4457' },
      { id: '61365652046206', name: 'J206 Honey Glow', sku: 'C10520007006', gtin: '6971084572193', available: true, color: '#D9A15B' },
      { id: '61365652046207', name: 'J207 Peony Blush', sku: 'C10520007007', gtin: '6971084572209', available: true, color: '#E4A0B7' },
    ],
  },
];

export const QUIZ_OPTIONS = [
  { value: 'A', label: 'Zhang Chang Painting Eyebrows', img: 'https://cdn.shopify.com/s/files/1/0528/2486/7015/files/g-form-0-imageOptions-1-ml8x7k7b-20260205-104445.jpg?v=1770263563' },
  { value: 'B', label: 'The Legend of the White Snake', img: 'https://cdn.shopify.com/s/files/1/0528/2486/7015/files/g-form-0-imageOptions-1-ml8x7mr4-20260205-104452.jpg?v=1770263557' },
  { value: 'C', label: 'Liang Shanbo and Zhu Yingtai', img: 'https://cdn.shopify.com/s/files/1/0528/2486/7015/files/g-form-0-imageOptions-1-ml8x86og-20260205-104458.jpg?v=1770263581' },
  { value: 'D', label: 'The Cowherd and the Weaver Girl', img: 'https://cdn.shopify.com/s/files/1/0528/2486/7015/files/g-form-0-imageOptions-1-ml8x8dni-20260205-104502.jpg?v=1770263590' },
];