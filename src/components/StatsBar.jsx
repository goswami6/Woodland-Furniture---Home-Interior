import React, { useEffect, useRef, useState } from 'react';

const statsData = [
  { title: 'SINCE', sub: '2004' },
  { title: 'PREMIUM', sub: 'Materials' },
  { title: '10 YEARS', sub: 'Warranty' },
  { title: 'COMPLETION', sub: '40 Working Days' },
  { title: 'PROJECTS', sub: '300 Per Month' },
  { title: 'LIFELONG', sub: 'Service Support' },
];

const StatsBar = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Auto-scroll to active item on mobile (horizontal only)
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current || window.innerWidth >= 640) return;
    const container = listRef.current;
    const item = container.children[activeIndex];
    if (item) {
      const scrollLeft = item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Sequential color fill animation: one circle fills, holds, then next
  useEffect(() => {
    if (!isVisible) return;
    // Wait for the fade-in to finish before starting the fill cycle
    const startDelay = setTimeout(() => {
      setActiveIndex(0);
    }, statsData.length * 120 + 600);

    return () => clearTimeout(startDelay);
  }, [isVisible]);

  useEffect(() => {
    if (activeIndex < 0) return;
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % statsData.length);
    }, 1200); // each circle stays filled for 1.2s then moves to next
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section
      id="ProfessionalSec"
      ref={sectionRef}
      className="pt-[40px] pb-[14px] sm:pt-[55px] sm:pb-[35px] bg-white overflow-hidden"
    >
      {/* MainHead center */}
      <div className="text-center mb-[20px] sm:mb-[30px] px-4">
        <h1
          className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal uppercase text-[#4c4c4c] tracking-[0.5px] leading-[1.3]"
          style={{ fontFamily: "'Mulish', sans-serif" }}
        >
          <span className="font-bold text-black">PROFESSIONAL</span> HOME INTERIOR DESIGN COMPANY
        </h1>
      </div>

      {/* ProList */}
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        <ul ref={listRef} className="flex sm:flex-wrap sm:justify-center overflow-x-auto sm:overflow-x-visible gap-[10px] sm:gap-0 snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0">
          {statsData.map((stat, index) => (
            <li
              key={index}
              className={`p-[5px] flex-shrink-0 w-[110px] min-[390px]:w-[125px] sm:flex-shrink sm:w-1/4 md:w-1/5 lg:w-[16.6666%] lg:px-[14px] snap-center transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[30px]'
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Round */}
              <div
                className={`group rounded-full w-[104px] h-[104px] min-[360px]:w-[110px] min-[360px]:h-[110px] min-[390px]:w-[118px] min-[390px]:h-[118px] sm:w-[134px] sm:h-[134px] xl:w-[150px] xl:h-[150px] mx-auto flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out ${activeIndex === index
                  ? 'bg-[#814882] shadow-none'
                  : 'bg-white shadow-[inset_0_0_0_2px_#d5d5d5,inset_0_2px_4px_rgba(0,0,0,0.08)] hover:bg-[#814882]'
                  }`}
              >
                <div className="text-center">
                  {/* Title */}
                  <div className={`font-semibold mb-[3px] min-[390px]:mb-[4px] text-[14px] min-[390px]:text-[15px] sm:text-[17px] xl:text-[18px] uppercase transition-colors duration-700 group-hover:text-white ${activeIndex === index ? 'text-white' : 'text-[#814882]'
                    }`}>
                    {stat.title}
                  </div>
                  {/* Sub */}
                  <div className={`text-[11px] min-[390px]:text-[12px] sm:text-[13px] xl:text-[14px] transition-colors duration-700 group-hover:text-white leading-tight ${activeIndex === index ? 'text-white' : 'text-[#333]'
                    }`}>
                    {stat.sub}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsBar;
