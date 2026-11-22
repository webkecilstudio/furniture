import React, { useState } from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { 
  FaTimes, 
  FaHeart, 
  FaShoppingBag, 
  FaWhatsapp, 
  FaCube, 
  FaEye, 
  FaStar, 
  FaRulerCombined, 
  FaShieldAlt, 
  FaTruck,
  FaCheck
} from 'react-icons/fa';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    openModal, 
    sendProductInquiryWhatsApp 
  } = useShop();

  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedFinish, setSelectedFinish] = useState(product.finishOptions[0] || '');
  const [quantity, setQuantity] = useState(1);

  const isWish = isInWishlist(product.id);
  const currentImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedFinish);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-none">
        
        {/* Modal Top Header Bar */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              DETAIL SPESIFIKASI
            </span>
            <span className="font-mono text-xs text-[#D4D4D4] uppercase">
              SKU: {product.sku}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
            title="Tutup Modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Gallery & 3D / AR Buttons */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="border-2 border-[#0A0A0A] bg-[#E5E5E5] aspect-square relative overflow-hidden">
              <img
                src={currentImages[activeImageIdx] || product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />

              {/* 3D / AR Quick Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {product.has3D && (
                  <button
                    onClick={() => openModal('threeDViewer', product)}
                    className="bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] px-3 py-1.5 text-xs font-mono font-bold uppercase border border-[#FAFAFA] flex items-center gap-1.5 shadow-none"
                  >
                    <FaCube />
                    <span>3D Model</span>
                  </button>
                )}
                {product.hasAR && (
                  <button
                    onClick={() => openModal('arPreview', product)}
                    className="bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] px-3 py-1.5 text-xs font-mono font-bold uppercase border border-[#FAFAFA] flex items-center gap-1.5 shadow-none"
                  >
                    <FaEye />
                    <span>Simulasi AR</span>
                  </button>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-16 h-16 border-2 shrink-0 overflow-hidden ${
                      activeImageIdx === idx ? 'border-[#EF4444]' : 'border-[#0A0A0A] opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Points */}
            <div className="border-2 border-[#E5E5E5] p-3 bg-[#F5F5F5] grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#EF4444]" /> Garansi Konstruksi 5 Thn
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="text-[#EF4444]" /> Packing Peti Kayu Solid
              </div>
            </div>

          </div>

          {/* Right Column: Information, Options & Order */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs font-mono text-[#737373]">
                <span className="uppercase font-bold text-[#0A0A0A]">Kategori: {product.category}</span>
                <span className="flex items-center gap-1 text-[#CA8A04] font-bold">
                  <FaStar /> {product.rating} ({product.reviewsCount} review terverifikasi)
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A]">
                {product.name}
              </h2>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3 border-b-2 border-[#0A0A0A] pb-3">
                <span className="font-display text-2xl sm:text-3xl font-black text-[#0A0A0A]">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-[#A3A3A3] line-through">
                    Rp {product.originalPrice.toLocaleString('id-ID')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                {product.description}
              </p>

              {/* Dimensions & Weight */}
              <div className="border-2 border-[#E5E5E5] p-3 bg-[#FAFAFA] space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#737373]">Dimensi (P × L × T):</span>
                  <strong className="text-[#0A0A0A]">
                    {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">Perkiraan Berat Bersih:</span>
                  <strong className="text-[#0A0A0A]">{product.weightKg} kg</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737373]">Material Rangka:</span>
                  <strong className="text-[#0A0A0A]">{product.materials.join(', ')}</strong>
                </div>
              </div>

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                    Pilihan Warna Pelapis: <span className="text-[#EF4444]">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 border-2 transition-all flex items-center justify-center ${
                          selectedColor === c.name ? 'border-[#0A0A0A] scale-110' : 'border-[#D4D4D4]'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <span className="text-xs text-white mix-blend-difference font-bold">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Finish Options */}
              {product.finishOptions && product.finishOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                    Opsi Lapisan Finishing Kayu:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.finishOptions.map((f) => (
                      <button
                        key={f}
                        onClick={() => setSelectedFinish(f)}
                        className={`px-3 py-1 text-xs font-mono font-bold uppercase border-2 ${
                          selectedFinish === f
                            ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                            : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-mono font-bold uppercase">Jumlah:</span>
                <div className="flex items-center border-2 border-[#0A0A0A]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 font-bold text-sm hover:bg-[#E5E5E5]"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 font-mono font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 font-bold text-sm hover:bg-[#E5E5E5]"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t-2 border-[#0A0A0A] space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 editorial-button-primary text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <FaShoppingBag />
                  <span>Tambahkan ke Keranjang</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 border-2 border-[#0A0A0A] text-sm transition-colors ${
                    isWish ? 'bg-[#EF4444] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'
                  }`}
                  title="Simpan ke Wishlist"
                >
                  <FaHeart />
                </button>
              </div>

              <button
                onClick={() => sendProductInquiryWhatsApp(product)}
                className="w-full py-3 bg-[#16A34A] text-[#FAFAFA] text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] hover:bg-[#15803D] flex items-center justify-center gap-2 transition-colors"
              >
                <FaWhatsapp className="text-base" />
                <span>Konsultasi / Order via WhatsApp (+62 823-1315-3539)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
