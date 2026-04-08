import React, { useEffect, useRef, useState, useCallback } from 'react';

const customers = [
  {
    name: 'Ms. Honey Rose',
    msg: 'Finding a passionate professional to craft my…',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    link: '/testimonials/client/honey-rose/',
  },
  {
    name: 'Prannoy HS',
    msg: 'Structured, organized and pleasant to deal with.…',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    link: '/testimonials/client/prannoy-hs/',
  },
  {
    name: 'Mr. Suresh Chandran',
    msg: 'Working with Woodland was such a wonderful…',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    link: '/testimonials/client/mr-suresh-chandran-kallara-kottayam/',
  },
  {
    name: 'Mr. Johnson Daniel',
    msg: 'Dear Woodland team, we are well pleased…',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    link: '/testimonials/client/mr-johnson-rajan-pathanamthitta/',
  },
  {
    name: 'Mr. Surendra N M & Family',
    msg: 'We are extremely satisfied with the service…',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    link: '/testimonials/client/mr-surendra-n-m-family/',
  },
  {
    name: 'Mr. Kiran Nair & Family',
    msg: 'Proper communication was maintained by Woodland team…',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    link: '/testimonials/client/mr-kiran-nair-family/',
  },
  {
    name: 'Mr. Arun Kumar',
    msg: 'Excellent craftsmanship and timely delivery of…',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    link: '/testimonials/client/mr-arun-kumar/',
  },
  {
    name: 'Ms. Deepa Menon',
    msg: 'Very professional team with great attention to…',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    link: '/testimonials/client/ms-deepa-menon/',
  },
  {
    name: 'Mr. Rajesh Pillai',
    msg: 'Happy with the overall interior work done by…',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80',
    link: '/testimonials/client/mr-rajesh-pillai/',
  },
  {
    name: 'Mrs. Anitha Thomas',
    msg: 'Woodland made our dream home a reality with…',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    link: '/testimonials/client/mrs-anitha-thomas/',
  },
];

const CustomerSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const intervalRef = useRef(null);
  const trackRef = useRef(null);

  const getItemsPerPage = useCallback(() => {
    const w = window.innerWidth;
    if (w < 480) return 2;
    if (w < 768) return 3;
    if (w < 992) return 4;
    return 5;
  }, []);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newItems = getItemsPerPage();
      setItemsPerPage(newItems);
      setCurrentPage(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getItemsPerPage]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [totalPages]);

  const handleDot = (index) => {
    setCurrentPage(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
  };

  const offset = -(currentPage * (100 / totalPages));

  return (
    <section
      id="customerSec"
      className="py-[45px] min-[575px]:py-[65px] lg:py-[90px] lg:pb-[100px]"
    >
      <div className="w-full max-w-[1400px] px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-['Mulish',sans-serif] font-normal uppercase text-[#1a1a1a] p-0 text-[22px] min-[468px]:text-[25px] min-[575px]:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
            <em className="text-[#814882] font-normal not-italic italic">14000+</em>{' '}
            SATISFIED CUSTOMERS
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden mt-6 min-[468px]:mt-8 xl:mt-14"
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
              setCurrentPage((prev) => (prev + 1) % totalPages);
            }, 4000);
          }}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(customers.length / itemsPerPage) * 100}%`,
              transform: `translateX(${offset}%)`,
            }}
          >
            {customers.map((c, i) => (
              <a
                key={i}
                href={c.link}
                className="customer-item flex-shrink-0 px-[10px] md:px-[15px] block"
                style={{ width: `${100 / customers.length}%` }}
              >
                {/* Round image */}
                <div className="customer-roundBx w-[132px] h-[132px] md:w-[145px] md:h-[145px] lg:w-[174px] lg:h-[174px] shadow-[0_3px_20px_0_rgba(0,0,0,0.1)] bg-white mx-auto mb-2.5 md:mb-[15px] lg:mb-5 border-[7px] border-white rounded-full relative">
                  <div className="w-full h-full relative overflow-hidden rounded-full z-[2]">
                    <img
                      src={c.image}
                      alt={c.name}
                      width="160"
                      height="160"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name & message */}
                <div className="text-center">
                  <div className="text-base min-[575px]:text-[17px] md:text-lg lg:text-xl mb-[5px] min-[575px]:mb-1.5 md:mb-[7px] lg:mb-2 text-[#814882]">
                    {c.name}
                  </div>
                  <div className="text-[13px] min-[575px]:text-sm lg:text-[15px] text-[#4c4c4c] leading-relaxed">
                    {c.msg}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-[30px] min-[575px]:mt-[40px] lg:mt-[50px]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 ${currentPage === i ? 'bg-[#814882]' : 'bg-[#dbdbdb]'
                }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
