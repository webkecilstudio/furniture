import React, { useState, useRef } from 'react';
import { Product } from '../../types';
import { FaTimes, FaCamera, FaExpandArrowsAlt, FaUndo, FaCheck, FaMobileAlt } from 'react-icons/fa';

interface ArPreviewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ArPreviewModal: React.FC<ArPreviewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [scale, setScale] = useState(1);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      alert('Kamera tidak dapat diakses atau diblokir peramban. Menggunakan simulasi latar belakang ruangan.');
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      setIsCameraActive(false);
    }
  };

  const resetPosition = () => {
    setScale(1);
    setPosX(0);
    setPosY(0);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-3xl h-[85vh] flex flex-col shadow-none">
        
        {/* Top Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              AR FURNITURE PREVIEW
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Simulasi AR Ruangan: {product.name}
            </h3>
          </div>

          <button
            onClick={() => {
              stopCamera();
              onClose();
            }}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Viewport Simulation */}
        <div className="flex-1 relative overflow-hidden bg-[#262626] flex items-center justify-center">
          
          {/* Live Camera Feed or Fallback Room Background */}
          {isCameraActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0">
              <img
                src="/images/hero-bg.jpg"
                alt="Room Simulation"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/30"></div>
            </div>
          )}

          {/* AR Simulated Grid Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-40 border-t-2 border-dashed border-[#EF4444]/60 pointer-events-none flex items-center justify-center">
            <span className="text-[#FAFAFA] font-mono text-[10px] bg-[#0A0A0A]/80 px-3 py-1 border border-[#EF4444]">
              BIDANG PERMUKAAN LANTAI TERDETEKSI (AR PLANE)
            </span>
          </div>

          {/* Scaled Furniture Piece */}
          <div
            style={{
              transform: `translate(${posX}px, ${posY}px) scale(${scale})`,
              transition: 'transform 0.05s ease-out'
            }}
            className="relative z-10 cursor-move filter drop-shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-64 sm:w-80 object-contain border-2 border-transparent"
              draggable={false}
            />
            {/* Dimension Pill */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono px-2 py-0.5 whitespace-nowrap border border-[#FAFAFA]">
              {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm
            </div>
          </div>

          {/* Overlay Controls */}
          <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 text-[#FAFAFA] p-3 text-xs font-mono border border-[#FAFAFA]/30 space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={isCameraActive ? stopCamera : startCamera}
                className="px-3 py-1.5 bg-[#EF4444] text-[#FAFAFA] text-[10px] font-bold uppercase hover:bg-[#0A0A0A] border border-[#FAFAFA] flex items-center gap-1.5"
              >
                <FaCamera />
                <span>{isCameraActive ? 'Matikan Kamera' : 'Buka Kamera HP/Webcam'}</span>
              </button>
              <button
                onClick={resetPosition}
                className="p-1.5 bg-[#FAFAFA] text-[#0A0A0A] border border-[#0A0A0A]"
                title="Reset Posisi"
              >
                <FaUndo />
              </button>
            </div>
          </div>

          {/* Scale Sliders Bar */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#FAFAFA] border-2 border-[#0A0A0A] p-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="font-bold uppercase">Skala Objek:</span>
              <input
                type="range"
                min="0.5"
                max="1.8"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-32 accent-[#0A0A0A]"
              />
              <span>{Math.round(scale * 100)}%</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPosY((y) => y - 15)}
                className="px-2 py-1 border border-[#0A0A0A] font-bold"
              >
                ↑
              </button>
              <button
                onClick={() => setPosY((y) => y + 15)}
                className="px-2 py-1 border border-[#0A0A0A] font-bold"
              >
                ↓
              </button>
              <button
                onClick={() => setPosX((x) => x - 15)}
                className="px-2 py-1 border border-[#0A0A0A] font-bold"
              >
                ←
              </button>
              <button
                onClick={() => setPosX((x) => x + 15)}
                className="px-2 py-1 border border-[#0A0A0A] font-bold"
              >
                →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
