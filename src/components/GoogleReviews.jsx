import React, { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Rajesh Sharma',
    location: 'Pune',
    rating: 5,
    date: '2 months ago',
    text: 'Woodland Furniture did an amazing job with our 3BHK flat interior. The modular kitchen and wardrobes are top quality. The team was very professional and delivered on time. Highly recommended for anyone looking for premium interiors in Pune!',
    avatar: '/reviews/r1.jpeg',
  },
  {
    name: 'Priya Deshmukh',
    location: 'Kothrud, Pune',
    rating: 5,
    date: '3 months ago',
    text: 'We got our entire home designed by Woodland — living room, bedroom, kitchen, pooja room. The 3D visualization they showed us was exactly what we got. Excellent craftsmanship and the wood quality is outstanding. Thank you team!',
    avatar: '/reviews/r2.jpeg',
  },
  {
    name: 'Amit Kulkarni',
    location: 'Baner, Pune',
    rating: 5,
    date: '1 month ago',
    text: 'Got our office interior done from Woodland Furniture. From cabin design to reception area, everything looks premium and professional. Their space planning was excellent — made our small office look spacious. Will definitely recommend!',
    avatar: '/reviews/r3.jpeg',
  },
  {
    name: 'Sneha Patil',
    location: 'Wakad, Pune',
    rating: 4,
    date: '4 months ago',
    text: 'Very happy with the modular kitchen they designed for us. The soft-close fittings, granite countertop and storage solutions are all top class. The installation team was careful and clean. Good value for money compared to other brands.',
    avatar: '/reviews/r4.jpeg',
  },
  {
    name: 'Vikram Joshi',
    location: 'Hinjewadi, Pune',
    rating: 5,
    date: '2 weeks ago',
    text: 'Exceptional work by Woodland team! They designed our complete 2BHK in Hinjewadi. The TV unit, shoe rack, and wardrobe designs are modern and functional. Suresh sir personally supervised the project. 100% satisfied with the result!',
    avatar: '/reviews/r5.jpeg',
  },
  {
    name: 'Anjali Mehta',
    location: 'Aundh, Pune',
    rating: 5,
    date: '5 months ago',
    text: 'We compared multiple interior companies in Pune before choosing Woodland. Their pricing was transparent, material quality is genuine Teak-wood, and the final result exceeded our expectations. The bedroom wardrobe with loft is beautifully done!',
    avatar: '/reviews/r6.jpeg',
  },
  {
    name: 'Sunil Pawar',
    location: 'Sinhagad Rd, Pune',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best furniture and interior company in Pune! Got our dining table, sofa set, and mandir custom made. The carving work on the mandir is incredible. Factory visit was impressive — they showed us the entire manufacturing process. Highly trustworthy!',
    avatar: '/reviews/r7.jpeg',
  },
];

const GoogleG = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarRating = ({ rating, size = 'sm' }) => {
  const dim = size === 'lg' ? 'w-[18px] h-[18px]' : 'w-[14px] h-[14px]';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} viewBox="0 0 24 24" className={dim} fill={star <= rating ? '#FBBC04' : '#dadce0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const GoogleReviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 370, behavior: 'smooth' });
  };

  // Auto-scroll every 3s, pause on hover
  const autoRef = useRef(null);
  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 370, behavior: 'smooth' });
      }
    }, 3000);
  };
  const stopAuto = () => clearInterval(autoRef.current);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[45px] min-[575px]:py-[65px] lg:py-[90px] overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf7fb 0%, #ffffff 100%)' }}
    >
      <div className="w-full max-w-[1400px] px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">

        {/* ── Section heading (matches homepage pattern) ── */}
        <div className="section-head mb-[25px] sm:mb-[35px]">
          <h2>GOOGLE REVIEWS</h2>
        </div>

        {/* ── Rating summary bar ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 sm:mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Left — Google badge */}
          <div className="flex items-center gap-4">
            <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-white shadow-[0_3px_20px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0">
              <GoogleG className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[32px] sm:text-[38px] font-black text-[#1a1a1a]" style={{ fontFamily: "'Mulish', sans-serif" }}>4.8</span>
                <span className="text-[15px] text-[#999] font-medium">/5</span>
              </div>
              <div className="flex items-center gap-2 -mt-1">
                <StarRating rating={5} size="lg" />
                <span className="text-[13px] text-[#888]">(127 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right — Nav arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className={`w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border-[#814882] text-[#814882] hover:bg-[#814882] hover:text-white cursor-pointer shadow-[0_2px_10px_rgba(129,72,130,0.15)]' : 'border-[#e0e0e0] text-[#ccc] cursor-default'}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className={`w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border-[#814882] text-[#814882] hover:bg-[#814882] hover:text-white cursor-pointer shadow-[0_2px_10px_rgba(129,72,130,0.15)]' : 'border-[#e0e0e0] text-[#ccc] cursor-default'}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* ── Cards carousel ── */}
        <div className="relative" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-0.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start group relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 h-full border border-[#eee] shadow-[0_3px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(129,72,130,0.14)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden">

                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#814882] via-[#a66ba7] to-[#814882] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quote icon */}
                  <div className="mb-4">
                    <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#814882]/10 group-hover:text-[#814882]/20 transition-colors" fill="currentColor">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>
                  </div>

                  {/* Review text */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#4c4c4c] leading-[1.8] mb-6 line-clamp-4 min-h-[100px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {review.text}
                  </p>

                  {/* Rating + date */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <StarRating rating={review.rating} />
                    <span className="text-[11px] text-[#aaa] font-medium tracking-wide uppercase">{review.date}</span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e0dce1] to-transparent mb-5" />

                  {/* Reviewer info */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative shrink-0">
                      <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white shadow-[0_3px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Google verified tick */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
                        <GoogleG className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] sm:text-[15px] font-bold text-[#1a1a1a] truncate" style={{ fontFamily: "'Mulish', sans-serif" }}>{review.name}</p>
                      <p className="text-[12px] text-[#999] flex items-center gap-1 mt-0.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#814882] opacity-60"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar — overall + CTA ── */}
        <div
          className="mt-[30px] sm:mt-[45px] flex flex-col sm:flex-row items-center justify-center gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <div className="flex items-center gap-4 bg-white rounded-2xl px-7 py-4 shadow-[0_3px_25px_rgba(0,0,0,0.06)] border border-[#eee]">
            <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-[#f3ecf4] to-[#efe6f0] flex items-center justify-center">
              <GoogleG className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[16px] sm:text-[17px] font-bold text-[#1a1a1a]" style={{ fontFamily: "'Mulish', sans-serif" }}>
                4.8 <span className="font-normal text-[#999] text-[14px]">/ 5</span>
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#888] -mt-0.5">127 verified reviews on Google</p>
            </div>
            <div className="ml-3 pl-4 border-l border-[#eee]">
              <StarRating rating={5} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
