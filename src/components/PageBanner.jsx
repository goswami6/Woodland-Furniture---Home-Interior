import React from 'react';

const PageBanner = ({ desktopImage, mobileImage, overlayText }) => {
  return (
    <section id="InnerBanner" className="w-full overflow-hidden relative !mt-0 !pt-0">
      {overlayText ? (
        <div className="w-full h-[300px] min-[468px]:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] min-[1441px]:h-[600px] !mt-0 !pt-0">
          <picture>
            <source media="(min-width: 468px)" srcSet={desktopImage} />
            <img
              src={mobileImage || desktopImage}
              alt=""
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>
          {/* Dark gradient for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 flex items-center justify-center z-[2]">
            <h1 className="text-white font-extrabold uppercase tracking-wide text-center leading-none
              text-[32px] min-[468px]:text-[42px] sm:text-[56px] md:text-[72px] lg:text-[90px] xl:text-[110px] min-[1441px]:text-[130px]"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4), 0 0 60px rgba(0,0,0,0.2)' }}
            >
              {overlayText}
            </h1>
          </div>
        </div>
      ) : (
        <div className="w-full relative">
          <picture>
            <source media="(min-width: 468px)" srcSet={desktopImage} />
            <img
              src={mobileImage || desktopImage}
              alt=""
              className="w-full h-auto block"
              loading="eager"
            />
          </picture>
          {/* Dark gradient for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>
      )}
    </section>
  );
};

export default PageBanner;
