import React, { useState, useEffect } from 'react';

const slides = [
  { desktop: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80', mobile: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { desktop: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80', mobile: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80' },
  { desktop: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1920&q=80', mobile: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80' },
  { desktop: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=80', mobile: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="MainSlider" className="relative w-full overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
          >
            {/* Desktop image */}
            <img
              src={slide.desktop}
              alt=""
              className="hidden sm:block w-full h-full object-cover absolute inset-0"
            />
            {/* Mobile image */}
            <img
              src={slide.mobile}
              alt=""
              className="sm:hidden w-full h-full object-cover absolute inset-0"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-[10px] h-[10px] rounded-full transition-all border border-white/80 ${index === current ? 'bg-white' : 'bg-transparent hover:bg-white/50'}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
