import React from 'react';
import { Link } from 'react-router-dom';
import { SpecialOffersSection } from '../components/sections/SpecialOffersSection';
import { SPECIAL_OFFERS } from '../data/offers';
import { FaHome, FaChevronRight, FaTag, FaCopy } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

export const PromoPage: React.FC = () => {
  const { showToast } = useShop();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast(`Kode promo "${code}" berhasil disalin!`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Promo & Bundling</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            PENAWARAN SPESIAL TERBATAS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            PROMO & BUNDLING
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Dapatkan paket bundling furniture ruang makan dan ruang keluarga dengan harga hemat hingga 25% beserta gratis ongkos kirim ke kota-kota terpilih.
          </p>
        </div>
      </div>

      {/* Main Special Offers Section */}
      <SpecialOffersSection />

      {/* Terms and Conditions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t-2 border-[#0A0A0A]">
        <div className="border-2 border-[#0A0A0A] p-6 bg-[#FAFAFA]">
          <h3 className="font-display text-xl font-black uppercase mb-4">
            Syarat & Ketentuan Promo PorosKayu
          </h3>
          <ul className="space-y-2 text-xs font-mono text-[#525252] list-disc list-inside">
            <li>Kode promo berlaku untuk pembelian langsung maupun konfirmasi pemesanan via WhatsApp.</li>
            <li>Paket bundling mebel sudah termasuk pengerjaan finishing warna standar (Natural Teak, Walnut, atau Dark Oak).</li>
            <li>Penawaran ini tidak dapat digabungkan dengan diskon proyek B2B atau kupon kustom lainnya.</li>
            <li>Stok promo terbatas pada alokasi bahan baku batch produksi bulan berjalan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
