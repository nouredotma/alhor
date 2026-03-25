"use client"

import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { Check, ChevronDown, DollarSign, Search, SlidersHorizontal, X, Package, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export interface Filters {
  minPrice?: number | null
  maxPrice?: number | null
  search?: string
  condition?: string | null
}

interface Props {
  onChange: (filters: Filters) => void
  initial?: Filters
}

// Custom Dropdown Component
function FilterDropdown({ 
  options, 
  value, 
  onChange, 
  placeholder 
}: { 
  options: { name: string; value: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedOption = options.find(o => o.value === value)

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-md text-xs md:text-xs font-medium",
          "focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40",
          "transition-all cursor-pointer flex items-center justify-between gap-2",
          isOpen && "ring-1 ring-white/40 border-white/40"
        )}
      >
        <span className="flex items-center gap-2 truncate text-white">
          <span className={selectedOption ? "text-white" : "text-white/40"}>
            {selectedOption?.name || placeholder || "Select..."}
          </span>
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 text-white/50 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={cn(
          "absolute left-0 top-full mt-2 w-full min-w-[200px] rounded-md shadow-2xl border border-white/10 overflow-hidden",
          "transition-all duration-200 origin-top",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
        style={{ zIndex: 9999, backgroundColor: 'var(--color-bg-dark-raised)' }}
      >
        <div className="py-2 max-h-64 overflow-y-auto">
          {options.map((option) => {
            const isSelected = option.value === value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-full px-4 py-2.5 flex items-center gap-3 text-left transition-all duration-150",
                  isSelected 
                    ? "bg-primary/10 text-primary font-semibold" 
                    : "text-white/80 hover:bg-white/10"
                )}
              >
                <span className="flex-1 text-xs md:text-sm">{option.name}</span>
                {isSelected && <Check className="w-4 h-4 text-primary" />}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function SearchFilter({ onChange, initial }: Props) {
  const { t } = useLanguage()
  const [minPrice, setMinPrice] = useState<number | "">(initial?.minPrice ?? "")
  const [maxPrice, setMaxPrice] = useState<number | "">(initial?.maxPrice ?? "")
  const [search, setSearch] = useState<string>(initial?.search ?? "")
  // Whenever the URL changes outside, update the local state if needed
  useEffect(() => {
    setSearch(initial?.search ?? "")
    setMinPrice(initial?.minPrice ?? "")
    setMaxPrice(initial?.maxPrice ?? "")
    setCondition(initial?.condition ?? "all")
  }, [initial?.search, initial?.minPrice, initial?.maxPrice, initial?.condition])

  const [condition, setCondition] = useState<string>(initial?.condition ?? "all")

  const CONDITIONS = [
    { name: t.searchFilter.categories.all, value: "all" },
    { name: t.searchFilter.categories.men, value: "men" },
    { name: t.searchFilter.categories.women, value: "women" },
    { name: t.searchFilter.categories.unisex, value: "unisex" },
  ]

  const emit = () => {
    onChange({
      minPrice: minPrice === "" ? null : Number(minPrice),
      maxPrice: maxPrice === "" ? null : Number(maxPrice),
      search: search || "",
      condition: condition === "all" ? null : condition,
    })
  }

  const reset = () => {
    setMinPrice("")
    setMaxPrice("")
    setSearch("")
    setCondition("all")
    setTimeout(() => {
      onChange({})
    }, 0)
  }

  return (
    <div className="w-full">
      <div className="rounded-md px-3 py-4 lg:p-5 h-fit" style={{ backgroundColor: 'var(--color-bg-dark-raised)' }}>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 lg:mb-6 border-b border-white/20 pb-3 lg:pb-4 font-fauna" style={{ color: 'var(--gold-400)' }}>{t.searchFilter.title}</h3>
        
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* Search Bar */}
          <div className="space-y-2">
            <label className="text-xs font-bold" style={{ color: 'var(--neutral-300)' }}>
              {t.searchFilter.searchProducts}
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && emit()}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 transition-all placeholder:text-white/40"
              placeholder={t.searchFilter.keywords}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-6">
            {/* Condition / Category */}
            <div className="space-y-2">
              <label className="text-xs font-bold" style={{ color: 'var(--neutral-300)' }}>
                {t.searchFilter.categoryLabel}
              </label>
              <FilterDropdown
                options={CONDITIONS}
                value={condition}
                onChange={(val) => { setCondition(val); }}
                placeholder={t.searchFilter.selectCategory}
              />
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-xs font-bold" style={{ color: 'var(--neutral-300)' }}>
                {t.searchFilter.priceRangeMad}
              </label>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <input
                  type="number"
                  value={minPrice as any}
                  onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full px-2 sm:px-3 py-2 bg-white/10 border border-white/20 rounded-md text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 transition-all min-w-0 placeholder:text-white/40"
                  placeholder={t.searchFilter.minPrice}
                />
                <span className="text-white/50 text-xs shrink-0">-</span>
                <input
                  type="number"
                  value={maxPrice as any}
                  onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full px-2 sm:px-3 py-2 bg-white/10 border border-white/20 rounded-md text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 transition-all min-w-0 placeholder:text-white/40"
                  placeholder={t.searchFilter.maxPrice}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row lg:flex-col gap-2 mt-1">
            <button
              type="button"
              onClick={emit}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold rounded-sm transition-all cursor-pointer bg-primary text-primary-foreground hover:bg-[#CC9F00] active:scale-95"
            >
              {t.searchFilter.applyFilter}
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex-1 px-3 py-2.5 text-xs font-medium border rounded-sm cursor-pointer transition-all hover:bg-white/10"
              style={{ color: 'var(--neutral-300)', borderColor: 'var(--neutral-700)' }}
            >
              {t.searchFilter.clearAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
