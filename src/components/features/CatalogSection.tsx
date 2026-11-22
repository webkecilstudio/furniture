import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { COLLECTIONS } from '../../data/collections';
import { Product, FilterState } from '../../types';
import { useShop } from '../../context/ShopContext';
import { 
  FaSearch, 
  FaFilter, 
  FaHeart, 
  FaShoppingBag, 
  FaExchangeAlt, 
  FaCube, 
  FaEye, 
  FaUndo,
  FaCheck
} from 'react-icons/fa';

interface CatalogSectionProps {
  onOpenProductDetail: (product: Product) => void;
  selectedCategoryFromHome?: string | null;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ 
  onOpenProductDetail,
  selectedCategoryFromHome 
}) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    toggleCompare, 
    isInCompare, 
    openModal 
  } = useShop();

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: selectedCategoryFromHome || 'all',
    collection: 'all',
    material: 'all',
    stockStatus: 'all',
    minPrice: 0,
    maxPrice: 30000000,
    sortBy: 'featured'
  });

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Sync external category selection
  React.useEffect(() => {
    if (selectedCategoryFromHome) {
      setFilters((prev) => ({ ...prev, category: selectedCategoryFromHome }));
    }
  }, [selectedCategoryFromHome]);

  const materialsList = ['Kayu Jati', 'Kayu Mahoni', 'Kayu Sungkai', 'Marmer', 'Velvet', 'Linen'];

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchSku = product.sku.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        if (!matchName && !matchSku && !matchCat) return false;
      }

      // Category
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Collection
      if (filters.collection !== 'all' && product.collection !== filters.collection) {
        return false;
      }

      // Stock Status
      if (filters.stockStatus !== 'all' && product.stockStatus !== filters.stockStatus) {
        return false;
      }

      // Material
      if (filters.material !== 'all') {
        const hasMat = product.materials.some((m) =>
          m.toLowerCase().includes(filters.material.toLowerCase())
        );
        if (!hasMat) return false;
      }

      // Price range
      if (product.price < filters.minPrice || product.price > filters.maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0; // 'featured'
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      collection: 'all',
      material: 'all',
      stockStatus: 'all',
      minPrice: 0,
      maxPrice: 30000000,
      sortBy: 'featured'
    });
  };

  return (
    <section id="katalog" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              KATALOG LENGKAP & FILTER
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              KATALOG FURNITURE LENGKAP
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252]">
            Menampilkan <strong>{filteredProducts.length}</strong> dari {PRODUCTS.length} Koleksi Terkurasi
          </div>
        </div>

        {/* Top Controls Bar: Search & Quick Sorter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          
          <div className="md:col-span-6 relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#737373]">
              <FaSearch className="text-sm" />
            </div>
            <input
              type="text"
              placeholder="Cari mebel (contoh: Meja Makan, Kursi Nordic, Velvet, Jati)..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="editorial-input w-full !pl-10"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
              className="editorial-input w-full bg-[#FAFAFA] text-xs font-bold uppercase"
            >
              <option value="featured">Urutan: Produk Unggulan</option>
              <option value="price-asc">Harga: Termurah ke Tertinggi</option>
              <option value="price-desc">Harga: Tertinggi ke Termurah</option>
              <option value="rating-desc">Rating: Tertinggi</option>
              <option value="name-asc">Nama: A - Z</option>
            </select>
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <button
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
              className="flex-1 editorial-button-secondary text-xs flex items-center justify-center gap-2 py-2.5"
            >
              <FaFilter />
              <span>{filterDrawerOpen ? 'Tutup Filter' : 'Filter Lengkap'}</span>
            </button>

            <button
              onClick={resetFilters}
              title="Reset Semua Filter"
              className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            >
              <FaUndo className="text-xs" />
            </button>
          </div>

        </div>

        {/* Collapsible / Side Filter Panel */}
        {filterDrawerOpen && (
          <div className="border-2 border-[#0A0A0A] p-6 mb-8 bg-[#F5F5F5] space-y-6 animate-in fade-in duration-200">
            
            {/* Category Chips */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                Pilih Kategori:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters({ ...filters, category: 'all' })}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 ${
                    filters.category === 'all'
                      ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                      : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4]'
                  }`}
                >
                  Semua ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilters({ ...filters, category: cat.id })}
                    className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 ${
                      filters.category === cat.id
                        ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                        : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Collection & Material Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5E5E5]">
              
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  Konsep Desain:
                </label>
                <select
                  value={filters.collection}
                  onChange={(e) => setFilters({ ...filters, collection: e.target.value })}
                  className="editorial-input w-full text-xs font-mono"
                >
                  <option value="all">Semua Konsep</option>
                  {COLLECTIONS.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  Material Pokok:
                </label>
                <select
                  value={filters.material}
                  onChange={(e) => setFilters({ ...filters, material: e.target.value })}
                  className="editorial-input w-full text-xs font-mono"
                >
                  <option value="all">Semua Bahan</option>
                  {materialsList.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  Status Ketersediaan:
                </label>
                <select
                  value={filters.stockStatus}
                  onChange={(e) => setFilters({ ...filters, stockStatus: e.target.value })}
                  className="editorial-input w-full text-xs font-mono"
                >
                  <option value="all">Semua Status</option>
                  <option value="ready">Ready Stock Siap Kirim</option>
                  <option value="preorder">Pre-Order (14 Hari)</option>
                  <option value="custom">Bespoke / Custom Order</option>
                </select>
              </div>

            </div>

            {/* Price Range Slider */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span>Filter Harga Maksimum:</span>
                <strong>Rp {filters.maxPrice.toLocaleString('id-ID')}</strong>
              </div>
              <input
                type="range"
                min="3000000"
                max="30000000"
                step="500000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="w-full accent-[#0A0A0A]"
              />
            </div>

          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="border-2 border-dashed border-[#0A0A0A] p-16 text-center space-y-4">
            <h3 className="font-display text-xl uppercase">Tidak Ada Mebel yang Cocok</h3>
            <p className="text-xs text-[#525252]">
              Coba sesuaikan kata kunci pencarian atau reset filter untuk melihat seluruh koleksi mebel kami.
            </p>
            <button
              onClick={resetFilters}
              className="editorial-button-primary text-xs"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWish = isInWishlist(product.id);
              const isComp = isInCompare(product.id);

              return (
                <div
                  key={product.id}
                  className="editorial-card group flex flex-col justify-between"
                >
                  {/* Top Image */}
                  <div className="relative overflow-hidden bg-[#E5E5E5] aspect-square border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                      onClick={() => onOpenProductDetail(product)}
                    />

                    {/* Stock Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      {product.stockStatus === 'ready' && (
                        <span className="bg-[#16A34A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">
                          Ready Stock
                        </span>
                      )}
                      {product.stockStatus === 'preorder' && (
                        <span className="bg-[#CA8A04] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">
                          Pre-Order
                        </span>
                      )}
                      {product.stockStatus === 'custom' && (
                        <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#FAFAFA]">
                          Custom
                        </span>
                      )}
                    </div>

                    {/* 3D button */}
                    {product.has3D && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal('threeDViewer', product);
                        }}
                        title="3D Interactive Model"
                        className="absolute top-2.5 right-2.5 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] p-1.5 text-[10px] font-mono font-bold uppercase border border-[#FAFAFA] flex items-center gap-1"
                      >
                        <FaCube />
                        <span>3D</span>
                      </button>
                    )}

                    {/* Hover Floating Actions */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onOpenProductDetail(product)}
                        className="flex-1 bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-[10px] font-bold uppercase tracking-wider py-1.5 border border-[#0A0A0A] transition-colors"
                      >
                        Lihat Detail
                      </button>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`p-1.5 border border-[#0A0A0A] text-xs transition-colors ${
                          isWish ? 'bg-[#EF4444] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'
                        }`}
                      >
                        <FaHeart />
                      </button>
                      <button
                        onClick={() => toggleCompare(product)}
                        className={`p-1.5 border border-[#0A0A0A] text-xs transition-colors ${
                          isComp ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'
                        }`}
                      >
                        <FaExchangeAlt />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] font-mono text-[#737373] uppercase">
                        {product.sku}
                      </div>

                      <h3
                        onClick={() => onOpenProductDetail(product)}
                        className="font-display text-base font-bold uppercase text-[#0A0A0A] hover:text-[#EF4444] transition-colors cursor-pointer mt-1"
                      >
                        {product.name}
                      </h3>

                      <p className="text-[11px] text-[#525252] mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E5E5E5]">
                      <div className="text-[10px] font-mono text-[#737373]">
                        {product.dimensions.length}×{product.dimensions.width}×{product.dimensions.height} cm
                      </div>
                      <div className="font-display text-base font-bold text-[#0A0A0A] mt-0.5">
                        Rp {product.price.toLocaleString('id-ID')}
                      </div>

                      <div className="mt-2">
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="w-full editorial-button-primary text-[10px] py-2 flex items-center justify-center gap-1.5"
                        >
                          <FaShoppingBag />
                          <span>+ Keranjang</span>
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
