import React, { useState } from 'react';
import { COLLECTIONS } from '../../data/collections';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

export const CollectionsSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeCol = COLLECTIONS[selectedIdx];

  return (
    <section id="koleksi" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              KOLEKSI & GAYA DESAIN
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              5 KONSEP TATA RUANG PILIHAN
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Eksplorasi bahasa desain yang selaras dengan arsitektur rumah Anda: Minimalis, Scandinavian, Industrial, Modern Luxury, dan Klasik.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-[#0A0A0A] pb-4">
          {COLLECTIONS.map((col, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={col.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 text-xs font-bold font-mono uppercase tracking-wider transition-colors border-2 ${
                  isSelected
                    ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                    : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4] hover:border-[#0A0A0A]'
                }`}
              >
                0{idx + 1}. {col.name}
              </button>
            );
          })}
        </div>

        {/* Active Collection Showcase */}
        <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 md:p-8">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 border-2 border-[#0A0A0A] bg-[#0A0A0A] relative group overflow-hidden">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <img
                src={activeCol.image}
                alt={activeCol.name}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#FAFAFA] border border-[#FAFAFA] px-3 py-1 text-xs font-mono font-bold uppercase">
              KONSEP: {activeCol.concept}
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#EF4444] uppercase tracking-widest">
                KARAKTERISTIK GAYA
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] leading-tight">
                {activeCol.name}
              </h3>

              <p className="text-sm font-semibold italic text-[#0A0A0A] border-l-2 border-[#0A0A0A] pl-3">
                "{activeCol.tagline}"
              </p>

              <p className="text-xs text-[#525252] leading-relaxed">
                {activeCol.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  Ciri Khas Desain:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#0A0A0A]">
                  {activeCol.characteristics.map((char, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#EF4444] shrink-0"></span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#E5E5E5] flex items-center justify-between">
              <a
                href="#katalog"
                className="editorial-button-primary text-xs flex items-center gap-2"
              >
                <span>Lihat Produk {activeCol.name}</span>
                <FaArrowRight />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
