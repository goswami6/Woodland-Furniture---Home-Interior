import React, { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our design consultant will contact you soon.');
    setFormData({ name: '', email: '', phone: '', city: '', message: '' });
  };

  return (
    <section className="py-[35px] sm:py-[50px] lg:py-[70px] xl:py-[90px] bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header with line */}
        <div className="relative text-center mb-[25px] sm:mb-[35px]">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(112,112,112,0.2)] z-0"></div>
          <h2 className="relative z-[1] inline-block bg-[#f8f8f8] px-[25px] sm:px-[30px] lg:px-[40px] text-[26px] sm:text-[28px] lg:text-[28px] xl:text-[32px] font-normal uppercase text-black">
            Book a Free <span className="text-[#814882] font-semibold sm:font-normal">Design Consultation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Steps */}
          <div>
            <p className="text-[#4c4c4c] text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed mb-8">
              Share your requirements with us and our expert interior designers will get in touch with you to discuss your dream home interiors. We offer free consultation and estimate.
            </p>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Share Requirements', desc: 'Tell us about your home and interior preferences.' },
                { step: '02', title: 'Meet Our Designer', desc: 'Visit our showroom or book a home visit.' },
                { step: '03', title: 'Get 3D Design', desc: 'Visualize your interiors before we start.' },
                { step: '04', title: 'Project Execution', desc: 'We deliver in 40 working days with 10-year warranty.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-[50px] h-[50px] rounded-full border-2 border-[#814882] flex items-center justify-center shrink-0">
                    <span className="text-[#814882] font-bold text-[14px]">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-black text-[16px] sm:text-[17px]">{item.title}</h4>
                    <p className="text-[#4c4c4c] text-[13px] sm:text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white p-6 sm:p-8 shadow-[0_3px_25px_rgba(0,0,0,0.08)]">
            <h3 className="text-[20px] sm:text-[22px] font-medium text-black mb-5">Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-[14px] bg-white border border-[#ddd] rounded-[5px] text-[#263948] text-[14px] sm:text-[15px] focus:outline-none focus:border-[#814882] transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-[14px] bg-white border border-[#ddd] rounded-[5px] text-[#263948] text-[14px] sm:text-[15px] focus:outline-none focus:border-[#814882] transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-[14px] bg-white border border-[#ddd] rounded-[5px] text-[#263948] text-[14px] sm:text-[15px] focus:outline-none focus:border-[#814882] transition"
              />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-[14px] bg-white border border-[#ddd] rounded-[5px] text-[#263948] text-[14px] sm:text-[15px] focus:outline-none focus:border-[#814882] transition appearance-none"
              >
                <option value="">Select City</option>
                <option>Pune</option>
                <option>Other</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-[14px] bg-white border border-[#ddd] rounded-[5px] text-[#263948] text-[14px] sm:text-[15px] focus:outline-none focus:border-[#814882] transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-[14px] bg-[#814882] hover:bg-[#6a3a6b] text-white text-[14px] sm:text-[15px] uppercase tracking-wider rounded-[5px] transition-colors"
              >
                Get Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
