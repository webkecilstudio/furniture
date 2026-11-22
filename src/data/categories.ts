import { Category } from '../types';
import { assetUrl } from '../utils/asset';

export const CATEGORIES: Category[] = [
  {
    id: 'meja',
    name: 'Meja & Konsol',
    slug: 'meja',
    description: 'Meja makan kayu jati solid, meja kerja presisi, konsol foyer, dan coffee table marmer.',
    image: assetUrl('/images/cat-meja.jpg'),
    itemCount: 18
  },
  {
    id: 'kursi',
    name: 'Kursi & Armchair',
    slug: 'kursi',
    description: 'Kursi santai ergonomis, dining chair kayu lengkung, lounge chair, dan bangku aksen.',
    image: assetUrl('/images/cat-kursi.jpg'),
    itemCount: 24
  },
  {
    id: 'sofa',
    name: 'Sofa & Daybed',
    slug: 'sofa',
    description: 'Sofa modular kontemporer, sectional velvet, loveseat, dan daybed kayu berbalut linen.',
    image: assetUrl('/images/cat-sofa.jpg'),
    itemCount: 15
  },
  {
    id: 'lemari',
    name: 'Lemari & Credenza',
    slug: 'lemari',
    description: 'Walk-in wardrobe kustom, credenza buffet, rak buku arsitektural, dan kabinet TV gantung.',
    image: assetUrl('/images/cat-lemari.jpg'),
    itemCount: 16
  },
  {
    id: 'tempat-tidur',
    name: 'Tempat Tidur',
    slug: 'tempat-tidur',
    description: 'Dipan platform kayu solid, headboard empuk berlapis linen, dan set nakas kamar tidur mewah.',
    image: assetUrl('/images/cat-tempat-tidur.jpg'),
    itemCount: 12
  },
  {
    id: 'kitchen-set',
    name: 'Kitchen Set & Bar',
    slug: 'kitchen-set',
    description: 'Dapur pulau bespoke, kabinet dapur HPL & duco tahan lembab, dan mini bar elegan.',
    image: assetUrl('/images/cat-kitchen-set.jpg'),
    itemCount: 14
  },
  {
    id: 'furniture-kantor',
    name: 'Furniture Kantor',
    slug: 'furniture-kantor',
    description: 'Meja direksi eksekutif, meja meeting panjang akustik, dan rak arsip modern minimalis.',
    image: assetUrl('/images/cat-kantor.jpg'),
    itemCount: 11
  }
];
