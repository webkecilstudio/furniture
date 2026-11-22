import React from 'react';
import { FaCompass, FaCheck, FaDraftingCompass, FaTree } from 'react-icons/fa';
import { assetUrl } from '../../utils/asset';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              TENTANG PorosKayu
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              PROFIL, FILOSOFI & DEDIKASI KRIYA
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252] max-w-xs text-left md:text-right">
            Dua Dekade Merawat Martabat Kayu Alami Nusantara Menjadi Karya Bernilai Koleksi Tinggi.
          </div>
        </div>

        {/* 2 Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] p-2">
              <div className="aspect-[4/3] overflow-hidden bg-[#1F1F1F]">
                <img
                  src={assetUrl('/images/about-workshop.jpg')}
                  alt="Workshop PorosKayu Furniture"
                  className="w-full h-full object-cover contrast-110"
                />
              </div>
              <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] text-[11px] font-mono flex justify-between">
                <span>DAPUR PRODUKSI UTAMA</span>
                <span className="text-[#EF4444]">BLEGA, BANGKALAN, JAWA TIMUR</span>
              </div>
            </div>

            <div className="border-2 border-[#0A0A0A] p-5 bg-[#F5F5F5] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA]">
                  <FaTree className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase">Sertifikasi Kayu Perhutani</h4>
                  <p className="text-xs text-[#525252]">Hanya menggunakan kayu legal dari hutan tanam terkelola.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#E5E5E5]">
                <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA]">
                  <FaDraftingCompass className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase">Presisi Gambar Kerja Arsitektur</h4>
                  <p className="text-xs text-[#525252]">Setiap pesanan diawali dengan gambar kerja 3D dan detail joint.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="pull-quote">
              "Kami tidak memandang mebel sekadar pengisi kekosongan lantai. Mebel adalah titik interaksi paling intim antara tubuh manusia dan ruang arsitektur."
            </div>

            <div className="space-y-4 text-base text-[#525252] leading-relaxed">
              <p>
                Berawal dari sebuah bengkel kriya kayu pilihan di Blega, Bangkalan, <strong>PorosKayu</strong> lahir dari komitmen menghadirkan mebel kayu jati solid asli berkualitas tinggi yang awet puluhan tahun, menolak tren mebel pabrikan serbuk kayu press (particle board) yang cepat rapuh.
              </p>
              <p>
                Kami memilih jalan yang lebih sunyi namun terhormat: mempertahankan penggunaan kayu gelondongan solid berkualitas tinggi, menerapkan sambungan tradisional pasak purus (mortise & tenon) yang kokoh tanpa bergantung pada paku biasa, serta memastikan setiap balok kayu melewati masa pengeringan oven kiln-dry yang ketat.
              </p>
              <p>
                Kini, PorosKayu menjadi sentra mebel terpercaya bagi ribuan pelanggan di Pulau Madura (Bangkalan, Sampang, Pamekasan, Sumenep), area Jawa Timur (Surabaya, Sidoarjo, Malang), hingga proyek-proyek interior prestisius di Jawa Tengah dan Jawa Barat.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-[#E5E5E5]">
              <div className="border-2 border-[#E5E5E5] p-4 bg-[#FAFAFA]">
                <div className="text-xs font-mono font-bold text-[#EF4444] uppercase mb-1">
                  KEASLIAN MATERIAL
                </div>
                <h4 className="font-bold text-sm text-[#0A0A0A] uppercase mb-1">Tanpa Tipuan Serat</h4>
                <p className="text-xs text-[#525252]">
                  Keindahan urat kayu jati dan batu marmer yang Anda lihat adalah karya alami bumi, bukan stiker vinil atau cetakan sintetis.
                </p>
              </div>

              <div className="border-2 border-[#E5E5E5] p-4 bg-[#FAFAFA]">
                <div className="text-xs font-mono font-bold text-[#EF4444] uppercase mb-1">
                  KETELITIAN DETAIL
                </div>
                <h4 className="font-bold text-sm text-[#0A0A0A] uppercase mb-1">Amplas Tangan Bertingkat</h4>
                <p className="text-xs text-[#525252]">
                  Proses pengamplasan halus hingga grid 400 menghasilkan permukaan kayu yang selembut satin saat disentuh jemari.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
