import React, { useState, useEffect, useRef } from 'react';

const timelineSteps = [
  { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M32 12c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16 8c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2c0-7.7-8-6-10-6H48zM16 36c-3.3 0-10 1.7-10 6v2c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2c0-4.3-6.7-6-10-6H16z'/%3E%3C/svg%3E", label: 'Talk to our Interior Designer & Get an Estimate' },
  { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M50 8H14c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zM28 44l-8-8 2.8-2.8L28 38.4l13.2-13.2L44 28 28 44z'/%3E%3C/svg%3E", label: 'Detailed Drawing and Approval' },
  { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M52 20H42V12c0-2.2-1.8-4-4-4H26c-2.2 0-4 1.8-4 4v8H12c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zM26 12h12v8H26V12zm10 28h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4v-4c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2z'/%3E%3C/svg%3E", label: 'Production at Own Factories' },
  { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M56 28h-4V16c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h2c0 4.4 3.6 8 8 8s8-3.6 8-8h12c0 4.4 3.6 8 8 8s8-3.6 8-8h2c2.2 0 4-1.8 4-4v-8l-4-4zM18 48c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm28 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6-12h-8V28h5.2l2.8 2.8V36z'/%3E%3C/svg%3E", label: 'Material Delivery & Execution' },
  { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23814882'%3E%3Cpath d='M42 18c-2 0-3.8.8-5.2 2H27.2c-1.4-1.2-3.2-2-5.2-2-4.4 0-8 3.6-8 8v2c0 5 3.2 9.2 7.6 10.8L32 46l10.4-7.2C46.8 37.2 50 33 50 28v-2c0-4.4-3.6-8-8-8z'/%3E%3C/svg%3E", label: 'On Time Project Hand Over' },
];

const processSteps = [
  {
    id: 'design',
    title: 'Design',
    image: 'https://images.openai.com/static-rsc-4/YvGqf7oNx1Lyr9M7j-qNBulszfre6hmwMrpyNTlanbeYwRzWYtS6k4GseLqlkoE8uO_eyMlgJWy174_NQheNcS907a7xrqeTAUODfsMRjFUhrqJ7T-XxInDpyMsWQSEShEOqaew24P3gvWn42bKAjrROAOQlKo7KE_k1kAyL9uqLjZLgCfSZWdmrztu7r5fm?purpose=fullsize',
    items: [
      'Project is allocated to a designer with clear instructions from the business development manager who initially deals with the client.',
      'Study the requirements in detail: In discussion with the client, with the help of floor plan, designer understands the space and requirements carefully.',
      'Actual measurements and drawing: Designer visits the house/ flat and takes actual measurement of the space as per the requirements discussed.',
      'Detailed drawing is prepared and sent to the client.',
      'Finalization of drawings in mutual agreement. Drawings sent to the factory for production.',
    ],
    cta: 'Meet Our Interior Designer',
  },
  {
    id: 'production',
    title: 'Production',
    image: 'https://images.openai.com/static-rsc-4/c9GB9z-Nuq7APZVLCoL4O_Vst4E-P9hLh-V_Cs8KHH2gZRbxCnT29mT5-w3PhK-9DpZslrFlBAr4uaSSqdE5589HcGcUkipe1XJdXKXJ6AIf0mqHTQ0v9zI0kmHuReIbpJqjfEzzB_nBeA2e7SSxSkjIYNqCBeECpEQ5VTUHsY-exNK6tdztGPnKfG1DX3rJ?purpose=fullsize',
    items: [
      'Clarifications and confirmations made between factory manager and designer.',
      'A revisit to the house/ flat is made to repeat the actual measurements to confirm it with drawings received in the factory.',
      'Production is scheduled on a date in agreement with client, as per confirmation of site status by project manager.',
    ],
    cta: 'Get Customized Home Interiors',
  },
  {
    id: 'execution',
    title: 'Execution',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
    items: [
      'Project implementation is planned well in advance by the team head. He arranges for the installation immediately upon delivery of products at site.',
      'We have our own logistics team to provide easy and safe transportation for furnishings to site.',
      'Number of days expected for installation as per the volume of work is informed to client.',
    ],
    cta: 'Plan an Interior Project',
  },
  {
    id: 'handover',
    title: 'Project Handover',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80',
    items: [
      'We are totally committed to on-time & accurate completion of every project.',
      'Our team ensures no debris, noise or disturbance is caused and also guarantees the safety or welfare of the surrounding neighbors.',
      'Our team will leave your site only after getting the satisfaction report.',
    ],
    cta: 'Deal Directly with the Company',
  },
];

const DesignNBuildPage = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '' });
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timelineSteps.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(null);
    setForm({ name: '', phone: '', email: '', location: '' });
  };

  return (
    <>
      {/* Banner */}
      <section className="relative w-full">
        <picture>
          <source media="(min-width: 468px)" srcSet="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80" />
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" alt="Design N Build" className="w-full block" />
        </picture>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px]">
            <div className="text-white">
              <strong className="block text-[22px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-tight" style={{ fontFamily: "'Mulish', sans-serif" }}>
                Design, Production & Execution
              </strong>
              <span className="block text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-light mt-1 sm:mt-2">
                By One Company
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Timeline */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
              Design {'\u2018'}N{'\u2019'} Build
            </h1>
          </div>
          <div className="max-w-[1100px] mx-auto mb-10 sm:mb-12 md:mb-14">
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
              Complete customization by qualified and experienced interior designers assigned to the client is the system of Woodland Furniture. We provide complete solutions to your interiors including sharp and focused spatial planning, interior design, furnishings, and decoration. First we make the design in discussion with the client, get approval and then build it exactly as per plan. Each branch has expert designers, working closely with clients in cooperation with business development managers, factory and project installation team.
            </p>
          </div>

          {/* Sub heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
              100% Customized Home Interiors By Experts
            </h2>
          </div>

          {/* Timeline Steps */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4 max-w-[1100px] mx-auto">
            {timelineSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => { setActiveStep(i); clearInterval(intervalRef.current); }}
                  style={{ width: '140px' }}
                >
                  <div
                    className={`w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full border-2 flex items-center justify-center transition-all duration-500 ${activeStep === i ? 'bg-[#814882] border-[#814882]' : 'bg-white border-[#814882]'
                      }`}
                  >
                    <img
                      src={step.icon}
                      alt={step.label}
                      className={`w-[32px] h-[32px] lg:w-[36px] lg:h-[36px] transition-all duration-500 ${activeStep === i ? 'brightness-0 invert' : ''
                        }`}
                    />
                  </div>
                  <p className={`text-[11px] lg:text-[12px] text-center mt-2 leading-tight transition-colors duration-300 ${activeStep === i ? 'text-[#814882] font-semibold' : 'text-[#666]'
                    }`}>
                    {step.label}
                  </p>
                </div>
                {i < timelineSteps.length - 1 && (
                  <div className="flex-shrink-0 w-[30px] lg:w-[50px] h-[2px] bg-[#814882] mt-[-20px]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {timelineSteps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center flex-shrink-0"
                onClick={() => { setActiveStep(i); clearInterval(intervalRef.current); }}
                style={{ width: '100px' }}
              >
                <div
                  className={`w-[56px] h-[56px] rounded-full border-2 flex items-center justify-center transition-all duration-500 ${activeStep === i ? 'bg-[#814882] border-[#814882]' : 'bg-white border-[#814882]'
                    }`}
                >
                  <img
                    src={step.icon}
                    alt={step.label}
                    className={`w-[26px] h-[26px] transition-all duration-500 ${activeStep === i ? 'brightness-0 invert' : ''
                      }`}
                  />
                </div>
                <p className={`text-[10px] text-center mt-2 leading-tight ${activeStep === i ? 'text-[#814882] font-semibold' : 'text-[#666]'
                  }`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Alternating Image+Text */}
      {processSteps.map((step, idx) => (
        <section key={step.id} className="w-full bg-white py-10 sm:py-14 md:py-16 border-t border-[#eee]">
          {/* Mobile Image */}
          <div className="md:hidden mb-6">
            <img src={step.image} alt={step.title} className="w-full" />
          </div>
          <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Desktop Image */}
              <div className="hidden md:block md:w-[48%] flex-shrink-0">
                <img src={step.image} alt={step.title} className="w-full rounded-sm" />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-light text-[#333] leading-snug mb-5 md:mb-6" style={{ fontFamily: "'Mulish', sans-serif" }}>
                  {step.title}
                </h3>
                <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.8] list-disc pl-5">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8">
                  <button
                    onClick={() => setModalOpen(step.id)}
                    className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
                  >
                    {step.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4" onClick={() => setModalOpen(null)}>
          <div className="bg-white rounded-lg w-full max-w-[500px] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#eee]">
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#333]" style={{ fontFamily: "'Mulish', sans-serif" }}>
                {processSteps.find((s) => s.id === modalOpen)?.cta}
              </h3>
              <button onClick={() => setModalOpen(null)} className="text-[#999] hover:text-[#333] text-[24px] leading-none cursor-pointer">&times;</button>
            </div>
            <div className="px-6 py-5">
              <p className="text-[13px] sm:text-[14px] text-[#666] text-center mb-5">
                Please fill out the enquiry below and we will get back to you as soon as possible
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ddd] rounded text-[14px] text-[#333] focus:outline-none focus:border-[#814882]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ddd] rounded text-[14px] text-[#333] focus:outline-none focus:border-[#814882]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ddd] rounded text-[14px] text-[#333] focus:outline-none focus:border-[#814882]"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Project Location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#ddd] rounded text-[14px] text-[#333] focus:outline-none focus:border-[#814882]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default DesignNBuildPage;
