import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppShell } from '../AppShell';
import { HomePage } from '../pages/HomePage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CollectionsPage } from '../pages/CollectionsPage';
import { CustomOrderPage } from '../pages/CustomOrderPage';
import { MaterialPage } from '../pages/MaterialPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { AboutPage } from '../pages/AboutPage';
import { FaqPage } from '../pages/FaqPage';
import { PromoPage } from '../pages/PromoPage';
import { ContactPage } from '../pages/ContactPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'produk', element: <ProductListPage /> },
        { path: 'produk/:id', element: <ProductDetailPage /> },
        { path: 'koleksi', element: <CollectionsPage /> },
        { path: 'custom', element: <CustomOrderPage /> },
        { path: 'material', element: <MaterialPage /> },
        { path: 'proyek', element: <ProjectsPage /> },
        { path: 'tentang', element: <AboutPage /> },
        { path: 'faq', element: <FaqPage /> },
        { path: 'promo', element: <PromoPage /> },
        { path: 'kontak', element: <ContactPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export const AppRouter: React.FC = () => <RouterProvider router={router} />;
