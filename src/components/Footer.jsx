import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Company', path: '/company' },
  { name: 'Custom Made', path: '/custom-made' },
  { name: "Design 'N' Build", path: '/design-and-build' },
  { name: 'Products', path: '/products' },
  { name: 'Offers', path: '/offers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const services = [
  'Modular Kitchen',
  'Wooden Sofa',
  'Wooden Bed',
  'Wooden Cupboard',
  'Dining Table',
  'Modular Mandir',
  'Curtains',
  'Home Interiors',
  'Office Interiors',
  'Restaurant & Hotel Interiors',
];

const SocialIcon = ({ href, label, children }) => (
  <a
    aria-label={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center hover:bg-[#814882] transition-all duration-300 hover:scale-110"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#1c1c2e]">
      {/* Top Footer */}
      <div className="pt-14 pb-10 min-[992px]:pt-16 min-[992px]:pb-12">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="flex flex-wrap gap-y-10">
            {/* About & Address — 50% */}
            <div className="w-full lg:w-[50%] lg:pr-10">
              <div className="mb-5">
                <img
                  src="/images/woodland-logo.png"
                  alt="Woodland Furniture & Home Interior"
                  className="h-[62px] w-auto bg-white rounded-lg px-3 py-2"
                />
              </div>
              <p className="text-[12px] min-[992px]:text-[13px] text-white/60 leading-[1.8] mb-5">
                Woodland Furniture & Home Interiors are the best manufacturer of all types of Furniture & doing Interior designing since 2014, having very good service ratings in Kothrud, Pune. We do complete interior, customised furniture with best quality assurance. We work in Teak-wood (Sagwan) & Commercial Plywood. We also do Modular Furniture with 3D design.
              </p>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-4 h-4 text-[#b388bf] shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="text-[12px] min-[992px]:text-[13px] text-white/60 leading-relaxed">
                  S no 37, Ajinkyatara Ind. Estate, Nanded Sinhgad Rd, Ghule Patil Nagar, Pandurang Industrial Area, Nanded, Pune, Maharashtra 411068
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-4 h-4 text-[#b388bf] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
                <a href="tel:+918999046879" className="text-[13px] text-[#c9a0d0] font-semibold hover:text-white transition-colors">
                  +91 89990 46879
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#b388bf] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@woodlandfurniture.in" className="text-[13px] text-[#c9a0d0] font-semibold hover:text-white transition-colors">
                  info@woodlandfurniture.in
                </a>
              </div>
            </div>

            {/* Services — 25% */}
            <div className="w-1/2 lg:w-[25%] lg:pl-6">
              <div className="mb-5">
                <h4 className="text-[13px] font-bold text-white/90 uppercase tracking-[1.5px]">
                  Our Services
                </h4>
                <div className="w-8 h-[2px] bg-[#814882] mt-2" />
              </div>
              <ul className="space-y-[7px]">
                {services.map((s, i) => (
                  <li key={i}>
                    <Link
                      to="/products"
                      className="text-[11px] min-[992px]:text-[12px] text-white/45 hover:text-[#c9a0d0] transition-colors leading-relaxed hover:pl-1 duration-200"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links — 25% */}
            <div className="w-1/2 lg:w-[25%] lg:pl-6">
              <div className="mb-5">
                <h4 className="text-[13px] font-bold text-white/90 uppercase tracking-[1.5px]">
                  Quick Links
                </h4>
                <div className="w-8 h-[2px] bg-[#814882] mt-2" />
              </div>
              <ul className="space-y-[7px]">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-[11px] min-[992px]:text-[12px] text-white/45 hover:text-[#c9a0d0] transition-colors leading-relaxed hover:pl-1 duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#151525]">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="flex flex-wrap items-center justify-between py-5 gap-4">
            {/* Copyright */}
            <p className="text-[11px] text-white/30 tracking-wide">
              Copyright &copy; {new Date().getFullYear()} Woodland Furniture & Home Interior. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <SocialIcon href="https://www.facebook.com/share/1Ag3Bfmww2/?mibextid=wwXIfr" label="facebook">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/woodland_furniture_and_interio/" label="instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://api.whatsapp.com/send?phone=+918999046879&text=Hi%20Woodland,%20I%20would%20like%20to%20discuss%20about%20a%20furniture%20or%20interior%20project."
                label="whatsapp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
