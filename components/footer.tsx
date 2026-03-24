"use client";

import { useLanguage } from "@/components/language-provider";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.header.home },
    { href: "/about", label: t.header.about },
    { href: "/contact", label: t.header.contact },
    { href: "/terms", label: t.footer.terms },
  ];

  const productLinks = [
    { href: "/products?condition=consumables", label: t.footer.productNames.consumables },
    { href: "/products?condition=water", label: t.footer.productNames.water },
    { href: "/products?condition=agriculture", label: t.footer.productNames.agriculture },
    { href: "/products?condition=laboratory", label: t.footer.productNames.laboratory },
    { href: "/products?condition=medical", label: t.footer.productNames.medical },
    { href: "/products?condition=furniture", label: t.footer.productNames.furniture },
    { href: "/products?condition=weighing", label: t.footer.productNames.weighing },
    { href: "/products?condition=chemicals", label: t.footer.productNames.chemicals },
    { href: "/products?condition=used", label: t.footer.productNames.used },
  ];

  return (
    <footer className="w-full bg-[#414141] text-white rounded-t-2xl md:rounded-t-4xl">
      {/* Main Footer */}
      <div className="max-w-full mx-auto px-4 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <a href="/" className="inline-block">
              <img
                src="/whitelogo.png"
                alt="Alhor Parfum"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed">
              {t.footer.brandDescription}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/Mohamedaminefakih/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-400 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/alhor_oud_parfums_orientales/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-400 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@matjar.elhor/"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-400 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          

          {/* Products List */}
          <div>
            <h4 className="text-md font-semibold text-amber-400 mb-2 font-fauna">
              {t.footer.products}
            </h4>
            <nav className="space-y-2.5">
              {productLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-xs sm:text-sm font-light text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

{/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-amber-400 mb-2 font-fauna">
              {t.footer.explore}
            </h4>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xs sm:text-sm font-light text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-md font-semibold text-amber-400 mb-2 font-fauna">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 sm:space-y-4">
              <a 
                href="tel:0669034206"
                className="block p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-medium text-white">{t.footer.phone}</span>
                </div>
                <span className="text-xs sm:text-sm text-white/80 font-light pl-6 group-hover:text-white transition-colors">06 69 03 42 06</span>
              </a>

              <a 
                href="mailto:alhorparfum@gmail.com"
                className="block p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-medium text-white">{t.footer.email}</span>
                </div>
                <span className="text-xs sm:text-sm text-white/80 font-light pl-6 group-hover:text-white transition-colors break-all">alhorparfum@gmail.com</span>
              </a>

              <div className="p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-medium text-white">{t.footer.address}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light pl-6 group-hover:text-white transition-colors">
                  {t.footer.addressLine1}, {t.footer.addressLine2}, {t.footer.addressLine3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 text-[10px] sm:text-sm font-light text-white/80 text-center sm:text-left">
            <p>{t.footer.copyright}</p>
            <p>
              Developed & Designed by{" "}
              <a 
                href="https://wa.me/212613774895" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                nexusdweb
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
