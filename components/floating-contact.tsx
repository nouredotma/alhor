"use client"


import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "./language-provider"

// Custom WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-7 md:h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path
      d="M20.636 3.363C18.399 1.193 15.38 0 12.217 0 5.546 0 .123 5.422.123 12.093c0 2.136.553 4.22 1.6 6.067L0 24l6.037-1.584c1.77.966 3.769 1.474 5.8 1.474h.006c6.67 0 12.093-5.422 12.093-12.093 0-3.164-1.193-6.183-3.3-8.434zM12.217 22.093c-1.798 0-3.558-.484-5.097-1.398l-.366-.217-3.8 1.006.996-3.647-.238-.38c-1.003-1.59-1.534-3.43-1.534-5.365 0-5.52 4.488-10.007 10.01-10.007 2.683 0 5.207 1.046 7.115 2.954 1.908 1.908 2.954 4.432 2.954 7.115 0 5.52-4.488 10.007-10.01 10.007z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
)

export default function FloatingContact() {
  const whatsappNumber = "212669034206"
  const { isRTL } = useLanguage()

  return (
    <>
      {/* Right side contact - Mobile & Desktop */}
      <div className={`fixed bottom-2 ${isRTL ? 'left-2' : 'right-2'} z-50 flex flex-col gap-3 items-end`}>
        {/* WhatsApp Button */}
        <Link 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex"
        >
          <motion.div
            className="w-12 h-12 md:w-14 md:h-14 text-white bg-green-500 rounded-full flex items-center justify-center shadow-lg relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 1 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <WhatsAppIcon />
            </motion.div>
            
            {/* Red Notification Dot */}
            <span className="hidden md:block absolute top-0 right-0 h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-3.5 md:w-3.5 bg-red-500"></span>
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Left side location - Desktop Only */}
      <div className={`fixed bottom-2 ${isRTL ? 'right-2' : 'left-2'} z-50 hidden md:block`}>
        <Link 
          href="https://www.google.com/maps/place/%D9%85%D8%AA%D8%AC%D8%B1+%D8%A7%D9%84%D8%AD%D8%B1+%D9%84%D9%84%D8%B9%D8%B7%D9%88%D8%B1+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xaaeedce220e7fe48?sa=X&ved=1t:2428&ictx=111&cshid=1774377594152" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <motion.div
            className="relative w-20 h-20 bg-card rounded-lg overflow-hidden border-2 border-primary"
            whileHover={{ scale: 1.05 }}
          >
            {/* Map Preview - scaled to make UI elements smaller */}
            <div className="absolute inset-0 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8000.0!2d-7.672775100000001!3d33.564645299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d329ad6984c7%3A0xaaeedce220e7fe48!2z2YXYqtis2LEg2KfZhNit2LEg2YTZhNi52LfZiNixINin2YTYtNix2YLZitip!5e0!3m2!1sfr!2sma!4v1774377811975!5m2!1sfr!2sma"
                className="w-[200%] h-[200%] absolute top-0 left-0 origin-top-left scale-[0.5]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Clickable overlay to ensure navigation works and interactions are disabled inside iframe */}
            <div className="absolute inset-0 z-10" />
          </motion.div>
        </Link>
      </div>
    </>
  )
}
