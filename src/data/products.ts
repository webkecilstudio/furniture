import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'PK-001',
    sku: 'PKT-CHR-01',
    name: 'Nordic Lounge Armchair',
    category: 'kursi',
    subcategory: 'Armchair',
    collection: 'scandinavian',
    price: 4850000,
    originalPrice: 5600000,
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 8,
    dimensions: { length: 82, width: 78, height: 74, unit: 'cm' },
    weightKg: 14,
    materials: ['Kayu Jati Solid Grade A', 'Busa High-Resilience', 'Kain Linen Belgia'],
    finishOptions: ['Natural Doff', 'Walnut Brown', 'Bleached Oak'],
    colors: [
      { name: 'Oatmeal Natural', hex: '#DCD4C4' },
      { name: 'Charcoal Noir', hex: '#262626' },
      { name: 'Warm Terracotta', hex: '#B85D43' }
    ],
    image: '/images/prod-nordic-chair.jpg',
    gallery: [
      '/images/prod-nordic-chair.jpg',
      '/images/cat-kursi.jpg',
      '/images/hero-furniture.jpg'
    ],
    description: 'Armchair bergaya Nordic dengan kurva ergonomis yang menopang punggung secara anatomis. Rangka terbuat dari kayu jati solid pilihan oven-dry yang tahan kelembaban seumur hidup.',
    features: [
      'Rangka kayu jati tua bersertifikat Perhutani',
      'Sudut sandaran 105 derajat ideal untuk relaksasi',
      'Kain pelapis anti noda dan mudah dibersihkan',
      'Sambungan tenon & mortise tradisional tanpa sekrup tampak'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-002',
    sku: 'PKT-TBL-02',
    name: 'Sovereign Solid Teak Dining Table',
    category: 'meja',
    subcategory: 'Meja Makan',
    collection: 'modern',
    price: 13900000,
    originalPrice: 15500000,
    rating: 5.0,
    reviewsCount: 24,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 4,
    dimensions: { length: 220, width: 95, height: 76, unit: 'cm' },
    weightKg: 78,
    materials: ['Kayu Jati Solid Perhutani (Tebal 4cm)', 'Kaki Besi Hollow Powder Coated'],
    finishOptions: ['Natural Jati Matte', 'Rustic Raw Oak', 'Espresso Dark'],
    colors: [
      { name: 'Natural Teak Grain', hex: '#A67B5B' },
      { name: 'Dark Walnut', hex: '#4B3621' },
      { name: 'Smoked Ash', hex: '#3B3A36' }
    ],
    image: '/images/prod-teak-dining.jpg',
    gallery: [
      '/images/prod-teak-dining.jpg',
      '/images/cat-meja.jpg',
      '/images/hero-bg.jpg'
    ],
    description: 'Meja makan berkapasitas 8-10 orang dengan daun meja satu bentangan kayu jati solid tebal 4 cm. Menampilkan keindahan serat alami dan tepian live-edge halus yang dipadu dengan kaki baja industrial minimalis.',
    features: [
      'Kayu jati oven MC 10-12% anti melengkung dan anti rayap',
      'Finishing PU 4 lapis food-grade aman untuk santap keluarga',
      'Kaki metal berkekuatan beban hingga 300 kg',
      'Garansi struktural 10 tahun'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-003',
    sku: 'PKT-SOF-03',
    name: 'Velvet Noir Modular 3-Seater Sofa',
    category: 'sofa',
    subcategory: 'Sofa Modular',
    collection: 'minimalis',
    price: 12500000,
    originalPrice: 14200000,
    rating: 4.8,
    reviewsCount: 19,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 3,
    dimensions: { length: 260, width: 100, height: 72, unit: 'cm' },
    weightKg: 62,
    materials: ['Rangka Kayu Mahoni Kiln-Dry', 'Kain Velvet Import', 'Pocket Spring & Memory Foam'],
    finishOptions: ['Black Satin Base', 'Brass Gold Accents'],
    colors: [
      { name: 'Onyx Black', hex: '#1C1C1C' },
      { name: 'Emerald Velvet', hex: '#1B4D3E' },
      { name: 'Ivory Cream', hex: '#F0ECE1' }
    ],
    image: '/images/prod-velvet-sofa.jpg',
    gallery: [
      '/images/prod-velvet-sofa.jpg',
      '/images/cat-sofa.jpg',
      '/images/col-modern.jpg'
    ],
    description: 'Sofa modular dengan kedalaman dudukan ekstra luas yang mengundang kenyamanan maksimal. Dibalut material velvet premium dengan jahitan ganda yang presisi dan mewah.',
    features: [
      'Dudukan memory foam dengan per pocket spring independen',
      'Modul dapat dipisah menjadi konfigurasi L atau single',
      'Rangka dalam kayu mahoni tahan rayap dengan per zigzag',
      'Bantal pendukung lumbar ergonomis termasuk dalam paket'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-004',
    sku: 'PKT-CRD-04',
    name: 'Elegance Walnut Credenza & Buffet',
    category: 'lemari',
    subcategory: 'Credenza',
    collection: 'modern',
    price: 8750000,
    originalPrice: 9900000,
    rating: 4.9,
    reviewsCount: 15,
    inStock: true,
    stockStatus: 'preorder',
    stockCount: 0,
    dimensions: { length: 180, width: 45, height: 80, unit: 'cm' },
    weightKg: 52,
    materials: ['Veneer Walnut Amerika Alami', 'Multiplek Meranti Grade AA', 'Hardware Blum Soft-Close'],
    finishOptions: ['Natural Walnut Satin', 'Smoked Oak Dark'],
    colors: [
      { name: 'American Walnut', hex: '#634E3A' },
      { name: 'Natural Sungkai', hex: '#D2B48C' }
    ],
    image: '/images/prod-walnut-credenza.jpg',
    gallery: [
      '/images/prod-walnut-credenza.jpg',
      '/images/cat-lemari.jpg'
    ],
    description: 'Credenza serbaguna dengan pintu slatted vertikal bertekstur modern. Dilengkapi 3 kompartemen luas dan rel soft-close premium impor dari Austria.',
    features: [
      'Engsel & rel laci Blum Austria slow-motion',
      'Slot manajemen kabel tersembunyi untuk media console',
      'Aksen kisi-kisi kayu solid buatan tangan',
      'Kaki kokoh berketinggian memudahkan robot vacuum melintas'
    ],
    has3D: false,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-005',
    sku: 'PKT-BED-05',
    name: 'Zenith Platform King Bedframe',
    category: 'tempat-tidur',
    subcategory: 'Dipan Tempat Tidur',
    collection: 'minimalis',
    price: 11200000,
    originalPrice: 12800000,
    rating: 5.0,
    reviewsCount: 22,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 5,
    dimensions: { length: 215, width: 195, height: 95, unit: 'cm' },
    weightKg: 65,
    materials: ['Kayu Jati Solid Grade A', 'Headboard Upholstery Linen', 'Slat Papan Kayu Pinus Tebal'],
    finishOptions: ['Natural Teak Matte', 'Bleached Japandi Light'],
    colors: [
      { name: 'Natural Teak & Sand Linen', hex: '#C2B29D' },
      { name: 'Dark Oak & Slate Gray', hex: '#4A4A4A' }
    ],
    image: '/images/prod-zenith-bed.jpg',
    gallery: [
      '/images/prod-zenith-bed.jpg',
      '/images/cat-tempat-tidur.jpg'
    ],
    description: 'Dipan tempat tidur tipe king size (180x200cm) berkonsep low-platform melayang dengan headboard berlapis kain linen empuk untuk kenyamanan membaca sebelum tidur.',
    features: [
      'Struktur slat tanpa bunyi (zero squeak acoustic engineering)',
      'Konstruksi interlocking mudah dibongkar-pasang saat pindahan',
      'Dua laci penyimpanan tersembunyi di bagian samping',
      'Tepian kayu bulat halus aman untuk keluarga'
    ],
    has3D: true,
    hasAR: false,
    isFeatured: true
  },
  {
    id: 'PK-006',
    sku: 'PKT-DSK-06',
    name: 'Apex Executive Solid Wood Desk',
    category: 'furniture-kantor',
    subcategory: 'Meja Kerja',
    collection: 'industrial',
    price: 9400000,
    originalPrice: 10500000,
    rating: 4.9,
    reviewsCount: 17,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 6,
    dimensions: { length: 160, width: 75, height: 75, unit: 'cm' },
    weightKg: 48,
    materials: ['Kayu Jati Solid Pilihan', 'Rangka Baja Presisi', 'Inlay Kulit Sapi Asli'],
    finishOptions: ['Natural Teak Doff', 'Matte Industrial Black'],
    colors: [
      { name: 'Raw Teak & Cast Iron', hex: '#3E342B' },
      { name: 'Full Noir Black', hex: '#1A1A1A' }
    ],
    image: '/images/prod-apex-desk.jpg',
    gallery: [
      '/images/prod-apex-desk.jpg',
      '/images/cat-kantor.jpg'
    ],
    description: 'Meja eksekutif premium yang dirancang untuk produktivitas level tinggi. Menggabungkan kayu jati solid hangat dengan inlay kulit asli di area kerja laptop dan dock pengisian nirkabel tersembunyi.',
    features: [
      'Pad kulit asli Italia terintegrasi langsung pada permukaan',
      'Dua laci arsip dengan kunci privasi mekanis',
      'Kanal kabel tersembunyi menjaga meja tetap rapi tanpa kabel kusut',
      'Lapisan tahan gores kopi dan cairan panas'
    ],
    has3D: false,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-007',
    sku: 'PKT-CFT-07',
    name: 'Carrara Minimalist Marble Coffee Table',
    category: 'meja',
    subcategory: 'Coffee Table',
    collection: 'modern',
    price: 5200000,
    originalPrice: 6100000,
    rating: 4.8,
    reviewsCount: 31,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 7,
    dimensions: { length: 110, width: 60, height: 42, unit: 'cm' },
    weightKg: 36,
    materials: ['Marmer Asli Carrara White Slab', 'Kaki Metal Black Hairpin Heavy-Duty'],
    finishOptions: ['Polished Glossy', 'Honed Matte'],
    colors: [
      { name: 'Carrara White Vein', hex: '#EAEAEA' },
      { name: 'Nero Marquina Black', hex: '#2B2B2B' }
    ],
    image: '/images/prod-marble-coffee.jpg',
    gallery: [
      '/images/prod-marble-coffee.jpg',
      '/images/cat-meja.jpg'
    ],
    description: 'Meja kopi elegan dengan lempeng marmer alam bermotif urat abu-abu mewah. Setiap unit memiliki pola marmer unik ciptaan alam yang tidak akan pernah sama persis.',
    features: [
      'Lempeng marmer tebal 2 cm dengan bevel chamfer halus di sekeliling tepi',
      'Coating Nano-Sealant anti noda asam kopi dan teh',
      'Rangka kaki besi solid tahan goyang berkapasitas 90 kg',
      'Dudukan anti selip di bawah kaki pelindung lantai parket'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-008',
    sku: 'PKT-KTN-08',
    name: 'Bespoke Culinary Kitchen Island',
    category: 'kitchen-set',
    subcategory: 'Kitchen Island',
    collection: 'modern',
    price: 24500000,
    originalPrice: 28000000,
    rating: 5.0,
    reviewsCount: 11,
    inStock: false,
    stockStatus: 'custom',
    stockCount: 0,
    dimensions: { length: 240, width: 100, height: 88, unit: 'cm' },
    weightKg: 120,
    materials: ['Top Marmer Quartz Tahan Panas', 'Multiplek Jati Grade A', 'Fitting Blum Tandembox'],
    finishOptions: ['Duco Matte Dark Green', 'Duco Matte Warm Sand', 'Natural Jati Kombinasi'],
    colors: [
      { name: 'Forest Green & Brass', hex: '#1E352F' },
      { name: 'Charcoal Black & Teak', hex: '#1E1E1E' }
    ],
    image: '/images/prod-bespoke-kitchen.jpg',
    gallery: [
      '/images/prod-bespoke-kitchen.jpg',
      '/images/cat-kitchen-set.jpg'
    ],
    description: 'Kitchen island kustom yang menjadi pusat keindahan dapur modern. Dilengkapi rak penyimpanan bumbu tersembunyi, rak anggur terintegrasi, serta overhang 30 cm untuk bar stool.',
    features: [
      'Top counter quartz sintetis 100% tahan noda kunyit, minyak, dan goresan pisau',
      'Laci penyimpanan bertingkat dengan organizer sendok kayu kustom',
      'Colokan listrik pop-up tersembunyi otomatis tahan air',
      'Kustomisasi ukuran dan tata letak sink cuci piring'
    ],
    has3D: false,
    hasAR: false,
    isFeatured: true
  },
  {
    id: 'PK-009',
    sku: 'PKT-CSL-09',
    name: 'Meja Konsol Blega Minimalis Jati',
    category: 'meja',
    subcategory: 'Meja Konsol',
    collection: 'minimalis',
    price: 3650000,
    originalPrice: 4200000,
    rating: 4.8,
    reviewsCount: 19,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 6,
    dimensions: { length: 120, width: 35, height: 80, unit: 'cm' },
    weightKg: 24,
    materials: ['Kayu Jati Solid TPK Grade A', 'Handle Logam Kuningan Antik'],
    finishOptions: ['Natural Doff Jati', 'Bleached Blonde', 'Dark Walnut'],
    colors: [
      { name: 'Natural Honey', hex: '#C89D68' },
      { name: 'Espresso Deep', hex: '#3B2F2F' }
    ],
    image: '/images/cat-meja.jpg',
    gallery: [
      '/images/cat-meja.jpg',
      '/images/hero-furniture.jpg'
    ],
    description: 'Meja konsol ramping dengan 2 laci penyimpanan rahasia yang pas untuk area foyer, koridor masuk rumah, atau meja hias ruang keluarga. Konstruksi pasak kayu presisi tanpa goyang.',
    features: [
      'Papan atas kayu jati utuh serat lurus terpilih',
      '2 laci tersembunyi dengan rel kayu tradisional halus',
      'Desain ramping 35 cm hemat tempat untuk koridor sempit',
      'Finishing polyurethane tahan tumpahan air & goresan'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: false
  },
  {
    id: 'PK-010',
    sku: 'PKT-BAR-10',
    name: 'Kursi Bar Industri Madura Solid',
    category: 'kursi',
    subcategory: 'Kursi Bar',
    collection: 'industrial',
    price: 1850000,
    originalPrice: 2200000,
    rating: 4.9,
    reviewsCount: 31,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 14,
    dimensions: { length: 42, width: 42, height: 75, unit: 'cm' },
    weightKg: 9,
    materials: ['Dudukan Kayu Jati Solid Tebal 3.5cm', 'Rangka Besi Hollow 2x2 Powder Coated'],
    finishOptions: ['Natural Rustic Teak', 'Dark Charcoal Teak'],
    colors: [
      { name: 'Rustic Natural & Black', hex: '#40352A' },
      { name: 'All Black Noir', hex: '#1C1C1C' }
    ],
    image: '/images/col-industrial.jpg',
    gallery: [
      '/images/col-industrial.jpg',
      '/images/cat-kursi.jpg'
    ],
    description: 'Stool bar kokoh dengan dudukan kayu jati berkontur ergonomis yang nyaman diduduki berjam-jam. Rangka besi hollow dengan finishing powder coating hitam doff anti karat.',
    features: [
      'Dudukan jati tebal dengan cekungan pantat ergonomis',
      'Pijakan kaki kokoh di 4 sisi dengan ketinggian ideal',
      'Kaki dilengkapi karet pelindung anti baret lantai keramik',
      'Kapasitas beban uji hingga 150 kg'
    ],
    has3D: false,
    hasAR: false,
    isFeatured: true
  },
  {
    id: 'PK-011',
    sku: 'PKT-LMR-11',
    name: 'Lemari 3 Pintu Rahwana Klasik Jati',
    category: 'lemari',
    subcategory: 'Lemari Pakaian',
    collection: 'klasik',
    price: 16800000,
    originalPrice: 19500000,
    rating: 5.0,
    reviewsCount: 16,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 3,
    dimensions: { length: 180, width: 60, height: 210, unit: 'cm' },
    weightKg: 130,
    materials: ['Kayu Jati Solid Tua Perhutani', 'Kaca Cermin Bevel Tebal 5mm', 'Kunci Kuningan Asli'],
    finishOptions: ['Melamine Salak Brown Glossy', 'Natural Jati Semi-Gloss', 'Walnut Antik'],
    colors: [
      { name: 'Salak Brown Classic', hex: '#4A2E18' },
      { name: 'Golden Teak Wax', hex: '#946638' }
    ],
    image: '/images/col-klasik.jpg',
    gallery: [
      '/images/col-klasik.jpg',
      '/images/cat-lemari.jpg'
    ],
    description: 'Lemari pakaian megah dengan mahkota ukiran halus khas sentra kayu Jawa Timur. Memiliki ruang gantungan baju panjang, 4 sekat rak pakaian lipat, serta 2 laci bawah berkunci.',
    features: [
      'Konstruksi knock-down (bongkar pasang) mudah masuk pintu kamar',
      'Pintu tengah dilengkapi cermin bevel penuh setinggi badan',
      'Papan kayu jati tebal 2.5 cm anti melengkung dan anti rayap alami',
      'Engsel sendok kuningan antik tahan karat puluhan tahun'
    ],
    has3D: false,
    hasAR: false,
    isFeatured: true
  },
  {
    id: 'PK-012',
    sku: 'PKT-BED-12',
    name: 'Dipan Kanopi Resort Jati Madura',
    category: 'tempat-tidur',
    subcategory: 'Tempat Tidur Kanopi',
    collection: 'scandinavian',
    price: 14200000,
    originalPrice: 16800000,
    rating: 4.9,
    reviewsCount: 14,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 2,
    dimensions: { length: 215, width: 190, height: 200, unit: 'cm' },
    weightKg: 95,
    materials: ['Kayu Jati Solid Tiang Balok 8x8cm', 'Galangan Kayu Bengkirai Kokoh'],
    finishOptions: ['Natural Doff Teak', 'Bleached Blonde Sun'],
    colors: [
      { name: 'Bleached Hygge', hex: '#E2DAC8' },
      { name: 'Natural Warm Teak', hex: '#A87948' }
    ],
    image: '/images/proj-villa-bali.jpg',
    gallery: [
      '/images/proj-villa-bali.jpg',
      '/images/cat-tempat-tidur.jpg'
    ],
    description: 'Rangka tempat tidur model empat tiang kanopi yang menghadirkan nuansa resort tropis di kamar tidur Anda. Dibuat dari balok kayu jati solid tanpa sambungan tipis.',
    features: [
      'Ukuran kasur King Size (180 x 200 cm) presisi standar',
      'Tiang kanopi kokoh untuk menggantung kelambu tipis atau tirai',
      'Galangan dipan dengan 14 bilah kayu keras anti berisik (squeak-free)',
      'Sistem sambungan purus pasak kayu baja tersembunyi'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: false
  },
  {
    id: 'PK-013',
    sku: 'PKT-SOF-13',
    name: 'Sofa Modular 2-Seater Suramadu Velvet',
    category: 'sofa',
    subcategory: 'Sofa 2-Seater',
    collection: 'modern',
    price: 7600000,
    originalPrice: 8900000,
    rating: 4.9,
    reviewsCount: 27,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 5,
    dimensions: { length: 175, width: 88, height: 78, unit: 'cm' },
    weightKg: 42,
    materials: ['Kain Velvet Import Halus Anti Cakar', 'Rangka Kayu Mahoni Oven', 'Busa Inoac Density 32'],
    finishOptions: ['Kaki Jati Natural', 'Kaki Metal Black'],
    colors: [
      { name: 'Emerald Velvet Green', hex: '#1C4234' },
      { name: 'Midnight Navy Blue', hex: '#1E293B' },
      { name: 'Warm Desert Sand', hex: '#D6C7A8' }
    ],
    image: '/images/hero-furniture.jpg',
    gallery: [
      '/images/hero-furniture.jpg',
      '/images/cat-sofa.jpg'
    ],
    description: 'Sofa 2-seater dengan siluet melengkung modern dan kain pelapis velvet bertekstur mewah. Dudukan empuk berkepadatan tinggi menjamin kenyamanan santai bersama keluarga.',
    features: [
      'Busa density 32 berlapis dacron lembut anti kempes 8 tahun',
      'Kain velvet tahan percikan air ringan dan sangat mudah dibersihkan',
      'Termasuk 2 bantal pelengkap corak monokrom',
      'Kaki kayu jati solid ramping bersudut dengan bantalan lantai'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-014',
    sku: 'PKT-RAK-14',
    name: 'Rak Buku Display Vertikal Sungkai',
    category: 'lemari',
    subcategory: 'Rak Buku & Display',
    collection: 'minimalis',
    price: 4900000,
    originalPrice: 5800000,
    rating: 4.8,
    reviewsCount: 22,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 6,
    dimensions: { length: 90, width: 38, height: 185, unit: 'cm' },
    weightKg: 38,
    materials: ['Kayu Sungkai Solid Pilihan', 'Pintu Kaca Tempered 5mm', 'Lampu LED Warm Strip'],
    finishOptions: ['Natural Sungkai Matte', 'Light Oak Doff'],
    colors: [
      { name: 'Pale Nordic Sand', hex: '#EBE2D0' },
      { name: 'Natural Warm Ash', hex: '#CBBBA0' }
    ],
    image: '/images/cat-lemari.jpg',
    gallery: [
      '/images/cat-lemari.jpg',
      '/images/prod-walnut-credenza.jpg'
    ],
    description: 'Lemari pajangan vertikal terbuka dengan 5 kompartemen asimetris untuk koleksi buku, piala, dan ornamen estetik. Serat kayu sungkai yang terang memberi kesan ruangan lebih lapang.',
    features: [
      'Serat kayu sungkai zebra-pattern yang unik dan cerah',
      'Dilengkapi slot kabel tersembunyi untuk display lampu LED',
      'Struktur dinding belakang berbobot anti goyang dengan wall-anchor',
      'Tiap rak teruji menahan beban buku hingga 35 kg'
    ],
    has3D: false,
    hasAR: false,
    isFeatured: false
  },
  {
    id: 'PK-015',
    sku: 'PKT-OFC-15',
    name: 'Meja Kerja Direktur Eksekutif Jati',
    category: 'furniture-kantor',
    subcategory: 'Meja Direktur',
    collection: 'modern',
    price: 15400000,
    originalPrice: 17800000,
    rating: 5.0,
    reviewsCount: 18,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 3,
    dimensions: { length: 200, width: 90, height: 76, unit: 'cm' },
    weightKg: 85,
    materials: ['Kayu Jati Solid Tebal Papan Utuh', 'Pad Kulit Sintetis Pelindung Nulis', 'Kabel Grommet Kuningan'],
    finishOptions: ['Dark Chocolate Teak', 'Classic Salak Brown', 'Natural Deep Oiled'],
    colors: [
      { name: 'Executive Walnut', hex: '#38281E' },
      { name: 'Royal Teak Noir', hex: '#241D17' }
    ],
    image: '/images/cat-kantor.jpg',
    gallery: [
      '/images/cat-kantor.jpg',
      '/images/proj-office.jpg'
    ],
    description: 'Meja kerja prestisius untuk ruang pimpinan kantor dan studio arsitektur. Mengusung bidang luas 2 meter dengan laci berkunci sentral serta manajemen kabel listrik tersembunyi.',
    features: [
      'Top meja dilapisi kulit sintetis matras tulis anti gores pena',
      '3 laci arsip kanan dengan kunci sentral (central lock system)',
      'Side cabinet kiri untuk CPU komputer dan dokumen rahasia',
      'Desain panel depan tertutup (modesty panel) berwibawa'
    ],
    has3D: true,
    hasAR: true,
    isFeatured: true
  },
  {
    id: 'PK-016',
    sku: 'PKT-KTG-16',
    name: 'Kitchen Cabinet Gantung Mahoni Doff',
    category: 'kitchen-set',
    subcategory: 'Kitchen Set Gantung',
    collection: 'scandinavian',
    price: 6800000,
    originalPrice: 8200000,
    rating: 4.8,
    reviewsCount: 15,
    inStock: true,
    stockStatus: 'ready',
    stockCount: 4,
    dimensions: { length: 160, width: 35, height: 75, unit: 'cm' },
    weightKg: 40,
    materials: ['Kayu Mahoni Oven Kering Bebas Rayap', 'Pintu Kaca Fluted / Moru Ribbed', 'Gas Spring Soft-Close'],
    finishOptions: ['Cat Duco Warm White', 'Cat Duco Sage Green', 'Natural Jati Kombinasi'],
    colors: [
      { name: 'Warm Cream White', hex: '#F4EFEB' },
      { name: 'Earthy Sage Green', hex: '#879782' }
    ],
    image: '/images/cat-kitchen-set.jpg',
    gallery: [
      '/images/cat-kitchen-set.jpg',
      '/images/prod-bespoke-kitchen.jpg'
    ],
    description: 'Kabinet dapur atas model gantung dengan pintu kaca bergaris (fluted glass) modern. Menghilangkan kesan dapur sempit dan memudahkan menyimpan piring serta cangkir bersih.',
    features: [
      'Pintu kaca moru ribbed buram elegan menyamarkan isi rak',
      'Fitting engsel hidrolik soft-close tanpa suara bantingan',
      'Braket gantung besi tebal berkapasitas muat total 80 kg',
      'Bahan kayu mahoni oven tahan kelembaban area kompor'
    ],
    has3D: false,
    hasAR: false,
    isFeatured: false
  }
];
