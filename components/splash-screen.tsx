"use client"

import { useState, useEffect } from "react"
import Image from "next/image"


export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    // Scroll is already locked by the "loading-lock" class in layout.tsx
    // to prevent the "flash" of scrollbar on initial load.

    const fadeTimer = setTimeout(() => {
      setFadingOut(true)
    }, 3000)

    const removeTimer = setTimeout(() => {
      document.documentElement.classList.remove("loading-lock")
      setVisible(false)
    }, 3600) // 3s display + 0.6s fade-out

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.documentElement.classList.remove("loading-lock")
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        height: "100svh",
        width: "100%",
        background: "#FAFAF7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        transform: fadingOut ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.6s ease-in",
        pointerEvents: fadingOut ? "none" : "auto",
      }}
    >
        <div className="perfume">
          <div className="perfume-logo">
            <Image
              src="/logo.png"
              alt="Alhor Parfum"
              width={140}
              height={140}
              priority
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1) brightness(0.9) sepia(0.2) saturate(2) hue-rotate(5deg)' // Make it look slightly golden-ish if white, or just silver
              }}
            />
          </div>
        </div>
    </div>
  )
}
