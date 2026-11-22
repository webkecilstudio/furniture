import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { FaChevronDown, FaSearch, FaQuestionCircle } from 'react-icons/fa';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Custom & Desain', 'Material & Kualitas', 'Harga & Pembayaran', 'Pengiriman & Instalasi', 'Garansi & Perawatan'];

  const toggleAccordion = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchCat = activeCategory === 'Semua' || faq.category === activeCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="faq" className="border-b-4 border-[#0A0A0A] bg-[#FAFAFA] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-4 mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#EF4444] mb-2">
              PANDUAN & PERTANYAAN UMUM
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
              PERTANYAAN SERING DIAJUKAN (FAQ)
            </h2>
          </div>
          <p className="text-xs font-mono text-[#525252] max-w-xs">
            Segala informasi seputar pemesanan custom, kualitas kayu, termin pembayaran, dan pengiriman.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative flex items-center">
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#737373]">
              <FaSearch className="text-sm" />
            </div>
            <input
              type="text"
              placeholder="Cari topik pertanyaan (contoh: garansi, custom, finishing, pengiriman)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="editorial-input w-full !pl-10 text-xs sm:text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors border-2 ${
                  activeCategory === cat
                    ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                    : 'bg-[#FAFAFA] text-[#525252] border-[#D4D4D4] hover:border-[#0A0A0A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-2 border-[#0A0A0A] divide-y-2 divide-[#0A0A0A] bg-[#FAFAFA]">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#737373]">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="transition-colors">
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F5F5F5] transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#EF4444]">
                        [{faq.category}]
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#0A0A0A]">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-2 border border-[#0A0A0A] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#0A0A0A] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A]'
                      }`}
                    >
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 bg-[#FAFAFA] border-t border-[#E5E5E5] text-xs sm:text-sm text-[#525252] leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 border-2 border-[#E5E5E5] p-5 bg-[#F5F5F5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaQuestionCircle className="text-2xl text-[#EF4444]" />
            <div>
              <h4 className="font-bold text-xs uppercase text-[#0A0A0A]">Punya Pertanyaan Spesifik Lainnya?</h4>
              <p className="text-xs text-[#525252]">Tim konsultan mebel PorosKayu siap berdiskusi secara mendalam.</p>
            </div>
          </div>
          <a
            href="https://wa.me/6282313153539?text=Halo%20PorosKayu%2C%20saya%20punya%20pertanyaan%20spesifik%20mengenai%20pembuatan%20mebel"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-button-primary text-xs shrink-0"
          >
            Tanya via WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
