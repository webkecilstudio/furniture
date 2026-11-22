import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { FaHome, FaChevronRight, FaBuilding, FaWhatsapp } from 'react-icons/fa';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b-4 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] mb-4">
            <Link to="/" className="hover:text-[#EF4444] flex items-center gap-1"><FaHome /> Beranda</Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-[#FAFAFA]">Portofolio Proyek</span>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
            REKAM JEJAK & INSTALASI REAL
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            PORTOFOLIO PROYEK
          </h1>
          <p className="text-[#A3A3A3] text-sm font-mono mt-3 max-w-2xl leading-relaxed">
            Dari villa peristirahatan di Bali, penthouse urban Jakarta, hotel butik di Ubud, hingga ruang kerja kantor modern yang menuntut efisiensi ruang tingkat tinggi.
          </p>
        </div>
      </div>

      {/* Main Interactive Projects Section */}
      <ProjectsSection />

      {/* B2B / Commercial Banner */}
      <div className="bg-[#F5F5F5] border-t-2 border-[#0A0A0A] py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center text-2xl mx-auto border-2 border-[#0A0A0A]">
            <FaBuilding />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A]">
            Kemitraan Kontraktor & Desainer Interior
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] font-mono leading-relaxed max-w-2xl mx-auto">
            Kami menyediakan program kemitraan B2B khusus untuk arsitek, interior designer, dan kontraktor proyek dengan skema harga kuantitas, garansi SLA waktu pengerjaan, dan tim instalasi onsite.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6282313153539?text=Halo%20PorosKayu,%20saya%20tertarik%20dengan%20program%20kemitraan%20B2B%20untuk%20proyek%20interior."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#16A34A] text-[#FAFAFA] font-bold text-xs uppercase tracking-wider border-2 border-[#0A0A0A] hover:bg-[#15803D] transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              Diskusikan Proyek Komersial Anda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
