import React, { useState, useEffect, useRef } from 'react';

const sections = [
  {
    image: 'https://images.openai.com/static-rsc-4/0a25QX2Y9aASC6HW8j4bcKZYHfiL8QVwuIPLmEkCxPGov0k1ALvnmLMeW8Bxo4l49Bu7B5wv2uVCb5yRjGIfXMEDiiuvLUulRWSs1vJrK-l0eTu7NvIgtSkC8bwZLHVjLhIou8-DjkTPyoiEV1EA3qac8CzLlAzh6So8IjBH8Wt92y_gIrV4lMRLIA36aFsP?purpose=fullsize',
    deskHead: 'Custom Furniture & Home Interior Designers in Pune',
    mobHead: ['FURNITURE & INTERIOR', 'DESIGNERS IN PUNE'],
    text: `Woodland Furniture & Home Interiors are the best manufacturer of all types of Furniture & doing Interior designing since 2014, having very good service ratings in Kothrud, Pune. We do complete interior, customised furniture is also made here with best quality assurance. We work in Teak-wood (Sagwan) & Commercial Plywood. We also do Modular Furniture with 3D design. Our working criteria is first we visit the site, then we give the client a layout, then according to client demand we do 3D design first to make our client satisfied with what work is going to be done.`,
    showCta: false,
  },
  {
    image: 'https://images.openai.com/static-rsc-4/emHBov87NdVCdqky0zt3h3EVaASI4ZDpsiciRMF3SdSF88ZHXAJip7rNDVxglGLAVVE-aOQpAxwigOMYhPvv-1_sr4FLU7spAs1O4AEZIdQvhtz2KPp0A-u6aC9z_1FqjD_UytNIEnzbVaeTCPcRs1txHWFn_pLOq1o6URzHjTtCYHppqBqRv3XG6XQ6iHbg?purpose=fullsize',
    deskHead: 'CUSTOM-MADE HOME INTERIORS',
    mobHead: null,
    text: `Since 2014, we have been transforming the essence of home interiors in Pune. Our expertise goes beyond aesthetics to include thoughtful designs that reflect style and functionality. Our dedicated team of interior designers understands the need for space and functionality, and offers customers exactly what they need. We provide complete furnishing for beautiful home interiors including modular kitchen furnishing, living and dining, bedroom interiors, wooden sofa sets, cupboards, dining tables, modular mandirs and curtains to help bring your dream to life. If you would like to find out more about the interior solutions we offer then just contact us, and our designers will be in touch.`,
    showCta: true,
  },
];

const FlxSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const items = sectionRef.current.querySelectorAll('.fade-up');
    items.forEach((el) => observer.observe(el));
    return () => items.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <section id="FlxSection" className="bg-[#f8f8f8] overflow-hidden" ref={sectionRef}>
        {sections.map((sec, i) => {
          const isOdd = i % 2 === 0; // 0-indexed, first item is "odd" in CSS (nth-child(1))
          return (
            <div className={`flx-sec ${isOdd ? 'flx-sec-odd' : 'flx-sec-even'}`} key={i}>
              <div className="w-full max-w-full px-5 min-[468px]:px-8 sm:px-10 md:px-[80px] lg:px-[100px] mx-auto xl:px-0">
                <div className={`flex flex-wrap ${isOdd ? 'xl:flex-row-reverse' : ''}`}>
                  {/* Image side */}
                  <div className="w-full xl:w-1/2 fade-up max-[468px]:hidden">
                    <img
                      src={sec.image}
                      alt=""
                      width="895"
                      height="680"
                      loading="lazy"
                      className="w-full h-full object-cover max-h-[260px] lg:max-h-[450px] xl:max-h-none"
                    />
                  </div>

                  {/* Text side */}
                  <div className={`w-full xl:w-1/2 flex items-center content-center flex-wrap py-10 sm:py-[45px] xl:py-[25px] px-5 min-[468px]:px-8 sm:px-10 md:px-[40px] lg:px-[50px] xl:px-[30px] justify-center fade-up ${isOdd ? 'flx-rit-odd' : 'flx-rit-even'}`}>
                    {/* Desktop heading */}
                    <div className="w-full hidden sm:block">
                      <h2 className="font-['Mulish',sans-serif] font-normal uppercase text-black text-[22px] leading-[30px] min-[468px]:text-[28px] min-[468px]:leading-normal sm:text-[30px] xl:text-[28px] min-[1700px]:text-[32px] m-0 p-0">
                        {sec.deskHead}
                      </h2>
                    </div>

                    {/* Mobile heading */}
                    {sec.mobHead && (
                      <div className="w-full sm:hidden text-center">
                        <div className="text-xs leading-[18px] mx-auto">
                          <span className="text-[#4c4c4c] text-[22px] mb-2.5">
                            {sec.mobHead[0]}
                            <br /><br />
                            {sec.mobHead[1]}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="w-full">
                      <div className={`overflow-auto lg:pr-3 xl:max-h-[130px] min-[1800px]:max-h-full min-[1800px]:pr-0 ${isOdd ? 'xl:!max-h-full' : ''} ${expandedIdx === i ? 'flx-expanded' : 'flx-truncated'}`}>
                        <p className="m-0 text-[#4c4c4c] text-[15px] leading-[25px] sm:text-base sm:leading-[26px]">
                          {sec.text}
                        </p>
                        <button
                          className="text-[15px] text-[#814882] font-medium bg-transparent border-none cursor-pointer p-0 mt-2 transition-all duration-400 hover:tracking-[1px] sm:hidden"
                          onClick={() => setExpandedIdx(expandedIdx === i ? -1 : i)}
                        >
                          {expandedIdx === i ? 'Read less' : 'Read more..'}
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    {sec.showCta && (
                      <div className="w-full">
                        <div className="mt-6 sm:ml-0">
                          <button
                            className="btn-comn hoveranim"
                            onClick={() => setShowModal(true)}
                          >
                            <span>Book a Free Consultation</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Contact Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[1055] flex items-center justify-center bg-black/70"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white/82 rounded-[5px] w-[90%] max-w-[500px] relative overflow-hidden">
            {/* Bottom purple bar */}
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#814882]"></div>
            {/* Header */}
            <div className="bg-[#814882] px-5 py-3.5 flex justify-between items-center">
              <span className="text-white text-lg font-semibold font-['Mulish',sans-serif]">Book a Free Consultation</span>
              <button
                onClick={() => setShowModal(false)}
                className="bg-transparent border-none cursor-pointer flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff">
                  <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            {/* Subtitle */}
            <div className="pt-5 px-6 pb-4 text-center">
              <p className="text-[#4c4c4c] text-sm mb-4">
                Please fill out the enquiry below and we will get back to you as soon as possible
              </p>
            </div>
            {/* Form */}
            <div className="px-6 pb-10">
              <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <div className="mb-3">
                  <input type="text" placeholder="Name" required className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" />
                </div>
                <div className="mb-3 flex">
                  <span className="flex items-center justify-center h-[50px] min-w-[55px] border border-[#707070] border-r-0 rounded-l-[5px] text-[13px] bg-white text-[#263948]">+91</span>
                  <input type="tel" placeholder="Contact Number" required className="w-full h-[50px] border border-[#707070] rounded-r-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="Email Address" className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Project Location" className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" />
                </div>
                <button
                  type="submit"
                  className="hoveranim w-full h-[45px] border border-[#814882] bg-[#814882] text-white rounded-[5px] text-sm font-medium cursor-pointer mt-5 flex items-center justify-center"
                >
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlxSection;
