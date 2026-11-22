import React from 'react';
import { useShop } from '../../context/ShopContext';
import { FaTimes, FaHeart, FaTrash, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

export const WishlistDrawer: React.FC = () => {
  const { 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    activeModal, 
    closeModal,
    openModal 
  } = useShop();

  if (activeModal !== 'wishlist') return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#FAFAFA] border-l-4 border-[#0A0A0A] w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-5 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <FaHeart className="text-[#EF4444]" />
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Wishlist Favorit ({wishlist.length})
            </h3>
          </div>

          <button
            onClick={closeModal}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4 divide-y divide-[#E5E5E5]">
          {wishlist.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <FaHeart className="text-4xl text-[#D4D4D4] mx-auto" />
              <h4 className="font-display text-base uppercase text-[#0A0A0A]">
                Belum Ada Produk Tersimpan
              </h4>
              <p className="text-xs text-[#525252] max-w-xs mx-auto">
                Tandai ikon hati pada produk yang Anda sukai untuk menyimpannya ke daftar wishlist.
              </p>
            </div>
          ) : (
            wishlist.map((prod) => (
              <div key={prod.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-20 h-20 object-cover border-2 border-[#0A0A0A] shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm uppercase truncate text-[#0A0A0A]">
                    {prod.name}
                  </h4>
                  <div className="font-mono text-xs font-bold text-[#0A0A0A] mt-0.5">
                    Rp {prod.price.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[10px] font-mono text-[#737373]">
                    {prod.dimensions.length}×{prod.dimensions.width}×{prod.dimensions.height} cm
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        addToCart(prod, 1);
                        toggleWishlist(prod);
                      }}
                      className="px-2.5 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-bold uppercase hover:bg-[#EF4444] transition-colors flex items-center gap-1"
                    >
                      <FaShoppingBag />
                      <span>Pindah ke Cart</span>
                    </button>
                    <button
                      onClick={() => toggleWishlist(prod)}
                      className="p-1.5 text-xs text-[#EF4444] hover:bg-[#F5F5F5]"
                      title="Hapus dari Wishlist"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom */}
        <div className="p-6 bg-[#F5F5F5] border-t-2 border-[#0A0A0A] space-y-3">
          <button
            onClick={closeModal}
            className="w-full editorial-button-secondary text-xs py-3"
          >
            Lanjut Eksplorasi Produk
          </button>
        </div>

      </div>
    </div>
  );
};
