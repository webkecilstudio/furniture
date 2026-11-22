import { SpecialOfferItem } from '../types';

export const SPECIAL_OFFERS: SpecialOfferItem[] = [
  {
    id: 'offer-living',
    badge: 'Paket Bundling Hemat',
    title: 'Nordic Sanctuary Living Room Set',
    subtitle: 'Paket lengkap ruang tamu siap pakai dengan harmoni material kayu jati dan velvet',
    discount: 'Hemat 22%',
    promoCode: 'PorosKayu-LIVING',
    validUntil: '31 Desember 2026',
    image: '/images/hero-bg.jpg',
    itemsIncluded: [
      '1x Velvet Noir Modular 3-Seater Sofa',
      '1x Nordic Lounge Armchair (Kayu Jati)',
      '1x Carrara Minimalist Marble Coffee Table',
      'Bonus 3 Cushion Linen & 1 Wood Care Wax Kit'
    ],
    normalPrice: 22550000,
    promoPrice: 17500000
  },
  {
    id: 'offer-dining',
    badge: 'Penawaran Eksklusif',
    title: 'The Sovereign Dining Gathering Package',
    subtitle: 'Meja makan jati solid utuh 220cm lengkap dengan 6 kursi dining ergonomis',
    discount: 'Hemat Rp 4.5 Juta',
    promoCode: 'PorosKayu-DINING',
    validUntil: '15 Januari 2027',
    image: '/images/prod-teak-dining.jpg',
    itemsIncluded: [
      '1x Sovereign Solid Teak Dining Table (220 x 95 cm)',
      '6x Minimalist Ergonomic Teak Dining Chairs',
      'Gratis Biaya Kirim & Perakitan Area Jawa-Bali',
      'Garansi Konstruksi 5 Tahun Penuh'
    ],
    normalPrice: 24900000,
    promoPrice: 20400000
  }
];
