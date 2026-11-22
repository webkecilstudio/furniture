import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaClock, 
  FaExternalLinkAlt,
  FaTruck
} from 'react-icons/fa';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="kontak" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              LOKASI WORKSHOP & SHOWROOM
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              KUNJUNGI WORKSHOP BLEGA
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Rasakan langsung kehalusan pengerjaan kayu jati solid, ketelitian sambungan konstruksi, serta konsultasikan kebutuhan interior Anda langsung di sentra mebel kami.
          </p>
        </div>

        {/* 2 Column: Info Card & Embedded Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="editorial-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-2">
                <h3 className="font-display text-lg font-bold uppercase text-[#0A0A0A]">
                  Showroom & Workshop Utama
                </h3>
                <span className="text-[10px] font-mono font-bold bg-[#EF4444] text-[#FAFAFA] px-2 py-0.5 uppercase">
                  Pusat Madura
                </span>
              </div>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-base text-[#EF4444] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0A0A0A] uppercase">Alamat Lengkap:</strong>
                    <p className="text-[#525252] mt-0.5 leading-relaxed font-bold">
                      Jl. Raya Blega No. 01, Blega, Bangkalan, Jawa Timur
                    </p>
                    <p className="text-[11px] text-[#737373] mt-0.5 font-mono">
                      (Akses jalan utama lintas Madura, sangat mudah dijangkau dari arah Jembatan Suramadu maupun Sampang)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-base text-[#0A0A0A] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0A0A0A] uppercase">Jam Operasional:</strong>
                    <p className="text-[#525252] mt-0.5">
                      Senin – Sabtu: 08:00 – 17:30 WIB<br />
                      Minggu & Hari Libur: Tetap Buka / Dengan Perjanjian
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-base text-[#16A34A] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0A0A0A] uppercase">WhatsApp Order & Survei:</strong>
                    <p className="mt-0.5">
                      <a 
                        href="https://wa.me/6282313153539" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#0A0A0A] font-bold hover:text-[#EF4444] transition-colors underline"
                      >
                        +62 823-1315-3539
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-base text-[#0A0A0A] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0A0A0A] uppercase">Email Korespondensi:</strong>
                    <p className="text-[#525252] mt-0.5">info@poroskayu.co.id / order@poroskayu.co.id</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span>Fasilitas Parkir Luas & Loading Area</span>
                <span className="text-[#16A34A] font-bold">● Workshop Beroperasi</span>
              </div>
            </div>

            {/* Area Pelayanan Pengiriman */}
            <div className="editorial-card p-6 bg-[#F5F5F5] space-y-3">
              <div className="flex items-center gap-2 text-[#EF4444]">
                <FaTruck />
                <h4 className="font-display text-sm font-bold uppercase text-[#0A0A0A]">
                  Wilayah Pengiriman & Layanan On-Site
                </h4>
              </div>
              <p className="text-xs text-[#525252] leading-relaxed">
                Melayani pengiriman langsung via armada workshop untuk <strong>seluruh Pulau Madura</strong> (Bangkalan, Sampang, Pamekasan, Sumenep), area <strong>Jawa Timur</strong> (Surabaya, Sidoarjo, Gresik, Malang), serta kargo terpadu ke <strong>Jawa Tengah</strong> dan <strong>Jawa Barat</strong>.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed (Fitur 17) */}
          <div className="lg:col-span-7 border-2 border-[#0A0A0A] bg-[#E5E5E5] relative min-h-[420px] flex flex-col">
            <div className="bg-[#0A0A0A] text-[#FAFAFA] p-3 text-xs font-mono flex items-center justify-between">
              <span>GOOGLE MAPS: BLEGA, BANGKALAN, JAWA TIMUR</span>
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Blega+No.+01,+Blega,+Bangkalan,+Jawa+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EF4444] flex items-center gap-1 uppercase font-bold"
              >
                <span>Buka Rute Maps</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title="Peta Lokasi Workshop PorosKayu Blega Bangkalan"
                src="https://maps.google.com/maps?q=Blega,+Bangkalan,+Jawa+Timur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
