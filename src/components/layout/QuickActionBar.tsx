import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { 
  FaHome, 
  FaCouch, 
  FaTools, 
  FaShoppingBag, 
  FaWhatsapp 
} from 'react-icons/fa';

export const QuickActionBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, openModal } = useShop();
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isHome = location.pathname === '/';
  const isKatalog = location.pathname.startsWith('/produk');
  const isCustom = location.pathname.startsWith('/custom');

  return (
    <nav 
      aria-label="Mobile Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A] text-[#FAFAFA] border-t-2 border-[#0A0A0A] px-2 py-1.5 shadow-[0_-4px_12px_rgba(0,0,0,0.25)]"
    >
      <div className="grid grid-cols-5 items-center">

        {/* 1. Beranda */}
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            isHome ? 'text-[#EF4444]' : 'text-[#A3A3A3] hover:text-[#FAFAFA]'
          }`}
        >
          <FaHome className="text-base mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">
            Beranda
          </span>
        </button>

        {/* 2. Katalog */}
        <button
          onClick={() => navigate('/produk')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            isKatalog ? 'text-[#EF4444]' : 'text-[#A3A3A3] hover:text-[#FAFAFA]'
          }`}
        >
          <FaCouch className="text-base mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">
            Katalog
          </span>
        </button>

        {/* 3. Custom Order */}
        <button
          onClick={() => navigate('/custom')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            isCustom ? 'text-[#EF4444]' : 'text-[#A3A3A3] hover:text-[#FAFAFA]'
          }`}
        >
          <FaTools className="text-base mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">
            Custom
          </span>
        </button>

        {/* 4. Keranjang (Satu-satunya akses keranjang di mobile, tanpa duplikat di atas) */}
        <button
          onClick={() => openModal('cart')}
          className="relative flex flex-col items-center justify-center py-1 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors"
          title="Buka Keranjang Pesanan"
        >
          <div className="relative">
            <FaShoppingBag className="text-base mb-0.5 text-[#FAFAFA]" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-[#EF4444] text-[#FAFAFA] text-[9px] font-mono font-bold w-4 h-4 flex items-center justify-center border border-[#0A0A0A]">
                {totalCartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">
            Keranjang
          </span>
        </button>

        {/* 5. Chat WhatsApp */}
        <a
          href="https://wa.me/6282313153539?text=Halo%20PorosKayu%20Blega%20Bangkalan,%20saya%20ingin%20konsultasi%20mebel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#22C55E] hover:text-[#4ADE80] transition-colors"
        >
          <FaWhatsapp className="text-base mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">
            Chat WA
          </span>
        </a>

      </div>
    </nav>
  );
};
