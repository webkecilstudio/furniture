import React from 'react';
import { SPECIAL_OFFERS } from '../../data/offers';
import { useShop } from '../../context/ShopContext';
import { FaTag, FaClock, FaCheck, FaWhatsapp } from 'react-icons/fa';

export const SpecialOffersSection: React.FC = () => {
  const { showToast } = useShop();

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast(`Kode Promo "${code}" disalin ke clipboard!`);
  };

  return (
    <section id="penawaran-khusus" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              PENAWARAN SPESIAL & PAKET BUNDLING
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              PAKET HEMAT FURNISHING RUANGAN
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-sm">
            Dapatkan penawaran terbatas paket furniture lengkap untuk ruang tamu dan ruang makan dengan harga bundling hemat hingga jutaan rupiah.
          </p>
        </div>

        {/* 2 Big Editorial Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="editorial-card-elevated flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="aspect-[16/9] overflow-hidden bg-[#E5E5E5] relative border-b-2 border-[#E5E5E5]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold uppercase px-3 py-1">
                    {offer.discount}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono px-2.5 py-1">
                    Valid s/d {offer.validUntil}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="text-[11px] font-mono font-bold uppercase text-[#737373]">
                    {offer.badge}
                  </div>

                  <h3 className="font-display text-2xl font-black uppercase text-[#0A0A0A]">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-[#525252] leading-relaxed">
                    {offer.subtitle}
                  </p>

                  {/* Items Included */}
                  <div className="pt-2 border-t border-[#E5E5E5]">
                    <h4 className="text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                      Rincian Paket Bundling:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#0A0A0A]">
                      {offer.itemsIncluded.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#16A34A] font-bold">✓</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Promo Code Box */}
                  <div className="border-2 border-dashed border-[#0A0A0A] p-3 bg-[#F5F5F5] flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-mono uppercase text-[#737373]">Gunakan Kode Promo:</div>
                      <div className="font-mono font-bold text-sm text-[#0A0A0A]">{offer.promoCode}</div>
                    </div>
                    <button
                      onClick={() => copyPromoCode(offer.promoCode)}
                      className="px-3 py-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-bold uppercase hover:bg-[#EF4444] transition-colors"
                    >
                      Salin Kode
                    </button>
                  </div>

                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 md:p-8 pt-0 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-[#A3A3A3] line-through">
                    Harga Normal: Rp {offer.normalPrice.toLocaleString('id-ID')}
                  </div>
                  <div className="font-display text-2xl font-black text-[#0A0A0A]">
                    Rp {offer.promoPrice.toLocaleString('id-ID')}
                  </div>
                </div>

                <a
                  href={`https://wa.me/6282313153539?text=Halo%20PorosKayu%2C%20saya%20ingin%20mengklaim%20${encodeURIComponent(offer.title)}%20dengan%20kode%20${offer.promoCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto editorial-button-primary text-xs flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>Klaim Promo Paket Ini</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
