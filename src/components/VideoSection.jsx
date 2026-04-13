import React, { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // 👉 Use your own thumbnail (no watermark)
  const thumbnailUrl = '/images/video_thumbnail.png';

  const videoId = 'EuWIN_VNirM';

  return (
    <section id="videoSec" className="relative py-10">
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">

          {/* ================= THUMBNAIL ================= */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative group"
            >
              {/* Image */}
              <img
                src={thumbnailUrl}
                alt="Interior Design"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                {/* Play Button */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#000">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="mt-6 text-white font-bold uppercase text-[22px] md:text-[36px] lg:text-[48px] tracking-wide">
                  Corporate Story
                </h2>

                {/* Subtitle */}
                <p className="mt-2 text-white/80 text-sm md:text-lg border-b border-white/50 pb-1 group-hover:text-[#814882] group-hover:border-[#814882] transition">
                  Watch Video
                </p>
              </div>
            </button>
          )}

          {/* ================= VIDEO ================= */}
          {isPlaying && (
            <div className="relative w-full h-full">

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#814882] transition"
              >
                ✕
              </button>

              {/* Video */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3`}
                title="Interior Design Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VideoSection;