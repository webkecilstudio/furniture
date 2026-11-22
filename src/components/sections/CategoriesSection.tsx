import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { FaArrowRight } from 'react-icons/fa';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="kategori" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              KATEGORI PRODUK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              EKSPLORASI BERDASARKAN RUANGAN
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Tersedia 7 rumpun produk mebel komprehensif untuk melengkapi setiap fungsi ruang dalam hunian dan kantor Anda.
          </p>
        </div>

        {/* Categories Grid (VoiceBox Sharp Card Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const isWide = idx === 0;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer border-2 border-[#E5E5E5] hover:border-[#0A0A0A] bg-[#FAFAFA] transition-all flex flex-col justify-between ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Wrap */}
                <div className={`relative overflow-hidden bg-[#E5E5E5] ${isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0A0A0A] text-[#FAFAFA] px-2.5 py-1 text-[10px] font-mono font-bold uppercase">
                    {cat.itemCount} DESAIN
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#737373] tracking-widest">
                      KATEGORI 0{idx + 1}
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors mt-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#525252] mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#EF4444]">
                    <span>Buka Koleksi {cat.name}</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
