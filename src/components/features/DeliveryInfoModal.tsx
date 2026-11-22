import React, { useState } from 'react';
import { FaTimes, FaTruck, FaShieldAlt, FaTools, FaBoxOpen, FaMapMarkerAlt } from 'react-icons/fa';

interface DeliveryInfoModalProps {
  onClose: () => void;
}

export const DeliveryInfoModal: React.FC<DeliveryInfoModalProps> = ({ onClose }) => {
  const [selectedRegion, setSelectedRegion] = useState('madura');

  const rates = [
    {
      id: 'madura',
      region: 'Pulau Madura (Bangkalan, Sampang, Pamekasan, Sumenep)',
      eta: 'Sameday / 1 Hari Kerja',
      packing: 'Free Bubble Wrap + Pelindung Sudut + Selimut Mebel',
      installation: 'Gratis Perakitan & Pemasangan On-site',
      price: 'GRATIS ONGKIR (Semua Pembelian)',
      isHighlight: true
    },
    {
      id: 'jatim',
      region: 'Jawa Timur (Surabaya, Sidoarjo, Gresik, Malang, Mojokerto, Pasuruan)',
      eta: '1 - 2 Hari Kerja (Via Suramadu)',
      packing: 'Free Double Corrugated Box + Bubble Wrap',
      installation: 'Gratis Perakitan di Tempat oleh Tim PorosKayu',
      price: 'Gratis Ongkir (Order > Rp 5 Jt) / Rp 150.000'
    },
    {
      id: 'jateng',
      region: 'Jawa Tengah & DI Yogyakarta (Solo, Semarang, Kudus, Yogya)',
      eta: '2 - 3 Hari Kerja',
      packing: 'Peti Kayu Solid Palletized Kuat',
      installation: 'Tersedia dengan Tim Mitra Terverifikasi',
      price: 'Rp 250.000 - Rp 350.000 / unit'
    },
    {
      id: 'jabar',
      region: 'Jawa Barat & Jabodetabek (Bandung, Bogor, Bekasi, Jakarta)',
      eta: '2 - 4 Hari Kerja',
      packing: 'Full Wooden Crate Heavy-Duty Ekspedisi',
      installation: 'Panduan Rakit Mudah + Tim Mitra Berpengalaman',
      price: 'Rp 300.000 - Rp 450.000 / unit'
    },
    {
      id: 'luar-jawa',
      region: 'Bali, Sumatera, Kalimantan & Seluruh Indonesia',
      eta: '4 - 8 Hari Kargo Darat / Laut',
      packing: 'Peti Kayu Solid Ekspor Anti Goncangan',
      installation: 'Panduan Video Step-by-step & Buku Instruksi',
      price: 'Sesuai Volume Kubikasi Kargo Rekanan'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              PENGIRIMAN & INSTALASI
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Rute Distribusi Madura & Seluruh Pulau Jawa
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Main Workshop Badge */}
          <div className="border-2 border-[#0A0A0A] p-4 bg-[#F5F5F5] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-2xl text-[#EF4444] shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#737373]">Basis Pengiriman Langsung:</span>
                <p className="text-xs font-bold uppercase text-[#0A0A0A]">
                  Jl. Raya Blega No. 01, Blega, Bangkalan, Jawa Timur
                </p>
                <p className="text-[11px] text-[#525252] mt-0.5">
                  Fokus jangkauan utama: <strong>Pulau Madura</strong>, <strong>Jawa Timur</strong>, <strong>Jawa Tengah</strong>, dan <strong>Jawa Barat</strong>.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block bg-[#16A34A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2.5 py-1 shrink-0">
              Armada Sendiri Ready
            </span>
          </div>

          {/* 3 Pillars of Delivery Safety */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAFAFA]">
              <FaBoxOpen className="text-xl text-[#EF4444] mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#0A0A0A]">Peti Kayu Solid</h4>
              <p className="text-[11px] text-[#525252] mt-1">
                Setiap mebel dibungkus busa tebal & peti kayu balok kuat terhadap benturan ekspedisi.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAFAFA]">
              <FaTools className="text-xl text-[#EF4444] mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#0A0A0A]">Tim Instalasi Madura & Jatim</h4>
              <p className="text-[11px] text-[#525252] mt-1">
                Teknisi workshop kami sendiri yang mengantarkan dan merakit mebel langsung di rumah Anda.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-4 bg-[#FAFAFA]">
              <FaShieldAlt className="text-xl text-[#EF4444] mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#0A0A0A]">Garansi Fisik 100%</h4>
              <p className="text-[11px] text-[#525252] mt-1">
                Jika terjadi cacat fisik selama perjalanan, PorosKayu bertanggung jawab penuh mengganti unit baru.
              </p>
            </div>
          </div>

          {/* Rates Table */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-2">
              Tabel Tarif & Estimasi Waktu Pengiriman
            </h4>

            <div className="border-2 border-[#0A0A0A] overflow-hidden">
              <div className="divide-y-2 divide-[#0A0A0A]">
                {rates.map((r) => (
                  <div
                    key={r.id}
                    className={`p-4 transition-colors ${
                      r.isHighlight ? 'bg-[#FEF2F2] border-l-4 border-l-[#EF4444]' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <strong className="text-xs uppercase font-bold text-[#0A0A0A]">{r.region}</strong>
                        {r.isHighlight && (
                          <span className="text-[9px] font-mono font-bold bg-[#EF4444] text-[#FAFAFA] px-1.5 py-0.5 uppercase">
                            Home Base
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#EF4444] sm:text-right">{r.price}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-[#E5E5E5] text-[11px] font-mono text-[#525252]">
                      <div>
                        <span className="text-[#737373]">Estimasi: </span>
                        <strong>{r.eta}</strong>
                      </div>
                      <div>
                        <span className="text-[#737373]">Packing: </span>
                        {r.packing}
                      </div>
                      <div>
                        <span className="text-[#737373]">Instalasi: </span>
                        {r.installation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Confirmation */}
          <div className="p-4 border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono">
              <strong>Konsultasikan jadwal kirim & armada khusus untuk pesanan kustom Anda.</strong>
            </div>
            <a
              href="https://wa.me/6282313153539?text=Halo%20PorosKayu,%20saya%20ingin%20cek%20ongkos%20kirim%20mebel%20ke%20alamat%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-button-primary text-xs py-2 px-4 shrink-0"
            >
              Cek Rute via WA
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
