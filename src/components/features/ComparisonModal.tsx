import React from 'react';
import { useShop } from '../../context/ShopContext';
import { FaTimes, FaExchangeAlt, FaShoppingBag, FaTrash, FaCheck } from 'react-icons/fa';

export const ComparisonModal: React.FC = () => {
  const { 
    compareList, 
    removeFromCompare, 
    addToCart, 
    activeModal, 
    closeModal,
    openModal 
  } = useShop();

  if (activeModal !== 'comparison') return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-none">
        
        {/* Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between border-b-2 border-[#0A0A0A] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase px-2 py-0.5">
              KOMPARASI SPESIFIKASI PRODUK
            </span>
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Bandingkan Hingga 4 Mebel Pilihan ({compareList.length}/4)
            </h3>
          </div>

          <button
            onClick={closeModal}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 md:p-8">
          {compareList.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <FaExchangeAlt className="text-4xl text-[#D4D4D4] mx-auto" />
              <h4 className="font-display text-base uppercase text-[#0A0A0A]">
                Belum Ada Produk Ditambahkan ke Komparasi
              </h4>
              <p className="text-xs text-[#525252] max-w-xs mx-auto">
                Klik ikon komparasi (tanda panah silang) pada kartu produk di katalog untuk membandingkan spesifikasinya di sini.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono border-collapse border-2 border-[#0A0A0A]">
                <thead>
                  <tr className="bg-[#F5F5F5] border-b-2 border-[#0A0A0A]">
                    <th className="p-4 text-left uppercase text-[#737373] w-48 border-r-2 border-[#0A0A0A]">
                      Fitur / Parameter
                    </th>
                    {compareList.map((prod) => (
                      <th key={prod.id} className="p-4 text-left border-r-2 border-[#0A0A0A] last:border-r-0 min-w-[220px]">
                        <div className="flex items-start justify-between gap-2">
                          <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover border border-[#0A0A0A]" />
                          <button
                            onClick={() => removeFromCompare(prod.id)}
                            className="text-[#A3A3A3] hover:text-[#EF4444] p-1"
                            title="Hapus"
                          >
                            <FaTimes />
                          </button>
                        </div>
                        <h4 className="font-display text-sm uppercase text-[#0A0A0A] mt-2">
                          {prod.name}
                        </h4>
                        <div className="font-display text-base font-bold text-[#EF4444] mt-1">
                          Rp {prod.price.toLocaleString('id-ID')}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E5E5]">
                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">SKU</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0">{p.sku}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Kategori</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0 uppercase">{p.category}</td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Dimensi (P×L×T)</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0 font-bold">
                        {p.dimensions.length} × {p.dimensions.width} × {p.dimensions.height} cm
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Material Pokok</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0">
                        {p.materials.join(', ')}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Status Ketersediaan</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0">
                        {p.stockStatus === 'ready' && <span className="text-[#16A34A] font-bold">Ready Stock ({p.stockCount} unit)</span>}
                        {p.stockStatus === 'preorder' && <span className="text-[#CA8A04] font-bold">Pre-Order 14 Hari</span>}
                        {p.stockStatus === 'custom' && <span className="text-[#0A0A0A] font-bold">Bespoke Only</span>}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Garansi</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0">
                        5 Tahun Konstruksi
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-4 font-bold uppercase bg-[#FAFAFA] border-r-2 border-[#0A0A0A]">Aksi</td>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-4 border-r-2 border-[#0A0A0A] last:border-r-0">
                        <button
                          onClick={() => addToCart(p, 1)}
                          className="w-full editorial-button-primary text-[10px] py-2 flex items-center justify-center gap-1.5"
                        >
                          <FaShoppingBag />
                          <span>+ Keranjang</span>
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
