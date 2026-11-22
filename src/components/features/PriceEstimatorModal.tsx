import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PriceEstimateInput } from '../../types';
import { FaTimes, FaCalculator, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';

interface PriceEstimatorModalProps {
  onClose: () => void;
}

export const PriceEstimatorModal: React.FC<PriceEstimatorModalProps> = ({ onClose }) => {
  const { sendPriceEstimateWhatsApp } = useShop();

  const [input, setInput] = useState<PriceEstimateInput>({
    furnitureType: 'Meja Makan Solid Wood',
    woodType: 'Jati Perhutani Grade A',
    finishType: 'Polyurethane Natural Doff',
    lengthCm: 200,
    widthCm: 90,
    heightCm: 76,
    hasCushion: false,
    hasCarving: false,
    deliveryCity: 'Bangkalan'
  });

  // Dynamic formula calculation
  const baseVolumeCubicM = (input.lengthCm * input.widthCm * input.heightCm) / 1000000;
  
  let woodMultiplier = 14000000; // Base teak per cubic meter equivalent
  if (input.woodType === 'Mahoni Kiln-Dry') woodMultiplier = 9500000;
  if (input.woodType === 'Sungkai Alam') woodMultiplier = 11500000;
  if (input.woodType === 'Oak Import') woodMultiplier = 16000000;

  let finishAdd = 600000;
  if (input.finishType === 'Duco Halus 5-Layer') finishAdd = 1200000;
  if (input.finishType === 'Rustic Wire Brushed') finishAdd = 800000;

  const rawEstimate = Math.round(
    (baseVolumeCubicM * woodMultiplier) + 
    finishAdd + 
    (input.hasCushion ? 1400000 : 0) + 
    (input.hasCarving ? 1200000 : 0) +
    2500000 // Labor & precision hardware base
  );

  // Round to nearest 50,000
  const finalPrice = Math.round(rawEstimate / 50000) * 50000;

  const handleSendWA = () => {
    sendPriceEstimateWhatsApp(input, finalPrice);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              KALKULATOR ESTIMASI HARGA
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Hitung Biaya Custom Mebel Presisi
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
          
          <div className="border-l-4 border-[#EF4444] pl-4 py-1">
            <p className="text-xs text-[#525252]">
              Kalkulator ini menghitung estimasi biaya fabrikasi berdasarkan volume kubikasi kayu, tingkat kesulitan finishing, serta fitur tambahan.
            </p>
          </div>

          {/* Form Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Jenis Furniture:
              </label>
              <select
                value={input.furnitureType}
                onChange={(e) => setInput({ ...input, furnitureType: e.target.value })}
                className="editorial-input w-full text-xs font-mono"
              >
                <option value="Meja Makan Solid Wood">Meja Makan Solid Wood</option>
                <option value="Meja Kerja / Executive Desk">Meja Kerja / Executive Desk</option>
                <option value="Coffee Table Marmer & Kayu">Coffee Table Marmer & Kayu</option>
                <option value="Credenza / Lemari Buffet">Credenza / Lemari Buffet</option>
                <option value="Dipan Tempat Tidur King">Dipan Tempat Tidur King</option>
                <option value="Kitchen Island Kustom">Kitchen Island Kustom</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Pilihan Jenis Kayu:
              </label>
              <select
                value={input.woodType}
                onChange={(e) => setInput({ ...input, woodType: e.target.value })}
                className="editorial-input w-full text-xs font-mono"
              >
                <option value="Jati Perhutani Grade A">Jati Perhutani TPK Grade A</option>
                <option value="Mahoni Kiln-Dry">Kayu Mahoni Kiln-Dry</option>
                <option value="Sungkai Alam">Kayu Sungkai Alam (Light)</option>
                <option value="Oak Import">American White Oak</option>
              </select>
            </div>
          </div>

          {/* Dimensions */}
          <div className="border-2 border-[#E5E5E5] p-4 bg-[#F5F5F5] space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[#0A0A0A]">
              Ukuran Furniture (Panjang × Lebar × Tinggi dalam cm):
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Panjang (cm)</label>
                <input
                  type="number"
                  min="40"
                  max="400"
                  value={input.lengthCm}
                  onChange={(e) => setInput({ ...input, lengthCm: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Lebar (cm)</label>
                <input
                  type="number"
                  min="30"
                  max="200"
                  value={input.widthCm}
                  onChange={(e) => setInput({ ...input, widthCm: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Tinggi (cm)</label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={input.heightCm}
                  onChange={(e) => setInput({ ...input, heightCm: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
            </div>
          </div>

          {/* Finishing & Addons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Pilihan Finishing:
              </label>
              <select
                value={input.finishType}
                onChange={(e) => setInput({ ...input, finishType: e.target.value })}
                className="editorial-input w-full text-xs font-mono"
              >
                <option value="Polyurethane Natural Doff">Polyurethane Natural Doff (Matte)</option>
                <option value="Walnut Brown Satin">Walnut Brown Satin</option>
                <option value="Duco Halus 5-Layer">Cat Duco Halus Multi-Layer</option>
                <option value="Rustic Wire Brushed">Rustic Wire Brushed</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Kota Pengiriman:
              </label>
              <input
                type="text"
                value={input.deliveryCity}
                onChange={(e) => setInput({ ...input, deliveryCity: e.target.value })}
                className="editorial-input w-full"
                placeholder="Contoh: Bangkalan, Sampang, Surabaya, Bandung"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="cushion"
                checked={input.hasCushion}
                onChange={(e) => setInput({ ...input, hasCushion: e.target.checked })}
                className="w-4 h-4 accent-[#0A0A0A]"
              />
              <label htmlFor="cushion" className="text-xs text-[#0A0A0A] cursor-pointer">
                Sertakan Bantal Duduk Upholstery (Kain Linen / Velvet Belgia)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="carving"
                checked={input.hasCarving}
                onChange={(e) => setInput({ ...input, hasCarving: e.target.checked })}
                className="w-4 h-4 accent-[#0A0A0A]"
              />
              <label htmlFor="carving" className="text-xs text-[#0A0A0A] cursor-pointer">
                Sertakan Aksen Pahatan Tangan / Profil Moulding Kriya Jepara
              </label>
            </div>
          </div>

          {/* Estimated Result Box */}
          <div className="border-4 border-[#0A0A0A] p-6 bg-[#0A0A0A] text-[#FAFAFA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#EF4444] font-bold">
                ESTIMASI BIAYA PRODUKSI
              </span>
              <div className="font-display text-3xl font-black text-[#FAFAFA] mt-1">
                Rp {finalPrice.toLocaleString('id-ID')}
              </div>
              <div className="text-[11px] font-mono text-[#A3A3A3] mt-0.5">
                *Termasuk garansi konstruksi 5 tahun & packing peti kayu
              </div>
            </div>

            <button
              onClick={handleSendWA}
              className="px-6 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-[#FAFAFA] text-xs font-bold uppercase tracking-wider border border-[#FAFAFA] flex items-center gap-2 transition-colors shrink-0"
            >
              <FaWhatsapp className="text-base" />
              <span>Konsultasikan Estimasi Ini via WA →</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
