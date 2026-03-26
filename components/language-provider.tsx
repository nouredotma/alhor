"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import {
  translations,
  languages,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
  type TranslationKeys,
} from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
  languages: typeof languages
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (storedLanguage && (storedLanguage === "ar" || storedLanguage === "fr")) {
      setLanguageState(storedLanguage as Language)
    }
    setIsHydrated(true)
  }, [])

  // Update document dir and lang attributes when language changes
  useEffect(() => {
    if (!isHydrated) return
    const isRTL = language === "ar"
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language, isHydrated])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }

  // Get translations for current language
  const t = translations[language]

  const currentLanguage = isHydrated ? language : DEFAULT_LANGUAGE

  // Prevent hydration mismatch by using default language until hydrated
  const contextValue: LanguageContextType = {
    language: currentLanguage,
    setLanguage,
    t: isHydrated ? t : translations[DEFAULT_LANGUAGE],
    languages,
    isRTL: currentLanguage === "ar",
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Shorthand hook for just translations
export function useTranslations() {
  const { t } = useLanguage()
  return t
}
