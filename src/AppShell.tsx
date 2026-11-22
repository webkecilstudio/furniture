import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useShop } from './context/ShopContext';

// Layout
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickActionBar } from './components/layout/QuickActionBar';
import { CreatedByBadge } from './components/layout/CreatedByBadge';

// Global Modals & Drawers
import { ProductDetailModal } from './components/features/ProductDetailModal';
import { ThreeDViewerModal } from './components/features/ThreeDViewerModal';
import { ArPreviewModal } from './components/features/ArPreviewModal';
import { RoomVisualizerModal } from './components/features/RoomVisualizerModal';
import { CustomFurnitureModal } from './components/features/CustomFurnitureModal';
import { PriceEstimatorModal } from './components/features/PriceEstimatorModal';
import { MaterialSelectorModal } from './components/features/MaterialSelectorModal';
import { ComparisonModal } from './components/features/ComparisonModal';
import { DeliveryInfoModal } from './components/features/DeliveryInfoModal';
import { WishlistDrawer } from './components/features/WishlistDrawer';
import { CartDrawer } from './components/features/CartDrawer';

export const AppShell: React.FC = () => {
  const { pathname } = useLocation();
  const { activeModal, selectedProduct, closeModal } = useShop();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0A0A0A] font-sans">
      <TopBar />
      <Navbar />

      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>

      <Footer />
      <CreatedByBadge />
      <QuickActionBar />

      {/* Global Modals & Drawers */}
      {activeModal === 'productDetail' && (
        <ProductDetailModal product={selectedProduct} onClose={closeModal} />
      )}
      {activeModal === 'threeDViewer' && (
        <ThreeDViewerModal product={selectedProduct} onClose={closeModal} />
      )}
      {activeModal === 'arPreview' && (
        <ArPreviewModal product={selectedProduct} onClose={closeModal} />
      )}
      {activeModal === 'roomVisualizer' && (
        <RoomVisualizerModal onClose={closeModal} />
      )}
      {activeModal === 'customFurniture' && (
        <CustomFurnitureModal onClose={closeModal} />
      )}
      {activeModal === 'priceEstimator' && (
        <PriceEstimatorModal onClose={closeModal} />
      )}
      {activeModal === 'materialSelector' && (
        <MaterialSelectorModal onClose={closeModal} />
      )}
      {activeModal === 'deliveryInfo' && (
        <DeliveryInfoModal onClose={closeModal} />
      )}

      <ComparisonModal />
      <WishlistDrawer />
      <CartDrawer />
    </div>
  );
};
