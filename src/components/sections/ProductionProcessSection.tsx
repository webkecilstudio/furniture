import React from 'react';
import { FaComments, FaDraftingCompass, FaTree, FaTools, FaSprayCan, FaTruck } from 'react-icons/fa';
import { assetUrl } from '../../utils/asset';

export const ProductionProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi & Penyelarasan Konsep',
      subtitle: 'Memahami Ruang & Gaya Hidup',
      desc: 'Sesi diskusi intensif seputar kebutuhan ruang, preferensi estetika (minimalis, Japandi, modern), denah dimensi ruangan, dan batasan anggaran.',
      image: assetUrl('/images/proc-consultation.jpg'),
      icon: <FaComments />
    },
    {
      step: '02',
      title: 'Sketsa 3D & Pemilihan Kayu Kiln-Dry',
      subtitle: 'Gambar Kerja & Seleksi Log Jati',
      desc: 'Pembuatan gambar visualisasi 3D presisi dan seleksi balok kayu jati Perhutani dengan kadar air terukur 10-12% lewat oven kiln-dry.',
      image: assetUrl('/images/proc-material.jpg'),
      icon: <FaTree />
    },
    {
      step: '03',
      title: 'Konstruksi Kriya Purus & Presisi Mesin',
      subtitle: 'Ketelitian Tukang Senior Jepara',
      desc: 'Pemotongan dan perakitan rangka dengan sambungan purus (tenon & mortise). Sambungan kayu saling mengunci kuat tanpa celah baut.',
      image: assetUrl('/images/proc-crafting.jpg'),
      icon: <FaTools />
    },
    {
      step: '04',
      title: 'Amplas Halus & Multi-Layer Finishing',
      subtitle: 'Perlindungan & Kelembutan Sentuhan',
      desc: 'Pengamplasan tangan bertingkat hingga grid 400 dan aplikasi pelapis polyurethane / melamin 5 layer non-toxic tahan panas dan noda.',
      image: assetUrl('/images/proc-finishing.jpg'),
      icon: <FaSprayCan />
    },
    {
      step: '05',
      title: 'Quality Control & Packing Peti Kayu',
      subtitle: 'Verifikasi Mutu & Perlindungan Kargo',
      desc: 'Pemeriksaan struktural beban, kehalusan sambungan, dan fungsi fitting sebelum dilapisi foam tebal dan dipeti kayu solid.',
      image: assetUrl('/images/about-workshop.jpg'),
      icon: <FaDraftingCompass />
    },
    {
      step: '06',
      title: 'Pengiriman & Instalasi Lokasi',
      subtitle: 'White-Glove Delivery & Garansi 5 Tahun',
      desc: 'Armada kami mengantar langsung ke ruangan Anda, dirakit oleh teknisi resmi, dibersihkan rapi, dan kartu garansi diserahterimakan.',
      image: assetUrl('/images/proj-villa-bali.jpg'),
      icon: <FaTruck />
    }
  ];

  return (
    <section id="proses-produksi" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              TAHAPAN PRODUKSI MEBEL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              DARI LOG KAYU MENJADI MAHA KARYA
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Setiap produk mebel PorosKayu melalui 6 etape produksi terstandarisasi untuk menjamin kesempurnaan bentuk dan ketahanan lintas generasi.
          </p>
        </div>

        {/* 6 Step Editorial Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((st) => (
            <div
              key={st.step}
              className="editorial-card group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#E5E5E5] relative border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A] text-[#FAFAFA] font-display text-lg font-black px-3 py-1 border border-[#FAFAFA]">
                    {st.step}
                  </div>
                  <div className="absolute top-3 right-3 p-2 bg-[#FAFAFA] text-[#0A0A0A] border border-[#0A0A0A]">
                    {st.icon}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase text-[#EF4444]">
                    {st.subtitle}
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#525252] leading-relaxed pt-1">
                    {st.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5E5E5] text-[10px] font-mono text-[#737373] uppercase">
                DURASI: STANDAR PRESISI JEPARA
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
