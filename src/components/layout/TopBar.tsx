import React from 'react';
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import { assetUrl } from '../../utils/asset';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] border-b border-[#262626] text-xs font-mono py-1.5 px-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Mobile: Clean compact text / Desktop: Full Editorial Ticker */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-[#EF4444] text-[#FAFAFA] font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 uppercase tracking-wider shrink-0">
            BLEGA • BANGKALAN
          </span>
          <span className="truncate text-[#A3A3A3] text-[11px] hidden sm:inline">
            Sentra Mebel Kayu Jati Solid • Rute Kirim: Madura, Jawa Timur, Jawa Tengah, Jawa Barat
          </span>
          <span className="truncate text-[#A3A3A3] text-[10px] sm:hidden">
            Sentra Mebel Jati Madura
          </span>
        </div>

        {/* Creator Brand Badge & WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] shrink-0 font-medium">
          <a
            href="https://webkecilstudio.github.io/catalogue/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#FAFAFA] hover:text-[#EF4444] transition-colors"
          >
            <img src={assetUrl('/webkecilstudio.png')} alt="Webkecil Studio" className="w-3.5 h-3.5 object-contain inline" />
            <span className="hidden xs:inline text-[#A3A3A3]">Created by </span>
            <strong className="underline underline-offset-2">Webkecil Studio</strong>
            <FaExternalLinkAlt className="text-[8px] text-[#A3A3A3]" />
          </a>
          <span className="text-[#404040] hidden sm:inline">|</span>
          <a
            href="https://wa.me/6282313153539"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-[#FAFAFA] hover:text-[#EF4444] transition-colors"
          >
            <FaWhatsapp className="text-[#16A34A] text-xs" />
            <span>+62 823-1315-3539</span>
          </a>
        </div>
      </div>
    </div>
  );
};
