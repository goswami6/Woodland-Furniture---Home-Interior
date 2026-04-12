import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Living', image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80', image2x: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80', path: '/products', size: 'large' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', image2x: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', path: '/products', size: 'small' },
  { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80', image2x: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80', path: '/products', size: 'small' },
  { name: 'Partition', image: 'https://images.openai.com/static-rsc-4/HPYEZniaVaz70497z1a5tDW5Hel7PwIyhL69ENorI6Fm5wsIw0e7Zo3k5LtF6qjH_O8h2raKIrgz1p97rRa2dLQmHRBDTeTtuDx7HSa6AcSfQagcySGteFcr1Qd0Stc9rz-x2XYcaJVW7enbZH7GGbHBOnA-uxbWvqQjKhFZsQkGZ-3JKprlWGfCw0-jgTB2?purpose=fullsize', image2x: 'https://images.openai.com/static-rsc-4/HPYEZniaVaz70497z1a5tDW5Hel7PwIyhL69ENorI6Fm5wsIw0e7Zo3k5LtF6qjH_O8h2raKIrgz1p97rRa2dLQmHRBDTeTtuDx7HSa6AcSfQagcySGteFcr1Qd0Stc9rz-x2XYcaJVW7enbZH7GGbHBOnA-uxbWvqQjKhFZsQkGZ-3JKprlWGfCw0-jgTB2?purpose=fullsize', path: '/products', size: 'large' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80', image2x: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80', path: '/products', size: 'medium' },
  { name: 'Kidsroom', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', image2x: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', path: '/products', size: 'medium' },
];

const interiorSections = [
  {
    id: 'customized',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=80',
    title: 'Why Customized Home Interiors?',
    type: 'list',
    items: [
      'Creating rather than accepting what is available ensures complete satisfaction of users.',
      'Clients have the opportunity to choose materials for making furniture and decor.',
      'Customizations are as per requirements of each client and a design theme.',
      'Customize furniture as per design, measuring actual space at site.',
      'Interaction between designer and client at each phase till finalization ensures scope for improvement to meet the objectives of customized home interiors.',
      'Clients get to select accessories and fittings and create cabinets accordingly.',
      'Enhance storage capabilities and make the most of difficult spaces.',
      'Enables you to have furniture with a suitable color that blends with your color scheme.',
      'Plan and modify interior works as per budget. Clients get to study the estimate and drawings and alter plans during the design stage as per budget.',
    ],
    cta: 'Get 100% Customized Interiors',
  },
  {
    id: 'personalized',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
    title: 'Give a Personalized Touch to Your Dream Home',
    type: 'paragraph',
    text: "We bring customization to your fingertips, from the initial consultation through the end process; our team of interior designers will provide you with all the support and advice so you get a personalized touch in your dream home. Over the years, we have worked with 14000+ clients and we provide interior design and furnishing services, which are more than just about styles and finishes. Woodland Furniture provides you a fully bespoke service on home interior design to your brief. All our products are custom made from the finest materials. With respect for the past and an eye on the future, our high level of machinery and quality checks help you realize your dream home interiors with fully customized products and quality.",
    cta: 'Reach Our Expert Designer',
  },
];

const CustomMadePage = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '' });

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
          <source media="(min-width: 468px)" srcSet="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" />
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Custom Made Interiors" className="w-full block" />
        </picture>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px]">
            <div className="text-white">
              <strong className="block text-[22px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-tight" style={{ fontFamily: "'Mulish', sans-serif" }}>
                Long-lasting Home Interiors
              </strong>
              <span className="block text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-light mt-1 sm:mt-2">
                Tailored to Fulfill Your Needs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Heading + Info */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-light text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
              Custom-Made Home Interiors
            </h1>
          </div>
          <div className="max-w-[1100px] mx-auto">
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
              {'\u201C'}Made for you{'\u201D'} may be an accurate phrase to express what we do in interiors. We have been designing and executing exquisite home interiors since 2014. Custom-made interior is the best way to ensure that modular kitchen, wardrobes and other furniture perfectly fits to the spaces. Our interior designers possess impeccable ability to understand client{'\u2019'}s requirements and provide the best space planning for a house or flat. Woodland{'\u2019'}s fully equipped modular kitchen is distinct with its unique design and most modern features. We plan and make contemporary style furniture for bedrooms, living and dining rooms as well. Innovative ideas, creative designs and ability to deliver the promises on time enables us to retain the leadership in this field.
            </p>
          </div>

          {/* Interior Category Grid - Desktop */}
          <div className="hidden md:block mt-10 sm:mt-12 md:mt-14">
            <div className="flex gap-4">
              {/* Left Side */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Living - Large */}
                <Link to="/products" className="group relative overflow-hidden block aspect-[16/7]">
                  <picture>
                    <source media="(min-width: 468px)" srcSet={categories[0].image2x} />
                    <img src={categories[0].image} alt="Living" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Living</span>
                  </div>
                </Link>
                {/* Bedroom + Kitchen row */}
                <div className="flex gap-4">
                  <Link to="/products" className="group relative overflow-hidden flex-1 aspect-[4/3]">
                    <picture>
                      <source media="(min-width: 468px)" srcSet={categories[1].image2x} />
                      <img src={categories[1].image} alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Bedroom</span>
                    </div>
                  </Link>
                  <Link to="/products" className="group relative overflow-hidden flex-1 aspect-[4/3]">
                    <picture>
                      <source media="(min-width: 468px)" srcSet={categories[2].image2x} />
                      <img src={categories[2].image} alt="Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Kitchen</span>
                    </div>
                  </Link>
                </div>
                {/* Partition - Large */}
                <Link to="/products" className="group relative overflow-hidden block aspect-[16/7]">
                  <picture>
                    <source media="(min-width: 468px)" srcSet={categories[3].image2x} />
                    <img src={categories[3].image} alt="Partition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Partition</span>
                  </div>
                </Link>
              </div>
              {/* Right Side */}
              <div className="w-[38%] flex flex-col gap-4">
                <Link to="/products" className="group relative overflow-hidden flex-1">
                  <picture>
                    <source media="(min-width: 468px)" srcSet={categories[4].image2x} />
                    <img src={categories[4].image} alt="Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Dining</span>
                  </div>
                </Link>
                <Link to="/products" className="group relative overflow-hidden flex-1">
                  <picture>
                    <source media="(min-width: 468px)" srcSet={categories[5].image2x} />
                    <img src={categories[5].image} alt="Kidsroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>Kidsroom</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Interior Category Grid - Mobile */}
          <div className="md:hidden mt-8 space-y-4">
            {categories.map((cat, i) => (
              <Link key={i} to={cat.path} className="group relative overflow-hidden block aspect-[16/7]">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider" style={{ fontFamily: "'Mulish', sans-serif" }}>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Sections */}
      {interiorSections.map((sec, idx) => (
        <section key={sec.id} className="w-full bg-white py-10 sm:py-14 md:py-16 border-t border-[#eee]">
          {/* Mobile Image */}
          <div className="md:hidden mb-6">
            <img src={sec.image} alt={sec.title} className="w-full" />
          </div>
          <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Desktop Image */}
              <div className="hidden md:block md:w-[48%] flex-shrink-0">
                <img src={sec.image} alt={sec.title} className="w-full rounded-sm" />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-light text-[#333] leading-snug mb-5 md:mb-6" style={{ fontFamily: "'Mulish', sans-serif" }}>
                  {sec.title}
                </h2>
                {sec.type === 'list' ? (
                  <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.8] list-disc pl-5">
                    {sec.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
                    {sec.text}
                  </p>
                )}
                <div className="mt-6 md:mt-8">
                  <button
                    onClick={() => setModalOpen(sec.id)}
                    className="inline-block px-7 py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white text-[13px] sm:text-[14px] uppercase tracking-wider transition-colors font-medium cursor-pointer"
                  >
                    {sec.cta}
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
                {interiorSections.find((s) => s.id === modalOpen)?.cta}
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

export default CustomMadePage;
