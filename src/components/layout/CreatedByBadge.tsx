import React, { useState } from 'react';
import { FaExternalLinkAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';

export const CreatedByBadge: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-20 left-4 z-40 bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#0A0A0A] px-2.5 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#EF4444] transition-colors"
        title="Created by Webkecil Studio"
      >
        <img src="/webkecilstudio.png" alt="Logo" className="w-4 h-4 object-contain" />
        <span className="hidden sm:inline">Webkecil Studio</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 left-4 z-40 bg-[#FAFAFA] text-[#0A0A0A] border-2 border-[#0A0A0A] p-3 max-w-[280px] shadow-none hidden sm:block animate-in fade-in duration-300">
      <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-1.5 mb-2">
        <div className="flex items-center gap-2">
          <img src="/webkecilstudio.png" alt="Webkecil Studio" className="w-5 h-5 object-contain" />
          <span className="text-[11px] font-bold uppercase font-mono tracking-wider">
            Webkecil Studio
          </span>
        </div>
        <button
          onClick={() => setMinimized(true)}
          className="text-[#737373] hover:text-[#0A0A0A] p-0.5"
          title="Sembunyikan Badge"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>

      <p className="text-[11px] text-[#525252] leading-tight mb-2.5">
        Pengembang website mebel modern ini. Hubungi kami untuk pembuatan website berkonsep eksklusif.
      </p>

      <div className="flex items-center gap-2 text-[10px] font-bold font-mono">
        <a
          href="https://webkecilstudio.github.io/catalogue/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-1.5 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors flex items-center justify-center gap-1 uppercase"
        >
          <span>Katalog</span>
          <FaExternalLinkAlt className="text-[8px]" />
        </a>
        <a
          href="https://wa.me/6282313153539"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-1.5 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors flex items-center justify-center gap-1 uppercase text-[#0A0A0A]"
        >
          <FaWhatsapp className="text-[#16A34A]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
