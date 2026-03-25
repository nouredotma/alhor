"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Banner, { BANNER1_ITEMS, BANNER2_ITEMS } from "@/components/banner"
import OurPerfumes from "@/components/our-perfumes"
import WhatWeOffer from "@/components/what-we-offer"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"


export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Banner items={BANNER1_ITEMS} />
      <OurPerfumes />
      <WhatWeOffer />
      <Banner items={BANNER2_ITEMS} reverse={true} />
      <Testimonials />
      <Footer />
      <FloatingContact />
    </main>
  )
}
