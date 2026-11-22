import React from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/sections/AboutSection';
import { ProductionProcessSection } from '../components/sections/ProductionProcessSection';
import { FaHome, FaChevronRight, FaAward, FaUsers, FaCompass } from 'react-icons/fa';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Tentang Kami</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            SENTRA KERAJINAN MEBEL BLEGA BANGKALAN
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            TENTANG POROSKAYU
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Berbasis di Jl. Raya Blega No. 01, Bangkalan, Jawa Timur. Menghubungkan tradisi keahlian kayu solid presisi dengan estetika arsitektur kontemporer untuk pelanggan di Pulau Madura, Jawa Timur, Jawa Tengah, dan Jawa Barat.
          </p>
        </div>
      </div>

      {/* About Section component */}
      <AboutSection />

      {/* Pillars of PorosKayu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-b-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="editorial-card p-8 space-y-4">
            <div className="w-12 h-12 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center text-xl">
              <FaCompass />
            </div>
            <h3 className="font-display text-2xl font-black uppercase">Filosofi Nama</h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              "Poros" melambangkan titik pusat sumbu yang kokoh dan seimbang. Bagi kami, kayu bukan sekadar material pembentuk mebel, melainkan poros kehangatan sebuah ruang tempat manusia berinteraksi.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <div className="w-12 h-12 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center text-xl">
              <FaUsers />
            </div>
            <h3 className="font-display text-2xl font-black uppercase">Pengrajin Generasi</h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              Dikerjakan oleh puluhan tukang kayu ahli asli Jepara yang mewarisi keahlian sambungan purus (tenon and mortise) turun-temurun selama lebih dari 3 dekade.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <div className="w-12 h-12 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center text-xl">
              <FaAward />
            </div>
            <h3 className="font-display text-2xl font-black uppercase">Presisi Berkelanjutan</h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              Hanya mengambil kayu dari hutan budidaya resmi bersertifikat legalitas kayu (SVLK) demi memastikan keseimbangan ekosistem dan masa depan perajin lokal.
            </p>
          </div>
        </div>
      </div>

      {/* Production Process Section */}
      <ProductionProcessSection />
    </div>
  );
};
