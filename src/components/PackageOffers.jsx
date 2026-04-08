import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: 'ESSENTIAL',
    subtitle: 'Everything',
    subtitlePosition: 'above',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    actualPrice: '8.85',
    offerPrice: '6.37',
    unit: 'Lac',
    offerUnit: 'Lac*',
    description: 'ESSENTIAL WOODWORK FOR A 2BHK',
    link: '/offers#essential',
  },
  {
    title: 'ELEGANZA',
    subtitle: '',
    subtitlePosition: '',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    actualPrice: '15.84',
    offerPrice: '11.41',
    unit: 'Lac',
    offerUnit: 'Lac*',
    description: 'DETAILED WOODWORK FOR A 3BHK',
    link: '/offers#eleganza',
  },
  {
    title: 'ELEGANZA',
    subtitle: 'Plus',
    subtitlePosition: 'below',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    actualPrice: '24.03',
    offerPrice: '16.82',
    unit: 'lac',
    offerUnit: 'Lac*',
    description: 'WOODWORK & BEAUTIFICATIONS FOR A 3BHK',
    link: '/offers#eleganza-plus',
  },
];

const PackageOffers = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="PackageOff" className="py-[35px] sm:py-[50px] lg:py-[60px] bg-white overflow-hidden" ref={sectionRef}>
      {/* Section heading */}
      <div className="section-head mb-[25px] sm:mb-[35px]">
        <h2>PACKAGE OFFERS</h2>
      </div>

      {/* Package cards */}
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        <div className="flex flex-wrap">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-[10px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
              }}
            >
              <Link to={pkg.link} className="block text-center bg-white relative group">
                {/* ImgBox */}
                <div className="relative w-full h-[258px] sm:h-[266px] md:h-[280px] lg:h-[335px] xl:h-[355px] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Shine effect on hover */}
                  <div className="absolute top-0 -left-full z-[2] w-1/2 h-full opacity-0 group-hover:left-full group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)', transform: 'skewX(-25deg)' }}
                  />
                  {/* TitleBox */}
                  <div className="absolute bottom-0 left-0 right-0 mx-auto bg-white/65 text-black uppercase flex items-center justify-center w-fit min-w-[192px] sm:min-w-[235px] lg:min-w-[265px] min-h-[80px] sm:min-h-[100px] lg:min-h-[110px] px-[13px] pt-[18px] pb-[10px]">
                    <div>
                      {pkg.subtitle && pkg.subtitlePosition === 'above' && (
                        <div className="py-[4px] text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px]" style={{ fontFamily: "'Mulish', sans-serif" }}>
                          {pkg.subtitle}
                        </div>
                      )}
                      <div className="py-[4px] text-[23px] sm:text-[26px] md:text-[30px] lg:text-[35px] font-black" style={{ fontFamily: "'Mulish', sans-serif" }}>
                        {pkg.title}
                      </div>
                      {pkg.subtitle && pkg.subtitlePosition === 'below' && (
                        <div className="py-[4px] text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px]" style={{ fontFamily: "'Mulish', sans-serif" }}>
                          {pkg.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CBox */}
                <div className="relative px-[15px] pt-[22px] pb-[28px] sm:pt-[25px] sm:pb-[35px]">
                  {/* Shadow layer */}
                  <div className="absolute left-0 bottom-0 w-full h-[225px] shadow-[0_3px_25px_rgba(0,0,0,0.1)] pointer-events-none" />

                  {/* PriceBox */}
                  <div className="relative z-[1] flex items-center justify-center mb-[5px]">
                    {/* Label */}
                    <span className="text-[14px] sm:text-[15px] lg:text-[17px] text-[#4c4c4c] uppercase mr-[15px]">
                      Offer
                    </span>
                    {/* PriceWrp */}
                    <div className="flex items-center">
                      {/* APrice (strikethrough) */}
                      <span className="relative flex items-baseline text-[17px] sm:text-[20px] md:text-[22px] lg:text-[22px] text-[#4c4c4c] mr-[17px]">
                        <span style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>₹</span>
                        <span className="ml-[3px]">{pkg.actualPrice}</span>
                        <span className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] ml-[8px]">{pkg.unit}</span>
                        {/* Red strikethrough line */}
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-[#d80f0f]" style={{ transform: 'rotate(10deg) translateY(-50%)' }} />
                      </span>
                      {/* CPrice (offer price) */}
                      <span className="flex items-baseline text-[21px] sm:text-[24px] md:text-[25px] lg:text-[25px] font-semibold text-[#814882]">
                        <span style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>₹</span>
                        <span className="ml-[3px]">{pkg.offerPrice}</span>
                        <span className="font-normal text-[14px] sm:text-[16px] md:text-[19px] lg:text-[21px] ml-[8px]">{pkg.offerUnit}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative z-[1] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-black uppercase">
                    {pkg.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageOffers;
