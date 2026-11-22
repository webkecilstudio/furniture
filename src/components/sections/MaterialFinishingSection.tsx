import React, { useState } from 'react';
import { MATERIALS } from '../../data/materials';
import { useShop } from '../../context/ShopContext';
import { FaCheck, FaPalette, FaExternalLinkAlt } from 'react-icons/fa';

export const MaterialFinishingSection: React.FC = () => {
  const { openModal } = useShop();
  const [activeTab, setActiveTab] = useState<string>('semua');

  const categories = ['semua', 'Kayu Alami', 'Batu & Marmer', 'Tekstil Premium', 'Teknik Finishing'];

  const filteredMaterials = activeTab === 'semua'
    ? MATERIALS
    : MATERIALS.filter((m) => m.category === activeTab);

  return (
    <section id="material" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              MATERIAL & TEKNIK FINISHING
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              KEJUJURAN BAHAN & SENTUHAN AKHIR
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => openModal('materialSelector')}
              className="editorial-button-primary text-xs py-2 px-4 flex items-center gap-2"
            >
              <FaPalette />
              <span>Interactive Swatch Viewer</span>
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-2 ${
                activeTab === cat
                  ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                  : 'bg-[#FAFAFA] text-[#525252] border-[#D4D4D4] hover:border-[#0A0A0A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="editorial-card group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#E5E5E5] border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors relative">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
                    {mat.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
                    <span>GRADE: {mat.grade}</span>
                    <span>ASAL: {mat.origin}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {mat.name}
                  </h3>

                  <p className="text-xs text-[#525252] leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                      Keunggulan Teknis:
                    </h4>
                    <ul className="space-y-1 text-xs text-[#525252]">
                      {mat.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#16A34A] font-bold text-xs mt-0.5">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5E5E5]">
                <button
                  onClick={() => openModal('materialSelector')}
                  className="w-full text-center text-xs font-bold uppercase py-2 bg-[#F5F5F5] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
                >
                  Lihat Sampel Warna & Finishing →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
