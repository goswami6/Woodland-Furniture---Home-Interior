import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import WhyChooseSection from '../../components/WhyChooseSection';


const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800&q=80', alt: 'Blackout curtains' },
  { src: 'https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?w=800&q=80', alt: 'Sheer curtains' },
  { src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', alt: 'Roman blinds' },
  { src: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=800&q=80', alt: 'Double layer curtains' },
  { src: 'https://images.openai.com/static-rsc-4/HI3driacP5YqEGWyd01nDtAl46aCCVVRIILmdUZhOE0vz9ESLNYD0pGEYRO7grBVdKPteZaINf7DDEytZM8LYXW_HqnY2pQIKZ2sG9Aek40U_QZVeDKe6f-g6OQmDY0c653uVeqrq78abuQjN7OiwsnvxiziasmiUCLnicXR1nVTt-rWh89hosubiDu_d0CW?purpose=fullsize', alt: 'Living room curtains' },
  { src: 'https://images.openai.com/static-rsc-4/T-hD_1tIf6CW5WmfngP_69YH7VHrDsVYsmWBH0-kO79e2WjITmyvNsFuCROSpoiDtDTUX2Ch2uxqjLJwlyKDbNkp1xBrtk3nT8hgM4FWHko8zywXt07f98qY5XMolTcYHOd72DSXxDSaWImOhh6-E9k65Eel-N3QXNzm4lnhbpzaCFnYx-whkiC1wIEy71vs?purpose=fullsize', alt: 'Bedroom drapes' },
];

const curtainTypes = [
  { name: 'BLACKOUT', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80' },
  { name: 'SHEER', img: 'https://images.openai.com/static-rsc-4/8E0ypaL_ctGojeFgpQkuC8mzncB-f-hpIei4BPJu-lbWaIXvBZAIOWEBXJIN1SC4uT4_14K8rvfs3P1KlBlTDVOkEC5rXlNXr7ootJ3O0rb370fkE2wUMT5A5tDZqTb1sobB-Mt4PyK-b0zuOhdbEdLt5I1siEHhUcyBkNwYj6CmdcgfgkH2AFej1KnA63Rf?purpose=fullsize' },
  { name: 'ROMAN BLINDS', img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600&q=80' },
  { name: 'DOUBLE LAYER', img: 'https://images.openai.com/static-rsc-4/iwWrxWrltN2p2DrYr2h88eDMNQsgC_1rg07Cv2dqqvaaT1CvuDGWkteKmXKxuJAY40Zo-wY13TrHGAyaRhX23EipXlGf9qjoOwB7rganLC00VgE5tDkkVLwklgXm9znUe0t-4Of_AolWWobcwuGR9ZDAbYJJCzpLs6rwz94Lo09NLHhraonzTPK5fl7Q0fbe?purpose=fullsize' },
];

const features = [
  { icon: '🧵', title: '200+ Fabrics', desc: 'Choose from cotton, linen, silk, velvet, polyester, and blended options.' },
  { icon: '📐', title: 'Custom Stitching', desc: 'Made-to-measure for every window — standard, floor-length, or puddle style.' },
  { icon: '🌙', title: 'Light Control', desc: 'Blackout, room-darkening, or light-filtering options for every room.' },
  { icon: '🎨', title: 'Colour Matching', desc: 'Our designers help you pick fabrics that complement your interior palette.' },
  { icon: '🔩', title: 'Hardware Included', desc: 'Premium rods, brackets, tracks, and motorised options — all supplied and fitted.' },
  { icon: '🛠️', title: 'Free Fitting', desc: 'Complimentary measurement visit, stitching, and professional installation.' },
];

const stats = [
  { title: '1000+', sub: 'Windows Dressed' },
  { title: 'SINCE', sub: '2014' },
  { title: '200+', sub: 'Fabrics' },
  { title: 'FREE', sub: 'Fitting' },
];

const CurtainsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const pageRef = useRef(null);
  const [visible, setVisible] = useState({});
  const [activeStatIdx, setActiveStatIdx] = useState(-1);

  useEffect(() => {
    if (!pageRef.current) return;
    const items = pageRef.current.querySelectorAll('[data-anim]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.anim;
            setVisible((prev) => ({ ...prev, [id]: true }));
            if (id === 'stats') setTimeout(() => setActiveStatIdx(0), stats.length * 120 + 600);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeStatIdx < 0) return;
    const t = setTimeout(() => setActiveStatIdx((prev) => (prev + 1) % stats.length), 1200);
    return () => clearTimeout(t);
  }, [activeStatIdx]);

  const fadeStyle = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <div ref={pageRef}>
      <PageBanner desktopImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" mobileImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" overlayText="CURTAINS" />

      {/* Intro */}
      <section className="bg-[#f8f8f8] overflow-hidden" data-anim="intro">
        <div className="w-full max-w-full px-5 min-[468px]:px-8 sm:px-10 md:px-[80px] lg:px-[100px] mx-auto xl:px-0">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2 max-[468px]:hidden" style={fadeStyle('intro', 0)}>
              <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80" alt="Custom Curtains" className="w-full h-full object-cover max-h-[260px] lg:max-h-[450px] xl:max-h-none" loading="lazy" />
            </div>
            <div className="w-full xl:w-1/2 flex items-center content-center flex-wrap py-10 sm:py-[45px] xl:py-[25px] px-5 min-[468px]:px-8 sm:px-10 md:px-[40px] lg:px-[50px] xl:px-[30px] justify-center" style={fadeStyle('intro', 0.15)}>
              <div className="w-full">
                <h2 className="font-['Mulish',sans-serif] font-normal uppercase text-black text-[22px] leading-[30px] min-[468px]:text-[28px] min-[468px]:leading-normal sm:text-[30px] xl:text-[28px] min-[1700px]:text-[32px] m-0 p-0 mb-4">
                  CUSTOM <span className="text-[#814882] font-semibold">CURTAINS</span>
                </h2>
                <p className="m-0 text-[#4c4c4c] text-[15px] leading-[25px] sm:text-base sm:leading-[26px] mb-8">
                  Complete your interior with made-to-measure curtains from Woodland Furniture. Choose from 200+ fabrics — blackout, sheer, roman blinds, or double-layer — all custom-stitched for your windows. We handle everything from fabric selection to professional fitting, so your windows look their best.
                </p>
                <button onClick={() => setShowModal(true)} className="btn-comn hoveranim"><span>Talk to Our Design Consultant</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pt-[40px] pb-[14px] sm:pt-[55px] sm:pb-[35px] bg-white overflow-hidden" data-anim="stats">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <ul className="flex sm:flex-wrap sm:justify-center overflow-x-auto sm:overflow-x-visible gap-[10px] sm:gap-0 snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0">
            {stats.map((stat, index) => (
              <li key={index} className="p-[5px] flex-shrink-0 w-[110px] min-[390px]:w-[125px] sm:flex-shrink sm:w-1/4 lg:px-[14px] snap-center" style={fadeStyle('stats', index * 0.12)}>
                <div className={`group rounded-full w-[104px] h-[104px] min-[360px]:w-[110px] min-[360px]:h-[110px] min-[390px]:w-[118px] min-[390px]:h-[118px] sm:w-[134px] sm:h-[134px] xl:w-[150px] xl:h-[150px] mx-auto flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out ${activeStatIdx === index ? 'bg-[#814882] shadow-none' : 'bg-white shadow-[inset_0_0_0_2px_#d5d5d5,inset_0_2px_4px_rgba(0,0,0,0.08)] hover:bg-[#814882]'}`}>
                  <div className="text-center">
                    <div className={`font-semibold mb-[3px] text-[14px] min-[390px]:text-[15px] sm:text-[17px] xl:text-[18px] uppercase transition-colors duration-700 group-hover:text-white ${activeStatIdx === index ? 'text-white' : 'text-[#814882]'}`}>{stat.title}</div>
                    <div className={`text-[11px] min-[390px]:text-[12px] sm:text-[13px] xl:text-[14px] transition-colors duration-700 group-hover:text-white leading-tight ${activeStatIdx === index ? 'text-white' : 'text-[#333]'}`}>{stat.sub}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Types */}
      <section className="py-[25px] sm:py-[45px] bg-white overflow-hidden" data-anim="types">
        <div className="section-head mb-[25px] sm:mb-[35px]"><h2>CURTAIN STYLES</h2></div>
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="flex flex-wrap gap-[3px] sm:gap-[6px]">
            {curtainTypes.map((type, idx) => (
              <div key={idx} className="w-[calc(50%-3px)] sm:w-[calc(50%-6px)]" style={fadeStyle('types', idx * 0.15)}>
                <Link to="/contact" className="block h-[155px] sm:h-[280px] md:h-[320px] min-[1681px]:h-[380px] relative overflow-hidden group bg-white">
                  <img src={type.img} alt={type.name} className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-20 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white uppercase transition-colors duration-500 group-hover:text-[#814882] z-[1] text-[20px] min-[390px]:text-[24px] min-[468px]:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-center leading-tight" style={{ fontFamily: "'Mulish', sans-serif" }}>{type.name}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-[15px] min-[468px]:mt-[35px]">
            <button onClick={() => setShowModal(true)} className="btn-comn hoveranim"><span>Talk to Our Design Consultant</span></button>
          </div>
        </div>
      </section>

      <WhyChooseSection features={features} />

      {/* Gallery */}
      <section className="py-[25px] sm:py-[45px] lg:py-[60px] bg-white overflow-hidden" data-anim="gallery">
        <div className="section-head mb-[25px] sm:mb-[35px]"><h2>GALLERY</h2></div>
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[6px] sm:gap-[10px]">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden cursor-pointer group relative" style={fadeStyle('gallery', i * 0.08)} onClick={() => setLightbox(i)}>
                <img src={img.src} alt={img.alt} className="w-full h-[140px] sm:h-[220px] md:h-[280px] lg:h-[320px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-5 text-white/80 hover:text-white text-[36px] transition-colors cursor-pointer z-10">&times;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }} className="absolute left-4 text-white/70 hover:text-white text-[28px] cursor-pointer w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm">&#10094;</button>
          <img src={galleryImages[lightbox].src.replace('w=800', 'w=1400')} alt={galleryImages[lightbox].alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }} className="absolute right-4 text-white/70 hover:text-white text-[28px] cursor-pointer w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm">&#10095;</button>
          <div className="absolute bottom-4 text-white/50 text-[13px]">{lightbox + 1} / {galleryImages.length}</div>
        </div>
      )}

      {/* CTA */}
      <section className="py-[35px] sm:py-[50px] lg:py-[60px] bg-[#f8f8f8] overflow-hidden" data-anim="cta">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto text-center" style={fadeStyle('cta')}>
          <h2 className="font-normal uppercase text-black text-[22px] min-[468px]:text-[28px] sm:text-[30px] lg:text-[34px] min-[1390px]:text-[38px] mb-4" style={{ fontFamily: "'Mulish', sans-serif" }}>
            DRESS YOUR WINDOWS <span className="text-[#814882] font-semibold">BEAUTIFULLY</span>
          </h2>
          <p className="text-[#4c4c4c] text-[14px] sm:text-[15px] leading-[1.8] max-w-[600px] mx-auto mb-8">Book a free home visit — we'll measure your windows, show fabric samples, and handle complete installation.</p>
          <button onClick={() => setShowModal(true)} className="btn-comn hoveranim"><span>Book Free Consultation</span></button>
        </div>
      </section>



      {showModal && (
        <div className="fixed inset-0 z-[1055] flex items-center justify-center bg-black/70" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="bg-white/82 rounded-[5px] w-[90%] max-w-[500px] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#814882]"></div>
            <div className="bg-[#814882] px-5 py-3.5 flex justify-between items-center">
              <span className="text-white text-lg font-semibold font-['Mulish',sans-serif]">Book a Free Consultation</span>
              <button onClick={() => setShowModal(false)} className="bg-transparent border-none cursor-pointer flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" /></svg></button>
            </div>
            <div className="pt-5 px-6 pb-4 text-center"><p className="text-[#4c4c4c] text-sm mb-4">Fill out the enquiry below and we will get back to you</p></div>
            <div className="px-6 pb-10">
              <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <div className="mb-3"><input type="text" placeholder="Name" required className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" /></div>
                <div className="mb-3 flex"><span className="flex items-center justify-center h-[50px] min-w-[55px] border border-[#707070] border-r-0 rounded-l-[5px] text-[13px] bg-white text-[#263948]">+91</span><input type="tel" placeholder="Contact Number" required className="w-full h-[50px] border border-[#707070] rounded-r-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" /></div>
                <div className="mb-3"><input type="email" placeholder="Email Address" className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" /></div>
                <div className="mb-3"><input type="text" placeholder="Project Location" className="w-full h-[50px] border border-[#707070] rounded-[5px] px-2.5 py-1 text-[13px] bg-white outline-none" /></div>
                <button type="submit" className="hoveranim w-full h-[45px] border border-[#814882] bg-[#814882] text-white rounded-[5px] text-sm font-medium cursor-pointer mt-5 flex items-center justify-center"><span>Submit</span></button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurtainsPage;
