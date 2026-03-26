"use client"

import { useState, useEffect, useMemo, Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import { Container } from "@/components/ui/container"
import PerfumesGrid from "@/components/perfumes-grid"
import SearchFilter, { type Filters } from "@/components/search-filter"
import { perfumes, getTranslatedPerfume, type Perfume } from "@/lib/perfumes-data"
import { useLanguage } from "@/components/language-provider"
import { Loader2, ChevronRight } from "lucide-react"
import Link from "next/link"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

function PerfumesContent() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('q')
  const conditionParam = searchParams.get('condition')
  const minParam = searchParams.get('min')
  const maxParam = searchParams.get('max')
  
  const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([])
  const [filters, setFilters] = useState<Filters>({
    search: searchParam ?? "",
    condition: conditionParam ?? "all",
    minPrice: minParam ? Number(minParam) : null,
    maxPrice: maxParam ? Number(maxParam) : null,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPerfumes = () => {
      setIsLoading(true)
      // perfumes are local now
      const localPerfumes = perfumes.map(p => getTranslatedPerfume(p, language))
      setAllPerfumes(localPerfumes)
      setIsLoading(false)
    }

    fetchPerfumes()
  }, [language])

  const filteredPerfumes = useMemo(() => {
    return allPerfumes.filter((p) => {
      // Price filtering
      if (filters.minPrice != null && p.price < filters.minPrice) return false
      if (filters.maxPrice != null && p.price > filters.maxPrice) return false

      // Category filtering
      if (filters.condition && filters.condition !== "all") {
        if (p.category !== filters.condition) return false
      }

      // Search filtering
      if (filters.search) {
        const searchStr = filters.search.toLowerCase()
        const hay = (p.name + " " + p.shortDescription).toLowerCase()
        if (!hay.includes(searchStr)) return false
      }

      return true
    })
  }, [allPerfumes, filters])

  useEffect(() => {
    setFilters(prev => ({ 
      ...prev, 
      search: searchParam ?? "", 
      condition: conditionParam ?? "all" ,
      minPrice: minParam ? Number(minParam) : null,
      maxPrice: maxParam ? Number(maxParam) : null,
    }))
  }, [searchParam, conditionParam, minParam, maxParam])

  const handleFilterChange = (newFilters: Filters) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (newFilters.search) params.set('q', newFilters.search)
    else params.delete('q')

    if (newFilters.condition && newFilters.condition !== "all") params.set('condition', newFilters.condition)
    else params.delete('condition')

    if (newFilters.minPrice != null) params.set('min', newFilters.minPrice.toString())
    else params.delete('min')

    if (newFilters.maxPrice != null) params.set('max', newFilters.maxPrice.toString())
    else params.delete('max')
    
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.replace(newUrl, { scroll: false })

    setFilters(newFilters)
  }

  return (
    <main className="w-full bg-neutral-50/50 min-h-screen">
      <Header forceScrolled />

      {/* Breadcrumb Section */}
      <div className="pt-44 pb-6 md:pb-8">
        <Container className="max-w-full mx-auto px-4 md:px-12">
            <nav className="flex items-center gap-1.5 text-[10px] md:text-sm text-muted-foreground leading-none">
                <Link href="/" className="hover:text-primary transition-colors">{t.header.home}</Link>
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 -mt-px" />
                <span className="text-primary font-medium">{t.header.perfumes}</span>
            </nav>
        </Container>
      </div>

      <section className="pb-12 md:pb-20">
        <Container className="max-w-full mx-auto px-4 md:px-12">
          
          <div className="flex flex-col gap-8">
            {/* Filters at the top */}
            <div className="w-full">
              <SearchFilter 
                onChange={handleFilterChange} 
                initial={{ 
                  search: searchParam ?? "",
                  condition: conditionParam ?? "all",
                  minPrice: minParam ? Number(minParam) : null,
                  maxPrice: maxParam ? Number(maxParam) : null
                }} 
              />
            </div>

            {/* perfumes Grid Main Area */}
            <div className="w-full">
              <PerfumesGrid perfumes={filteredPerfumes} isLoading={isLoading} />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  )
}

export default function PerfumesPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
      <PerfumesContent />
    </Suspense>
  )
}

