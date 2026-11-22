import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { 
  FaShoppingBag, 
  FaHeart, 
  FaExchangeAlt, 
  FaCalculator, 
  FaCube, 
  FaBars, 
  FaTimes,
  FaWhatsapp,
  FaChevronDown,
  FaCouch,
  FaTools,
  FaLeaf,
  FaImages,
  FaTag,
  FaMapMarkerAlt
} from 'react-icons/fa';

interface DropdownItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  desc: string;
}

const PRODUK_ITEMS: DropdownItem[] = [
  { label: 'Katalog Produk', path: '/produk', icon: <FaCouch />, desc: 'Semua 16 koleksi mebel terkurasi' },
  { label: 'Kategori Furniture', path: '/produk?kategori=all', icon: <FaTag />, desc: 'Filter meja, kursi, sofa, lemari' },
  { label: 'Produk Unggulan', path: '/#unggulan', icon: <FaLeaf />, desc: 'Pilihan editor & best seller' },
  { label: 'Koleksi Konsep', path: '/koleksi', icon: <FaImages />, desc: 'Minimalis, Scandinavian, Industrial' },
];

const LAYANAN_ITEMS: DropdownItem[] = [
  { label: 'Custom Order', path: '/custom', icon: <FaTools />, desc: 'Pesan sesuai ukuran & desain Anda' },
  { label: 'Material & Kayu', path: '/material', icon: <FaLeaf />, desc: 'Jati TPK solid, mahoni, sungkai' },
  { label: 'Proses Produksi', path: '/tentang', icon: <FaCube />, desc: '6 tahap pengerjaan presisi oven' },
  { label: 'Promo & Bundling', path: '/promo', icon: <FaTag />, desc: 'Paket hemat mebel spesial' },
];

const LAINNYA_ITEMS: DropdownItem[] = [
  { label: 'Portofolio Proyek', path: '/proyek', icon: <FaImages />, desc: 'Villa, hotel, kantor, hunian' },
  { label: 'Tentang Kami', path: '/tentang', icon: <FaLeaf />, desc: 'Visi, misi, dan workshop Blega' },
  { label: 'Tanya Jawab (FAQ)', path: '/#faq', icon: <FaCouch />, desc: 'Pertanyaan seputar pesanan & kayu' },
  { label: 'Lokasi & Kontak', path: '/kontak', icon: <FaWhatsapp />, desc: 'Showroom fisik & chat WhatsApp' },
];

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items, currentPath, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = items.some(item => {
    const basePath = item.path.split('?')[0].split('#')[0];
    return basePath !== '/' && currentPath.startsWith(basePath);
  });

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
        isActive || open ? 'text-[#EF4444] border-[#EF4444]' : 'border-transparent hover:text-[#EF4444] hover:border-[#EF4444]'
      }`}>
        {label}
        <FaChevronDown className={`text-[9px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-0 w-64 bg-[#FAFAFA] border-2 border-[#0A0A0A] border-t-0 z-50 shadow-xl">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => { onNavigate(item.path); setOpen(false); }}
              className="w-full flex items-start gap-3 px-4 py-3 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors group border-b border-[#E5E5E5] last:border-b-0 text-left"
            >
              <span className="mt-0.5 text-[#EF4444] group-hover:text-[#FAFAFA] text-sm flex-shrink-0">
                {item.icon}
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider">{item.label}</div>
                <div className="text-[11px] font-mono text-[#737373] group-hover:text-[#A3A3A3] mt-0.5">{item.desc}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, wishlist, compareList, openModal } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const toggleMobileGroup = (group: string) => {
    setMobileGroup(prev => prev === group ? null : group);
  };

  const allMobileGroups = [
    { key: 'produk', label: 'Produk', items: PRODUK_ITEMS },
    { key: 'layanan', label: 'Layanan & Info', items: LAYANAN_ITEMS },
    { key: 'lainnya', label: 'Tentang & Kontak', items: LAINNYA_ITEMS },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA] border-b-2 border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        <div className="h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">

          {/* Brand Masthead */}
          <Link
            to="/"
            className="text-left group flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center font-display text-base sm:text-lg font-black group-hover:bg-[#EF4444] transition-colors border-2 border-[#0A0A0A]">
              PK
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display text-lg sm:text-xl font-black tracking-tight text-[#0A0A0A] uppercase">
                  PorosKayu
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold font-mono px-1 py-0.5 bg-[#0A0A0A] text-[#FAFAFA] tracking-tighter">
                  FURNITURE
                </span>
              </div>
              <p className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#737373] uppercase leading-none hidden xs:block">
                Blega, Bangkalan • Presisi Kayu Solid
              </p>
            </div>
          </Link>

          {/* Desktop Dropdown Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
                location.pathname === '/' ? 'text-[#EF4444] border-[#EF4444]' : 'border-transparent hover:text-[#EF4444] hover:border-[#EF4444]'
              }`}
            >
              Beranda
            </Link>
            <NavDropdown label="Produk" items={PRODUK_ITEMS} currentPath={location.pathname} onNavigate={handleNavigate} />
            <NavDropdown label="Layanan" items={LAYANAN_ITEMS} currentPath={location.pathname} onNavigate={handleNavigate} />
            <NavDropdown label="Tentang" items={LAINNYA_ITEMS} currentPath={location.pathname} onNavigate={handleNavigate} />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* Desktop-only Tool Buttons */}
            <button
              onClick={() => openModal('priceEstimator')}
              title="Kalkulator Estimasi Harga"
              className="hidden md:flex items-center justify-center w-9 h-9 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            >
              <FaCalculator className="text-sm" />
            </button>

            <button
              onClick={() => openModal('roomVisualizer')}
              title="Simulasi Ruangan"
              className="hidden md:flex items-center justify-center w-9 h-9 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            >
              <FaCube className="text-sm" />
            </button>

            {/* Desktop Divider */}
            <div className="hidden md:block w-px h-5 bg-[#D4D4D4] mx-0.5" />

            {/* Compare (Hidden on small mobile to avoid crowding) */}
            <button
              onClick={() => openModal('comparison')}
              title="Komparasi Produk"
              className="hidden sm:flex relative items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            >
              <FaExchangeAlt className="text-xs sm:text-sm" />
              {compareList.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#EF4444] text-[#FAFAFA] text-[9px] font-mono font-black w-4 h-4 flex items-center justify-center border border-[#0A0A0A]">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Wishlist (Visible on Mobile & Desktop) */}
            <button
              onClick={() => openModal('wishlist')}
              title="Wishlist Favorit"
              className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            >
              <FaHeart className="text-xs sm:text-sm" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-[9px] font-mono font-black w-4 h-4 flex items-center justify-center border border-[#FAFAFA]">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart (Desktop ONLY: On Mobile, Cart lives exclusively in the bottom bar to eliminate duplicates!) */}
            <button
              onClick={() => openModal('cart')}
              title="Keranjang Pesanan"
              className="hidden md:flex relative items-center justify-center w-9 h-9 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors border-2 border-[#0A0A0A]"
            >
              <FaShoppingBag className="text-sm" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#EF4444] text-[#FAFAFA] text-[9px] font-mono font-black w-4 h-4 flex items-center justify-center border border-[#0A0A0A]">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <FaTimes className="text-xs sm:text-sm" /> : <FaBars className="text-xs sm:text-sm" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Streamlined, No Duplicates) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#0A0A0A] bg-[#FAFAFA] max-h-[calc(100vh-120px)] overflow-y-auto pb-6">
          {/* Mobile Tool Quick-Access */}
          <div className="grid grid-cols-2 gap-px border-b-2 border-[#0A0A0A] bg-[#0A0A0A]">
            <button
              onClick={() => { openModal('priceEstimator'); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 p-3 bg-[#F5F5F5] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <FaCalculator /> Estimator Harga
            </button>
            <button
              onClick={() => { openModal('roomVisualizer'); setMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-1.5 p-3 bg-[#F5F5F5] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <FaCube /> Simulasi Ruang
            </button>
          </div>

          {/* Quick Nav Links */}
          <div className="border-b-2 border-[#0A0A0A]">
            <button
              onClick={() => handleNavigate('/')}
              className={`w-full text-left px-5 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#F5F5F5] transition-colors ${
                location.pathname === '/' ? 'text-[#EF4444] bg-[#F5F5F5]' : ''
              }`}
            >
              Beranda
            </button>
          </div>

          {/* Collapsible Accordion Nav Groups */}
          <div className="divide-y-2 divide-[#0A0A0A]">
            {allMobileGroups.map((group) => (
              <div key={group.key}>
                <button
                  onClick={() => toggleMobileGroup(group.key)}
                  className="w-full flex items-center justify-between px-5 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#F5F5F5] transition-colors"
                >
                  <span>{group.label}</span>
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${
                    mobileGroup === group.key ? 'rotate-180 text-[#EF4444]' : ''
                  }`} />
                </button>

                {mobileGroup === group.key && (
                  <div className="border-t border-[#E5E5E5] divide-y divide-[#E5E5E5] bg-[#F9F9F9]">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full flex items-center gap-3 px-6 py-2.5 text-left hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors group"
                      >
                        <span className="text-[#EF4444] group-hover:text-[#FAFAFA] text-xs flex-shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider">{item.label}</div>
                          <div className="text-[10px] font-mono text-[#737373] group-hover:text-[#A3A3A3]">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Workshop Address Badge at Bottom of Drawer */}
          <div className="p-4 bg-[#F5F5F5] border-t-2 border-[#0A0A0A] flex items-center gap-2.5 text-[11px] font-mono text-[#525252]">
            <FaMapMarkerAlt className="text-[#EF4444] shrink-0" />
            <span>Jl. Raya Blega No. 01, Bangkalan, Jawa Timur</span>
          </div>
        </div>
      )}
    </header>
  );
};
