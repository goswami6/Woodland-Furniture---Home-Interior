import React, { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Rajesh Sharma',
    location: 'Pune',
    rating: 5,
    date: '2 months ago',
    text: 'Woodland Furniture did an amazing job with our 3BHK flat interior. The modular kitchen and wardrobes are top quality. The team was very professional and delivered on time. Highly recommended for anyone looking for premium interiors in Pune!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
  {
    name: 'Priya Deshmukh',
    location: 'Kothrud, Pune',
    rating: 5,
    date: '3 months ago',
    text: 'We got our entire home designed by Woodland — living room, bedroom, kitchen, pooja room. The 3D visualization they showed us was exactly what we got. Excellent craftsmanship and the wood quality is outstanding. Thank you team!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Amit Kulkarni',
    location: 'Baner, Pune',
    rating: 5,
    date: '1 month ago',
    text: 'Got our office interior done from Woodland Furniture. From cabin design to reception area, everything looks premium and professional. Their space planning was excellent — made our small office look spacious. Will definitely recommend!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Sneha Patil',
    location: 'Wakad, Pune',
    rating: 4,
    date: '4 months ago',
    text: 'Very happy with the modular kitchen they designed for us. The soft-close fittings, granite countertop and storage solutions are all top class. The installation team was careful and clean. Good value for money compared to other brands.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Vikram Joshi',
    location: 'Hinjewadi, Pune',
    rating: 5,
    date: '2 weeks ago',
    text: 'Exceptional work by Woodland team! They designed our complete 2BHK in Hinjewadi. The TV unit, shoe rack, and wardrobe designs are modern and functional. Suresh sir personally supervised the project. 100% satisfied with the result!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    name: 'Anjali Mehta',
    location: 'Aundh, Pune',
    rating: 5,
    date: '5 months ago',
    text: 'We compared multiple interior companies in Pune before choosing Woodland. Their pricing was transparent, material quality is genuine Teak-wood, and the final result exceeded our expectations. The bedroom wardrobe with loft is beautifully done!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    name: 'Sunil Pawar',
    location: 'Sinhagad Rd, Pune',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best furniture and interior company in Pune! Got our dining table, sofa set, and mandir custom made. The carving work on the mandir is incredible. Factory visit was impressive — they showed us the entire manufacturing process. Highly trustworthy!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Deepa Nair',
    location: 'Kharadi, Pune',
    rating: 5,
    date: '6 months ago',
    text: 'Woodland designed our dream home interior. From false ceiling to modular kitchen to kids room — everything is perfect. The project was completed within the promised timeline. Special thanks to the design team for their patience with my 100 changes! 😂',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill={star <= rating ? '#FBBC04' : '#dadce0'}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const GoogleReviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section className="py-[30px] sm:py-[50px] lg:py-[65px] bg-white overflow-hidden">
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Google G icon */}
            <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[22px] font-semibold text-[#333]" style={{ fontFamily: "'Mulish', sans-serif" }}>Google Reviews</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[15px] font-bold text-[#333]">4.8</span>
                <StarRating rating={5} />
                <span className="text-[13px] text-[#666]">(127 reviews)</span>
              </div>
            </div>
          </div>
          {/* Nav arrows - desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft ? 'border-[#814882] text-[#814882] hover:bg-[#814882] hover:text-white cursor-pointer' : 'border-[#ddd] text-[#ccc] cursor-default'}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight ? 'border-[#814882] text-[#814882] hover:bg-[#814882] hover:text-white cursor-pointer' : 'border-[#ddd] text-[#ccc] cursor-default'}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Reviews carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] sm:w-[330px] bg-white border border-[#e8e8e8] rounded-xl p-5 sm:p-6 snap-start hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Reviewer info */}
              <div className="flex items-center gap-3 mb-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-[40px] h-[40px] rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-[#333] truncate">{review.name}</p>
                  <p className="text-[11px] text-[#888]">{review.location}</p>
                </div>
                {/* Google icon small */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              {/* Rating + date */}
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={review.rating} />
                <span className="text-[11px] text-[#999]">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-[13px] text-[#4c4c4c] leading-[1.7] line-clamp-4">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Overall badge */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-full px-6 py-3 border border-[#e8e8e8]">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-[13px] sm:text-[14px] font-medium text-[#333]">Rated <span className="font-bold text-[#814882]">4.8/5</span> on Google · 127 Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
