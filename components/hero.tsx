"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Hero() {
  const { t, isRTL } = useLanguage()
  
  const titleParts = t.hero.title.split("{highlight}")

  const categories = [
    { name: t.searchFilter.categories.men, value: "men", image: "/mens.avif" },
    { name: t.searchFilter.categories.women, value: "women", image: "/womens.avif" },
    { name: t.searchFilter.categories.unisex, value: "unisex", image: "/unisex.avif" },
  ]

  return (
    <section className="relative w-full overflow-hidden min-h-svh flex items-center" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-full mx-auto px-4 md:px-12 pt-52 pb-16 lg:pt-32 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className={`flex flex-col space-y-4 lg:space-y-8 text-start order-1 lg:order-1${isRTL ? ' font-cairo' : ''}`}>
            <div className="space-y-3 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-1 lg:space-y-2"
              >
                <div className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-sm border border-primary">
                  {t.bestOffers.badge.perfume}
                </div>
                <h1 className={cn(
                  "text-3xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-tight lg:leading-[1.1]",
                  isRTL ? "font-cairo" : "font-fauna"
                )}>
                  {titleParts[0]}
                  <span className="text-primary lowercase inline-block italic">
                    {t.hero.highlight}
                  </span>
                  {titleParts[1]}
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mx-0"
              >
                {t.hero.subtitles.join(" ")}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2 sm:gap-4 justify-start"
            >
              <Button 
                size="lg"
                className={cn(
                  "h-10 sm:h-12 md:h-14 px-4 sm:px-8 rounded-full bg-primary hover:bg-[#CC9F00] text-primary-foreground transition-all duration-300 text-xs sm:text-base flex-none",
                  isRTL ? "font-cairo" : "font-fauna"
                )}
                asChild
              >
                <a href="/perfumes">
                  {t.hero.perfumesButton}
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className={cn(
                  "h-10 sm:h-12 md:h-14 px-4 sm:px-8 rounded-full border-2 border-primary/50 hover:border-primary/40 hover:bg-primary/5 text-foreground transition-all duration-300 font-light text-xs sm:text-base flex-none",
                  isRTL ? "font-cairo" : "font-fauna"
                )}
                asChild
              >
                <a href="tel:0669034206">
                  <motion.span
                    animate={{ rotate: [-10, 10, -10], x: [-1, 1, -1] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      ease: "easeInOut" 
                    }}
                    className="inline-block me-2 text-primary"
                  >
                    <Phone className="h-4 w-4" />
                  </motion.span>
                  {t.hero.phoneButton}
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-[650px] mx-auto order-2 lg:order-2">
            <div className="relative aspect-9/8 overflow-hidden rounded-md md:rounded-lg">
              <img
                src="/5.webp"
                alt="Alhor Parfum Luxury Bottle"
                className="w-full h-full object-cover"
              />

              {/* Category Cards - Floating Inside Image */}
              <div className={cn(
                "absolute bottom-2 md:bottom-6 left-0 right-0 z-10 px-2 md:px-6",
                "flex items-center justify-center gap-2 md:gap-6"
              )}>
                {categories.map((cat) => (
                  <a
                    key={cat.value}
                    href={`/perfumes?condition=${cat.value}`}
                    className={cn(
                      "flex-1 flex flex-col items-center gap-1.5 md:gap-3 p-2 md:p-4",
                      "bg-neutral-100 hover:bg-white border border-neutral-200 hover:border-primary",
                      "transition-all duration-300 group",
                      "rounded-xs md:rounded-sm lg:rounded-md"
                    )}
                  >
                    <div className="relative w-8 h-8 md:w-16 md:h-16 flex items-center justify-center rounded-full overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className={cn(
                      "text-[10px] md:text-sm lg:text-base font-bold text-neutral-800 tracking-tight text-center whitespace-nowrap",
                      isRTL ? "font-cairo" : "font-fauna"
                    )}>
                      {cat.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
