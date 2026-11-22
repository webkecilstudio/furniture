import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { CustomFurnitureForm } from '../../types';
import { FaTimes, FaWhatsapp, FaDraftingCompass, FaRulerCombined, FaCheck } from 'react-icons/fa';

interface CustomFurnitureModalProps {
  onClose: () => void;
}

export const CustomFurnitureModal: React.FC<CustomFurnitureModalProps> = ({ onClose }) => {
  const { sendCustomRequestWhatsApp } = useShop();

  const [form, setForm] = useState<CustomFurnitureForm>({
    name: '',
    whatsapp: '',
    email: '',
    furnitureType: 'Meja Makan Solid Teak',
    category: 'Ruang Makan',
    material: 'Kayu Jati Solid Grade A',
    finishing: 'Natural Doff Matte',
    length: 200,
    width: 90,
    height: 76,
    budgetRange: 'Rp 10.000.000 - Rp 20.000.000',
    addressCity: 'Bangkalan',
    notes: '',
    needInstallation: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
    }
    sendCustomRequestWhatsApp(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              FORM CUSTOM FURNITURE
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Permintaan Desain & Ukuran Kustom
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          <div className="border-l-4 border-[#EF4444] pl-4 py-1">
            <p className="text-xs text-[#525252] leading-relaxed">
              Isi spesifikasi kebutuhan mebel Anda. Tim desainer PorosKayu akan merespons dengan sketsa gambar kerja teknis dan estimasi biaya ke nomor WhatsApp Anda.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Bpk. Budi Santoso"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="editorial-input w-full"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Nomor WhatsApp Aktif *
              </label>
              <input
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="editorial-input w-full"
              />
            </div>
          </div>

          {/* Type & Material */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Jenis Furniture
              </label>
              <input
                type="text"
                value={form.furnitureType}
                onChange={(e) => setForm({ ...form, furnitureType: e.target.value })}
                placeholder="Contoh: Meja Rapat, Credenza, Kitchen Island"
                className="editorial-input w-full"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Pilihan Material Pokok
              </label>
              <select
                value={form.material}
                onChange={(e) => setForm({ ...form, material: e.target.value })}
                className="editorial-input w-full text-xs font-mono"
              >
                <option value="Kayu Jati Solid Grade A">Kayu Jati Solid Grade A (Perhutani)</option>
                <option value="Kayu Mahoni Kiln-Dry">Kayu Mahoni Kiln-Dry</option>
                <option value="Kayu Sungkai Japandi">Kayu Sungkai Alam (Warna Cerah)</option>
                <option value="Kombinasi Jati & Marmer Carrara">Kombinasi Jati & Marmer Carrara</option>
                <option value="Kombinasi Jati & Besi Industrial">Kombinasi Jati & Besi Hollow</option>
              </select>
            </div>
          </div>

          {/* Dimensions (P x L x T) */}
          <div className="border-2 border-[#E5E5E5] p-4 bg-[#F5F5F5] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0A0A0A]">
              <FaRulerCombined className="text-[#EF4444]" />
              <span>Rencana Dimensi Furniture (dalam Sentimeter / cm):</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Panjang (P)</label>
                <input
                  type="number"
                  value={form.length}
                  onChange={(e) => setForm({ ...form, length: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Lebar (L)</label>
                <input
                  type="number"
                  value={form.width}
                  onChange={(e) => setForm({ ...form, width: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#737373] mb-1">Tinggi (T)</label>
                <input
                  type="number"
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: Number(e.target.value) })}
                  className="editorial-input w-full text-center font-bold"
                />
              </div>
            </div>
          </div>

          {/* Finishing & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Finishing & Warna
              </label>
              <select
                value={form.finishing}
                onChange={(e) => setForm({ ...form, finishing: e.target.value })}
                className="editorial-input w-full text-xs font-mono"
              >
                <option value="Natural Doff Matte">Natural Jati Doff (Matte)</option>
                <option value="Walnut Brown Satin">Walnut Brown Satin</option>
                <option value="Bleached Japandi Light">Bleached Japandi Light</option>
                <option value="Cat Duco Halus (Pilihan Warna)">Cat Duco Halus (Pilihan Warna)</option>
                <option value="Rustic Wire-Brushed">Rustic Wire-Brushed</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
                Kota Pengiriman
              </label>
              <input
                type="text"
                value={form.addressCity}
                onChange={(e) => setForm({ ...form, addressCity: e.target.value })}
                placeholder="Contoh: Bangkalan, Sampang, Surabaya, Semarang, Bandung"
                className="editorial-input w-full"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-1.5">
              Catatan Khusus / Deskripsi Tambahan
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Jelaskan kebutuhan khusus seperti slot laci rahasia, lubang kabel, jenis engsel soft-close, atau referensi gaya..."
              className="editorial-input w-full h-auto py-2"
            />
          </div>

          {/* Need installation checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="needInst"
              checked={form.needInstallation}
              onChange={(e) => setForm({ ...form, needInstallation: e.target.checked })}
              className="w-4 h-4 accent-[#0A0A0A]"
            />
            <label htmlFor="needInst" className="text-xs text-[#0A0A0A] cursor-pointer">
              Saya membutuhkan tim teknisi untuk perakitan/instalasi di lokasi pengiriman
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-4 border-t-2 border-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-[#737373]">
              Pesan akan otomatis diteruskan ke WhatsApp konsultan PorosKayu.
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#16A34A] text-[#FAFAFA] font-bold text-xs uppercase tracking-wider hover:bg-[#15803D] border-2 border-[#0A0A0A] flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-base" />
              <span>Kirim Permintaan Custom via WA →</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
