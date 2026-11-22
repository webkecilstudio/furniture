import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import {
  FaHeart, FaShoppingBag, FaWhatsapp, FaCube, FaEye,
  FaStar, FaShieldAlt, FaTruck, FaHome, FaChevronRight,
  FaExchangeAlt, FaArrowLeft, FaArrowRight
} from 'react-icons/fa';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, isInCompare, openModal, sendProductInquiryWhatsApp } = useShop();

  const product = PRODUCTS.find(p => p.id === id);
  const relatedProducts = product ? PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) : [];

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedFinish, setSelectedFinish] = useState(product?.finishOptions[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444]">404 — PRODUK TIDAK DITEMUKAN</div>
        <h1 className="font-display text-4xl font-black uppercase">Produk Tidak Ada</h1>
        <p className="text-sm text-[#525252]">Produk yang Anda cari mungkin sudah tidak tersedia atau SKU salah.</p>
        <Link to="/produk" className="editorial-button-primary text-xs px-6 py-3">← Kembali ke Katalog</Link>
      </div>
    );
  }

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const isWish = isInWishlist(product.id);
  const isComp = isInCompare(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedFinish);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Breadcrumb Bar */}
      <div className="border-b-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-mono text-[#737373]">
          <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
          <FaChevronRight className="text-[8px]" />
          <Link to="/produk" className="hover:text-[#EF4444]">Katalog</Link>
          <FaChevronRight className="text-[8px]" />
          <Link to={`/produk?kategori=${product.category}`} className="hover:text-[#EF4444] capitalize">{product.category}</Link>
          <FaChevronRight className="text-[8px]" />
          <span className="text-[#0A0A0A] font-bold uppercase">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image */}
            <div className="relative border-2 border-[#0A0A0A] bg-[#E5E5E5] aspect-square overflow-hidden group">
              <img src={images[activeImg]} alt={product.name}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500" />

              {/* Prev/Next arrows */}
              {images.length > 1 && (
                <>
                  <button onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FAFAFA] border-2 border-[#0A0A0A] p-2 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
                    <FaArrowLeft className="text-sm" />
                  </button>
                  <button onClick={() => setActiveImg(i => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FAFAFA] border-2 border-[#0A0A0A] p-2 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
                    <FaArrowRight className="text-sm" />
                  </button>
                </>
              )}

              {/* 3D/AR Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {product.has3D && (
                  <button onClick={() => openModal('threeDViewer', product)}
                    className="bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] px-3 py-1.5 text-xs font-mono font-bold uppercase border border-[#FAFAFA] flex items-center gap-1.5 transition-colors">
                    <FaCube /> 3D Model
                  </button>
                )}
                {product.hasAR && (
                  <button onClick={() => openModal('arPreview', product)}
                    className="bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] px-3 py-1.5 text-xs font-mono font-bold uppercase border border-[#FAFAFA] flex items-center gap-1.5 transition-colors">
                    <FaEye /> Simulasi AR
                  </button>
                )}
              </div>

              {/* Stock Badge */}
              <div className="absolute top-3 left-3">
                {product.stockStatus === 'ready' && <span className="bg-[#16A34A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">Ready Stock</span>}
                {product.stockStatus === 'preorder' && <span className="bg-[#CA8A04] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">Pre-Order</span>}
                {product.stockStatus === 'custom' && <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5">Custom</span>}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 border-2 shrink-0 overflow-hidden transition-colors ${activeImg === i ? 'border-[#EF4444]' : 'border-[#E5E5E5] hover:border-[#0A0A0A]'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges */}
            <div className="border-2 border-[#E5E5E5] p-4 bg-[#F5F5F5] grid grid-cols-2 gap-3 text-[11px] font-mono">
              <div className="flex items-center gap-2"><FaShieldAlt className="text-[#EF4444]" /> Garansi Konstruksi 5 Tahun</div>
              <div className="flex items-center gap-2"><FaTruck className="text-[#EF4444]" /> Packing Peti Kayu Solid</div>
              <div className="flex items-center gap-2"><FaShieldAlt className="text-[#EF4444]" /> Bahan Ramah Lingkungan</div>
              <div className="flex items-center gap-2"><FaTruck className="text-[#EF4444]" /> Pengiriman Seluruh Indonesia</div>
            </div>
          </div>

          {/* RIGHT: Info & Order */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Meta */}
            <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
              <span className="font-bold uppercase text-[#0A0A0A] bg-[#E5E5E5] px-2 py-0.5">{product.category}</span>
              <span className="flex items-center gap-1 text-[#CA8A04] font-bold">
                <FaStar /> {product.rating} ({product.reviewsCount} review)
              </span>
            </div>

            {/* Title + Price */}
            <div>
              <div className="text-xs font-mono text-[#737373] uppercase mb-1">SKU: {product.sku}</div>
              <h1 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A] leading-none">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3 mt-4 pb-4 border-b-2 border-[#0A0A0A]">
                <span className="font-display text-3xl font-black">Rp {product.price.toLocaleString('id-ID')}</span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-[#A3A3A3] line-through">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#525252] leading-relaxed">{product.description}</p>

            {/* Specs Table */}
            <div className="border-2 border-[#0A0A0A]">
              <div className="bg-[#0A0A0A] text-[#FAFAFA] px-4 py-2 text-xs font-mono font-bold uppercase">Spesifikasi Teknis</div>
              <div className="divide-y divide-[#E5E5E5]">
                {[
                  ['Dimensi (P×L×T)', `${product.dimensions.length} × ${product.dimensions.width} × ${product.dimensions.height} cm`],
                  ['Berat Bersih', `${product.weightKg} kg`],
                  ['Material Utama', product.materials.join(', ')],
                  ['Koleksi', product.collection],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between px-4 py-2.5 text-xs font-mono">
                    <span className="text-[#737373]">{label}:</span>
                    <strong className="text-[#0A0A0A] text-right max-w-[60%]">{val}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Options */}
            {product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">
                  Warna Pelapis: <span className="text-[#EF4444]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map(c => (
                    <button key={c.name} onClick={() => setSelectedColor(c.name)} title={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-8 h-8 border-2 transition-all flex items-center justify-center ${selectedColor === c.name ? 'border-[#0A0A0A] scale-110' : 'border-[#D4D4D4]'}`}>
                      {selectedColor === c.name && <span className="text-xs text-white mix-blend-difference font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Finish Options */}
            {product.finishOptions.length > 0 && (
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">Finishing Kayu:</label>
                <div className="flex flex-wrap gap-2">
                  {product.finishOptions.map(f => (
                    <button key={f} onClick={() => setSelectedFinish(f)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-colors ${selectedFinish === f ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]' : 'bg-[#FAFAFA] border-[#D4D4D4] hover:border-[#0A0A0A]'}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold uppercase">Jumlah:</span>
              <div className="flex items-center border-2 border-[#0A0A0A]">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 font-bold hover:bg-[#E5E5E5] transition-colors">−</button>
                <span className="px-5 py-2 font-mono font-bold border-x-2 border-[#0A0A0A]">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 font-bold hover:bg-[#E5E5E5] transition-colors">+</button>
              </div>
              <span className="text-xs font-mono text-[#737373]">= Rp {(product.price * quantity).toLocaleString('id-ID')}</span>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2 border-t-2 border-[#0A0A0A]">
              <div className="flex gap-3">
                <button onClick={handleAddToCart}
                  className="flex-1 editorial-button-primary py-4 text-sm flex items-center justify-center gap-2">
                  <FaShoppingBag /> Tambahkan ke Keranjang
                </button>
                <button onClick={() => toggleWishlist(product)} title="Simpan ke Wishlist"
                  className={`p-4 border-2 border-[#0A0A0A] text-base transition-colors ${isWish ? 'bg-[#EF4444] text-[#FAFAFA]' : 'hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'}`}>
                  <FaHeart />
                </button>
                <button onClick={() => toggleCompare(product)} title="Tambah ke Komparasi"
                  className={`p-4 border-2 border-[#0A0A0A] text-base transition-colors ${isComp ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'}`}>
                  <FaExchangeAlt />
                </button>
              </div>
              <button onClick={() => sendProductInquiryWhatsApp(product)}
                className="w-full py-4 bg-[#16A34A] text-[#FAFAFA] text-sm font-bold uppercase tracking-wider border-2 border-[#0A0A0A] hover:bg-[#15803D] flex items-center justify-center gap-2 transition-colors">
                <FaWhatsapp className="text-lg" /> Konsultasi via WhatsApp (+62 823-1315-3539)
              </button>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t-4 border-[#0A0A0A]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-1">PRODUK SEJENIS</div>
                <h2 className="font-display text-3xl font-black uppercase">Mungkin Juga Anda Suka</h2>
              </div>
              <Link to={`/produk?kategori=${product.category}`}
                className="text-xs font-mono font-bold uppercase tracking-wider border-b-2 border-[#0A0A0A] pb-0.5 hover:text-[#EF4444] hover:border-[#EF4444] transition-colors">
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map(p => (
                <div key={p.id} className="editorial-card group cursor-pointer" onClick={() => navigate(`/produk/${p.id}`)}>
                  <div className="aspect-square bg-[#E5E5E5] overflow-hidden border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <div className="p-3">
                    <div className="text-[9px] font-mono text-[#737373]">{p.sku}</div>
                    <div className="text-xs font-bold uppercase mt-0.5 group-hover:text-[#EF4444] transition-colors">{p.name}</div>
                    <div className="text-xs font-mono font-bold mt-1">Rp {p.price.toLocaleString('id-ID')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
