import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-[35px] sm:py-[50px] lg:py-[60px] bg-white">
      {/* Section heading */}
      <div className="relative text-center mb-[25px] sm:mb-[35px]">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(112,112,112,0.2)]"></div>
        <h2 className="relative inline-block bg-white px-[20px] sm:px-[30px] text-[18px] sm:text-[22px] lg:text-[26px] font-normal uppercase text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
          CUSTOM FURNITURE &<br className="sm:hidden" /> HOME INTERIOR DESIGNERS IN PUNE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#4c4c4c] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] mb-4 text-center sm:text-left">
            Woodland Furniture & Home Interiors are the best manufacturer of all types of Furniture & doing Interior designing since 2014, having very good service ratings in Kothrud, Pune. We do complete interior, customised furniture is also made here with best quality assurance. We work in Teak-wood (Sagwan) & Commercial Plywood. We also do Modular Furniture with 3D design. Our working criteria is first we visit the site, then we give the client a layout, then according to client demand we do 3D design first to make our client satisfied with what work is going to be done.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
