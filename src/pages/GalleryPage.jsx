import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectCards = [
  {
    title: 'VIDEO GALLERY',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80',
    description: 'Watch our interior design videos showcasing complete home transformations, modular kitchen installations, and expert design consultations by D{\'\\u2019\'}LIFE professionals.',
    link: '/projects',
    hasPlayBtn: true,
  },
  {
    title: 'INTERIOR GALLERY',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    description: 'Browse through photographs of our residential interior projects completed over 20 years. Explore modular kitchens, wardrobes, living rooms, bedrooms, and more.',
    link: '#galleryList',
    hasPlayBtn: false,
  },
  {
    title: 'PROJECT-WISE GALLERY',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    description: 'View complete home interior projects — from modern family homes to luxury apartments. Each project showcases our end-to-end design and execution capabilities.',
    link: '/projects',
    hasPlayBtn: false,
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80',
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300&q=80',
  'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=300&q=80',
  'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=300&q=80',
  'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&q=80',
  'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=300&q=80',
  'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=300&q=80',
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=300&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80',
  'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=300&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&q=80',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80',
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&q=80',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=300&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&q=80',
  'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=300&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80',
  'https://images.unsplash.com/photo-1616137466211-f02fc81d5e3b?w=300&q=80',
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=300&q=80',
  'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=300&q=80',
  'https://images.unsplash.com/photo-1556185781-a47769abb7ee?w=300&q=80',
  'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=300&q=80',
  'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=300&q=80',
  'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=300&q=80',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&q=80',
  'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&q=80',
  'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300&q=80',
  'https://images.unsplash.com/photo-1617104678098-de229db51175?w=300&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=300&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80',
  'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=300&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=300&q=80',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=300&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&q=80',
  'https://images.unsplash.com/photo-1600566753376-e76e0e146c5b?w=300&q=80',
  'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=300&q=80',
  'https://images.unsplash.com/photo-1507473885765-e6ed057ab219?w=300&q=80',
  'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=300&q=80',
  'https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?w=300&q=80',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=300&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=300&q=80',
  'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=300&q=80',
  'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=300&q=80',
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80',
];

const INITIAL_COUNT = 16;

const GalleryPage = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [lightbox, setLightbox] = useState(null);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, galleryImages.length));
  };

  const getAltText = (url) => {
    const index = galleryImages.indexOf(url);
    return `Interior Design ${index + 1}`;
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="w-full overflow-hidden relative !mt-0 !pt-0">
        <div className="w-full h-[300px] min-[468px]:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] min-[1441px]:h-[600px] !mt-0 !pt-0">
          <picture>
            <source media="(min-width: 468px)" srcSet="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" />
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Gallery"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>
          {/* Dark gradient for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-[2]">
            <div className="text-center px-5">
              <h2 className="text-white font-bold text-[24px] min-[468px]:text-[30px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[68px] leading-tight"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                Your Home. Our Designs
              </h2>
              <span className="block text-white text-[13px] min-[468px]:text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px] font-light mt-2 sm:mt-3 tracking-wide"
                style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}>
                Expertly Crafted Interiors by Professionals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Actual Project Photographs */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug uppercase tracking-wide">
              Actual Project Photographs
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] mt-4 max-w-[900px] mx-auto">
              With over 19 years of expertise in residential interiors, D{'\u2019'}LIFE has transformed thousands of homes across India.
              Browse our gallery to see real project photographs — from modular kitchens and bedrooms to living rooms and complete home interiors.
            </p>
          </div>

          {/* 3 Project Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projectCards.map((card, index) => (
              <div key={index} className="bg-white border border-[#e8e8e8] rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  {card.link.startsWith('#') ? (
                    <a href={card.link}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[220px] sm:h-[250px] md:h-[230px] lg:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <Link to={card.link}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[220px] sm:h-[250px] md:h-[230px] lg:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  {card.hasPlayBtn && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#814882] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <h5 className="text-[16px] sm:text-[18px] font-semibold text-[#333] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Mulish', sans-serif" }}>
                    {card.title}
                  </h5>
                  <p className="text-[13px] sm:text-[14px] text-[#4c4c4c] leading-[1.8] mb-4">
                    {card.description}
                  </p>
                  {card.link.startsWith('#') ? (
                    <a
                      href={card.link}
                      className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium"
                    >
                      View
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium"
                    >
                      View
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery Grid */}
      <section id="galleryList" className="w-full bg-[#f9f9f9] py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
              Interior <span className="text-[#814882]">Gallery</span>
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleImages.map((src, i) => (
              <div
                key={i}
                className="relative group overflow-hidden aspect-square cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={src}
                  alt={getAltText(src)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-8 sm:mt-10">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
              >
                Load More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl font-light hover:opacity-70 transition-opacity z-10 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl font-light hover:opacity-70 transition-opacity z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1)); }}
          >
            &#8249;
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl font-light hover:opacity-70 transition-opacity z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0)); }}
          >
            &#8250;
          </button>
          <img
            src={galleryImages[lightbox].replace('-300x300', '')}
            alt={getAltText(galleryImages[lightbox])}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}


    </>
  );
};

export default GalleryPage;
