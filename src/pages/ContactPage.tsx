import React from 'react';
import { Link } from 'react-router-dom';
import { ContactLocationSection } from '../components/sections/ContactLocationSection';
import { FaHome, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTruck } from 'react-icons/fa';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Lokasi & Kontak</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            SENTRA MEBEL & WORKSHOP BLEGA BANGKALAN
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            LOKASI & KONTAK
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Kunjungi workshop kami di Jl. Raya Blega No. 01, Bangkalan, Jawa Timur. Melayani pemesanan langsung, survei lokasi, serta pengiriman mebel ke seluruh Madura, Jawa Timur, Jawa Tengah, dan Jawa Barat.
          </p>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 border-b-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-[#0A0A0A] p-5 bg-[#FAFAFA]">
            <FaMapMarkerAlt className="text-xl text-[#EF4444] mb-2" />
            <div className="font-bold uppercase text-xs">Alamat Workshop</div>
            <p className="text-xs text-[#525252] mt-1 font-bold">
              Jl. Raya Blega No. 01, Blega, Bangkalan, Jawa Timur
            </p>
          </div>

          <div className="border-2 border-[#0A0A0A] p-5 bg-[#FAFAFA]">
            <FaTruck className="text-xl text-[#EF4444] mb-2" />
            <div className="font-bold uppercase text-xs">Jangkauan Pengiriman</div>
            <p className="text-xs text-[#525252] mt-1">
              Fokus: Madura, Jawa Timur, Jawa Tengah, Jawa Barat & Seluruh RI
            </p>
          </div>

          <div className="border-2 border-[#0A0A0A] p-5 bg-[#FAFAFA]">
            <FaClock className="text-xl text-[#EF4444] mb-2" />
            <div className="font-bold uppercase text-xs">Jam Operasional</div>
            <p className="text-xs text-[#525252] mt-1">
              Senin - Sabtu: 08:00 - 17:30 WIB<br />Minggu: Tetap Melayani Chat WA
            </p>
          </div>

          <div className="border-2 border-[#0A0A0A] p-5 bg-[#FAFAFA]">
            <FaPhoneAlt className="text-xl text-[#EF4444] mb-2" />
            <div className="font-bold uppercase text-xs">Konsultasi / WA</div>
            <p className="text-xs text-[#525252] mt-1 font-mono font-bold">
              +62 823-1315-3539
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Contact & Map Section */}
      <ContactLocationSection />
    </div>
  );
};
