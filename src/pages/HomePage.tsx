import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CategoriesSection } from '../components/sections/CategoriesSection';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { CollectionsSection } from '../components/sections/CollectionsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useShop();

  const handleSelectCategory = (catId: string) => {
    navigate(`/produk?kategori=${catId}`);
  };

  const handleOpenProductDetail = (product: Product) => {
    navigate(`/produk/${product.id}`);
  };

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CategoriesSection onSelectCategory={handleSelectCategory} />
      <FeaturedProductsSection onOpenProductDetail={handleOpenProductDetail} />
      <WhyChooseUsSection />
      <CollectionsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};
