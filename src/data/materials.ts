import { MaterialItem } from '../types';

export const MATERIALS: MaterialItem[] = [
  {
    id: 'mat-jati',
    name: 'Kayu Jati Solid (Perhutani TPK Grade A)',
    category: 'Kayu Alami',
    grade: 'Log A3 Eksklusif',
    origin: 'Blora & Cepu, Jawa Tengah',
    description: 'Kayu jati berserat padat dengan kandungan minyak alami tinggi yang menjadikannya tahan terhadap rayap, jamur, serta perubahan cuaca tropis basah hingga puluhan tahun.',
    image: '/images/mat-jati.jpg',
    advantages: [
      'Kadar air (MC) stabil 10-12% lewat oven kiln-dry 21 hari',
      'Minyak alami anti rayap seumur hidup',
      'Pola serat bergelombang keemasan yang bernilai tinggi',
      'Kepadatan tinggi tidak mudah melengkung atau memuai'
    ]
  },
  {
    id: 'mat-mahoni',
    name: 'Kayu Mahoni Pilihan',
    category: 'Kayu Alami',
    grade: 'Grade Super A',
    origin: 'Sukabumi & Jepara',
    description: 'Kayu bertekstur rapat dan halus tanpa pori besar, sangat ideal sebagai media aplikasi cat duco halus, finishing warna pekat, dan ukiran artistik tanpa getah berlebih.',
    image: '/images/mat-mahoni.jpg',
    advantages: [
      'Pori serat sangat halus rata untuk cat duco sempurna',
      'Telah melalui treatment celup anti hama vakum bertekanan',
      'Bobot kokoh dengan stabilitas mekanis teruji',
      'Warna dasar kemerahan yang hangat dan menawan'
    ]
  },
  {
    id: 'mat-sungkai',
    name: 'Kayu Sungkai Alam',
    category: 'Kayu Alami',
    grade: 'Grade Ekspor',
    origin: 'Kalimantan & Sumatera',
    description: 'Pilihan utama arsitek untuk furniture bernuansa Japandi dan Scandinavian. Warna kuning jerami cerah dengan garis serat yang sangat kontras dan artistik.',
    image: '/images/mat-sungkai.jpg',
    advantages: [
      'Warna cerah alami memberikan kesan ruang lebih luas',
      'Garis serat jelas dan tegas mempercantik permukaan bidang datar',
      'Sangat cocok dengan lapisan finishing water-based natural',
      'Ringan namun kuat untuk kursi dan aksen kabinet'
    ]
  },
  {
    id: 'mat-marmer',
    name: 'Batu Marmer Carrara & Nero Marquina',
    category: 'Batu & Marmer',
    grade: 'Slab Utuh Ketebalan 20mm',
    origin: 'Carrara (Italia) & Spanyol',
    description: 'Lempeng batu marmer alam asli dengan urat mineral organik. Di-seal secara khusus dengan pelindung nano anti cairan asam agar awet digunakan sehari-hari.',
    image: '/images/mat-marmer.jpg',
    advantages: [
      'Motif urat alami eksklusif pada setiap slab batu',
      'Tahan panas langsung dari teko atau wadah masak',
      'Tepian dibevel secara halus dengan mesin CNC waterjet',
      'Lapisan pelindung penetran nano tahan tumpahan minuman'
    ]
  },
  {
    id: 'mat-finishing',
    name: 'Teknik Finishing Polyurethane & Melamine Doff',
    category: 'Teknik Finishing',
    grade: 'Industrial Grade Non-Toxic',
    origin: 'Formulasi Jerman & Italia',
    description: 'Aplikasi pelapisan cat bertahap 5 lapis (sander sealer, stain warna, basecoat, dan topcoat UV protective) yang menghasilkan permukaan lembut disentuh dan awet.',
    image: '/images/mat-finishing-natural.jpg',
    advantages: [
      'Tingkat kilap bisa dipilih: Ultra Matte (Doff), Semi Gloss, atau High Gloss',
      'Formulasi rendah VOC ramah lingkungan dan aman bagi anak-anak',
      'Tahan goresan kuku, gelas basah, dan tumpahan alkohol',
      'Warna tidak menguning (non-yellowing UV barrier)'
    ]
  },
  {
    id: 'mat-kain',
    name: 'Kain Linen Belgia & Velvet Royal',
    category: 'Tekstil Premium',
    grade: 'Rub Count > 50,000 Martindale',
    origin: 'Eropa & Import Terkurasi',
    description: 'Tekstil pelapis sofa dan kursi dengan ketahanan abrasi tinggi bersertifikasi standar komersial hotel bintang lima, nyaman di kulit dan adem di iklim tropis.',
    image: '/images/mat-kain-velvet.jpg',
    advantages: [
      'Serat anyaman bernapas tidak panas saat diduduki berlama-lama',
      'Teknologi water-repellent cairan tumpah mengambang di permukaan',
      'Tidak mudah pudar meski terkena sinar matahari jendela',
      'Warna-warna earthy modern bernilai estetika tinggi'
    ]
  }
];
