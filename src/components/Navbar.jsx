import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (prev && y < 30) return false;
            if (!prev && y > 60) return true;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Listen for custom event from mobile bottom bar MENU button
  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener('toggleMobileNav', handleToggle);
    return () => window.removeEventListener('toggleMobileNav', handleToggle);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    {
      name: 'What We Do', path: '/custom-made', sub: [
        { name: 'Customized Interiors', path: '/custom-made', icon: '🎨' },
        { name: 'Design and Build', path: '/design-and-build', icon: '🏗️' },
      ]
    },
    {
      name: 'Products', path: '/products', sub: [
        { name: 'Modular Kitchen', path: '/products/modular-kitchen', icon: '🍳' },
        { name: 'Wooden Sofa', path: '/products/wooden-sofa', icon: '🛋️' },
        { name: 'Wooden Bed', path: '/products/wooden-bed', icon: '🛏️' },
        { name: 'Wooden Cupboard', path: '/products/wooden-cupboard', icon: '🚪' },
        { name: 'Dining Table', path: '/products/dining-table', icon: '🍽️' },
        { name: 'Modular Mandir', path: '/products/modular-mandir', icon: '🕉️' },
        { name: 'Curtains', path: '/products/curtains', icon: '🪟' },
        { name: 'Home Interior', path: '/products/home-interior', icon: '🏠' },
        { name: 'Office Interior', path: '/products/office-interior', icon: '🏢' },
      ]
    },
    { name: 'Offers', path: '/offers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleDropdownEnter = (name) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const textColor = scrolled ? 'text-[#333]' : 'text-white';
  const hoverColor = 'hover:text-[#814882]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-[background,box-shadow,backdrop-filter] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
          : 'bg-gradient-to-b from-black/30 to-transparent shadow-none'
          }`}
      >
        {/* Top micro-bar */}
        <div className={`hidden lg:block transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <div className="flex items-center justify-between px-10 xl:px-[70px] border-b border-white/10">
            <div className="flex items-center gap-3 py-[5px]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white/60">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-[11px] tracking-[1px] uppercase text-white/60">Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="tel:+918999046879" className="flex items-center gap-1.5 text-[11px] tracking-[0.5px] py-[5px] transition-colors text-white/70 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91 89990 46879
              </a>
              <span className="text-[10px] text-white/30">|</span>
              <a href="mailto:info@woodlandfurniture.in" className="text-[11px] tracking-[0.5px] py-[5px] transition-colors text-white/70 hover:text-white">
                info@woodlandfurniture.in
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`flex items-center justify-between transition-[padding] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'px-4 sm:px-8 lg:px-8 xl:px-12' : 'px-4 sm:px-8 lg:px-10 xl:px-[70px]'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center py-2.5 lg:py-3 relative z-10">
            <img
              src="/images/woodland-logo.png"
              alt="Woodland Furniture & Home Interior"
              className={`w-auto transition-[height] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'h-[36px] sm:h-[40px] lg:h-[42px]' : 'h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px]'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.sub && handleDropdownEnter(link.name)}
                onMouseLeave={() => link.sub && handleDropdownLeave()}
              >
                <Link
                  to={link.path}
                  className={`relative flex items-center gap-1 px-[10px] xl:px-[14px] 2xl:px-[16px] py-5 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium uppercase tracking-[0.5px] transition-all duration-300 whitespace-nowrap group ${isActive(link.path)
                    ? 'text-[#814882]'
                    : `${textColor} ${hoverColor}`
                    }`}
                >
                  {link.name}
                  {link.sub && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''} opacity-50 group-hover:opacity-100`}>
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  )}
                  {/* Active indicator line */}
                  <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 h-[2px] bg-[#814882] transition-all duration-300 rounded-full ${isActive(link.path) ? 'w-5' : 'w-0 group-hover:w-5'}`} />
                </Link>

                {/* --- Dropdown: Products (grid) --- */}
                {link.name === 'Products' && (
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 transition-all duration-300 ${activeDropdown === 'Products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="bg-white rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-[#f0f0f0] p-5 min-w-[380px]">
                      <p className="text-[10px] uppercase tracking-[2px] text-[#999] font-semibold mb-3 px-1">Our Products</p>
                      <div className="grid grid-cols-2 gap-1">
                        {link.sub.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-[#444] hover:bg-[#f8f4f9] hover:text-[#814882] transition-all duration-200 group/item"
                          >
                            <span className="text-base group-hover/item:scale-110 transition-transform">{s.icon}</span>
                            <span className="font-medium">{s.name}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-[#f0f0f0] mt-3 pt-3 px-1">
                        <Link to="/products" className="text-[12px] text-[#814882] font-semibold uppercase tracking-[1px] hover:tracking-[1.5px] transition-all">
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- Dropdown: What We Do --- */}
                {link.name === 'What We Do' && (
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 transition-all duration-300 ${activeDropdown === 'What We Do' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="bg-white rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-[#f0f0f0] p-4 min-w-[260px]">
                      {link.sub.map((s, i) => (
                        <Link
                          key={i}
                          to={s.path}
                          className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-[13px] text-[#444] hover:bg-[#f8f4f9] hover:text-[#814882] transition-all duration-200 group/item"
                        >
                          <span className="text-base group-hover/item:scale-110 transition-transform">{s.icon}</span>
                          <span className="font-medium">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Free Estimate CTA */}
            <Link
              to="/contact"
              className={`ml-3 relative overflow-hidden flex items-center justify-center rounded-full h-[36px] px-6 text-[12px] font-semibold uppercase tracking-[1px] transition-all duration-500 ${scrolled
                ? 'bg-[#814882] text-white hover:bg-[#6a3a6b] shadow-[0_4px_15px_rgba(129,72,130,0.3)]'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-[#814882] hover:border-[#814882]'
                }`}
            >
              Free Estimate
            </Link>
          </nav>

          {/* Mobile / Tablet Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-100 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block w-full h-[2px] rounded-full transition-all duration-400 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''} ${scrolled ? 'bg-[#333]' : 'bg-white'}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''} ${scrolled ? 'bg-[#333]' : 'bg-white'}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all duration-400 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''} ${scrolled ? 'bg-[#333]' : 'bg-white'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}
        onClick={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-[65] h-full w-[85%] max-w-[380px] bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src="/images/woodland-logo.png" alt="Woodland" className="h-[35px] w-auto" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f5f5f5] hover:bg-[#eee] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="overflow-y-auto h-[calc(100%-140px)] py-2">
          {navLinks.map((link, idx) => (
            <div key={link.name} style={{ animationDelay: `${idx * 50}ms` }} className={`${isOpen ? 'animate-[slideIn_0.4s_ease_forwards]' : ''}`}>
              {link.sub ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    className={`w-full flex items-center justify-between px-6 py-3.5 text-[15px] uppercase font-medium tracking-[0.5px] transition-colors ${isActive(link.path) ? 'text-[#814882] bg-[#faf6fa]' : 'text-[#333] hover:text-[#814882] hover:bg-[#faf6fa]'}`}
                  >
                    {link.name}
                    <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 transition-transform duration-300 text-[#999] ${mobileExpanded === link.name ? 'rotate-180' : ''}`}>
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${mobileExpanded === link.name ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="bg-[#faf8fa] py-1">
                      {link.sub.map((s, i) => (
                        <Link
                          key={i}
                          to={s.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-8 py-3 text-[14px] transition-colors ${isActive(s.path) ? 'text-[#814882] font-medium' : 'text-[#666] hover:text-[#814882]'}`}
                        >
                          <span className="text-sm">{s.icon}</span>
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3.5 text-[15px] uppercase font-medium tracking-[0.5px] transition-colors ${isActive(link.path) ? 'text-[#814882] bg-[#faf6fa] border-l-[3px] border-[#814882]' : 'text-[#333] hover:text-[#814882] hover:bg-[#faf6fa]'}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#f0f0f0] bg-white p-4">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 bg-[#814882] text-white rounded-full text-[13px] font-semibold uppercase tracking-[1px] hover:bg-[#6a3a6b] transition-colors shadow-[0_4px_15px_rgba(129,72,130,0.3)]"
          >
            Get Free Estimate
          </Link>
          <a href="tel:+918999046879" className="flex items-center justify-center gap-2 mt-3 text-[13px] text-[#666]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#814882]">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            +91 89990 46879
          </a>
        </div>
      </div>

      {/* Add slideIn animation */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
