import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Showrooms from '../components/Showrooms';

const implementationTabs = [
  {
    label: 'Consultation',
    content: 'Sales team or design consultants are experts in estimating the cost, understanding possibilities and providing suitable interior design solutions within the budget. They provide top quality assistance to each client right from enquiry through each stage of work till handover of the project.',
  },
  {
    label: 'Interior Design',
    content: 'Designers play the most important role of understanding the requirements and putting them into a practical plan. Each branch has expert full time designers who make use of their experience in providing most suitable products in complete co-operation with clients.',
  },
  {
    label: 'Production',
    content: 'We produce all furniture in our own factory and thus implementation at site takes only a few days. Each item is created using brilliant craftsmanship of skillful people, carefully following the design. Production is always as per schedule, in coordination with the installation team and client.',
  },
  {
    label: 'Execution',
    content: 'Installation team starts execution at site immediately after delivery of materials, under close supervision and quality control. Project manager efficiently leads the team and arrange materials as per requirement and schedule of works.',
  },
  {
    label: 'After Sales Service',
    content: 'We have a dedicated service team to attend service calls and resolve complaints or problems adequately. Clients may call or send email to register a service request at the main office, which will be efficiently handled by the service manager.',
  },
];

const ImplementationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % implementationTabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 overflow-hidden">
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h3 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
            Just One Company for <br />
            Interior Design, Production &amp; Implementation
          </h3>
        </div>

        {/* Circles with border frame */}
        <div className="relative max-w-[1200px] mx-auto mb-6 md:mb-0">
          {/* Border frame behind circles */}
          <div className="hidden md:block absolute top-[50%] left-[8%] right-[8%] h-[70%] -translate-y-1/2 border border-[#e0e0e0] rounded-sm pointer-events-none" />

          {/* Circles row */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-0 md:justify-between relative z-10 md:px-[4%]">
            {implementationTabs.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="flex flex-col items-center cursor-pointer group bg-transparent border-none outline-none"
                >
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                      ? 'w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[190px] lg:h-[190px] bg-[#814882] shadow-lg'
                      : 'w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] bg-white border-2 border-[#e0e0e0] group-hover:border-[#814882]'
                      }`}
                  >
                    <span
                      className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px] font-medium text-center leading-tight px-2 transition-colors duration-300 ${isActive
                        ? 'text-white'
                        : 'text-[#555] group-hover:text-[#814882]'
                        }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Down arrow from active circle */}
          <div
            className="hidden md:flex flex-col items-center relative z-10 -mt-1 transition-all duration-300"
            style={{ marginLeft: `${10 + activeTab * 20}%` }}
          >
            <div className="w-[2px] h-[30px] bg-[#814882]" />
            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#814882]" />
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-[700px] mx-auto bg-[#f5f5f5] rounded-md p-6 sm:p-8 md:p-10 min-h-[100px] mt-4 md:mt-2">
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
            {implementationTabs[activeTab].content}
          </p>
        </div>

        {/* Bottom paragraph */}
        <div className="max-w-[1100px] mx-auto mt-8 sm:mt-10 md:mt-12">
          <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
            It is not only by adopting proper systems but also with effective coordination of teams that we fulfill our promises to clients. Our interior consultants and designers are experts in cost estimation, understanding possibilities and providing acceptable solutions within the budget. With its own factory and most modern production line, we ensure timely delivery of custom-made furniture. In addition, our responsible projects team at each branch location ensures the completion and handover of each interior project within a specific schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Modal Component
const ContactModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/60" />
      <div className="relative bg-white w-full max-w-[500px] p-6 sm:p-8 rounded shadow-xl z-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-4 text-[#333] text-[22px] font-light hover:text-[#814882] cursor-pointer">&times;</button>
        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#333] mb-6 text-center">{title}</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full border border-[#ccc] px-4 py-2.5 text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-[#f5f5f5] border border-r-0 border-[#ccc] text-[13px] text-[#555]">+91</span>
            <input type="tel" placeholder="Contact Number" className="w-full border border-[#ccc] px-4 py-2.5 text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full border border-[#ccc] px-4 py-2.5 text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          <input type="text" placeholder="Project Location" className="w-full border border-[#ccc] px-4 py-2.5 text-[14px] text-[#333] outline-none focus:border-[#814882] transition-colors" />
          <button type="submit" className="w-full py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[14px] uppercase tracking-wider font-medium transition-colors cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Factory Discount Section
const FactoryDiscountSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            <div className="w-full sm:w-auto sm:max-w-[300px]">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" alt="Factory Offer" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-auto sm:max-w-[768px]">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Woodland Furniture Statistics" className="w-full h-auto" />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
            >
              Reach Us to Avail 30% Discount
            </button>
          </div>
        </div>
      </section>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} title="Get 30% Discount" />
    </>
  );
};

// Branch Location Section
const BranchLocationSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-10 sm:py-14 md:py-16">
      <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
        {/* Mobile image */}
        <div className="block md:hidden mb-6">
          <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=900&q=80" alt="Branch Locations" className="w-full h-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-center">
          {/* Left - Content */}
          <div className="w-full md:w-[55%] lg:w-[55%]">
            <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug mb-5 sm:mb-6">
              Visit Our Workshop in Pune
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify mb-6 md:mb-8">
              Visit Woodland Furniture & Home Interior at our workshop in Nanded, Pune. Experience our craftsmanship first-hand, explore material samples, and discuss your project with our design team. We are conveniently located on Nanded Sinhgad Road, Pandurang Industrial Area. Whether you need modular kitchens, custom furniture, or complete home interiors, our team is ready to guide you through every step of the process.
            </p>
            <Link to="/contacts" className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium">
              Get Directions
            </Link>
          </div>
          {/* Right - Image (desktop) */}
          <div className="hidden md:block md:w-[45%] lg:w-[45%]">
            <img src="https://images.openai.com/static-rsc-4/WwZsXsZBaSPn5_PwtsbMpcbbpsvOMGCfyxo0gfPAdCHv5IXHucvSTxx3EKhFZyxwKlvEe9AtIdUWwhCtxxFOTMoZq1MqN-DH_CF_R9yiwvP45hEoDta2_4E6B30GA28vIzZwgtU40uV5dQrFV1chmAfmnGm1Bd4QnmLW1VNoW3R7HSSjRebofmR1Bs4ZxqRk?purpose=fullsize" alt="Branch Locations" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Customer Support Section
const CustomerSupportSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
                Customer Support & After Sales Service
              </h4>
            </div>
            <div className="max-w-[1100px] mx-auto">
              <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify mb-6 md:mb-8">
                We ensure durable furniture for each client and maintain long-term relationships. Our products come with a 10-year warranty and our dedicated customer care department takes care of everything once the project is complete. It is through professionalism and teamwork that we provide the best quality interiors, furnishing, and after sales service. Expert team co-ordinates with clients across every stage, from consultation to post-completion support. We strive to maintain our reputation as the most reliable interior company by providing top-class products and customer support.
              </p>
              <div className="text-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
                >
                  Meet Our Design Consultant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} title="Meet Our Design Consultant" />
    </>
  );
};

const CompanyPage = () => {
  return (
    <>
      <PageBanner
        desktopImage="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80"
        overlayText={<>QUALITY CRAFTSMANSHIP SINCE 2014</>}
      />

      {/* HeadingSection */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-b border-[#e0e0e0]">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-[28px] min-[468px]:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight mb-3 uppercase tracking-wide">
              <span className="font-light">WELCOME TO</span>{' '}
              <span className="font-bold">WOODLAND FURNITURE & HOME INTERIOR</span>
            </h1>
            <h6 className="text-[#2e8b57] text-[16px] sm:text-[18px] md:text-[20px] font-semibold italic">Quality Craftsmanship Since 2014</h6>
          </div>
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333] leading-[1.9] text-justify">
              Woodland Furniture & Home Interiors is Pune's trusted manufacturer of customised furniture and provider of complete interior design solutions since 2014. We specialise in Teak-wood (Sagwan) and Commercial Plywood furniture, as well as modular designs with 3D visualisation. As a direct manufacturer, we deal with clients without intermediaries, ensuring the best quality at fair prices. Our systematic approach — site visit, layout planning, 3D design approval, and expert execution — ensures every project meets our clients' expectations. From modular kitchens to wooden sofas, beds, cupboards, dining tables, mandirs, and curtains, we craft furniture that transforms your space.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Section - Best Interior Design Company */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        {/* Mobile image - visible only on mobile */}
        <div className="block md:hidden mb-6 px-5">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80" alt="Best Interior Design Company in India" className="w-full h-auto" />
        </div>
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-start">
            {/* Left - Image (desktop only) */}
            <div className="hidden md:block md:w-[45%] lg:w-[42%] flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80" alt="Best Interior Design Company in India" className="w-full h-auto" />
            </div>
            {/* Right - Content */}
            <div className="w-full md:w-[55%] lg:w-[58%]">
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#333] mb-4 md:mb-6 leading-tight">
                Best Interior Design Company in Pune
              </h3>
              <div className="text-[14px] sm:text-[15px] md:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify mb-6 md:mb-8">
                <p>
                  Woodland Furniture & Home Interiors started its journey in 2014 from Kothrud, Pune with a vision to deliver premium quality custom furniture and complete home interior solutions. Over the years, we have successfully completed projects across all major areas of Pune including Baner, Hinjewadi, Wakad, Aundh, Kharadi, Hadapsar, Sinhagad Road, Pimpri-Chinchwad, Viman Nagar and Deccan. Our in-house manufacturing unit ensures every piece of furniture is crafted with precision using the finest Teak-wood (Sagwan) and commercial plywood. With a dedicated team of skilled designers and craftsmen, we have served over 2000+ happy families in Pune, making us one of the most trusted names in home interiors. We believe in delivering quality work on time, and our growing list of satisfied customers is a testament to our commitment.
                </p>
              </div>
              <Link to="/contact" className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium">
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Team Members' },
              { value: '2000+', label: 'Projects Completed' },
              { value: '2000+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <div key={i} className="py-4">
                <div className="text-[28px] sm:text-[32px] font-bold text-[#814882]">{stat.value}</div>
                <div className="text-[13px] text-[#666] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImplementationSection />

      {/* Factory Section */}
      <section className="w-full bg-[#f8f8f8] py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="max-w-[1200px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug">
                Large, Fully Equipped Modular Furniture <br className="hidden sm:block" />
                Factories
              </h4>
            </div>
            {/* Info */}
            <div className="max-w-[1100px] mx-auto">
              <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
                Our factory is well equipped with state-of-the-art German machinery and periodical improvements to meet modern furnishing trends. Woodland Furniture has 350,000 square feet factory space to process and assemble{' '}
                <Link to="/modular-kitchen" className="text-[#814882] hover:underline">modular kitchen</Link>{' '}
                and other furniture as per the design. Systematic manufacturing and assembling procedures ensure the best output to match the drawings. Similarly, factory managers schedule the works as per the date of execution and site status. Managers, supervisors, and technicians, in each process, strive to give the best result in complete co-operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Discount Section */}
      <FactoryDiscountSection />

      {/* Branch Location Section */}
      <BranchLocationSection />

      {/* Customer Support Section */}
      <CustomerSupportSection />


    </>
  );
};

export default CompanyPage;
