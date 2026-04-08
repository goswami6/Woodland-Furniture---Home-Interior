import React, { useEffect, useRef, useState } from 'react';

const WhyChooseSection = ({ features }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[35px] sm:py-[55px] lg:py-[70px] overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #f9f5fa 0%, #f4f0f5 40%, #f0ecf1 100%)' }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #814882 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative z-[1]">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <span className="w-8 h-[2px] bg-[#814882]/40 rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[3px] text-[#814882] uppercase">Why Us</span>
            <span className="w-8 h-[2px] bg-[#814882]/40 rounded-full" />
          </div>
          <h2
            className="text-[22px] min-[468px]:text-[25px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal uppercase text-[#1a1a1a]"
            style={{
              fontFamily: "'Mulish', sans-serif",
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            WHY CHOOSE <span className="text-[#814882] font-bold">WOODLAND</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#ede8ee] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(129,72,130,0.13)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(35px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, box-shadow 0.5s ease, translate 0.5s ease`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#814882] via-[#a66ba7] to-[#814882] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number badge */}
                <div className="absolute top-5 right-5 w-[30px] h-[30px] rounded-full bg-[#814882]/[0.05] flex items-center justify-center text-[12px] font-bold text-[#814882]/30 group-hover:bg-[#814882]/10 group-hover:text-[#814882]/50 transition-all duration-400">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-xl bg-gradient-to-br from-[#f3ecf4] to-[#efe6f0] flex items-center justify-center mb-5 group-hover:from-[#814882]/15 group-hover:to-[#814882]/10 transition-all duration-500 shadow-[0_2px_8px_rgba(129,72,130,0.08)]">
                  <span className="text-[24px] sm:text-[26px]">{f.icon}</span>
                </div>

                {/* Title */}
                <h4
                  className="font-bold text-[15px] sm:text-[16px] text-[#1a1a1a] mb-2.5 uppercase tracking-wide"
                  style={{ fontFamily: "'Mulish', sans-serif" }}
                >
                  {f.title}
                </h4>

                {/* Desc */}
                <p className="text-[13px] sm:text-[14px] text-[#666] leading-[1.85]">{f.desc}</p>

                {/* Bottom accent dot */}
                <div className="mt-5 flex items-center gap-1.5">
                  <span className="w-5 h-[2px] rounded-full bg-[#814882]/20 group-hover:w-8 group-hover:bg-[#814882]/50 transition-all duration-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#814882]/15 group-hover:bg-[#814882]/40 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
