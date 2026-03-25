export { en, type TranslationKeys } from "./en"
export { fr } from "./fr"

import { en } from "./en"
import { fr } from "./fr"

export type Language = "en" | "fr"

export const translations = {
  en,
  fr,
} as const

export const languages = [
  {
    code: "en" as const,
    name: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
  },
  {
    code: "fr" as const,
    name: "Français",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
] as const

export const DEFAULT_LANGUAGE: Language = "en"
export const LANGUAGE_STORAGE_KEY = "alhor-language"
