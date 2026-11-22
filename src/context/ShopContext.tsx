import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomFurnitureForm, PriceEstimateInput } from '../types';

export type ModalType = 
  | 'cart' 
  | 'wishlist' 
  | 'productDetail' 
  | 'customFurniture' 
  | 'priceEstimator' 
  | 'roomVisualizer' 
  | 'arPreview' 
  | 'threeDViewer' 
  | 'comparison' 
  | 'deliveryInfo' 
  | 'materialSelector';

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  compareList: Product[];
  activeModal: ModalType | null;
  selectedProduct: Product | null;
  toastMessage: string | null;
  
  // Actions
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedFinish?: string, customNote?: string) => void;
  updateCartQty: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  toggleCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  
  openModal: (type: ModalType, product?: Product) => void;
  closeModal: () => void;
  showToast: (msg: string) => void;
  
  // WhatsApp Link Generators
  sendCartToWhatsApp: () => void;
  sendProductInquiryWhatsApp: (product: Product) => void;
  sendCustomRequestWhatsApp: (data: CustomFurnitureForm) => void;
  sendPriceEstimateWhatsApp: (estimate: PriceEstimateInput, calculatedPrice: number) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const WA_NUMBER = '6282313153539';

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('poroskayu_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('poroskayu_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [compareList, setCompareList] = useState<Product[]>([]);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('poroskayu_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('poroskayu_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (
    product: Product,
    quantity = 1,
    selectedColor?: string,
    selectedFinish?: string,
    customNote?: string
  ) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id &&
          item.selectedColor === (selectedColor || product.colors[0]?.name) &&
          item.selectedFinish === (selectedFinish || product.finishOptions[0])
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedColor: selectedColor || product.colors[0]?.name,
          selectedFinish: selectedFinish || product.finishOptions[0],
          customNote
        }
      ];
    });
    showToast(`"${product.name}" ditambahkan ke Keranjang Pesanan.`);
  };

  const updateCartQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Produk dihapus dari keranjang.');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`"${product.name}" dihapus dari Wishlist.`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`"${product.name}" disimpan ke Wishlist.`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`"${product.name}" dihapus dari Komparasi.`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showToast('Maksimal membandingkan 4 produk sekaligus.');
          return prev;
        }
        showToast(`"${product.name}" ditambahkan ke Komparasi.`);
        return [...prev, product];
      }
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const isInCompare = (productId: string) => {
    return compareList.some((p) => p.id === productId);
  };

  const openModal = (type: ModalType, product?: Product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // WhatsApp Order
  const sendCartToWhatsApp = () => {
    if (cart.length === 0) return;
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const itemList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}* (SKU: ${item.product.sku})\n   - Jumlah: ${item.quantity} unit\n   - Pilihan Warna: ${item.selectedColor || '-'}\n   - Finishing: ${item.selectedFinish || '-'}\n   - Subtotal: Rp ${(item.product.price * item.quantity).toLocaleString('id-ID')}`
      )
      .join('\n\n');

    const message = `Halo PorosKayu Furniture,\nSaya ingin melakukan pemesanan mebel dengan rincian berikut:\n\n${itemList}\n\n*Total Estimasi:* Rp ${subtotal.toLocaleString('id-ID')}\n\nMohon informasi ketersediaan jadwal produksi dan estimasi ongkir ke alamat saya. Terima kasih!`;
    
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const sendProductInquiryWhatsApp = (product: Product) => {
    const message = `Halo PorosKayu Furniture,\nSaya tertarik untuk konsultasi produk:\n\n*${product.name}* (SKU: ${product.sku})\nHarga: Rp ${product.price.toLocaleString('id-ID')}\nKategori: ${product.category}\n\nApakah stok ready dan bisa disesuaikan ukuran/finishing? Terima kasih!`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const sendCustomRequestWhatsApp = (data: CustomFurnitureForm) => {
    const message = `Halo Tim Desain PorosKayu Furniture,\nSaya ingin mengajukan pesanan Custom Furniture:\n\n- Nama: *${data.name}*\n- Kontak: ${data.whatsapp}\n- Jenis Furniture: *${data.furnitureType}* (${data.category})\n- Material Diinginkan: ${data.material}\n- Finishing: ${data.finishing}\n- Dimensi Rencana: ${data.length} x ${data.width} x ${data.height} cm\n- Estimasi Budget: ${data.budgetRange}\n- Kota Pengiriman: ${data.addressCity}\n- Pemasangan di Lokasi: ${data.needInstallation ? 'Ya, Butuh Tim Pemasangan' : 'Tidak'}\n- Catatan Khusus: ${data.notes || '-'}\n\nMohon bantuan review sketsa dan estimasi harganya. Terima kasih!`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const sendPriceEstimateWhatsApp = (input: PriceEstimateInput, price: number) => {
    const message = `Halo Tim PorosKayu Furniture,\nSaya menghitung estimasi harga furniture kustom via kalkulator web dengan spesifikasi:\n\n- Jenis: *${input.furnitureType}*\n- Jenis Kayu: ${input.woodType}\n- Finishing: ${input.finishType}\n- Dimensi: ${input.lengthCm} cm (P) x ${input.widthCm} cm (L) x ${input.heightCm} cm (T)\n- Busa/Cushion: ${input.hasCushion ? 'Ya' : 'Tidak'}\n- Ukiran/Pahatan: ${input.hasCarving ? 'Ya' : 'Tidak'}\n- Kota Tujuan: ${input.deliveryCity}\n- *Estimasi Harga:* Rp ${price.toLocaleString('id-ID')}\n\nBisa dibantu konfirmasi skema produksi dan jadwal pengerjaannya? Terima kasih!`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        compareList,
        activeModal,
        selectedProduct,
        toastMessage,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart,
        toggleWishlist,
        isInWishlist,
        toggleCompare,
        removeFromCompare,
        isInCompare,
        openModal,
        closeModal,
        showToast,
        sendCartToWhatsApp,
        sendProductInquiryWhatsApp,
        sendCustomRequestWhatsApp,
        sendPriceEstimateWhatsApp
      }}
    >
      {children}
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#EF4444] px-5 py-3 shadow-none flex items-center gap-3 animate-bounce-short">
          <span className="w-2.5 h-2.5 bg-[#EF4444]"></span>
          <span className="text-xs font-bold uppercase tracking-wider font-mono">{toastMessage}</span>
        </div>
      )}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
