import React, { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'HohSXHPC5-c';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section id="videoSec" className="relative">
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        <div className="w-full h-[285px] min-[575px]:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] min-[1390px]:h-[750px] relative">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative block cursor-pointer border-0 p-0 bg-black"
              aria-label="Play video"
            >
              <img
                src={thumbnailUrl}
                alt="Woodland Furniture Corporate Video"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-wrap justify-center content-center">
                {/* Play button */}
                <div className="w-[34px] h-[34px] min-[575px]:w-[44px] min-[575px]:h-[44px] lg:w-[55px] lg:h-[55px] xl:w-[66px] xl:h-[66px] min-[1390px]:w-[77px] min-[1390px]:h-[77px] min-[1681px]:w-[88px] min-[1681px]:h-[88px] mb-[30px] min-[575px]:mb-[35px] lg:mb-[45px] xl:mb-[55px] min-[1390px]:mb-[65px] min-[1681px]:mb-[75px] rounded-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.2)] flex items-center justify-center animate-playBtn">
                  <svg
                    className="w-[9px] min-[575px]:w-[11px] lg:w-[13px] xl:w-[15px] min-[1390px]:w-[19px] min-[1681px]:w-[21px] ml-[2px]"
                    viewBox="0 0 24 24"
                    fill="#333"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Title */}
                <div className="w-full text-center text-white font-bold uppercase text-[24px] min-[575px]:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] min-[1390px]:text-[54px] min-[1681px]:text-[65px] mb-[18px] min-[575px]:mb-[24px] lg:mb-[28px] xl:mb-[32px] min-[1681px]:mb-[40px]">
                  Corporate story
                </div>
                {/* Watch Video */}
                <div className="w-fit text-center text-white font-light text-[12px] min-[575px]:text-[15px] lg:text-[18px] xl:text-[22px] min-[1390px]:text-[24px] relative after:absolute after:content-[''] after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:bg-white hover:text-[#814882] hover:after:bg-[#814882] transition-all duration-500">
                  Watch Video
                </div>
              </div>
            </button>
          ) : (
            <iframe
              width="1920"
              height="929"
              loading="lazy"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0`}
              title="Woodland Furniture & Home Interior"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
