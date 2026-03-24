export { ar, type TranslationKeys } from "./ar"
export { fr } from "./fr"
export { es } from "./es"

import { ar } from "./ar"
import { fr } from "./fr"
import { es } from "./es"

export type Language = "ar" | "fr" | "es"

export const translations = {
  ar,
  fr,
  es,
} as const

export const languages = [
  {
    code: "ar" as const,
    name: "العربية",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  },
  {
    code: "fr" as const,
    name: "Français",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
  {
    code: "es" as const,
    name: "Español",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
] as const

export const DEFAULT_LANGUAGE: Language = "ar"
export const LANGUAGE_STORAGE_KEY = "alhor-language"
