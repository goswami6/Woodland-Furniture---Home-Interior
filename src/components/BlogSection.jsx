import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "How Woodland Interiors Turned Interior Design into a Complete Lifestyle Experience",
    date: 'March 27, 2026',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    link: '/blog',
  },
  {
    title: 'Creating Seamless Interiors with Handleless Kitchen Designs',
    date: 'March 06, 2026',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    link: '/blog',
  },
  {
    title: "A Dream Home, Made Picture-perfect With Woodland at Pune",
    date: 'February 20, 2026',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    link: '/blog',
  },
  {
    title: 'Century Ethos Apartment Interior Design in Bengaluru – A Modern Luxury Home',
    date: 'February 06, 2026',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
    link: '/blog',
  },
  {
    title: "Why Woodland Furniture Is Pune's Most Trusted Interior Design Company",
    date: 'January 29, 2026',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    link: '/blog',
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const getItemsPerView = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 575) return 2;
    return 1;
  }, []);

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newItems = getItemsPerView();
      setItemsPerView(newItems);
      setCurrentIndex((prev) => Math.min(prev, blogs.length - newItems));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerView]);

  const maxIndex = Math.max(0, blogs.length - itemsPerView);

  useEffect(() => {
    if (isHovered || isDragging) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, isDragging, maxIndex]);

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    setDragOffset(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 60 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (dragOffset < -60 && currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
    setDragOffset(0);
  };

  const itemWidthPercent = 100 / itemsPerView;
  const gapPx = 15;
  const translateX = `calc(-${currentIndex * itemWidthPercent}% - ${currentIndex * gapPx}px + ${isDragging ? dragOffset : 0}px)`;

  return (
    <section
      id="blogs"
      className="py-[25px] min-[468px]:py-[35px] min-[575px]:py-[45px] md:py-[50px] lg:py-[60px] min-[1390px]:py-[70px] min-[1681px]:py-[80px] bg-white overflow-hidden"
    >
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        {/* Header: Title + View All */}
        <div className="flex items-center justify-between mb-[20px] min-[468px]:mb-[25px] min-[575px]:mb-[30px] lg:mb-[35px]">
          <h2
            className="text-[22px] min-[468px]:text-[24px] min-[575px]:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] min-[1390px]:text-[38px] min-[1681px]:text-[44px] font-bold uppercase text-[#333] leading-[1.2]"
            style={{ fontFamily: "'Mulish', sans-serif" }}
          >
            LATEST BLOGS
          </h2>
          <Link
            to="/blog"
            className="hoveranim blog-view-btn border border-[#814882] text-[#814882] rounded-[5px] px-[15px] min-[468px]:px-[20px] lg:px-[25px] py-[8px] min-[468px]:py-[10px] text-[12px] min-[468px]:text-[13px] lg:text-[14px] min-[1681px]:text-[16px] font-medium hover:bg-[#814882] hover:text-white transition-colors whitespace-nowrap"
          >
            <span>View All Blog</span>
          </Link>
        </div>

        {/* Blog Slider */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
            style={{
              transform: `translateX(${translateX})`,
              gap: `${gapPx}px`,
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `calc(${itemWidthPercent}% - ${gapPx * (itemsPerView - 1) / itemsPerView}px)` }}
              >
                <Link to={blog.link} className="block group" draggable={false}>
                  <div className="overflow-hidden rounded-t-[5px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[12px] min-[468px]:p-[15px] lg:p-[18px] min-[1681px]:p-[22px] border border-t-0 border-[#eee] rounded-b-[5px]">
                    <h3 className="text-[14px] min-[468px]:text-[15px] min-[575px]:text-[16px] lg:text-[17px] min-[1681px]:text-[20px] font-semibold text-[#333] leading-[1.4] mb-[8px] min-[468px]:mb-[10px] group-hover:text-[#814882] transition-colors line-clamp-2"
                      style={{ fontFamily: "'Mulish', sans-serif" }}
                    >
                      {blog.title}
                    </h3>
                    <div className="text-[12px] min-[468px]:text-[13px] lg:text-[14px] min-[1681px]:text-[16px] text-[#999]">
                      {blog.date}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-[8px] mt-[20px] min-[468px]:mt-[25px]">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-[8px] h-[8px] min-[468px]:w-[10px] min-[468px]:h-[10px] rounded-full transition-colors border-none cursor-pointer ${i === currentIndex ? 'bg-[#814882]' : 'bg-[#dbdbdb]'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
