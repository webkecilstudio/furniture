import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaYoutube, 
  FaShieldAlt, 
  FaTruck, 
  FaTools,
  FaExternalLinkAlt
} from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-4 border-[#0A0A0A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#262626]">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 bg-[#FAFAFA] text-[#0A0A0A] flex items-center justify-center font-display text-xl font-black border-2 border-[#FAFAFA]">
                PK
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-tight text-[#FAFAFA] uppercase">
                  PorosKayu
                </span>
                <span className="ml-2 text-xs font-mono px-1.5 py-0.5 bg-[#EF4444] text-[#FAFAFA]">
                  FURNITURE
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-md">
              Tempat pengerjaan mebel dan rancang bangun interior kayu jati solid presisi tinggi. Menggabungkan ketelitian kriya tradisional Nusantara dengan garis estetika modern kontemporer yang tahan melintasi generasi.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#D4D4D4]">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#EF4444]" /> Garansi Konstruksi 5 Thn
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="text-[#EF4444]" /> Pengiriman Peti Kayu
              </div>
              <div className="flex items-center gap-2">
                <FaTools className="text-[#EF4444]" /> Instalasi di Lokasi
              </div>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FAFAFA] border-b border-[#262626] pb-2">
              Koleksi & Produk
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              <li><Link to="/produk" className="hover:text-[#FAFAFA] transition-colors">Katalog Lengkap</Link></li>
              <li><Link to="/produk?kategori=meja" className="hover:text-[#FAFAFA] transition-colors">Meja & Dining Table</Link></li>
              <li><Link to="/produk?kategori=kursi" className="hover:text-[#FAFAFA] transition-colors">Kursi & Armchair</Link></li>
              <li><Link to="/produk?kategori=sofa" className="hover:text-[#FAFAFA] transition-colors">Sofa Modular Velvet</Link></li>
              <li><Link to="/produk?kategori=kitchen-set" className="hover:text-[#FAFAFA] transition-colors">Kitchen Set Kustom</Link></li>
              <li><Link to="/koleksi" className="hover:text-[#FAFAFA] transition-colors">Koleksi Desain Konsep</Link></li>
            </ul>
          </div>

          {/* Layanan & Fitur */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FAFAFA] border-b border-[#262626] pb-2">
              Layanan Spesial
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A3A3]">
              <li><Link to="/custom" className="hover:text-[#FAFAFA] transition-colors">Custom Order Bespoke</Link></li>
              <li><Link to="/material" className="hover:text-[#FAFAFA] transition-colors">Panduan Material & Kayu</Link></li>
              <li><Link to="/proyek" className="hover:text-[#FAFAFA] transition-colors">Portofolio Villa & Cafe</Link></li>
              <li><Link to="/tentang" className="hover:text-[#FAFAFA] transition-colors">Proses Pengeringan Oven</Link></li>
              <li><Link to="/promo" className="hover:text-[#FAFAFA] transition-colors">Paket Bundling & Promo</Link></li>
              <li><a href="/#faq" className="hover:text-[#FAFAFA] transition-colors">Pusat Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Showroom & Workshop */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#FAFAFA] border-b border-[#262626] pb-2">
              Showroom & Kontak
            </h4>
            <div className="space-y-2 text-xs text-[#A3A3A3]">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#EF4444] mt-0.5 shrink-0" />
                <span>Jl. Raya Blega No. 01, Blega, Bangkalan, Jawa Timur</span>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-[#16A34A] shrink-0" />
                <a href="https://wa.me/6282313153539" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAFAFA]">+62 823-1315-3539</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#A3A3A3] shrink-0" />
                <span>info@poroskayu.co.id</span>
              </p>
              <p className="text-[11px] text-[#737373] pt-1">
                Senin - Sabtu: 08:00 - 17:00 WIB<br />Minggu: Dengan Janji Temu
              </p>
            </div>
          </div>

        </div>

        {/* Created Brand Signature Strip */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#737373] font-mono">
          <div>
            © {new Date().getFullYear()} <strong>PorosKayu Furniture</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>

          {/* Mandatory Webkecil Studio Creator Attribution */}
          <div className="flex items-center gap-3 bg-[#171717] px-4 py-2 border border-[#333333]">
            <img src="/webkecilstudio.png" alt="Webkecil Studio" className="w-5 h-5 object-contain" />
            <div className="text-[11px]">
              <span className="text-[#A3A3A3]">Created by </span>
              <strong className="text-[#FAFAFA] tracking-wide">Webkecil Studio</strong>
              <span className="text-[#737373] mx-1.5">•</span>
              <a
                href="https://webkecilstudio.github.io/catalogue/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EF4444] hover:underline inline-flex items-center gap-1"
              >
                <span>Lihat Katalog Studio</span>
                <FaExternalLinkAlt className="text-[9px]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
