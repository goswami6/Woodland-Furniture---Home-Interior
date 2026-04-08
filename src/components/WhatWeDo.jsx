import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.grid-anim');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setTimeout(() => {
              setVisible((prev) => [...prev, idx]);
            }, idx * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = [
    { name: 'KITCHEN', path: '/products', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
    { name: 'BEDROOM', path: '/products', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80' },
    { name: 'LIVING', path: '/products', image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80' },
  ];
  const dining = { name: 'DINING', path: '/products', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80' };

  const animStyle = (idx) => ({
    opacity: visible.includes(idx) ? 1 : 0,
    transform: visible.includes(idx) ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  });

  return (
    <>
      <section id="WatVDo" ref={sectionRef}>
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          {/* Section heading */}
          <div className="MainHead" style={{ width: '100%', position: 'relative', marginBottom: 25, textAlign: 'center' }}>
            <div style={{ content: '""', position: 'absolute', left: 0, right: 0, margin: 'auto', top: '50%', transform: 'translateY(-50%)', height: 1, width: '100%', background: 'rgba(112,112,112,0.2)', zIndex: 0 }}></div>
            <h1 className="Head" style={{ fontWeight: 400, color: '#000', fontSize: 26, textTransform: 'uppercase', width: 'fit-content', padding: '0 20px', background: '#fff', position: 'relative', zIndex: 1, margin: 'auto', lineHeight: '28px', fontFamily: "'Mulish', sans-serif" }}>
              WHAT WE <span style={{ color: '#814882', fontWeight: 600 }}>DO</span>
            </h1>
          </div>

          {/* Grid */}
          <div className="GridFlx">
            {/* Left Side - Kitchen, Bedroom, Living */}
            <div className="GridItm lSide">
              <div className="GridFlx">
                {items.map((item, idx) => (
                  <div
                    key={item.name}
                    className="GridItm grid-anim"
                    data-idx={idx}
                    style={animStyle(idx)}
                  >
                    <Link to={item.path} className="Box">
                      <div className="ImgBox">
                        <img src={item.image} alt={item.name} loading="lazy" />
                        <div className="Title">{item.name}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Dining */}
            <div className="GridItm RSide">
              <div
                className="GridItm grid-anim"
                data-idx={3}
                style={animStyle(3)}
              >
                <Link to={dining.path} className="Box">
                  <div className="ImgBox">
                    <img src={dining.image} alt={dining.name} loading="lazy" />
                    <div className="Title">{dining.name}</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="ComnBtn">
            <button
              onClick={() => setShowModal(true)}
              className="btn-comn hoveranim"
            >
              <span>Talk to Our Design Consultant</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 1055, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div style={{ background: 'rgba(255,255,255,0.82)', borderRadius: 5, width: '90%', maxWidth: 500, position: 'relative', overflow: 'hidden' }}>
            {/* Purple bottom bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 5, background: '#814882' }}></div>
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: 0, right: 0, width: 26, height: 32, background: '#814882', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
            >
              <svg width="10" height="10" viewBox="0 0 16 16" fill="#fff">
                <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
              </svg>
            </button>
            {/* Form */}
            <div style={{ padding: '30px 25px 45px' }}>
              <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                <div style={{ marginBottom: 12 }}>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    style={{ width: '100%', height: 50, border: '1px solid #707070', borderRadius: 5, padding: '5px 10px', fontSize: 13, background: '#fff', outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: 12, display: 'flex', gap: 0 }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, minWidth: 55, border: '1px solid #707070', borderRight: 'none', borderRadius: '5px 0 0 5px', fontSize: 13, background: '#fff', color: '#263948' }}>+91</span>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    required
                    style={{ width: '100%', height: 50, border: '1px solid #707070', borderRadius: '0 5px 5px 0', padding: '5px 10px', fontSize: 13, background: '#fff', outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={{ width: '100%', height: 50, border: '1px solid #707070', borderRadius: 5, padding: '5px 10px', fontSize: 13, background: '#fff', outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <input
                    type="text"
                    placeholder="Project Location"
                    style={{ width: '100%', height: 50, border: '1px solid #707070', borderRadius: 5, padding: '5px 10px', fontSize: 13, background: '#fff', outline: 'none' }}
                  />
                </div>
                <button
                  type="submit"
                  className="hoveranim"
                  style={{ width: '100%', height: 45, border: '1px solid #814882', background: '#814882', color: '#fff', borderRadius: 5, fontSize: 14, fontWeight: 500, cursor: 'pointer', marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatWeDo;
