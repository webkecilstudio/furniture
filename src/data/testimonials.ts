import { TestimonialItem } from '../types';
import { assetUrl } from '../utils/asset';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'H. Mochamad Thohir',
    role: 'Pemilik Rumah Tinggal',
    project: 'Hunian Keluarga Asri',
    city: 'Bangkalan, Madura',
    rating: 5,
    quote: 'Pesan satu set Meja Makan Sovereign jati dan dipan kanopi langsung diantar armada workshop Blega ke rumah kami di Bangkalan. Pemasangannya sangat rapi, kayu jatinya tebal dan padat, benar-benar beda kualitasnya dibanding mebel pasaran.',
    image: assetUrl('/images/testi-1.jpg'),
    verified: true
  },
  {
    id: 'testi-2',
    name: 'dr. Farah Salsabila',
    role: 'Pemilik Hunian Residensial',
    project: 'CitraLand Surabaya Barat',
    city: 'Surabaya, Jawa Timur',
    rating: 5,
    quote: 'Akses dari Surabaya ke Blega sangat cepat lewat Suramadu. Kami pesan sofa modular velvet dan meja marmer, dikirim tepat waktu dengan packing kayu ekstra aman. Tamu-tamu yang datang selalu memuji estetika ruang tamu kami.',
    image: assetUrl('/images/testi-3.jpg'),
    verified: true
  },
  {
    id: 'testi-3',
    name: 'Arch. Hendra Gunawan',
    role: 'Principal Interior Designer',
    project: 'Boutique Office & Villa',
    city: 'Semarang, Jawa Tengah',
    rating: 5,
    quote: 'Presisi pengerjaan mebel dari PorosKayu luar biasa akurat. Toleransi ukuran millimeter-level dan kayu jati yang di-oven kiln dry dengan benar membuat furniture tidak pernah melengkung atau retak meski di ruang ber-AC terus menerus.',
    image: assetUrl('/images/testi-2.jpg'),
    verified: true
  },
  {
    id: 'testi-4',
    name: 'Reza Pramudya',
    role: 'Managing Partner',
    project: 'Kinfolk Artisan Cafe',
    city: 'Bandung, Jawa Barat',
    rating: 5,
    quote: 'Kami memesan furniture komersial untuk cafe di Bandung. Pengiriman kargo peti kayu balok sangat kokoh, sampai tanpa goresan sedikit pun. Hasil mebel terbukti tahan banting setelah 1 tahun pemakaian intensif. Sangat direkomendasikan!',
    image: assetUrl('/images/testi-4.jpg'),
    verified: true
  }
];
