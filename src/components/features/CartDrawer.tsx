import React from 'react';
import { useShop } from '../../context/ShopContext';
import { FaTimes, FaShoppingBag, FaTrash, FaWhatsapp, FaShieldAlt, FaTruck } from 'react-icons/fa';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    updateCartQty, 
    removeFromCart, 
    clearCart, 
    activeModal, 
    closeModal,
    sendCartToWhatsApp,
    openModal
  } = useShop();

  if (activeModal !== 'cart') return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#FAFAFA] border-l-4 border-[#0A0A0A] w-full max-w-lg h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] p-5 flex items-center justify-between border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <FaShoppingBag className="text-[#EF4444]" />
            <h3 className="font-display text-base uppercase text-[#FAFAFA]">
              Keranjang Pesanan ({cart.length} Item)
            </h3>
          </div>

          <button
            onClick={closeModal}
            className="text-[#FAFAFA] hover:text-[#EF4444] text-lg p-1 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Items */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4 divide-y divide-[#E5E5E5]">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <FaShoppingBag className="text-4xl text-[#D4D4D4] mx-auto" />
              <h4 className="font-display text-base uppercase text-[#0A0A0A]">
                Keranjang Belanja Anda Kosong
              </h4>
              <p className="text-xs text-[#525252] max-w-xs mx-auto">
                Silakan pilih koleksi furniture favorit Anda dari katalog dan klik tombol "+ Keranjang".
              </p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="pt-4 first:pt-0 flex gap-4 items-start">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover border-2 border-[#0A0A0A] shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-sm uppercase truncate text-[#0A0A0A]">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#A3A3A3] hover:text-[#EF4444] p-1"
                      title="Hapus"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-[#525252] mt-0.5">
                    Warna: <strong className="text-[#0A0A0A]">{item.selectedColor || '-'}</strong> • Finishing: <strong className="text-[#0A0A0A]">{item.selectedFinish || '-'}</strong>
                  </div>

                  <div className="font-mono text-xs font-bold text-[#0A0A0A] mt-1">
                    Rp {item.product.price.toLocaleString('id-ID')}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#0A0A0A]">
                      <button
                        onClick={() => updateCartQty(item.product.id, item.quantity - 1)}
                        className="px-2.5 py-0.5 text-xs font-bold hover:bg-[#E5E5E5]"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 font-mono text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQty(item.product.id, item.quantity + 1)}
                        className="px-2.5 py-0.5 text-xs font-bold hover:bg-[#E5E5E5]"
                      >
                        +
                      </button>
                    </div>

                    <div className="font-mono text-xs font-bold text-[#0A0A0A]">
                      Subtotal: Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#F5F5F5] border-t-2 border-[#0A0A0A] space-y-4">
            
            {/* Quick Delivery Estimator Button */}
            <button
              onClick={() => openModal('deliveryInfo')}
              className="w-full text-left p-2.5 border border-[#0A0A0A] bg-[#FAFAFA] flex items-center justify-between text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <FaTruck className="text-[#EF4444]" />
                <span>Info Biaya Kirim & Packing Peti</span>
              </div>
              <span className="text-[#0A0A0A] font-bold">Cek Info →</span>
            </button>

            {/* Total */}
            <div className="border-t border-[#D4D4D4] pt-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-[#737373]">Total Estimasi Barang:</span>
                <div className="font-display text-xl font-black text-[#0A0A0A]">
                  Rp {subtotal.toLocaleString('id-ID')}
                </div>
              </div>

              <button
                onClick={clearCart}
                className="text-[11px] font-mono text-[#737373] hover:text-[#EF4444] underline"
              >
                Kosongkan Keranjang
              </button>
            </div>

            {/* WhatsApp Order Button */}
            <button
              onClick={sendCartToWhatsApp}
              className="w-full py-3.5 bg-[#16A34A] text-[#FAFAFA] text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] hover:bg-[#15803D] flex items-center justify-center gap-2 transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              <span>Checkout Pesanan via WhatsApp (+62 823-1315-3539)</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
