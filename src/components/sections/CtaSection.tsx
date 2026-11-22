import React from 'react';
import { useShop } from '../../context/ShopContext';
import { FaArrowRight, FaWhatsapp, FaFileInvoiceDollar, FaCube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CtaSection: React.FC = () => {
  const { openModal } = useShop();

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-20 md:py-28 relative overflow-hidden">
      
      {/* Decorative Red Accent Line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#EF4444]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        
        <div className="inline-block">
          <span className="bg-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-widest px-3 py-1">
            SIAP MEMBANGUN RUANG IMPIAN?
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FAFAFA] uppercase tracking-tight leading-[1.05]">
          WUJUDKAN MEBEL PRESISI BERSAMA <span className="text-[#EF4444]">PorosKayu</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D4D4D4] max-w-2xl mx-auto leading-relaxed">
          Hubungi kami untuk konsultasi desain interior gratis, perhitungan estimasi biaya transparan, atau kunjungi showroom kami untuk merasakan langsung kelembutan serat kayu jati asli.
        </p>

        {/* Large Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/produk"
            className="bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#EF4444] hover:text-[#FAFAFA] px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-2 border-[#FAFAFA] flex items-center gap-3"
          >
            <span>Buka Katalog Produk</span>
            <FaArrowRight />
          </Link>

          <button
            onClick={() => openModal('customFurniture')}
            className="bg-transparent text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#0A0A0A] px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-2 border-[#FAFAFA] flex items-center gap-2"
          >
            <FaFileInvoiceDollar />
            <span>Form Custom Order</span>
          </button>

          <a
            href="https://wa.me/6282313153539?text=Halo%20PorosKayu%2C%20saya%20ingin%20konsultasi%20pemesanan%20furniture%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16A34A] text-[#FAFAFA] hover:bg-[#15803D] px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-2 border-[#FAFAFA] flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat WhatsApp Langsung</span>
          </a>
        </div>

        {/* Small Editorial Note */}
        <div className="pt-6 text-xs font-mono text-[#737373]">
          Nomor Resmi WhatsApp: +62 823-1315-3539 • Jam Kerja Konsultasi: 08:30 - 18:00 WIB
        </div>

      </div>
    </section>
  );
};
