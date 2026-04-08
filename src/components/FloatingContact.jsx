import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 Welcome to Woodland Furniture & Home Interior. How can we help you today?" }
  ]);
  const [userMsg, setUserMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our design consultant will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    setFormOpen(false);
  };

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChatSend = () => {
    if (!userMsg.trim()) return;
    setChatMessages((prev) => [...prev, { from: 'user', text: userMsg }]);
    setUserMsg('');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Thank you for your message! Our design consultant will get back to you shortly. Meanwhile, you can call us at +91 89990 46879." }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Fixed Right Sidebar - desktop only */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-0">
        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=+918999046879&text=Hi%20Woodland,%20I%20would%20like%20to%20discuss%20about%20a%20furniture%20or%20interior%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45px] h-[45px] bg-[#25d366] hover:bg-[#1da851] flex items-center justify-center transition-colors"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        {/* Email */}
        <a
          href="mailto:info@woodlandfurniture.in"
          className="w-[45px] h-[45px] bg-[#814882] hover:bg-[#6a3a6b] flex items-center justify-center transition-colors"
          title="Email Us"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
        </a>
        {/* Free Estimate */}
        <button
          onClick={() => setFormOpen(true)}
          className="w-[45px] h-[45px] bg-[#e74c3c] hover:bg-[#c0392b] flex items-center justify-center transition-colors"
          title="Get Free Estimate"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
        </button>
      </div>

      {/* Fixed Bottom Bar - mobile only - raised center logo design */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 overflow-visible">
        {/* The bar itself */}
        <div className="relative bg-white border-t border-[#e0e0e0] shadow-[0_-2px_10px_rgba(0,0,0,0.08)] overflow-visible" style={{ height: '60px' }}>
          <div className="flex items-end justify-around h-full px-1 overflow-visible">
            {/* COMPANY */}
            <Link to="/company" className="flex flex-col items-center justify-center pb-1.5 flex-1 group">
              <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" className="w-[22px] h-[22px] group-hover:stroke-[#814882] transition-colors">
                <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21V11h6v10" />
              </svg>
              <span className="text-[9px] font-medium text-[#555] mt-0.5 group-hover:text-[#814882] transition-colors tracking-wide">COMPANY</span>
            </Link>

            {/* OFFERS */}
            <Link to="/offers" className="flex flex-col items-center justify-center pb-1.5 flex-1 group">
              <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" className="w-[22px] h-[22px] group-hover:stroke-[#814882] transition-colors">
                <path d="M21 5L12 2 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-[9px] font-medium text-[#555] mt-0.5 group-hover:text-[#814882] transition-colors tracking-wide">OFFERS</span>
            </Link>

            {/* CENTER RAISED LOGO */}
            <div className="flex-1 flex items-center justify-center relative overflow-visible">
              <Link
                to="/"
                className="absolute bottom-1 w-[72px] h-[72px] rounded-full bg-white border-[3px] border-[#814882] shadow-[0_-3px_15px_rgba(129,72,130,0.3)] flex items-center justify-center hover:shadow-[0_-4px_20px_rgba(129,72,130,0.4)] transition-shadow"
              >
                <img src="/images/woodland-logo.png" alt="Woodland" className="w-[46px] h-[46px] object-contain" />
              </Link>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://api.whatsapp.com/send?phone=+918999046879&text=Hi%20Woodland,%20I%20would%20like%20to%20discuss%20about%20a%20furniture%20or%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center pb-1.5 flex-1 group"
            >
              <svg viewBox="0 0 24 24" fill="#25d366" className="w-[22px] h-[22px] group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-[9px] font-medium text-[#555] mt-0.5 group-hover:text-[#25d366] transition-colors tracking-wide">WHATSAPP</span>
            </a>

            {/* MENU - triggers Navbar's mobile panel */}
            <button
              onClick={() => window.dispatchEvent(new Event('toggleMobileNav'))}
              className="flex flex-col items-center justify-center pb-1.5 flex-1 group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" className="w-[22px] h-[22px] group-hover:stroke-[#814882] transition-colors">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-medium text-[#555] mt-0.5 group-hover:text-[#814882] transition-colors tracking-wide">MENU</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal form */}
      {formOpen && (
        <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4" onClick={() => setFormOpen(false)}>
          <div className="bg-white rounded-lg w-full max-w-[420px] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#814882] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-bold text-[16px]">GET FREE ESTIMATE</h3>
              <button onClick={() => setFormOpen(false)} className="text-white/80 hover:text-white text-2xl leading-none">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-3">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="w-full px-3 py-2.5 border border-[#ddd] rounded text-[13px] focus:outline-none focus:border-[#814882]" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full px-3 py-2.5 border border-[#ddd] rounded text-[13px] focus:outline-none focus:border-[#814882]" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required className="w-full px-3 py-2.5 border border-[#ddd] rounded text-[13px] focus:outline-none focus:border-[#814882]" />
              <select name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2.5 border border-[#ddd] rounded text-[13px] text-[#666] focus:outline-none focus:border-[#814882]">
                <option value="">Select City</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Navi Mumbai</option>
                <option>Thane</option>
                <option>Nashik</option>
                <option>Aurangabad</option>
                <option>Kolhapur</option>
                <option>Satara</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={3} className="w-full px-3 py-2.5 border border-[#ddd] rounded text-[13px] focus:outline-none focus:border-[#814882] resize-none" />
              <button type="submit" className="w-full py-3 bg-[#814882] hover:bg-[#6a3a6b] text-white font-semibold rounded text-[14px] transition-colors">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== Floating Chat Widget ===== */}
      {/* Chat Bubble Button */}
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[55] flex flex-col items-end gap-3">
        {/* Tooltip */}
        {showTip && !chatOpen && (
          <div className="animate-[fadeSlideUp_0.4s_ease] bg-white rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.15)] px-4 py-3 max-w-[220px] relative">
            <button onClick={() => setShowTip(false)} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#999] hover:bg-[#666] text-white rounded-full text-[11px] flex items-center justify-center leading-none transition-colors">×</button>
            <p className="text-[13px] font-semibold text-[#333] leading-tight">We're Online!</p>
            <p className="text-[11px] text-[#666] mt-0.5">How may I help you today?</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.05)]" />
          </div>
        )}

        {/* Round Chat Button */}
        <button
          onClick={() => { setChatOpen(!chatOpen); setShowTip(false); }}
          className={`w-[56px] h-[56px] rounded-full shadow-[0_4px_20px_rgba(129,72,130,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 ${chatOpen ? 'bg-[#6a3a6b] rotate-0' : 'bg-[#814882]'}`}
        >
          {chatOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
              <circle cx="8" cy="10" r="1" />
              <circle cx="12" cy="10" r="1" />
              <circle cx="16" cy="10" r="1" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Panel */}
      {chatOpen && (
        <div className="fixed bottom-[140px] md:bottom-[80px] right-4 md:right-6 z-[56] w-[340px] sm:w-[370px] animate-[fadeSlideUp_0.3s_ease] rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#814882] to-[#6a3a6b] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <img src="/images/woodland-logo.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-white font-semibold text-[14px]">Woodland Furniture</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                  <span className="text-white/70 text-[11px]">We're Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-[#f7f7f8] px-4 py-4 h-[280px] overflow-y-auto flex flex-col gap-3">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed ${msg.from === 'user'
                  ? 'bg-[#814882] text-white rounded-2xl rounded-br-md'
                  : 'bg-white text-[#333] rounded-2xl rounded-bl-md shadow-sm border border-[#eee]'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white px-4 py-2.5 border-t border-[#eee] flex gap-2 overflow-x-auto">
            {['Get Quote', 'Visit Workshop', 'Call Us'].map((action) => (
              <button
                key={action}
                onClick={() => {
                  setUserMsg(action);
                  setTimeout(() => {
                    setChatMessages((prev) => [...prev, { from: 'user', text: action }]);
                    setUserMsg('');
                    setTimeout(() => {
                      const replies = {
                        'Get Quote': "Sure! Please share your requirements and we'll provide a free estimate. Or fill our form — click the red button on the sidebar!",
                        'Visit Workshop': "We'd love to have you! Visit us at: S no 37, Ajinkyatara Ind. Estate, Nanded Sinhgad Rd, Pune 411068. Open Mon-Sat, 10AM-7PM.",
                        'Call Us': "You can reach us at +91 89990 46879. We're available Mon-Sat, 10AM-7PM. Looking forward to speaking with you!"
                      };
                      setChatMessages((prev) => [...prev, { from: 'bot', text: replies[action] }]);
                    }, 800);
                  }, 100);
                }}
                className="shrink-0 px-3 py-1.5 rounded-full border border-[#814882] text-[#814882] text-[11px] font-medium hover:bg-[#814882] hover:text-white transition-colors"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <div className="bg-white px-3 py-3 border-t border-[#eee] flex items-center gap-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2.5 bg-[#f5f5f5] rounded-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#814882]/30"
            />
            <button
              onClick={handleChatSend}
              className="w-9 h-9 rounded-full bg-[#814882] hover:bg-[#6a3a6b] flex items-center justify-center transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat widget animation */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;
