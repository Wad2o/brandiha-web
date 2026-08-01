export const bestSellers = [
  {
    id: 1,
    title: 'Palette de Maquillage Floral Engraving Phoenix',
    price: '9 200 DA',
    img: 'https://florasis.com/cdn/shop/files/02_1484fc5d-0b6a-42c6-a2b6-bfbd7d27e9e5.webp?v=1746787274&width=600',
    badge: 'Best-seller',
    category: 'Yeux',
  },
  {
    id: '6582680289479',
    title: 'Rouge à Lèvres Blooming Rouge Love Lock',
    price: '6 600 DA',
    img: 'https://florasis.com/cdn/shop/files/317_9867d649-824d-486f-9a00-9ad3b296b9df.webp?v=1780969255&width=600',
    badge: null,
    category: 'Lèvres',
  },
  {
    id: 3,
    title: 'Fond de Teint Cushion Flawless Jade SPF50+ (1+1)',
    price: '6 600 DA',
    img: 'https://florasis.com/cdn/shop/files/FSQD-1.webp?v=1775547804&width=600',
    badge: 'Nouveau',
    category: 'Visage',
  },
  {
    id: '6582680355015',
    title: 'Phoenix Silk Velvet Blush',
    price: '5 300 DA',
    img: 'https://florasis.com/cdn/shop/files/8_dfe861c1-e9fd-4350-acb1-e1174af3886e.webp?v=1770970597&width=600',
    badge: null,
    category: 'Visage',
  },
  {
    id: 5,
    title: 'Palette de Sculpture Eastern Beasts',
    price: '6 600 DA',
    img: 'https://florasis.com/cdn/shop/files/01_fe25e98a-a2cd-4670-b2cb-2033003b51a7.webp?v=1736395374&width=600',
    badge: null,
    category: 'Yeux',
  },
  {
    id: 6,
    title: 'Fond de Teint Crème Nectar Aura Luminous',
    price: '10 100 DA',
    img: 'https://florasis.com/cdn/shop/files/NectarFoundation1.webp?v=1771989286&width=600',
    badge: 'Top ventes',
    category: 'Visage',
  },
  {
    id: 7,
    title: 'Poudre Correctrice Flawless Jade SPF50+',
    price: '6 100 DA',
    img: 'https://florasis.com/cdn/shop/files/FSMF-1.webp?v=1775712315&width=600',
    badge: null,
    category: 'Visage',
  },
  {
    id: 8,
    title: 'Palette Phoenix — Gold Brown',
    price: '9 200 DA',
    img: 'https://florasis.com/cdn/shop/files/01_5ebd5a58-1ffc-42a4-b688-25ff76d1d26d.webp?v=1764293578&width=600',
    badge: null,
    category: 'Yeux',
  },
]

export const newArrivals = [
  {
    id: 9,
    title: 'Cushion Flawless Jade Weightless Matte',
    price: '6 600 DA',
    img: 'https://florasis.com/cdn/shop/files/FSQD-1.webp?v=1775547804&width=600',
    badge: 'New',
    category: 'Visage',
  },
  {
    id: 10,
    title: 'Poudre Correctrice Loose Powder SPF50',
    price: '6 100 DA',
    img: 'https://florasis.com/cdn/shop/files/FSMF-1.webp?v=1775712315&width=600',
    badge: 'New',
    category: 'Visage',
  },
  {
    id: '6582680412183',
    title: 'Jade Dynasty Nourishing Lip Oil',
    price: '4 500 DA',
    img: 'https://florasis.com/cdn/shop/files/NectarFoundation1.webp?v=1771989286&width=600',
    badge: 'New',
    category: 'Lèvres',
  },
  {
    id: 12,
    title: 'Rouge à Lèvres Love Lock — Édition Limitée',
    price: '6 600 DA',
    img: 'https://florasis.com/cdn/shop/files/317_9867d649-824d-486f-9a00-9ad3b296b9df.webp?v=1780969255&width=600',
    badge: 'New',
    category: 'Lèvres',
  },
]

// Deduplicated list of all products, plus custom additions
export const allProducts = [
  ...bestSellers,
  ...newArrivals,
  {
    id: '6582680499999',
    title: 'Coffret Cadeau Blooming Romance',
    price: '15 000 DA',
    img: 'https://florasis.com/cdn/shop/files/317_9867d649-824d-486f-9a00-9ad3b296b9df.webp?v=1780969255&width=600',
    badge: 'Édition Limitée',
    category: 'Coffrets',
  }
].reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
