import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionsSection } from '../components/sections/CollectionsSection';
import { COLLECTIONS } from '../data/collections';
import { FaHome, FaChevronRight, FaArrowRight } from 'react-icons/fa';

export const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Page Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Koleksi Konsep</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            FILOSOFI & DESAIN ESTETIKA
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            KOLEKSI KONSEP
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Setiap koleksi dirancang dengan pendekatan kurasi karakter visual yang kuat. Pilih konsep hunian yang mencerminkan ketenangan, kehangatan, atau ketegasan ruang Anda.
          </p>
        </div>
      </div>

      {/* Main Interactive Section */}
      <CollectionsSection />

      {/* Grid of collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-b-2 border-[#0A0A0A]">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-1">
            DAFTAR LENGKAP TEMA
          </div>
          <h2 className="font-display text-3xl font-black uppercase">
            Eksplorasi Per Koleksi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((c) => (
            <div key={c.id} className="editorial-card group flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-[#E5E5E5] overflow-hidden border-b-2 border-[#0A0A0A]">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#EF4444] mb-1">
                    {c.concept}
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#525252] mt-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to={`/produk`}
                  className="editorial-button-secondary w-full py-2.5 text-xs flex items-center justify-center gap-2"
                >
                  <span>Lihat Produk Koleksi Ini</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
