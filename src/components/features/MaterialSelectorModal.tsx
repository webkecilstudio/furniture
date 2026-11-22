import React, { useState } from 'react';
import { MATERIALS } from '../../data/materials';
import { FaTimes, FaPalette, FaCheck, FaInfoCircle } from 'react-icons/fa';

interface MaterialSelectorModalProps {
  onClose: () => void;
}

export const MaterialSelectorModal: React.FC<MaterialSelectorModalProps> = ({ onClose }) => {
  const [selectedMat, setSelectedMat] = useState(MATERIALS[0]);
  const [activeFinish, setActiveFinish] = useState('Natural Doff Matte');

  const finishes = [
    { name: 'Natural Doff Matte', desc: 'Serat kayu alami tanpa kilap, sentuhan satin sejuk.' },
    { name: 'Walnut Semi-Gloss', desc: 'Warna coklat hangat berkarakter mewah dengan kilap elegan 30%.' },
    { name: 'Bleached Japandi Light', desc: 'Warna cerah bersih bernuansa Skandinavia modern.' },
    { name: 'Cat Duco Multi-Layer', desc: 'Permukaan mulus sempurna tanpa pori dengan pilihan warna custom.' },
    { name: 'Rustic Wire-Brushed', desc: 'Tekstur serat kayu timbul menonjolkan urat kayu tua.' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              MATERIAL & COLOR SELECTOR
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Katalog Swatch Material & Opsi Finishing
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
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Swatches list */}
          <div className="lg:col-span-5 space-y-4">
            <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A]">
              1. Pilih Sampel Material Dasar:
            </label>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMat(mat)}
                  className={`w-full p-3 border-2 text-left flex items-center gap-3 transition-colors ${
                    selectedMat.id === mat.id
                      ? 'border-[#0A0A0A] bg-[#F5F5F5]'
                      : 'border-[#E5E5E5] hover:border-[#0A0A0A]'
                  }`}
                >
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-12 h-12 object-cover border border-[#0A0A0A] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs uppercase truncate text-[#0A0A0A]">
                      {mat.name}
                    </h5>
                    <p className="text-[10px] font-mono text-[#737373]">
                      {mat.category} • Grade {mat.grade}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Finish Options */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                2. Pilih Sentuhan Akhir (Finishing):
              </label>
              <div className="space-y-1.5">
                {finishes.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setActiveFinish(f.name)}
                    className={`w-full p-2.5 text-left text-xs font-mono border transition-colors ${
                      activeFinish === f.name
                        ? 'border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] font-bold'
                        : 'border-[#D4D4D4] hover:border-[#0A0A0A]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{f.name}</span>
                      {activeFinish === f.name && <FaCheck className="text-[#EF4444]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Material Preview Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] p-2">
                <div className="aspect-[16/10] overflow-hidden bg-[#262626] relative">
                  <img
                    src={selectedMat.image}
                    alt={selectedMat.name}
                    className="w-full h-full object-cover contrast-125"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0A0A0A]/90 text-[#FAFAFA] p-2 text-xs font-mono border border-[#FAFAFA]">
                    <div>Finishing: <strong className="text-[#EF4444]">{activeFinish}</strong></div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#EF4444]">
                  // SPESIFIKASI BAHAN BAKU
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-[#0A0A0A] mt-1">
                  {selectedMat.name}
                </h3>
                <p className="text-xs text-[#525252] mt-2 leading-relaxed">
                  {selectedMat.description}
                </p>
              </div>

              <div className="border-2 border-[#E5E5E5] p-4 bg-[#F5F5F5] space-y-2 text-xs font-mono">
                <div><strong>Asal Daerah:</strong> {selectedMat.origin}</div>
                <div><strong>Tingkat Kualitas:</strong> {selectedMat.grade}</div>
                <div>
                  <strong>Keunggulan:</strong>
                  <ul className="mt-1 space-y-1 text-[#525252]">
                    {selectedMat.advantages.map((adv, idx) => (
                      <li key={idx}>• {adv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#0A0A0A]">
              <a
                href={`https://wa.me/6282313153539?text=Halo%20PorosKayu%2C%20saya%20ingin%20memesan%20Sample%20Box%20material%20${encodeURIComponent(selectedMat.name)}%20dengan%20finishing%20${encodeURIComponent(activeFinish)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full editorial-button-primary text-xs py-3 flex items-center justify-center gap-2"
              >
                <span>Request Sample Box Material Ini ke Rumah →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
