"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import PerfumesGrid from "./perfumes-grid"
import { useLanguage } from "@/components/language-provider"
import { bestSellers, getTranslatedPerfume, type Perfume } from "@/lib/perfumes-data"
import { Loader2 } from "lucide-react"

export default function OurPerfumes() {
  const { t, language } = useLanguage()
  const [bestPerfumes, setBestPerfumes] = useState<Perfume[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBestPerfumes = () => {
      setIsLoading(true)
      
      // Get best perfumes from local data
      const localPerfumes = bestSellers
        .map(perfume => getTranslatedPerfume(perfume, language))
      
      setBestPerfumes(localPerfumes)
      setIsLoading(false)
    }

    fetchBestPerfumes()
  }, [language])

  if (isLoading) {
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-full mx-auto px-4 md:px-12">
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-16" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-full mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg md:text-3xl font-bold font-fauna" style={{ color: 'var(--neutral-900)' }}>{t.bestOffers.sectionTitle}</h2>
          <Link href="/perfumes" className="bg-primary hover:bg-[#CC9F00] text-primary-foreground transition-all px-4 py-2.5 rounded-xs md:rounded-sm text-xs md:text-sm font-medium font-fauna">
            {t.perfume.viewAllPerfumes}
          </Link>
        </div>

        {bestPerfumes.length > 0 ? (
          <div className="w-full">
            <PerfumesGrid perfumes={bestPerfumes} />
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">{t.common.noOffersFound}</p>
          </div>
        )}
      </div>
    </section>
  )
}

