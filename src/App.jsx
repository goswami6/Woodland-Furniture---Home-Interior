import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';

import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import CustomMadePage from './pages/CustomMadePage';
import DesignNBuildPage from './pages/DesignNBuildPage';
import ProductsPage from './pages/ProductsPage';
import ModularKitchenPage from './pages/products/ModularKitchenPage';
import WoodenSofaPage from './pages/products/WoodenSofaPage';
import WoodenBedPage from './pages/products/WoodenBedPage';
import WoodenCupboardPage from './pages/products/WoodenCupboardPage';
import DiningTablePage from './pages/products/DiningTablePage';
import ModularMandirPage from './pages/products/ModularMandirPage';
import CurtainsPage from './pages/products/CurtainsPage';
import HomeInteriorPage from './pages/products/HomeInteriorPage';
import OfficeInteriorPage from './pages/products/OfficeInteriorPage';
import OffersPage from './pages/OffersPage';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/custom-made" element={<CustomMadePage />} />
          <Route path="/design-and-build" element={<DesignNBuildPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/modular-kitchen" element={<ModularKitchenPage />} />
          <Route path="/products/wooden-sofa" element={<WoodenSofaPage />} />
          <Route path="/products/wooden-bed" element={<WoodenBedPage />} />
          <Route path="/products/wooden-cupboard" element={<WoodenCupboardPage />} />
          <Route path="/products/dining-table" element={<DiningTablePage />} />
          <Route path="/products/modular-mandir" element={<ModularMandirPage />} />
          <Route path="/products/curtains" element={<CurtainsPage />} />
          <Route path="/products/home-interior" element={<HomeInteriorPage />} />
          <Route path="/products/office-interior" element={<OfficeInteriorPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

        </Routes>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
};

export default App;
