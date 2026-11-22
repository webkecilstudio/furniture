import React from 'react';
import { useShop } from '../../context/ShopContext';
import { 
  FaRulerCombined, 
  FaDraftingCompass, 
  FaWhatsapp, 
  FaCamera, 
  FaCheckCircle,
  FaCalculator
} from 'react-icons/fa';

export const CustomFurnitureSection: React.FC = () => {
  const { openModal } = useShop();

  return (
    <section id="custom-furniture" className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b border-[#333333] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              LAYANAN BESPOKE & KUSTOM
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#FAFAFA] uppercase tracking-tight">
              MEBEL DIBUAT KHUSUS UNTUK RUANGAN ANDA
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A3A3A3] max-w-sm">
            Wujudkan mebel impian sesuai proporsi denah, jenis kayu pilihan, warna kain, dan fungsi khusus yang tidak ada di toko biasa.
          </p>
        </div>

        {/* 4 Step Custom Order Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="border-2 border-[#333333] p-6 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#EF4444] mb-2">TAHAP 01</div>
              <h3 className="font-display text-lg font-bold uppercase text-[#FAFAFA] mb-2">
                Konsultasi & Sketsa
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Kirim foto ruangan, referensi desain, atau sketsa kasar beserta perkiraan ukuran panjang, lebar, dan tinggi.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#262626] text-[10px] font-mono text-[#737373]">
              Via WhatsApp / Form Online
            </div>
          </div>

          <div className="border-2 border-[#333333] p-6 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#EF4444] mb-2">TAHAP 02</div>
              <h3 className="font-display text-lg font-bold uppercase text-[#FAFAFA] mb-2">
                Gambar Kerja Teknis
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Tim desainer kami menyiapkan gambar kerja 2D/3D detail spesifikasi sambungan, pemilihan material, dan estimasi biaya transparan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#262626] text-[10px] font-mono text-[#737373]">
              Revisi Dimensi & Material
            </div>
          </div>

          <div className="border-2 border-[#333333] p-6 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#EF4444] mb-2">TAHAP 03</div>
              <h3 className="font-display text-lg font-bold uppercase text-[#FAFAFA] mb-2">
                Produksi & Kiln-Dry
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Pengerjaan oleh tukang kayu senior Jepara dengan kayu jati kering oven, disertai update progres foto berkala untuk Anda.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#262626] text-[10px] font-mono text-[#737373]">
              Quality Control Ketat
            </div>
          </div>

          <div className="border-2 border-[#333333] p-6 bg-[#141414] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#EF4444] mb-2">TAHAP 04</div>
              <h3 className="font-display text-lg font-bold uppercase text-[#FAFAFA] mb-2">
                Pengiriman & Pasang
              </h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Pengiriman dengan packing peti kayu aman, perakitan di tempat oleh tim terlatih, dan penyerahan kartu garansi resmi 5 tahun.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#262626] text-[10px] font-mono text-[#737373]">
              White-Glove Delivery
            </div>
          </div>

        </div>

        {/* Big Banner Action Box */}
        <div className="border-2 border-[#FAFAFA] p-8 bg-[#171717] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5">
              SIAP MULAI CUSTOM FURNITURE?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#FAFAFA]">
              KIRIM SKETSA ATAU HITUNG ESTIMASI BIAYA SEKARANG
            </h3>
            <p className="text-xs text-[#A3A3A3] max-w-xl">
              Gunakan form permintaan custom digital kami atau gunakan kalkulator otomatis untuk mengetahui perkiraan biaya secara transparan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openModal('customFurniture')}
              className="bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#EF4444] hover:text-[#FAFAFA] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors border-2 border-[#FAFAFA]"
            >
              Isi Form Custom Order →
            </button>
            <button
              onClick={() => openModal('priceEstimator')}
              className="bg-transparent text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#0A0A0A] px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors border-2 border-[#FAFAFA] flex items-center gap-2"
            >
              <FaCalculator />
              <span>Kalkulator Estimasi</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
