import React, { useState, useEffect, useRef } from 'react';

const FactorySection = () => {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fullText = `At Woodland Furniture, we believe in the design and manufacture of high-quality furniture pieces, which are truly original. Our workshop is equipped with modern machinery to meet today's furnishing trends and is well provisioned for creating bespoke furniture solutions. We work in Teak-wood (Sagwan) & Commercial Plywood to design, build, and create interiors that bring joy to our clients for the years to come. We have an excellent team who take different quality checks on our products regardless of its scale or complexity. The thread that combines our furniture pieces is bringing contemporary design solutions with a strong commitment to quality. Over the years we've worked with many clients and with a strong bias to create the extraordinary, all our products are equally stunning, functional, and focused. We are always striving to push boundaries and our production facilities ensure that we deliver the best of the product lines to suit any financial budget with on-time deliveries. Our extensive knowledge, high professionalism and use of modern technologies is the key strength which allows us to craft the best results and quality products that inspire people.`;

  const truncated = fullText.slice(0, 320) + '...';

  return (
    <>
      <section
        id="factorySec"
        ref={sectionRef}
        className="py-[25px] min-[468px]:py-[35px] min-[575px]:py-[45px] md:py-[50px] lg:py-[60px] min-[1390px]:py-[70px] min-[1681px]:py-[80px] bg-white overflow-hidden"
      >
        <div className="w-full px-5 min-[468px]:px-8 sm:px-20 md:px-[80px] lg:px-[100px] min-[1441px]:px-[140px] min-[1681px]:px-[180px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px] min-[468px]:gap-[35px] lg:gap-[40px] min-[1390px]:gap-[50px]">
            {/* Left Content - col-lg-5 */}
            <div className="w-full lg:w-[41.666%]">
              <div
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Heading */}
                <div className="mb-[15px] min-[468px]:mb-[20px] min-[575px]:mb-[25px]">
                  <h2
                    className="text-[22px] min-[468px]:text-[24px] min-[575px]:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] min-[1390px]:text-[38px] min-[1681px]:text-[44px] font-bold uppercase text-[#333] leading-[1.2]"
                    style={{ fontFamily: "'Mulish', sans-serif" }}
                  >
                    QUALITY FURNITURE WORKSHOP
                  </h2>
                </div>

                {/* Text Content */}
                <div className="mb-[20px] min-[468px]:mb-[25px]">
                  <div className="text-[#4c4c4c] text-[13px] min-[468px]:text-[14px] min-[575px]:text-[15px] lg:text-[16px] min-[1681px]:text-[18px] leading-[1.8]">
                    <p>{expanded ? fullText : truncated}</p>
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-[#814882] text-[13px] min-[468px]:text-[14px] min-[575px]:text-[15px] lg:text-[16px] min-[1681px]:text-[18px] font-medium bg-transparent border-none cursor-pointer mt-2 hover:underline p-0"
                    >
                      {expanded ? 'Read less..' : 'Read more..'}
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="hoveranim btn-comn mt-[10px] min-[468px]:mt-[20px]"
                >
                  <span>Contact for Customized Home Interiors</span>
                </button>
              </div>
            </div>

            {/* Right Images - col-lg-7 */}
            <div className="w-full lg:w-[58.333%]">
              <div className="grid grid-cols-2 gap-[10px] min-[468px]:gap-[15px] min-[575px]:gap-[20px]">
                <div
                  className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="overflow-hidden rounded-[5px]">
                    <img
                      src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80"
                      alt="Woodland furniture workshop"
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-700 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="overflow-hidden rounded-[5px]">
                    <img
                      src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
                      alt="Woodland furniture workshop unit 2"
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[1055] flex items-center justify-center bg-black/70"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white/82 rounded-[5px] w-[90%] max-w-[500px] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#814882]"></div>
            <div className="bg-[#814882] px-5 py-3.5 flex justify-between items-center">
              <span className="text-white text-lg font-semibold font-['Mulish',sans-serif]">Contact for Customized Home Interiors</span>
              <button
                onClick={() => setShowModal(false)}
                className="bg-transparent border-none cursor-pointer flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff">
                  <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            <div className="pt-5 px-6 pb-4 text-center">
              <p className="text-[#4c4c4c] text-sm mb-4">
                Please fill out the enquiry below and we will get back to you as soon as possible
              </p>
            </div>
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

export default FactorySection;
