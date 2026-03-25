"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronRight, Facebook, Instagram, Mail, Phone, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header({ isStatic = false, forceScrolled = false }: { isStatic?: boolean, forceScrolled?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const { t, languages, language, setLanguage } = useLanguage()
  const { totalItems, toggleCartModal } = useCart()
  
  const isSolid = hasScrolled || forceScrolled

  // Check if we're in the users section
  const isUsersSection = pathname?.startsWith("/users") || isStatic

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (productsDropdownOpen && !target.closest('.perfumes-dropdown-container')) {
        setProductsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [productsDropdownOpen])

  const productLinks = [
    { href: "/perfumes?condition=men", label: t.header.men },
    { href: "/perfumes?condition=women", label: t.header.women },
    { href: "/perfumes?condition=unisex", label: t.header.unisex },
  ]

  return (
    <>
      <header
        className={cn(
          "top-0 z-40 w-full transition-all duration-300",
          isUsersSection 
            ? "sticky top-0 border-b border-gray-200" 
            : cn(
                "fixed",
                isSolid ? "border-b border-gray-200" : "bg-transparent"
              ),
        )}
        style={isUsersSection || isSolid ? { backgroundColor: 'var(--neutral-50)' } : {}}
      >
        {/* Top Bar - Hides on Scroll */}
        <div 
          className={cn(
            "w-full transition-all duration-300 overflow-hidden z-50 relative", 
            hasScrolled ? "h-0 opacity-0" : "h-[60px] sm:h-10 opacity-100"
          )}
          style={{ backgroundColor: 'var(--color-bg-dark)' }}
        >
          <Container 
            className="max-w-full mx-auto px-4 md:px-12 h-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-between text-[11px] sm:text-xs font-medium py-1.5 sm:py-0"
            style={{ color: 'var(--neutral-300)' }}
          >
            {/* Desktop: Phone & Email Left | Mobile: Row 1 - Phone */}
            <div className="flex items-center justify-start gap-6 mb-1 sm:mb-0">
              <a href="tel:0669034206" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>06 69 03 42 06</span>
              </a>
              <a href="mailto:alhorparfum@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>alhorparfum@gmail.com</span>
              </a>
            </div>

            {/* Desktop: Socials Right | Mobile: Row 2 - Email & Socials */}
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
              <a href="mailto:alhorparfum@gmail.com" className="flex sm:hidden items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>alhorparfum@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4">
                <span className="hidden md:inline opacity-60 text-primary">Follow us:</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/Mohamedaminefakih/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://www.instagram.com/alhor_oud_parfums_orientales/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://www.tiktok.com/@matjar.elhor/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
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
            </div>
          </Container>
        </div>

        <Container className="max-w-full mx-auto px-2 md:px-12">
          {/* Mobile layout - logo left, menu right */}
          <div className="md:hidden flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center z-10">
              <div className="relative h-20 w-40">
                <Image src={isSolid || isUsersSection ? "/logo.png" : "/whitelogo.png"} alt="Alhor Parfum Logo" fill className="object-contain" priority sizes="(max-width: 768px) 112px, 128px" />
              </div>
            </Link>

            {/* Right: Menu Button */}
            <div className="flex items-center gap-2 z-20">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors",
                  isSolid || isUsersSection ? "hover:bg-black/5" : "hover:bg-white/10"
                )}
                aria-label="Toggle menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300"
                >
                  <path
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
                    stroke={isSolid || isUsersSection ? "#000000" : "#ffffff"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop layout - logo left, nav center, actions right */}
          <div className="hidden md:block">
            <div className="flex h-16 items-center justify-between gap-6">
              {/* Left: Logo */}
              <div className="flex items-center gap-6 shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="relative h-28 w-44">
                    <Image src={isSolid || isUsersSection ? "/logo.png" : "/whitelogo.png"} alt="Alhor Parfum Logo" fill className="object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                  </div>
                </Link>
              </div>

              {/* Center: Navigation Links */}
              <nav className="flex items-center gap-6 flex-1 justify-center">
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                    pathname === "/" ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                  )}
                >
                  {t.header.home}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                      (pathname === "/perfumes" && typeof window !== 'undefined' && window.location.search.includes(`condition=${link.href.split('=')[1]}`)) ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}



                <Link
                  href="/contact"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group font-fauna tracking-wider hover:text-secondary",
                    pathname === "/contact" ? "text-primary" : (isSolid || isUsersSection ? "text-gray-800" : "text-white")
                  )}
                >
                  {t.header.contact}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>

              {/* Right: Contact, Cart & Language */}
              <div className="flex items-center gap-3 shrink-0">
                {/* Cart Icon */}
                <button
                  onClick={() => toggleCartModal()}
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-colors cursor-pointer",
                    (isSolid || isUsersSection)
                      ? "text-primary"
                      : "text-white"
                  )}
                  aria-label={t.cart.cart}
                >
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                  <span className={cn(
                    "absolute top-0 right-0 w-4 h-4 rounded-full text-white text-[9px] font-light flex items-center justify-center shadow-sm transition-colors",
                    totalItems === 0 ? "bg-yellow-500" : "bg-green-500"
                  )}>
                    {totalItems}
                  </span>
                </button>
                {/* Desktop Language Dropdown */}
                <LanguageSwitcher
                  buttonClassName={cn(
                    "transition-colors",
                    (isSolid || isUsersSection)
                      ? "bg-primary/5 hover:bg-primary/10 border border-primary/20 text-gray-800"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop overlay with blur effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-50 md:hidden overflow-hidden bg-white"
              >
                <div className="h-full flex flex-col">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between px-3 py-4" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                    <Link href="/" className="inline-block" onClick={() => setIsMenuOpen(false)}>
                      <div className="relative h-10 w-32">
                        <Image src="/whitelogo.png" alt="Alhor Parfum Logo" fill className="object-contain" priority sizes="(max-width: 768px) 96px, 128px" />
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation links */}
                  <div className="flex-1 overflow-y-auto py-3 px-1">
                    <nav className="space-y-0.5">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        <Link
                          href="/"
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide border-b border-gray-100 font-fauna",
                            pathname === "/" ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                          )}
                        >
                          {t.header.home}
                        </Link>
                      </motion.div>

                      {productLinks.map((link, idx) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (idx * 0.05) }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide border-b border-gray-100 font-fauna",
                              (pathname === "/perfumes" && typeof window !== 'undefined' && window.location.search.includes(`condition=${link.href.split('=')[1]}`)) ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}



                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href="/contact"
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "flex items-center w-full py-4 px-4 transition-all duration-200 text-sm font-medium tracking-wide font-fauna",
                            pathname === "/contact" ? "bg-primary/5 text-primary" : "text-gray-700 hover:text-primary"
                          )}
                        >
                          {t.header.contact}
                        </Link>
                      </motion.div>
                    </nav>
                  </div>

                  {/* Footer with Language & Login */}
                  <div className="border-t border-gray-100 p-4 space-y-3 bg-white">
                    {/* Language Selector */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-1">{t.header.language}</p>
                      <div className="flex gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code as "en" | "fr")}
                            className={cn(
                              "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm text-sm font-medium transition-all duration-200",
                              lang.code === language
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:bg-primary/5"
                            )}
                          >
                            <div className="relative w-5 h-3.5 shrink-0">
                              <Image
                                src={lang.flag || "/placeholder.svg"}
                                alt={lang.name}
                                fill
                                className="object-cover rounded-sm"
                                sizes="20px"
                              />
                            </div>
                            <span className="uppercase text-xs">{lang.code}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>


                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Floating Cart Button - Bottom Left */}
      <button
        onClick={() => toggleCartModal()}
        className="fixed bottom-2 left-2 z-40 md:hidden w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-[#CC9F00] transition-all active:scale-95 cursor-pointer"
        aria-label={t.cart.cart}
      >
        <ShoppingCart className="w-5 h-5" />
        <span className={cn(
          "absolute top-0 right-0 w-5 h-5 rounded-full text-white text-[9px] font-light flex items-center justify-center shadow-sm transition-colors border-2 border-primary",
          totalItems === 0 ? "bg-yellow-500" : "bg-green-500"
        )}>
          {totalItems}
        </span>
      </button>
    </>
  )
}
