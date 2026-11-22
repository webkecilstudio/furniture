import React from 'react';
import { Link } from 'react-router-dom';
import { FaqSection } from '../components/sections/FaqSection';
import { useShop } from '../context/ShopContext';
import { FaHome, FaChevronRight, FaTruck, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';

export const FaqPage: React.FC = () => {
  const { openModal } = useShop();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Tanya Jawab & Bantuan</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            PUSAT BANTUAN & PANDUAN PELANGGAN
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            TANYA JAWAB (FAQ)
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Temukan jawaban lengkap seputar prosedur pemesanan, kustomisasi ukuran, pengiriman ke luar pulau, hingga garansi konstruksi mebel PorosKayu
          </p>
        </div>
      </div>

      {/* Shipping Rates Shortcut */}
      <div className="bg-[#F5F5F5] border-b-2 border-[#0A0A0A] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaTruck className="text-xl text-[#0A0A0A]" />
            <span className="text-xs sm:text-sm font-bold uppercase">
              Ingin cek perkiraan tarif ekspedisi dan durasi kirim ke kota Anda?
            </span>
          </div>
          <button
            onClick={() => openModal('deliveryInfo')}
            className="editorial-button-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <span>Lihat Tabel Estimasi Ongkir</span>
          </button>
        </div>
      </div>

      {/* Main FAQ Accordion Component */}
      <FaqSection />

      {/* Still Need Help? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase">
              Masih Punya Pertanyaan Lain?
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#D4D4D4] max-w-xl">
              Customer support kami aktif setiap hari (08.00 - 21.00 WIB) untuk menjawab kebutuhan spesifikasi mebel Anda.
            </p>
          </div>
          <a
            href="https://wa.me/6282313153539"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#16A34A] text-[#FAFAFA] font-bold text-xs uppercase tracking-wider border-2 border-[#FAFAFA] hover:bg-[#15803D] transition-colors shrink-0 flex items-center gap-2"
          >
            <FaPhoneAlt />
            <span>Chat Langsung (+62 823-1315-3539)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
