import type { Language } from "./translations"

export type ProductCategory = "men" | "women" | "unisex"

export interface PerfumeTranslations {
  name: string
  shortDescription: string
  longDescription: string
  ingredients?: string
}

export interface Perfume {
  id: string
  name: string
  brand: string
  volume: string
  shortDescription: string
  longDescription: string
  ingredients: string
  mainImage: string
  thumbnailImages: string[]
  category: ProductCategory
  price: number
  oldPrice?: number
  stock: number
  isBest?: boolean
  translations?: {
    en?: PerfumeTranslations
    fr?: PerfumeTranslations
  }
}

// Single image used across all perfumes for demonstration
const PERFUME_IMAGE = "/unnamed.jpg"

export const perfumes: Perfume[] = [
  {
    id: "prod-1",
    name: "Oud Wood Intense",
    brand: "Lattafa",
    volume: "100ml",
    shortDescription: "A rich and compelling oud fragrance for men.",
    longDescription:
      "Experience the depth and intensity of pure oud. This masculine scent blends rare spices and woods to create an unforgettable signature aroma, perfect for evening wear and special occasions. The long-lasting formula ensures you leave a memorable impression.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Linalool, Limonene, Coumarin, Eugenol.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "men",
    price: 180,
    oldPrice: 220,
    stock: 15,
    isBest: true,
    translations: {
      en: {
        name: "Oud Wood Intense",
        shortDescription: "A rich and compelling oud fragrance for men.",
        longDescription:
          "Experience the depth and intensity of pure oud. This masculine scent blends rare spices and woods to create an unforgettable signature aroma, perfect for evening wear and special occasions. The long-lasting formula ensures you leave a memorable impression.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Linalool, Limonene, Coumarin, Eugenol.",
      },
      fr: {
        name: "Oud Wood Intense",
        shortDescription: "Un parfum oud riche et captivant pour homme.",
        longDescription:
          "Découvrez la profondeur et l'intensité du oud pur. Ce parfum masculin mélange des épices rares et des bois pour créer un arôme signature inoubliable, parfait pour les soirées et les grandes occasions. Sa formule longue durée garantit une impression mémorable.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Linalool, Limonene, Coumarin, Eugenol.",
      },
    },
  },
  {
    id: "prod-2",
    name: "Floral Bloom",
    brand: "Gucci",
    volume: "50ml",
    shortDescription: "A delicate and romantic floral bouquet for women.",
    longDescription:
      "A celebration of spring flowers, combining jasmine, rose, and lily of the valley. Perfect for everyday elegance, this fragrance slowly reveals its complex floral layers, ending with a soft string of vanilla and musk.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Citronellol, Geraniol.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 140,
    oldPrice: 160,
    stock: 25,
    isBest: true,
    translations: {
      en: {
        name: "Floral Bloom",
        shortDescription: "A delicate and romantic floral bouquet for women.",
        longDescription:
          "A celebration of spring flowers, combining jasmine, rose, and lily of the valley. Perfect for everyday elegance, this fragrance slowly reveals its complex floral layers, ending with a soft string of vanilla and musk.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Citronellol, Geraniol.",
      },
      fr: {
        name: "Cascade Florale",
        shortDescription: "Un bouquet floral délicat et romantique pour femme.",
        longDescription:
          "Une célébration des fleurs printanières, combinant jasmin, rose et muguet. Parfait pour une élégance au quotidien, ce parfum révèle lentement ses couches florales complexes, se terminant par une douce note de vanille et de musc.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Benzyl Salicylate, Citronellol, Geraniol.",
      },
    },
  },
  {
    id: "prod-3",
    name: "Citrus Breeze",
    brand: "Tom Ford",
    volume: "100ml",
    shortDescription: "A refreshing burst of citrus for everyone.",
    longDescription:
      "An invigorating blend of Sicilian lemon, bergamot, and sweet orange. A clean, fresh scent perfect for any occasion. It provides an energetic and uplifting sensation that lingers comfortably throughout the day.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Limonene, Citral, Linalool.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "unisex",
    price: 110,
    oldPrice: 135,
    stock: 40,
    isBest: true,
    translations: {
      en: {
        name: "Citrus Breeze",
        shortDescription: "A refreshing burst of citrus for everyone.",
        longDescription:
          "An invigorating blend of Sicilian lemon, bergamot, and sweet orange. A clean, fresh scent perfect for any occasion. It provides an energetic and uplifting sensation that lingers comfortably throughout the day.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Limonene, Citral, Linalool.",
      },
      fr: {
        name: "Brise d'Agrumes",
        shortDescription: "Une explosion rafraîchissante d'agrumes pour tous.",
        longDescription:
          "Un mélange revigorant de citron sicilien, de bergamote et d'orange douce. Un parfum propre et frais parfait pour toutes les occasions. Il procure une sensation énergique et exaltante qui s'attarde confortablement tout au long de la journée.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Limonene, Citral, Linalool.",
      },
    },
  },
  {
    id: "prod-4",
    name: "Midnight Rose",
    brand: "Lancome",
    volume: "75ml",
    shortDescription: "A seductive and mysterious rose perfume.",
    longDescription:
      "A deep, sensual take on the classic rose, laced with dark berry notes and a hint of vanilla. The Midnight Rose offers a captivating allure for the modern woman who embraces elegance and mystery.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Geraniol, Citronellol, Farnesol.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 165,
    oldPrice: 195,
    stock: 12,
    isBest: false,
    translations: {
      en: {
        name: "Midnight Rose",
        shortDescription: "A seductive and mysterious rose perfume.",
        longDescription:
          "A deep, sensual take on the classic rose, laced with dark berry notes and a hint of vanilla. The Midnight Rose offers a captivating allure for the modern woman who embraces elegance and mystery.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Geraniol, Citronellol, Farnesol.",
      },
      fr: {
        name: "Rose de Minuit",
        shortDescription: "Un parfum à la rose séduisant et mystérieux.",
        longDescription:
          "Une version profonde et sensuelle de la rose classique, parfumée de notes de fruits rouges noirs et d'un soupçon de vanille. Minuit Rose offre une allure captivante pour la femme moderne qui embrasse l'élégance et le mystère.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Geraniol, Citronellol, Farnesol.",
      },
    },
  },
  {
    id: "prod-5",
    name: "Bleu Intense",
    brand: "Horizon",
    volume: "100ml",
    shortDescription: "A fresh, clean, and profoundly sensual fragrance.",
    longDescription:
      "A woody, aromatic fragrance for the man who defies convention. The profoundly sensual Eau de Parfum, infused with crisp citrus notes, offers an intense and refined trail.",
    ingredients: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "men",
    price: 135,
    oldPrice: 165,
    stock: 50,
    isBest: true,
    translations: {
      en: {
        name: "Bleu Intense",
        shortDescription: "A fresh, clean, and profoundly sensual fragrance.",
        longDescription:
          "A woody, aromatic fragrance for the man who defies convention. The profoundly sensual Eau de Parfum, infused with crisp citrus notes, offers an intense and refined trail.",
        ingredients: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol.",
      },
      fr: {
        name: "Bleu Intense",
        shortDescription: "Un parfum frais, propre et profondément sensuel.",
        longDescription:
          "Un parfum boisé et aromatique pour l'homme qui défie les conventions. L'Eau de Parfum profondément sensuelle, imprégnée de notes d'agrumes intenses, offre un sillage intense et raffiné.",
        ingredients: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol.",
      },
    },
  },
  {
    id: "prod-6",
    name: "Jasmine Mystique",
    brand: "Lumiere",
    volume: "50ml",
    shortDescription: "An incredibly lush and radiant jasmine perfume.",
    longDescription:
      "Crafted with hand-picked jasmine blossoms at the break of dawn, this fragrance captures the pure, luminous essence of the flower. It is sophisticated, radiant, and endlessly beautiful.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Hexyl Cinnamal, Linalool.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 130,
    oldPrice: 150,
    stock: 10,
    isBest: false,
    translations: {
      en: {
        name: "Jasmine Mystique",
        shortDescription: "An incredibly lush and radiant jasmine perfume.",
        longDescription:
          "Crafted with hand-picked jasmine blossoms at the break of dawn, this fragrance captures the pure, luminous essence of the flower. It is sophisticated, radiant, and endlessly beautiful.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Hexyl Cinnamal, Linalool.",
      },
      fr: {
        name: "Jasmin Mystique",
        shortDescription: "Un parfum au jasmin incroyablement luxuriant et radieux.",
        longDescription:
          "Élaboré avec des fleurs de jasmin cueillies à la main à l'aube, ce parfum capture l'essence pure et lumineuse de la fleur. Il est sophistiqué, radieux et infiniment beau.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Benzyl Salicylate, Hexyl Cinnamal, Linalool.",
      },
    },
  },
  {
    id: "prod-7",
    name: "Santal Royal",
    brand: "Royale",
    volume: "125ml",
    shortDescription: "A fascinating clash of sandalwood and dark leather notes.",
    longDescription:
      "A mysterious, captivating fragrance for both men and women. Shrouded in an aura of oriental mystery, the woody freshness of sandalwood contrasts with the deep, intoxicating notes of leather and oud.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Citronellol, Geraniol, Cinnamal.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE],
    category: "unisex",
    price: 190,
    oldPrice: 215,
    stock: 8,
    isBest: true,
    translations: {
      en: {
        name: "Santal Royal",
        shortDescription: "A fascinating clash of sandalwood and dark leather notes.",
        longDescription:
          "A mysterious, captivating fragrance for both men and women. Shrouded in an aura of oriental mystery, the woody freshness of sandalwood contrasts with the deep, intoxicating notes of leather and oud.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Citronellol, Geraniol, Cinnamal.",
      },
      fr: {
        name: "Santal Royal",
        shortDescription: "Un fascinant affrontement entre le bois de santal et les notes sombres de cuir.",
        longDescription:
          "Un parfum mystérieux et captivant pour les hommes et les femmes. Enveloppée dans une aura de mystère oriental, la fraîcheur boisée du bois de santal contraste avec les notes profondes et envoûtantes du cuir et du oud.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Citronellol, Geraniol, Cinnamal.",
      },
    },
  },
  {
    id: "prod-8",
    name: "Vanilla Gold",
    brand: "Elegance",
    volume: "75ml",
    shortDescription: "A deliciously warm, sweet, and comforting vanilla blend.",
    longDescription:
      "A rich tapestry of golden vanilla and sweet amber, intertwined with smoky woods. A truly grand, enveloping scent designed for both men and women seeking an opulent and sweet everyday fragrance.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "unisex",
    price: 110,
    oldPrice: 135,
    stock: 30,
    isBest: false,
    translations: {
      en: {
        name: "Vanilla Gold",
        shortDescription: "A deliciously warm, sweet, and comforting vanilla blend.",
        longDescription:
          "A rich tapestry of golden vanilla and sweet amber, intertwined with smoky woods. A truly grand, enveloping scent designed for both men and women seeking an opulent and sweet everyday fragrance.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
      },
      fr: {
        name: "Or Vanille",
        shortDescription: "Un mélange de vanille délicieusement chaud, doux et réconfortant.",
        longDescription:
          "Une riche tapisserie de vanille dorée et d'ambre doux, entrelacée de bois fumés. Un parfum véritablement grandiose et enveloppant, conçu pour les hommes et les femmes en quête d'un parfum quotidien opulent et doux.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
      },
    },
  },
]

export function getPerfumeById(id: string): Perfume | undefined {
  return perfumes.find((perfume) => perfume.id === id)
}

export function getTranslatedPerfume(perfume: Perfume, language: Language) {
  const translation = perfume.translations?.[language]

  if (!translation) {
    const englishTranslation = perfume.translations?.en
    if (englishTranslation && language !== "en") {
      return {
        ...perfume,
        name: englishTranslation.name,
        shortDescription: englishTranslation.shortDescription,
        longDescription: englishTranslation.longDescription,
        ingredients: englishTranslation.ingredients || perfume.ingredients,
      }
    }
    return perfume
  }

  return {
    ...perfume,
    name: translation.name,
    shortDescription: translation.shortDescription,
    longDescription: translation.longDescription,
    ingredients: translation.ingredients || perfume.ingredients,
  }
}

export const bestSellers: Perfume[] = perfumes.filter(p => p.isBest).slice(0, 4);

