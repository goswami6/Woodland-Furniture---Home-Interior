import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Showrooms from '../components/Showrooms';

const productCategories = [
  { id: 'kitchen', title: 'Modular Kitchen', desc: 'Custom-designed modular kitchens with premium materials, German fittings, and smart storage solutions. L-shape, U-shape, straight, parallel, and island kitchen designs.', image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80' },
  { id: 'bedroom', title: 'Bedroom Interiors', desc: 'Complete bedroom furnishing with wardrobes, bed with storage, dressing table, side tables, and study table. Customized to maximize storage and comfort.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' },
  { id: 'living', title: 'Living Room', desc: 'Elegant living room interiors including TV units, display shelves, partition units, shoe racks, and false ceiling designs that make a lasting impression.', image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80' },
  { id: 'dining', title: 'Dining Room', desc: 'Stylish dining area designs with custom crockery units, dining tables, bar counters, and wall treatments for a warm dining experience.', image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80' },
];

const ProductsPage = () => {
  return (
    <>
      <PageBanner
        desktopImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
      />

      {productCategories.map((cat, index) => (
        <section key={cat.id} id={cat.id} className={`w-full ${index % 2 !== 0 ? 'bg-[#f8f8f8]' : 'bg-white'} py-10 sm:py-14 md:py-16`}>
          {/* Mobile image */}
          <div className="block md:hidden mb-6 px-5">
            <img src={cat.image} alt={cat.title} className="w-full h-auto" />
          </div>
          <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-center">
              {/* Image - desktop */}
              <div className={`hidden md:block md:w-[45%] lg:w-[42%] flex-shrink-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img src={cat.image} alt={cat.title} className="w-full h-auto" />
              </div>
              {/* Content */}
              <div className={`w-full md:w-[55%] lg:w-[58%] ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug mb-5 sm:mb-6">
                  {cat.title}
                </h4>
                <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify mb-6 md:mb-8">{cat.desc}</p>
                <Link to="/contact" className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
                Premium Materials & Finishes
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {['Marine Plywood', 'Laminate Finish', 'Acrylic Finish', 'PU Finish', 'Veneer Finish', 'Membrane Finish', 'Hettich Fittings', 'Hafele Fittings'].map((m, i) => (
                <div key={i} className="border border-[#e0e0e0] p-5 sm:p-6 text-center hover:border-[#814882] transition-colors">
                  <span className="text-[13px] sm:text-[14px] text-[#4c4c4c]">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Showrooms />
    </>
  );
};

export default ProductsPage;
