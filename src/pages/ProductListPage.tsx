import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { COLLECTIONS } from '../data/collections';
import { Product, FilterState } from '../types';
import { useShop } from '../context/ShopContext';
import {
  FaSearch, FaFilter, FaHeart, FaShoppingBag,
  FaExchangeAlt, FaCube, FaUndo, FaChevronRight,
  FaHome, FaThLarge, FaTh
} from 'react-icons/fa';

const ITEMS_PER_PAGE = 12;

export const ProductListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, isInCompare, openModal } = useShop();
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const materialsList = ['Kayu Jati', 'Kayu Mahoni', 'Kayu Sungkai', 'Marmer', 'Velvet', 'Linen'];

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('q') || '',
    category: searchParams.get('kategori') || 'all',
    collection: 'all',
    material: 'all',
    stockStatus: 'all',
    minPrice: 0,
    maxPrice: 30000000,
    sortBy: 'featured',
  });

  // Sync URL params → filter state
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const kategori = searchParams.get('kategori') || 'all';
    setFilters(prev => ({ ...prev, search: q, category: kategori }));
  }, [searchParams]);

  // Sync filter state → URL params
  const updateFilter = (patch: Partial<FilterState>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    setCurrentPage(1);
    const params: Record<string, string> = {};
    if (next.search) params.q = next.search;
    if (next.category !== 'all') params.kategori = next.category;
    setSearchParams(params, { replace: true });
  };

  const resetFilters = () => {
    setFilters({ search: '', category: 'all', collection: 'all', material: 'all', stockStatus: 'all', minPrice: 0, maxPrice: 30000000, sortBy: 'featured' });
    setSearchParams({}, { replace: true });
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.sku.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
      }
      if (filters.category !== 'all' && p.category !== filters.category) return false;
      if (filters.collection !== 'all' && p.collection !== filters.collection) return false;
      if (filters.stockStatus !== 'all' && p.stockStatus !== filters.stockStatus) return false;
      if (filters.material !== 'all') {
        if (!p.materials.some(m => m.toLowerCase().includes(filters.material.toLowerCase()))) return false;
      }
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false;
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginated = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const StockBadge = ({ status }: { status: string }) => {
    if (status === 'ready') return <span className="bg-[#16A34A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">Ready Stock</span>;
    if (status === 'preorder') return <span className="bg-[#CA8A04] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#0A0A0A]">Pre-Order</span>;
    return <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[9px] font-mono font-bold uppercase px-2 py-0.5 border border-[#FAFAFA]">Custom</span>;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Katalog Produk</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            KATALOG LENGKAP — {filteredProducts.length} PRODUK
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            SEMUA FURNITURE
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-xl">
            Jelajahi koleksi mebel kayu solid pilihan — dari minimalis modern hingga klasik Jepara. Filter berdasarkan kategori, material, atau anggaran Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* Controls Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
          {/* Search */}
          <div className="md:col-span-5 relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#737373]">
              <FaSearch className="text-sm" />
            </div>
            <input
              type="text"
              placeholder="Cari nama, SKU, atau kategori..."
              value={filters.search}
              onChange={e => updateFilter({ search: e.target.value })}
              className="editorial-input w-full !pl-10 text-sm"
            />
          </div>

          {/* Sort */}
          <div className="md:col-span-3">
            <select
              value={filters.sortBy}
              onChange={e => updateFilter({ sortBy: e.target.value as FilterState['sortBy'] })}
              className="editorial-input w-full text-xs font-bold uppercase bg-[#FAFAFA]"
            >
              <option value="featured">Produk Unggulan</option>
              <option value="price-asc">Harga: Termurah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="rating-desc">Rating Tertinggi</option>
              <option value="name-asc">Nama: A–Z</option>
            </select>
          </div>

          {/* Filter toggle + reset + grid */}
          <div className="md:col-span-4 flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex-1 editorial-button-secondary text-xs flex items-center justify-center gap-2 py-2.5"
            >
              <FaFilter /> {filterOpen ? 'Tutup Filter' : 'Filter Lanjutan'}
            </button>
            <button onClick={resetFilters} title="Reset" className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
              <FaUndo className="text-xs" />
            </button>
            <button onClick={() => setGridCols(4)} title="Grid 4" className={`p-3 border-2 border-[#0A0A0A] transition-colors ${gridCols === 4 ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'hover:bg-[#E5E5E5]'}`}>
              <FaTh className="text-xs" />
            </button>
            <button onClick={() => setGridCols(3)} title="Grid 3" className={`p-3 border-2 border-[#0A0A0A] transition-colors ${gridCols === 3 ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'hover:bg-[#E5E5E5]'}`}>
              <FaThLarge className="text-xs" />
            </button>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => updateFilter({ category: 'all' })}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-colors ${filters.category === 'all' ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]' : 'bg-[#FAFAFA] border-[#D4D4D4] hover:border-[#0A0A0A]'}`}
          >
            Semua ({PRODUCTS.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter({ category: cat.id })}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-colors ${filters.category === cat.id ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]' : 'bg-[#FAFAFA] border-[#D4D4D4] hover:border-[#0A0A0A]'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Advanced Filter Panel */}
        {filterOpen && (
          <div className="border-2 border-[#0A0A0A] p-6 mb-8 bg-[#F5F5F5] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">Konsep Desain:</label>
                <select value={filters.collection} onChange={e => updateFilter({ collection: e.target.value })} className="editorial-input w-full text-xs font-mono">
                  <option value="all">Semua Konsep</option>
                  {COLLECTIONS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">Material Pokok:</label>
                <select value={filters.material} onChange={e => updateFilter({ material: e.target.value })} className="editorial-input w-full text-xs font-mono">
                  <option value="all">Semua Material</option>
                  {materialsList.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">Status Stok:</label>
                <select value={filters.stockStatus} onChange={e => updateFilter({ stockStatus: e.target.value })} className="editorial-input w-full text-xs font-mono">
                  <option value="all">Semua Status</option>
                  <option value="ready">Ready Stock</option>
                  <option value="preorder">Pre-Order</option>
                  <option value="custom">Custom Order</option>
                </select>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span>Harga Maksimum:</span>
                <strong>Rp {filters.maxPrice.toLocaleString('id-ID')}</strong>
              </div>
              <input type="range" min="3000000" max="30000000" step="500000" value={filters.maxPrice}
                onChange={e => updateFilter({ maxPrice: Number(e.target.value) })}
                className="w-full accent-[#0A0A0A]" />
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[#0A0A0A]">
          <span className="text-xs font-mono text-[#525252]">
            Menampilkan <strong>{paginated.length}</strong> dari <strong>{filteredProducts.length}</strong> produk
            {totalPages > 1 && ` — Halaman ${currentPage} / ${totalPages}`}
          </span>
          {filters.category !== 'all' && (
            <span className="text-xs font-mono bg-[#EF4444] text-[#FAFAFA] px-2 py-0.5 font-bold uppercase">
              {CATEGORIES.find(c => c.id === filters.category)?.name}
            </span>
          )}
        </div>

        {/* Product Grid */}
        {paginated.length === 0 ? (
          <div className="border-2 border-dashed border-[#0A0A0A] p-20 text-center space-y-4">
            <h3 className="font-display text-2xl uppercase">Tidak Ada Produk Cocok</h3>
            <p className="text-xs text-[#525252] max-w-sm mx-auto">Coba ubah filter atau kata kunci pencarian.</p>
            <button onClick={resetFilters} className="editorial-button-primary text-xs">Reset Filter</button>
          </div>
        ) : (
          <div className={`grid gap-5 ${gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {paginated.map(product => {
              const isWish = isInWishlist(product.id);
              const isComp = isInCompare(product.id);
              return (
                <div key={product.id} className="editorial-card group flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#E5E5E5] aspect-square border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                    <img
                      src={product.image} alt={product.name}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                      onClick={() => navigate(`/produk/${product.id}`)}
                    />
                    <div className="absolute top-2.5 left-2.5"><StockBadge status={product.stockStatus} /></div>
                    {product.has3D && (
                      <button onClick={e => { e.stopPropagation(); openModal('threeDViewer', product); }}
                        className="absolute top-2.5 right-2.5 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] p-1.5 text-[10px] font-mono font-bold border border-[#FAFAFA] flex items-center gap-1 transition-colors">
                        <FaCube /><span>3D</span>
                      </button>
                    )}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => navigate(`/produk/${product.id}`)}
                        className="flex-1 bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-[10px] font-bold uppercase tracking-wider py-1.5 border border-[#0A0A0A] transition-colors">
                        Lihat Detail
                      </button>
                      <button onClick={() => toggleWishlist(product)}
                        className={`p-1.5 border border-[#0A0A0A] text-xs transition-colors ${isWish ? 'bg-[#EF4444] text-[#FAFAFA]' : 'bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'}`}>
                        <FaHeart />
                      </button>
                      <button onClick={() => toggleCompare(product)}
                        className={`p-1.5 border border-[#0A0A0A] text-xs transition-colors ${isComp ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA]'}`}>
                        <FaExchangeAlt />
                      </button>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] font-mono text-[#737373] uppercase">{product.sku}</div>
                      <h3 onClick={() => navigate(`/produk/${product.id}`)}
                        className="font-display text-sm font-bold uppercase hover:text-[#EF4444] transition-colors cursor-pointer mt-1">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-[#525252] mt-1 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="pt-2 border-t border-[#E5E5E5]">
                      <div className="text-[10px] font-mono text-[#737373]">{product.dimensions.length}×{product.dimensions.width}×{product.dimensions.height} cm</div>
                      <div className="font-display text-base font-bold mt-0.5">Rp {product.price.toLocaleString('id-ID')}</div>
                      <button onClick={() => addToCart(product, 1)}
                        className="w-full editorial-button-primary text-[10px] py-2 flex items-center justify-center gap-1.5 mt-2">
                        <FaShoppingBag /><span>+ Keranjang</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
              className="px-4 py-2 border-2 border-[#0A0A0A] text-xs font-bold uppercase disabled:opacity-30 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 border-2 border-[#0A0A0A] text-xs font-bold font-mono transition-colors ${currentPage === page ? 'bg-[#0A0A0A] text-[#FAFAFA]' : 'hover:bg-[#E5E5E5]'}`}>
                {page}
              </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
              className="px-4 py-2 border-2 border-[#0A0A0A] text-xs font-bold uppercase disabled:opacity-30 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors">
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
