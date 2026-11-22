import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomFurnitureSection } from '../components/sections/CustomFurnitureSection';
import { useShop } from '../context/ShopContext';
import { FaHome, FaChevronRight, FaCalculator, FaWhatsapp, FaRulerCombined, FaCheckCircle } from 'react-icons/fa';

export const CustomOrderPage: React.FC = () => {
  const { openModal } = useShop();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Custom Order</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            BESPOKE FURNITURE & INTERIOR
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            PESANAN KHUSUS
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Wujudkan mebel impian yang dirancang khusus menyesuaikan dimensi ruangan, preferensi jenis kayu jati/sungkai/mahoni, serta sentuhan finishing yang Anda inginkan.
          </p>
        </div>
      </div>

      {/* Action Shortcut Banner */}
      <div className="bg-[#EF4444] text-[#FAFAFA] py-4 px-4 sm:px-8 border-b-2 border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaCalculator className="text-2xl" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Ingin tahu perkiraan anggaran sebelum order kustom?
            </span>
          </div>
          <button
            onClick={() => openModal('priceEstimator')}
            className="px-5 py-2 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Buka Kalkulator Estimasi Harga
          </button>
        </div>
      </div>

      {/* Main Section Form & Guidelines */}
      <CustomFurnitureSection />

      {/* Value Proposition Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="border-t-2 border-[#0A0A0A] pt-12">
          <h2 className="font-display text-3xl font-black uppercase mb-8">
            Keuntungan Pesan Custom di PorosKayu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-[#0A0A0A] p-6 bg-[#FAFAFA]">
              <div className="text-2xl text-[#EF4444] mb-3"><FaRulerCombined /></div>
              <h3 className="font-display text-lg uppercase font-bold mb-2">Presisi Hingga Milimeter</h3>
              <p className="text-xs text-[#525252] leading-relaxed">
                Kami menyesuaikan ukuran secara akurat agar pas di ceruk dinding, koridor sempit, atau ruang vertikal hunian Anda.
              </p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-6 bg-[#FAFAFA]">
              <div className="text-2xl text-[#EF4444] mb-3"><FaCheckCircle /></div>
              <h3 className="font-display text-lg uppercase font-bold mb-2">Konsultasi Desain & Gambar Kerja</h3>
              <p className="text-xs text-[#525252] leading-relaxed">
                Dapatkan asistensi sketsa 2D & 3D sebelum tahap produksi dimulai, memastikan tidak ada miskomunikasi spesifikasi.
              </p>
            </div>
            <div className="border-2 border-[#0A0A0A] p-6 bg-[#FAFAFA]">
              <div className="text-2xl text-[#EF4444] mb-3"><FaWhatsapp /></div>
              <h3 className="font-display text-lg uppercase font-bold mb-2">Laporan Progress Berkala</h3>
              <p className="text-xs text-[#525252] leading-relaxed">
                Tim workshop kami mengirimkan foto dan update pengerjaan via WhatsApp di setiap tahapan potong, rakit, dan finishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
