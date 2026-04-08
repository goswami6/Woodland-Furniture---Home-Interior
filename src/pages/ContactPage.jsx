import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Showrooms from '../components/Showrooms';

const stateData = [
  {
    state: 'Maharashtra',
    locations: [
      { name: 'Woodland Furniture, Pune', address: 'S no 37, Ajinkyatara Ind. Estate, Nanded Sinhgad Rd, Ghule Patil Nagar, Pandurang Industrial Area, Nanded, Pune, Maharashtra 411068', phone: '+91 89990 46879', mapUrl: 'https://maps.google.com/?q=Woodland+Furniture+Pune' },
    ],
  },
];

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our design consultant will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white w-[90%] max-w-[500px] p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-4 text-[22px] text-[#999] hover:text-[#333] cursor-pointer">&times;</button>
        <h3 className="text-[20px] sm:text-[24px] font-light text-[#333] mb-5" style={{ fontFamily: "'Mulish', sans-serif" }}>Get Free Estimate</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="w-full px-4 py-3 border border-[#ccc] text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full px-4 py-3 border border-[#ccc] text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-[#f5f5f5] border border-r-0 border-[#ccc] text-[13px] text-[#555]">+91</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required className="w-full px-4 py-3 border border-[#ccc] text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          </div>
          <select name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 border border-[#ccc] text-[14px] text-[#666] outline-none focus:border-[#814882] transition-colors">
            <option value="">Select City</option>
            <option>Pune</option>
            <option>Other</option>
          </select>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-[#ccc] text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors resize-none" />
          <button type="submit" className="w-full py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[14px] uppercase tracking-wider font-medium transition-colors cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [activeState, setActiveState] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PageBanner
        desktopImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
      />

      {/* Heading + Intro */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug mb-5 sm:mb-6">
              Contact The Best Home Interior Designers
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] max-w-[900px] mx-auto">
              At D{'\u2019'}LIFE we want to make finding the designs you love as easy &amp; exciting as possible. To provide stunning solutions to the residential market and to meet the ever-growing demands, we have expanded our showrooms to all over India with presence in Mumbai, Navi Mumbai, Pune, Hyderabad, Bangalore, Madurai, Mysore, Kerala, Chennai, Nagercoil, Coimbatore &amp; Mangalore. Scroll down to find out more locations we serve. Contact us or walk into our showrooms and let our professional interior designers help you decorate your home and find furniture you{'\u2019'}ll love. We would love to help you with your next project!
            </p>
          </div>
        </div>
      </section>

      {/* State Tabs + Location Listings */}
      <section className="w-full bg-[#f9f9f9] py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            {/* State Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
              {stateData.map((s, i) => (
                <button
                  key={s.state}
                  onClick={() => setActiveState(i)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[12px] sm:text-[13px] uppercase tracking-wider font-medium transition-colors cursor-pointer border ${activeState === i
                    ? 'bg-[#814882] text-white border-[#814882]'
                    : 'bg-white text-[#555] border-[#ddd] hover:border-[#814882] hover:text-[#814882]'
                    }`}
                >
                  {s.state}
                </button>
              ))}
            </div>

            {/* Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {stateData[activeState].locations.map((loc, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 border border-[#eee] hover:shadow-md transition-shadow">
                  <h4 className="text-[16px] sm:text-[17px] font-semibold text-[#333] mb-3 pb-2.5 border-b border-[#e0e0e0]" style={{ fontFamily: "'Mulish', sans-serif" }}>
                    {loc.name}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] text-[#4c4c4c] leading-[1.7] mb-4">
                    {loc.address}
                  </p>
                  {loc.cin && (
                    <p className="text-[12px] text-[#888] mb-3">{loc.cin}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-[#814882] hover:text-[#6a3a6b] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      Call: {loc.phone}
                    </a>
                    {loc.mapUrl && (
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-[#2e8b57] hover:text-[#236b43] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Location Map
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion (visible on small screens only) */}
            <div className="block sm:hidden mt-8">
              {stateData.map((s, si) => (
                si !== activeState && (
                  <button
                    key={s.state}
                    onClick={() => setActiveState(si)}
                    className="w-full text-left px-4 py-3 mb-2 bg-white border border-[#eee] text-[13px] font-medium text-[#555] uppercase tracking-wider hover:text-[#814882] cursor-pointer"
                  >
                    {s.state} ({s.locations.length} locations)
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work on Your Dream Home Interiors */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
                Let{'\u2019'}s Work on Your Dream Home Interiors
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80" alt="Interior design - living room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Interior design - kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" alt="Interior design - bedroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=900&q=80" alt="Interior design - dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowModal(true)}
                className="px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
              >
                Start Planning Your Home Interiors Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ContactPage;
