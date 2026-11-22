import { Collection } from '../types';
import { assetUrl } from '../utils/asset';

export const COLLECTIONS: Collection[] = [
  {
    id: 'minimalis',
    name: 'Koleksi Minimalis',
    concept: 'Form Follows Function',
    tagline: 'Esensi kemurnian bentuk tanpa ornamen berlebih',
    description: 'Menonjolkan siluet geometris yang tegas, bidang kayu datar yang rapi, dan ruang penyimpanan tersembunyi. Cocok untuk hunian urban yang menghargai keteraturan dan ketenangan visual.',
    image: assetUrl('/images/col-minimalis.jpg'),
    characteristics: ['Garis desain lurus & bersih', 'Warna netral monokromatik', 'Fungsi cerdas hemat ruang', 'Finishing doff tanpa kilau silau']
  },
  {
    id: 'scandinavian',
    name: 'Koleksi Scandinavian',
    concept: 'Warm Nordic Hygge',
    tagline: 'Kehangatan kayu alami dan pencahayaan yang ramah',
    description: 'Terinspirasi dari estetika Skandinavia yang memadukan kayu warna cerah (jati muda, sungkai, oak) dengan tekstur kain linen hangat. Menghidupkan atmosfer santai di setiap sudut rumah.',
    image: assetUrl('/images/col-scandinavian.jpg'),
    characteristics: ['Kayu warna terang & natural', 'Kain pelapis bertekstur tenun', 'Bentuk kaki mengerucut elegan', 'Suasana ruang lapang & ramah']
  },
  {
    id: 'industrial',
    name: 'Koleksi Industrial',
    concept: 'Raw & Authentic Craft',
    tagline: 'Perpaduan kokoh kayu jati tebal dan baja hitam',
    description: 'Menampilkan karakter material yang jujur: papan kayu jati solid tebal dengan serat terekspos dipadu rangka besi hollow atau cast iron berfinishing hitam doff anti karat.',
    image: assetUrl('/images/col-industrial.jpg'),
    characteristics: ['Rangka baja hitam berbobot', 'Permukaan kayu bertekstur kawat', 'Aksen baut & plat logam ekspos', 'Daya tahan benturan seumur hidup']
  },
  {
    id: 'modern',
    name: 'Koleksi Modern Luxury',
    concept: 'Sleek Contemporary Sophistication',
    tagline: 'Kombinasi marmer alam, aksen kuningan, dan kayu gelap',
    description: 'Kemewahan kontemporer dengan perpaduan lempeng marmer Carrara, aksen logam bernuansa brushed brass, serta kayu walnut bertekstur halus. Pernyataan prestise untuk interior papan atas.',
    image: assetUrl('/images/col-modern.jpg'),
    characteristics: ['Aksen brushed brass & bronze', 'Batu marmer alam impor asli', 'Tekstur velvet & kulit halus', 'Proporsi berwibawa & megah']
  },
  {
    id: 'klasik',
    name: 'Koleksi Klasik Kontemporer',
    concept: 'Timeless Heritage Reimagined',
    tagline: 'Keanggunan tradisi seni ukir kayu dengan proporsi modern',
    description: 'Meremajakan keindahan ukiran mebel tradisional khas Jawa Timur ke dalam gaya neo-klasik yang lebih proporsional, ramping, dan relevan untuk arsitektur hunian masa kini.',
    image: assetUrl('/images/col-klasik.jpg'),
    characteristics: ['Sentuhan pahatan tangan pemahat ahli', 'Detail molding profil klasik halus', 'Finishing patina & antik bertingkat', 'Nilai kolektibilitas tinggi']
  }
];
