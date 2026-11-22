import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              TESTIMONI & ULASAN KLIEN
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              PENGALAMAN NYATA PEMILIK PROYEK
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#0A0A0A]">
            <span className="flex text-[#CA8A04] text-sm">★★★★★</span>
            <span className="font-bold">4.9/5.0 Rata-Rata Kepuasan Klien</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="editorial-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Rating & Verified */}
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                  <div className="flex text-[#CA8A04] text-xs">
                    {[...Array(testi.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#16A34A] uppercase font-bold">
                    <FaCheckCircle /> Verified
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs text-[#0A0A0A] leading-relaxed italic">
                  "{testi.quote}"
                </p>

              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t-2 border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors flex items-center gap-3">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-12 h-12 object-cover border-2 border-[#0A0A0A] grayscale contrast-125 group-hover:grayscale-0 transition-all shrink-0"
                />
                <div>
                  <h4 className="font-bold text-xs uppercase text-[#0A0A0A]">
                    {testi.name}
                  </h4>
                  <p className="text-[10px] text-[#525252]">
                    {testi.role}
                  </p>
                  <p className="text-[9px] font-mono text-[#737373]">
                    {testi.project} • {testi.city}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
