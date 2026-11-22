import React from 'react';
import { 
  FaShieldAlt, 
  FaTree, 
  FaRulerCombined, 
  FaGem, 
  FaDraftingCompass, 
  FaTruckLoading 
} from 'react-icons/fa';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: <FaTree className="text-2xl" />,
      title: 'Kayu Jati Solid Pilihan TPK',
      desc: 'Bukan kayu limbah atau sambungan tempel. Kayu jati tua berserat padat dengan kandungan resin alami penangkal rayap dan jamur seumur hidup.'
    },
    {
      num: '02',
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Oven Kiln-Dry Standar 10-12%',
      desc: 'Pengeringan ruang oven selama 2-3 minggu memastikan kadar air stabil, mencegah kayu melengkung, menyusut, atau pecah di iklim AC.'
    },
    {
      num: '03',
      icon: <FaRulerCombined className="text-2xl" />,
      title: 'Konstruksi Sambungan Purus & Pasak',
      desc: 'Menggunakan teknik mortise & tenon tradisional tanpa baut kasar yang tampak di luar, menghasilkan kekuatan struktural beban hingga 300+ kg.'
    },
    {
      num: '04',
      icon: <FaGem className="text-2xl" />,
      title: 'Finishing Multi-Layer Non-Toxic',
      desc: 'Aplikasi cat duco dan polyurethane 5 lapisan bersertifikasi ramah lingkungan, tahan tumpahan cairan asam/kopi, dan lembut disentuh.'
    },
    {
      num: '05',
      icon: <FaDraftingCompass className="text-2xl" />,
      title: 'Fleksibilitas Desain Custom 100%',
      desc: 'Kemampuan adaptasi ukuran milimeter, pilihan warna finishing, jenis kain upholstery, hingga modifikasi material sesuai sketsa Anda.'
    },
    {
      num: '06',
      icon: <FaTruckLoading className="text-2xl" />,
      title: 'Proteksi Kemasan Peti Kayu & Instalasi',
      desc: 'Setiap pengiriman antar-kota dilindungi peti kayu solid (wooden crate) serta opsi tim perakitan terlatih langsung di lokasi Anda.'
    }
  ];

  return (
    <section id="keunggulan" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              KEUNGGULAN PorosKayu
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              STANDAR MUTU TANPA KOMPROMI
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Investasi mebel jangka panjang yang didasari kejujuran material, keahlian tangan pemahat, dan ketelitian sains kayu.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="editorial-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] pb-3 mb-4 transition-colors">
                  <span className="font-display text-xl text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {item.num}
                  </span>
                  <div className="text-[#0A0A0A] p-2 bg-[#F5F5F5] group-hover:bg-[#0A0A0A] group-hover:text-[#FAFAFA] transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase text-[#0A0A0A] mb-2 group-hover:text-[#EF4444] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#525252] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5] text-[10px] font-mono font-bold uppercase text-[#737373]">
                SERTIFIKASI MUTU TERUJI
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
