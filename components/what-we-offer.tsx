"use client"

import { useLanguage } from "@/components/language-provider"
import { Truck, Wallet, BadgeCheck, Headphones } from "lucide-react"

export default function WhatWeOffer() {
  const { t } = useLanguage()

  const offers = [
    {
      icon: <Truck className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: t.whatWeOffer.delivery.title,
      description: t.whatWeOffer.delivery.description,
    },
    {
      icon: <Wallet className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: t.whatWeOffer.cashOnDelivery.title,
      description: t.whatWeOffer.cashOnDelivery.description,
    },
    {
      icon: <BadgeCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: t.whatWeOffer.quality.title,
      description: t.whatWeOffer.quality.description,
    },
    {
      icon: <Headphones className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: t.whatWeOffer.support.title,
      description: t.whatWeOffer.support.description,
    },
  ]

  return (
    <section className="w-full pb-16 pt-8" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-full mx-auto px-4 md:px-12">
        <h2 className="text-lg md:text-3xl font-bold font-fauna mb-4 md:mb-5 text-center md:text-left" style={{ color: 'var(--neutral-900)' }}>
          {t.whatWeOffer.sectionTitle}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="p-4 md:p-8 rounded-lg flex flex-col items-center text-center transition-all border border-border hover:border-primary"
              style={{ backgroundColor: 'var(--neutral-100)' }}
            >
              <div className="mb-4">
                {offer.icon}
              </div>
              <h3 className="text-sm md:text-lg font-bold font-fauna mb-2 md:mb-3" style={{ color: 'var(--neutral-900)' }}>
                {offer.title}
              </h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
