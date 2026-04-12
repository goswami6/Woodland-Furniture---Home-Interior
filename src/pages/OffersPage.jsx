import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const packageCards = [
  {
    id: 'essential',
    subtitle: 'Everything',
    name: 'ESSENTIAL',
    thumbImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    detailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    originalPrice: '8.85',
    offerPrice: '6.37',
    unit: 'Lac',
    desc: 'Essential woodwork for a 2BHK',
    videoUrl: 'https://youtu.be/OBY3wXjc97E?si=1Vi8R4_-eO9IhIRf',
    rooms: [
      { name: 'FOYER', items: ['Shoe rack unit with cabinets and shutters'] },
      { name: 'LIVING ROOM', items: ['Premium TV display unit with aluminium profile & glass shutter'] },
      { name: 'DINING ROOM', items: ['Medley black finish dining table 6 Seater', 'Briano dining chair (3 Nos)', '3 Seater dining bench \u2013 (1 No)'] },
      { name: 'MASTER BEDROOM', items: ['Soft close 3 door hinged wardrobe with grey wooden handles', 'Queen size bed with head board, without bottom drawer', 'Open type bed side table (2 Nos)'] },
      { name: 'GUEST BEDROOM', items: ['Soft close 3 door hinged wardrobe with grey wooden handles', 'Queen size bed with head board, without bottom drawer', 'Open type bed side table (2 Nos)'] },
      { name: 'MODULAR KITCHEN', items: ['Bottom cabinets', 'Over head cabinets', 'Hettich (German Made \u2013 15 years warranty) Accessories \u2013 6 Nos*', 'Hood and Hob \u2013 Faber'] },
    ],
  },
  {
    id: 'eleganza',
    subtitle: '',
    name: 'ELEGANZA',
    thumbImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    detailImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    originalPrice: '15.84',
    offerPrice: '11.41',
    unit: 'Lac',
    desc: 'Detailed woodwork for a 3BHK',
    videoUrl: 'https://youtu.be/qbGDyBQ2_Pw?si=y-A78HnsmuycxebO',
    rooms: [
      { name: 'FOYER', items: ['Shoe rack unit with cabinets and shutters'] },
      { name: 'LIVING ROOM', items: ['Premium TV display unit with aluminium profile & glass shutter', 'Prayer unit with open storage'] },
      { name: 'DINING ROOM', items: ['Medley black finish 6 seater dining table', 'Briano dining chair (3 Nos)', '3 Seater dining bench (1 No)', 'Custom-made Living-dining partition'] },
      { name: 'MASTER BEDROOM', items: ['Soft close 3 door hinged wardrobe with grey hardwood handles', 'Dressing unit with cabinet and drawer', 'Custom-made study table', 'Queen size bed with head board, without bottom drawer', 'Bed side table (2 Nos)'] },
      { name: 'KIDS ROOM', items: ['Soft-close hinged wardrobe up to ceiling with grey hardwood handle', 'Custom-made study table', 'Queen size bed with head board, without bottom drawer', 'Bed side table (1 No)'] },
      { name: 'GUEST BEDROOM', items: ['Soft-close hinged wardrobe up to ceiling with grey hardwood handle', 'Queen size bed with head board, without bottom drawer', 'Bed side table (1 No)'] },
      { name: 'MODULAR KITCHEN', items: ['Top cabinets', 'Bottom cabinets', 'Hettich (German Made - 15 years warranty*) Accessories - 6 Nos*', 'Hood and Hob - Faber'], accessories: ['Cutlery tray, Plain basket, Plate rack, Bottle pull out, Waste bin - Pull out Model, Detergent holder'] },
    ],
  },
  {
    id: 'eleganza-plus',
    subtitle: 'Plus',
    name: 'ELEGANZA',
    thumbImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    detailImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    originalPrice: '24.03',
    offerPrice: '16.82',
    unit: 'Lac',
    desc: 'Woodwork & beautifications for a 3BHK',
    videoUrl: 'https://youtu.be/e-tbqufn6-M?si=AaLBDWXMSel1YRTG',
    rooms: [
      { name: 'FOYER', items: ['Shoe rack and ledges', 'Round mirror (1 No)', 'Cement wall texture'] },
      { name: 'LIVING ROOM', items: ['Premium TV display unit with aluminium profile & glass shutter', 'Prayer unit with open storage', 'Curtain with lining using Jasmine drape fabric', 'Super premium Costae wall panelling', 'Decorative roman clock (1 No)', 'Sofa set model Fiori + Lounge 3 seater with artificial leather', 'Additional cushions for sofa (4 Nos)', 'Designer carpets [Panache Collection]', 'Mark centre table (large size)'] },
      { name: 'DINING ROOM', items: ['Medley black finish 6 seater dining table', 'Briano dining chair (3 Nos)', '3 Seater dining bench (1 No)', 'Custom-made Living-dining partition', 'Common wash with projected frameless mirror', 'Cement wall texture'] },
      { name: 'KIDS BEDROOM', items: ['Queen size bed with head board, without bottom drawer', 'Bed side table (2 Nos)', 'Cream Orbis bed setting', 'Mattress Peps 6"', 'Soft-close hinged Wardrobe with hardwood handles', 'Custom-made study unit', 'Wallpaper (3 Rolls)'] },
      { name: 'MASTER BEDROOM', items: ['Soft-close hinged wardrobe with hardwood handles', 'Dressing unit with cabinet and drawer', 'Custom-made study unit', 'King size bed with head board and bottom drawer', 'Double drawer bed side table (2 Nos)', 'Premium Roman blinds', 'Single chair yellow (1 No)', 'Wallpaper (3 Rolls)', 'Mattress Peps 6"', 'Cream Orbis bed setting'] },
      { name: 'GUEST BEDROOM', items: ['Queen size bed with head board, without bottom drawer', 'Bed side table (2 Nos)', 'Premium Roman blinds', 'Wallpaper (3 Rolls)', 'Mattress Peps 6"', 'Cream Orbis bed setting', 'Soft-close hinged wardrobe with hardwood handles', '1 coat primer, 2 coat Asian premium emulsion*'] },
      { name: 'KITCHEN', items: ['Top cabinets', 'Bottom cabinets', 'Hettich (German Made- 15 years warranty*) Accessories - 6 Nos*', 'Hood and Hob - Faber'], accessories: ['Cutlery tray, Plain basket, Plate rack, Bottle pull out, Waste bin - Pull out Model, Detergent holder'] },
    ],
  },
];

const companySpecs = [
  { title: '100%', sub: 'CUSTOMIZED' },
  { title: 'PREMIUM', sub: 'QUALITY' },
  { title: 'ON-TIME', sub: 'DELIVERY' },
  { title: 'LIFE-TIME', sub: 'SERVICES' },
];

const OffersPage = () => {
  const [expandedPkg, setExpandedPkg] = useState(null);

  const togglePackage = (id) => {
    setExpandedPkg((prev) => (prev === id ? null : id));
  };

  const scrollToPackage = (id) => {
    setExpandedPkg(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="w-full overflow-hidden relative !mt-0 !pt-0">
        <div className="w-full h-[300px] min-[468px]:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] min-[1441px]:h-[600px] !mt-0 !pt-0">
          <picture>
            <source media="(min-width: 468px)" srcSet="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" />
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Offers"
              className="w-full h-full object-cover block"
              loading="eager"
            />
          </picture>
        </div>
      </section>

      {/* Heading + Info */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="relative inline-block">
              <div className="absolute left-[-60px] right-[-60px] top-1/2 -translate-y-1/2 h-[1px] bg-[rgba(112,112,112,0.2)] hidden sm:block"></div>
              <h1 className="relative bg-white px-5 sm:px-8 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-light text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
                Premium Package Offers for Interior Design in India
              </h1>
            </div>
          </div>
          <div className="max-w-[950px] mx-auto">
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
              Woodland Furniture Home interior packages and offers are not limited to better factory price. Our commitment is for the wholehearted efforts to design, produce and implement suitable interior furnishing to match your dream. The whole team is trained and qualified to execute the order. We work on the selected home interior package, and customize it further as per client requirements. Because, each customer has unique needs, therefore, each of them requires custom designs for home.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards - 3 Column Overview */}
      <section className="w-full bg-[#f9f9f9] py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {packageCards.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => scrollToPackage(pkg.id)}
                className="bg-white border border-[#e8e8e8] overflow-hidden group hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.thumbImage}
                    alt={`${pkg.name} ${pkg.subtitle}`}
                    className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    {pkg.subtitle && (
                      <div className="text-white/80 text-[12px] sm:text-[13px] uppercase tracking-wider mb-1">{pkg.subtitle}</div>
                    )}
                    <div className="text-white font-bold text-[20px] sm:text-[24px] uppercase tracking-wide" style={{ fontFamily: "'Mulish', sans-serif" }}>
                      {pkg.name}
                      {pkg.id === 'eleganza-plus' && <span className="text-[14px] sm:text-[16px] font-normal ml-2">Plus</span>}
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] sm:text-[13px] text-[#814882] font-semibold uppercase tracking-wider">Offer</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[#999] text-[15px] sm:text-[16px] line-through">
                      ₹{pkg.originalPrice} {pkg.unit}
                    </span>
                    <span className="text-[#814882] text-[24px] sm:text-[28px] font-bold">
                      ₹{pkg.offerPrice} <span className="text-[14px] sm:text-[15px] font-normal">{pkg.unit}*</span>
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#4c4c4c] leading-[1.7]">{pkg.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Title */}
      <div className="block xl:hidden w-full bg-white py-6 sm:py-8">
        <h2 className="text-[20px] sm:text-[24px] text-[#333] font-light text-center px-5" style={{ fontFamily: "'Mulish', sans-serif" }}>
          Premium Package Offers for Interior Design in India
        </h2>
      </div>

      {/* Detailed Package Sections */}
      <section className="w-full bg-white py-6 sm:py-10 md:py-14">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="space-y-10 sm:space-y-14">
            {packageCards.map((pkg) => {
              const isOpen = expandedPkg === pkg.id;
              return (
                <div key={pkg.id} id={pkg.id} className="scroll-mt-24">
                  <div className="flex flex-col lg:flex-row gap-0 overflow-hidden border border-[#e8e8e8]">
                    {/* Image Side */}
                    <div className="relative lg:w-[55%] xl:w-[60%] overflow-hidden">
                      <picture>
                        <source media="(min-width: 1024px)" srcSet={pkg.detailImage} />
                        <img
                          src={pkg.thumbImage}
                          alt={`${pkg.name} ${pkg.subtitle}`}
                          className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover"
                          loading="lazy"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end lg:items-center p-6 sm:p-8">
                        <div>
                          {pkg.subtitle && (
                            <div className="text-white/80 text-[13px] sm:text-[14px] uppercase tracking-wider mb-1">{pkg.subtitle}</div>
                          )}
                          <div className="text-white font-bold text-[26px] sm:text-[32px] lg:text-[38px] uppercase tracking-wide" style={{ fontFamily: "'Mulish', sans-serif" }}>
                            {pkg.name}
                            {pkg.id === 'eleganza-plus' && <span className="text-[18px] sm:text-[22px] font-normal ml-2">Plus</span>}
                          </div>
                          <div className="text-white/90 text-[13px] sm:text-[14px] mt-2">{pkg.desc}</div>
                          <div className="mt-3 flex items-baseline gap-3">
                            <span className="text-[11px] sm:text-[12px] text-white/70 font-semibold uppercase tracking-wider">Offer</span>
                            <span className="text-white/60 text-[14px] sm:text-[15px] line-through">₹{pkg.originalPrice} {pkg.unit}</span>
                            <span className="text-white text-[22px] sm:text-[26px] font-bold">₹{pkg.offerPrice} <span className="text-[13px] font-normal">{pkg.unit}*</span></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-[45%] xl:w-[40%] p-5 sm:p-6 lg:p-8 flex flex-col justify-between bg-white">
                      {/* Price (visible on desktop) */}
                      <div className="hidden lg:block mb-6">
                        <div className="text-[12px] text-[#814882] font-semibold uppercase tracking-wider mb-2">Offer</div>
                        <div className="flex items-baseline gap-3">
                          <span className="text-[#999] text-[16px] line-through">₹{pkg.originalPrice} {pkg.unit}</span>
                          <span className="text-[#814882] text-[28px] font-bold">₹{pkg.offerPrice} <span className="text-[14px] font-normal">{pkg.unit}*</span></span>
                        </div>
                        <p className="text-[14px] text-[#4c4c4c] mt-2">{pkg.desc}</p>
                      </div>

                      {/* View Details Toggle */}
                      <button
                        onClick={() => togglePackage(pkg.id)}
                        className="flex items-center gap-2 text-[14px] sm:text-[15px] text-[#814882] font-medium hover:text-[#6a3a6b] transition-colors mb-6 cursor-pointer"
                      >
                        <span>{isOpen ? 'Hide details' : 'View details'}</span>
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 16.942 9.658" fill="currentColor">
                          <path d="M8.472,106.8a1.183,1.183,0,0,1-.839-.347L.348,99.166a1.186,1.186,0,0,1,1.678-1.678l6.446,6.446,6.446-6.446A1.186,1.186,0,1,1,16.6,99.166l-7.285,7.285A1.183,1.183,0,0,1,8.472,106.8Z" transform="translate(-0.001 -97.141)" />
                        </svg>
                      </button>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <Link to="/contact" className="flex items-center justify-between px-5 py-3 border border-[#e0e0e0] hover:border-[#814882] transition-colors group/btn">
                          <span className="text-[13px] sm:text-[14px] text-[#4c4c4c] group-hover/btn:text-[#814882] transition-colors">Frequently Asked Questions</span>
                          <svg className="w-5 h-5 text-[#814882]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01" /></svg>
                        </Link>
                        <a href={pkg.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3 border border-[#e0e0e0] hover:border-[#814882] transition-colors group/btn">
                          <span className="text-[13px] sm:text-[14px] text-[#4c4c4c] group-hover/btn:text-[#814882] transition-colors">View Package Video</span>
                          <svg className="w-4 h-4 text-[#814882]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </a>
                        <Link to="/contact" className="flex items-center justify-between px-5 py-3 border border-[#e0e0e0] hover:border-[#814882] transition-colors group/btn">
                          <span className="text-[13px] sm:text-[14px] text-[#4c4c4c] group-hover/btn:text-[#814882] transition-colors">Contact Us for More Details</span>
                          <svg className="w-5 h-5 text-[#814882]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="border border-t-0 border-[#e8e8e8] bg-[#fafafa] p-5 sm:p-6 lg:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {pkg.rooms.map((room, ri) => (
                          <div key={ri}>
                            <h3 className="text-[14px] sm:text-[15px] font-bold text-[#333] uppercase tracking-wide mb-3" style={{ fontFamily: "'Mulish', sans-serif" }}>
                              {room.name}
                            </h3>
                            <ul className="space-y-1.5">
                              {room.items.map((item, ii) => (
                                <li key={ii} className="text-[13px] sm:text-[14px] text-[#4c4c4c] leading-[1.7] flex gap-2">
                                  <span className="text-[#814882] mt-1 shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            {room.accessories && (
                              <div className="mt-3 pl-4 border-l-2 border-[#814882]/20">
                                <h5 className="text-[12px] sm:text-[13px] font-semibold text-[#333] uppercase tracking-wide mb-1">Accessories</h5>
                                <ul>
                                  {room.accessories.map((acc, ai) => (
                                    <li key={ai} className="text-[12px] sm:text-[13px] text-[#4c4c4c] leading-[1.7]">{acc}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buy Direct - Save 30% */}
      <section className="w-full bg-[#f8f8f8] py-10 sm:py-14 md:py-16">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-light text-[#333] leading-snug" style={{ fontFamily: "'Mulish', sans-serif" }}>
              <span className="hidden sm:inline">Buy Direct from Company & </span>
              <span className="sm:hidden">Buy Direct - 30% Discount<br /></span>
              <span className="text-[#814882] font-semibold hidden sm:inline">Save 30%</span>
              <span className="text-[#814882] font-semibold sm:hidden">On Offer Packages</span>
            </h2>
          </div>
          <div className="max-w-[950px] mx-auto mb-10 sm:mb-12">
            <p className="text-[14px] sm:text-[15px] text-[#4c4c4c] leading-[1.9] text-justify">
              Woodland Furniture Home interior packages and offers are not limited to better factory price. Our commitment is for the wholehearted efforts to design, produce and implement suitable interior furnishing to match your dream. The whole team is trained and qualified to execute the order. We work on the selected home interior package, and customize it further as per client requirements. Because, each customer has unique needs, therefore, each of them requires custom designs for home interior. For example, there are situations where you like the overall home interior package, but do not want a particular item from the package. In situations like this, customization provides an option to remove the item from the package and select one that is more suitable for your needs. Likewise, changes and additions are possible as per measurement by paying extra charges. We will make it to fit your budget.
            </p>
          </div>

          {/* Circular Spec Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {companySpecs.map((spec, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full border-2 flex items-center justify-center text-center transition-colors ${i === 1 ? 'border-[#814882] bg-[#814882] text-white' : 'border-[#814882] text-[#333] hover:bg-[#814882] hover:text-white'}`}>
                  <div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-tight">{spec.title}</div>
                    <div className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-wider mt-0.5">{spec.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default OffersPage;
