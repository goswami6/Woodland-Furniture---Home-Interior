import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Showrooms from '../components/Showrooms';

const projectImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=600&q=80',
];

const cities = ['All', 'Kothrud', 'Baner', 'Hinjewadi', 'Wakad', 'Aundh', 'Kharadi'];

const ProjectsPage = () => {
  const [activeCity, setActiveCity] = useState('All');

  return (
    <>
      <PageBanner
        desktopImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
      />

      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
                Completed Projects
              </h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={`px-5 py-2 text-[13px] sm:text-[14px] border transition-colors cursor-pointer ${activeCity === city ? 'bg-[#814882] text-white border-[#814882]' : 'border-[#ccc] text-[#4c4c4c] hover:border-[#814882] hover:text-[#814882]'}`}
                >
                  {city}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {projectImages.map((img, i) => (
                <div key={i} className="relative group overflow-hidden aspect-[4/3]">
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
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

export default ProjectsPage;
