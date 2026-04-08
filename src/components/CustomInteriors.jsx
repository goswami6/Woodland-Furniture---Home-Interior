import React from 'react';
import { Link } from 'react-router-dom';

const CustomInteriors = () => {
  return (
    <section className="py-[35px] sm:py-[50px] lg:py-[60px] bg-[#f8f8f8]">
      {/* Section heading */}
      <div className="relative text-center mb-[25px] sm:mb-[35px]">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(112,112,112,0.2)]"></div>
        <h2 className="relative inline-block bg-[#f8f8f8] px-[25px] sm:px-[35px] text-[22px] sm:text-[26px] lg:text-[30px] font-normal uppercase text-[#333]" style={{ fontFamily: "'Mulish', sans-serif" }}>
          CUSTOM-MADE HOME INTERIORS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-[#4c4c4c] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8]">
            Since 2004, we have been transforming the essence of home interiors across Ahmedabad, Mumbai, Navi Mumbai, Hyderabad, Bangalore, Mysore, Kerala, Pune, Chennai, Nagercoil, Coimbatore, Madurai and Mangalore. Our expertise goes beyond aesthetics to include thoughtful designs that reflect style and functionality. Our dedicated team of interior designers understands the need for space and functionality, and offers customers exactly what they need. We provide complete furnishing for beautiful home interiors including modular kitchen furnishing, living and dining, and bedroom interiors to help bring your dream to life. If you would like to find out more about the interior solutions we offer then just contact us, and our designers will be in touch.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 sm:px-10 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-[1px] transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Satisfied customers stat */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#814882]" style={{ fontFamily: "'Mulish', sans-serif" }}>
            14000+
          </div>
          <div className="text-[14px] sm:text-[16px] text-[#333] uppercase tracking-[2px] font-medium">
            SATISFIED CUSTOMERS
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomInteriors;
