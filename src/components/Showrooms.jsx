import React from 'react';

const Showrooms = () => {
  return (
    <section className="py-[35px] sm:py-[50px] lg:py-[60px] bg-[#f8f8f8]">
      {/* Section heading */}
      <div className="relative text-center mb-2">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(112,112,112,0.2)]"></div>
        <h2 className="relative inline-block bg-[#f8f8f8] px-[25px] sm:px-[35px] text-[22px] sm:text-[26px] lg:text-[30px] font-normal uppercase text-[#333]" style={{ fontFamily: "'Mulish', sans-serif" }}>
          VISIT OUR SHOWROOM
        </h2>
      </div>
      <p className="text-center text-[#4c4c4c] text-[13px] sm:text-[14px] mb-[25px] sm:mb-[35px]">
        Experience our craftsmanship in person
      </p>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-6 sm:p-8 text-center">
          <h3 className="font-semibold text-[#814882] text-[18px] sm:text-[20px] uppercase mb-3">
            PUNE
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-relaxed mb-4">
            S no 37, Ajinkyatara Ind. Estate, Nanded Sinhgad Rd,<br />
            Ghule Patil Nagar, Pandurang Industrial Area,<br />
            Nanded, Pune, Maharashtra 411068
          </p>
          <a href="tel:+918999046879" className="inline-flex items-center gap-2 text-[#814882] font-semibold text-[15px] sm:text-[16px] hover:text-[#6a3a6b] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            +91 89990 46879
          </a>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=+918999046879&text=Hi%20Woodland,%20I%20would%20like%20to%20discuss%20about%20a%20furniture%20or%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25d366] font-medium text-[14px] hover:text-[#1da851] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
