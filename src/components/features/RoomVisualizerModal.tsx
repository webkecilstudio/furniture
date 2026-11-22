import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { FaTimes, FaUndo, FaPlus, FaCheck, FaShoppingBag, FaPalette } from 'react-icons/fa';

interface RoomVisualizerModalProps {
  onClose: () => void;
}

export const RoomVisualizerModal: React.FC<RoomVisualizerModalProps> = ({ onClose }) => {
  const { addToCart } = useShop();

  const rooms = [
    { id: 'living', name: 'Living Room (Ruang Tamu)', bg: '/images/col-modern.jpg' },
    { id: 'dining', name: 'Dining Space (Ruang Makan)', bg: '/images/col-minimalis.jpg' },
    { id: 'bedroom', name: 'Master Bedroom (Kamar Tidur)', bg: '/images/col-scandinavian.jpg' },
    { id: 'office', name: 'Executive Office (Ruang Kerja)', bg: '/images/col-industrial.jpg' }
  ];

  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const [selectedFurniture, setSelectedFurniture] = useState<Product>(PRODUCTS[0]);
  const [wallColor, setWallColor] = useState('transparent');

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-5xl h-[90vh] flex flex-col shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              ROOM VISUALIZER
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Simulasi Penempatan Furniture Pada Konsep Ruangan
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Visualizer Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Main Visualizer Stage */}
          <div className="lg:col-span-8 relative overflow-hidden bg-[#1A1A1A] flex items-center justify-center">
            
            {/* Background Room */}
            <img
              src={activeRoom.bg}
              alt={activeRoom.name}
              className="absolute inset-0 w-full h-full object-cover filter brightness-90"
            />

            {/* Tint Overlay for Wall Tone */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-25"
              style={{ backgroundColor: wallColor }}
            />

            {/* Room Title Tag */}
            <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold uppercase px-3 py-1.5 border border-[#FAFAFA]">
              {activeRoom.name}
            </div>

            {/* Placed Furniture Item */}
            <div className="relative z-10 p-6 flex flex-col items-center animate-in zoom-in-95 duration-300">
              <div className="max-w-[340px] drop-shadow-2xl">
                <img
                  src={selectedFurniture.image}
                  alt={selectedFurniture.name}
                  className="w-full object-contain filter contrast-110 drop-shadow-2xl"
                />
              </div>

              <div className="mt-4 bg-[#0A0A0A] text-[#FAFAFA] p-3 text-center border-2 border-[#FAFAFA] space-y-1">
                <div className="text-[10px] font-mono text-[#EF4444] uppercase font-bold">
                  PRODUK AKTIF DI SIMULASI
                </div>
                <h4 className="font-display text-sm uppercase">{selectedFurniture.name}</h4>
                <div className="text-xs font-mono">
                  Rp {selectedFurniture.price.toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* Wall Paint Selector Pill */}
            <div className="absolute bottom-4 left-4 bg-[#0A0A0A]/90 p-2 border border-[#FAFAFA] flex items-center gap-2 text-xs font-mono text-[#FAFAFA]">
              <FaPalette className="text-xs text-[#EF4444]" />
              <span className="text-[10px] uppercase">Aksen Dinding:</span>
              <button
                onClick={() => setWallColor('transparent')}
                className="w-5 h-5 border border-[#FAFAFA] bg-white text-[9px] font-bold text-black"
                title="Default"
              >
                0
              </button>
              <button
                onClick={() => setWallColor('#B85D43')}
                className="w-5 h-5 border border-[#FAFAFA]"
                style={{ backgroundColor: '#B85D43' }}
                title="Terracotta"
              />
              <button
                onClick={() => setWallColor('#2E4057')}
                className="w-5 h-5 border border-[#FAFAFA]"
                style={{ backgroundColor: '#2E4057' }}
                title="Navy Slate"
              />
              <button
                onClick={() => setWallColor('#2D4739')}
                className="w-5 h-5 border border-[#FAFAFA]"
                style={{ backgroundColor: '#2D4739' }}
                title="Sage Dark"
              />
            </div>

          </div>

          {/* Right Controls Panel */}
          <div className="lg:col-span-4 bg-[#FAFAFA] p-6 border-l-2 border-[#0A0A0A] flex flex-col justify-between overflow-y-auto space-y-6">
            
            <div className="space-y-5">
              
              {/* Select Room Concept */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  1. Pilih Jenis Ruangan:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {rooms.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setActiveRoom(r)}
                      className={`p-2.5 text-[11px] font-mono font-bold uppercase border-2 text-left transition-colors ${
                        activeRoom.id === r.id
                          ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                          : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4] hover:border-[#0A0A0A]'
                      }`}
                    >
                      {r.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Furniture to Place */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0A0A0A] mb-2">
                  2. Pilih Furniture Yang Diuji:
                </label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedFurniture(prod)}
                      className={`w-full p-2 border-2 text-left flex items-center gap-3 transition-colors ${
                        selectedFurniture.id === prod.id
                          ? 'border-[#0A0A0A] bg-[#F5F5F5]'
                          : 'border-[#E5E5E5] hover:border-[#0A0A0A]'
                      }`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-12 h-12 object-cover border border-[#0A0A0A] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs uppercase truncate text-[#0A0A0A]">
                          {prod.name}
                        </h5>
                        <p className="text-[10px] font-mono text-[#737373]">
                          Rp {prod.price.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Bottom */}
            <div className="pt-4 border-t-2 border-[#0A0A0A] space-y-2">
              <button
                onClick={() => {
                  addToCart(selectedFurniture, 1);
                  onClose();
                }}
                className="w-full editorial-button-primary text-xs py-3 flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                <span>Beli Furniture Terpilih</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-mono font-bold uppercase text-[#737373] hover:text-[#0A0A0A]"
              >
                Tutup Simulasi
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
