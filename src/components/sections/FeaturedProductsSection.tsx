import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { 
  FaHeart, 
  FaShoppingBag, 
  FaExchangeAlt, 
  FaCube, 
  FaEye, 
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

interface FeaturedProductsSectionProps {
  onOpenProductDetail: (product: Product) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ onOpenProductDetail }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    toggleCompare, 
    isInCompare, 
    openModal 
  } = useShop();

  const featuredList = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section id="unggulan" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              PRODUK UNGGULAN
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              KURASI MEBEL PILIHAN TERBAIK
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252] max-w-sm">
            Karya mebel paling diminati arsitek dengan konstruksi teruji, material kayu jati solid, dan detail finishing sempurna.
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => {
            const isWish = isInWishlist(product.id);
            const isComp = isInCompare(product.id);

            return (
              <div
                key={product.id}
                className="editorial-card group flex flex-col justify-between"
              >
                {/* Card Top / Visual */}
                <div className="relative overflow-hidden bg-[#E5E5E5] aspect-[4/3] border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                    onClick={() => onOpenProductDetail(product)}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.stockStatus === 'ready' && (
                      <span className="bg-[#16A34A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">
                        Ready Stock ({product.stockCount} Unit)
                      </span>
                    )}
                    {product.stockStatus === 'preorder' && (
                      <span className="bg-[#CA8A04] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">
                        Pre-Order 14 Hari
                      </span>
                    )}
                    {product.stockStatus === 'custom' && (
                      <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5 border border-[#FAFAFA]">
                        Bespoke Only
                      </span>
                    )}
                  </div>

                  {/* 3D Action Floating */}
                  {product.has3D && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal('threeDViewer', product);
                      }}
                      title="Lihat 3D Viewer"
                      className="absolute top-3 right-3 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors p-2 text-xs border border-[#FAFAFA] flex items-center gap-1.5"
                    >
                      <FaCube />
                      <span className="text-[10px] font-mono uppercase font-bold">3D</span>
                    </button>
                  )}

                  {/* Action Bar On Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="flex-1 bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-bold uppercase tracking-wider py-2 px-3 border-2 border-[#0A0A0A] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaEye /> Detail
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      title="Simpan Wishlist"
                      className={`p-2 border-2 border-[#0A0A0A] text-sm transition-colors ${
                        isWish ? 'bg-[#EF4444] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'
                      }`}
                    >
                      <FaHeart />
                    </button>
                    <button
                      onClick={() => toggleCompare(product)}
                      title="Bandingkan Spesifikasi"
                      className={`p-2 border-2 border-[#0A0A0A] text-sm transition-colors ${
                        isComp ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'
                      }`}
                    >
                      <FaExchangeAlt />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#737373] mb-1">
                      <span className="uppercase">{product.sku}</span>
                      <span className="flex items-center gap-1 text-[#0A0A0A] font-bold">
                        <FaStar className="text-[#CA8A04]" /> {product.rating} ({product.reviewsCount})
                      </span>
                    </div>

                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="font-display text-xl font-bold uppercase text-[#0A0A0A] hover:text-[#EF4444] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#525252] mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Dimensi & Material */}
                    <div className="mt-3 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#525252]">
                      <span>
                        Dimensi: {product.dimensions.length}×{product.dimensions.width}×{product.dimensions.height} cm
                      </span>
                      <span className="font-bold text-[#0A0A0A]">{product.materials[0]?.split(' ')[1] || 'Solid Wood'}</span>
                    </div>
                  </div>

                  {/* Card Bottom / Price & Add */}
                  <div className="pt-3 border-t-2 border-[#0A0A0A] flex items-center justify-between gap-3">
                    <div>
                      {product.originalPrice && (
                        <div className="text-[11px] font-mono text-[#A3A3A3] line-through">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </div>
                      )}
                      <div className="font-display text-lg font-black text-[#0A0A0A]">
                        Rp {product.price.toLocaleString('id-ID')}
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="editorial-button-primary text-xs py-2.5 px-4 flex items-center gap-2"
                    >
                      <FaShoppingBag />
                      <span>+ Keranjang</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/produk"
            className="editorial-button-secondary inline-block text-xs"
          >
            Buka Seluruh Katalog Produk ({PRODUCTS.length} Koleksi) →
          </Link>
        </div>

      </div>
    </section>
  );
};
