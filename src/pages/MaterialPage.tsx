import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialFinishingSection } from '../components/sections/MaterialFinishingSection';
import { useShop } from '../context/ShopContext';
import { FaHome, FaChevronRight, FaSwatchbook, FaTree, FaShieldAlt } from 'react-icons/fa';

export const MaterialPage: React.FC = () => {
  const { openModal } = useShop();

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Material & Kayu</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            STANDARISASI BAHAN BAKU
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            MATERIAL & FINISHING
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Hanya kayu jati perhutani TPK kelas A, mahoni tua oven, sungkai terpilih, serta marmer asli berkualitas ekspor yang kami gunakan untuk menjamin ketahanan puluhan tahun.
          </p>
        </div>
      </div>

      {/* Sample Swatch Action Bar */}
      <div className="bg-[#F5F5F5] border-b-2 border-[#0A0A0A] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaSwatchbook className="text-xl text-[#0A0A0A]" />
            <span className="text-xs sm:text-sm font-bold uppercase">
              Butuh melihat sampel serat kayu & warna kain langsung?
            </span>
          </div>
          <button
            onClick={() => openModal('materialSelector')}
            className="editorial-button-primary text-xs py-2 px-4 flex items-center gap-2"
          >
            <span>Buka Panel Swatch Material</span>
          </button>
        </div>
      </div>

      {/* Main Material Section */}
      <MaterialFinishingSection />

      {/* Quality Commitment Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA]">
          <div className="bg-[#0A0A0A] text-[#FAFAFA] p-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-black uppercase">
              Standar Kering & Kualitas Oven Kayu
            </h2>
            <FaShieldAlt className="text-2xl text-[#EF4444]" />
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b-2 border-[#0A0A0A] text-[#0A0A0A] uppercase font-bold">
                  <th className="py-3 px-4">Jenis Kayu</th>
                  <th className="py-3 px-4">Kadar Air (MC)</th>
                  <th className="py-3 px-4">Perlakuan Anti Rayap</th>
                  <th className="py-3 px-4">Rekomendasi Pemakaian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                <tr>
                  <td className="py-3 px-4 font-bold">Kayu Jati Solid TPK</td>
                  <td className="py-3 px-4">10% - 12% (Kiln Dried)</td>
                  <td className="py-3 px-4">Alami (Minyak Jati Alami)</td>
                  <td className="py-3 px-4">Indoor & Semi-Outdoor</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Kayu Mahoni Tua</td>
                  <td className="py-3 px-4">8% - 10% (Kiln Dried)</td>
                  <td className="py-3 px-4">Vakum Tekan Obat Kimia Ramah Lingkungan</td>
                  <td className="py-3 px-4">Indoor, Cat Duco / Klasik</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Kayu Sungkai Solid</td>
                  <td className="py-3 px-4">10% - 12% (Kiln Dried)</td>
                  <td className="py-3 px-4">Impregnasi Kimia Anti Jamur</td>
                  <td className="py-3 px-4">Indoor Scandinavian / Japanese Modern</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
