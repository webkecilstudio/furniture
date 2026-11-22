import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { FaArrowRight, FaWhatsapp, FaCube, FaShieldAlt, FaAward } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useShop();

  return (
    <section id="hero" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] overflow-hidden">
      
      {/* Top Editorial Rubric */}
      <div className="border-b-2 border-[#0A0A0A] py-2 px-4 sm:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#525252]">
          <span>JURNAL MANUFAKTUR & ESTETIKA KAYU SOLID</span>
          <span className="hidden sm:inline">VOL. 26 • BLEGA, BANGKALAN & JAWA TIMUR</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-8 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Massive Headline & Editorial Lede */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              
              <div className="inline-block">
                <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1">
                  PREMIUM SOLID WOOD ATELIER
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0A0A0A] uppercase tracking-tight leading-[1.05] sm:leading-[1.02]">
                ESTETIKA <span className="text-[#EF4444]">ABADI</span> DALAM SETIAP SERAT KAYU JATI
              </h1>

              {/* Editorial Lede with Pull Quote Line */}
              <div className="border-l-4 border-[#EF4444] pl-3.5 sm:pl-5 py-0.5 sm:py-1">
                <p className="text-sm sm:text-base md:text-lg text-[#0A0A0A] leading-relaxed font-normal">
                  PorosKayu berpusat di Blega, Bangkalan – memadukan ketelitian tradisi pertukangan kayu solid dengan estetika arsitektur kontemporer. Mebel dibuat dari kayu jati Perhutani grade A berstandar kiln-dry 100% untuk hunian berkelas di Pulau Madura, Jawa Timur, Jawa Tengah, hingga Jawa Barat.
                </p>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2 text-[9px] sm:text-xs font-mono">
                <div className="border-2 border-[#E5E5E5] p-2 sm:p-3 bg-[#F5F5F5]">
                  <div className="font-display text-base sm:text-lg text-[#0A0A0A]">100%</div>
                  <div className="text-[#525252] text-[9px] sm:text-[10px] uppercase font-bold leading-tight">Kayu Jati TPK</div>
                </div>
                <div className="border-2 border-[#E5E5E5] p-2 sm:p-3 bg-[#F5F5F5]">
                  <div className="font-display text-base sm:text-lg text-[#0A0A0A]">5 TAHUN</div>
                  <div className="text-[#525252] text-[9px] sm:text-[10px] uppercase font-bold leading-tight">Garansi Rangka</div>
                </div>
                <div className="border-2 border-[#E5E5E5] p-2 sm:p-3 bg-[#F5F5F5]">
                  <div className="font-display text-base sm:text-lg text-[#0A0A0A]">BESPOKE</div>
                  <div className="text-[#525252] text-[9px] sm:text-[10px] uppercase font-bold leading-tight">Kustom Ukuran</div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <Link
                to="/produk"
                className="editorial-button-primary flex items-center justify-center gap-3 text-xs sm:text-sm py-3 sm:py-3.5"
              >
                <span>Eksplorasi Katalog</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/custom"
                className="editorial-button-secondary flex items-center justify-center gap-2 text-xs sm:text-sm py-3 sm:py-3.5"
              >
                <span>Konsultasi Custom Order</span>
              </Link>

              <a
                href="https://wa.me/6282313153539?text=Halo%20PorosKayu%20Furniture%2C%20saya%20ingin%20konsultasi%20pembuatan%20furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#EF4444] transition-colors py-2 px-1 underline underline-offset-4"
              >
                <FaWhatsapp className="text-[#16A34A] text-base sm:text-lg" />
                <span>WhatsApp Langsung</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] p-2 relative group">
              <div className="relative overflow-hidden bg-[#262626] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="/images/hero-bg.jpg"
                  alt="PorosKayu Signature Living Space"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#FAFAFA] px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase">
                  MASTERPIECE LIVING SET
                </div>

                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => openModal('threeDViewer')}
                    className="flex items-center gap-2 bg-[#EF4444] text-[#FAFAFA] px-3.5 py-2 text-xs font-bold font-mono uppercase tracking-wider border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] transition-colors"
                  >
                    <FaCube />
                    <span>Putar Model 3D</span>
                  </button>
                </div>
              </div>

              {/* Caption Under Hero */}
              <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#A3A3A3]">PROYEK: </span>
                  <strong className="text-[#FAFAFA]">PENTHOUSE SUDIRMAN</strong>
                </div>
                <div className="text-[#EF4444] font-bold">
                  KAYU JATI SOLID & MARMER
                </div>
              </div>
            </div>

            {/* Quick Teaser Box */}
            <div className="mt-4 border-2 border-[#E5E5E5] p-4 bg-[#F5F5F5] flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">
                  Butuh Simulasi Ruangan Anda?
                </p>
                <p className="text-xs text-[#525252]">
                  Coba fitur interaktif penataan furniture virtual kami.
                </p>
              </div>
              <button
                onClick={() => openModal('roomVisualizer')}
                className="text-xs font-bold uppercase underline underline-offset-4 hover:text-[#EF4444]"
              >
                Buka Visualizer →
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
