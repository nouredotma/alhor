import type { Language } from "./translations"

export type ProductCategory = "men" | "women" | "unisex"

export interface PerfumeTranslations {
  name: string
  longDescription: string
  ingredients?: string
}

export interface Perfume {
  id: string
  name: string
  brand: string
  volume: string
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
    ar?: PerfumeTranslations
    fr?: PerfumeTranslations
  }
}

// Single image used across all perfumes for demonstration
const PERFUME_IMAGE = "/p1.png"

export const perfumes: Perfume[] = [
  {
    id: "prod-1",
    name: "Oud Wood Intense",
    brand: "Lattafa",
    volume: "100ml",
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
      ar: {
        name: "عود وود إنتنس",
        longDescription:
          "اكتشف عمق وكثافة العود الخالص. هذا العطر الرجالي يمزج بين التوابل النادرة والأخشاب لخلق رائحة مميزة لا تُنسى، مثالي للسهرات والمناسبات الخاصة. تركيبته طويلة الأمد تضمن لك ترك انطباع لا يُنسى.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، لينالول، ليمونين، كومارين، أوجينول.",
      },
      fr: {
        name: "Oud Wood Intense",
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
      ar: {
        name: "زهور الربيع",
        longDescription:
          "احتفال بزهور الربيع، يجمع بين الياسمين والورد وزنبق الوادي. مثالي للأناقة اليومية، هذا العطر يكشف ببطء عن طبقاته الزهرية المعقدة، وينتهي بلمسة ناعمة من الفانيليا والمسك.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، بنزيل ساليسيلات، سيترونيلول، جيرانيول.",
      },
      fr: {
        name: "Cascade Florale",
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
      ar: {
        name: "نسيم الحمضيات",
        longDescription:
          "مزيج منعش من الليمون الصقلي والبرغموت والبرتقال الحلو. رائحة نظيفة ومنعشة مثالية لأي مناسبة. يمنحك إحساساً بالحيوية والنشاط يدوم طوال اليوم.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، ليمونين، سيترال، لينالول.",
      },
      fr: {
        name: "Brise d'Agrumes",
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
    longDescription:
      "A deep, sensual take on the classic rose, laced with dark berry notes and a hint of vanilla. The Midnight Rose offers a captivating allure for the modern woman who embraces elegance and mystery.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Geraniol, Citronellol, Farnesol.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 165,
    oldPrice: 195,
    stock: 12,
    isBest: true,
    translations: {
      ar: {
        name: "وردة منتصف الليل",
        longDescription:
          "لمسة عميقة وحسية على الوردة الكلاسيكية، مزينة بنوتات التوت الداكن ولمسة من الفانيليا. تقدم وردة منتصف الليل جاذبية آسرة للمرأة العصرية التي تحتضن الأناقة والغموض.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، جيرانيول، سيترونيلول، فارنيسول.",
      },
      fr: {
        name: "Rose de Minuit",
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
      ar: {
        name: "بلو إنتنس",
        longDescription:
          "عطر خشبي عطري للرجل الذي يتحدى المألوف. أو دو بارفوم حسي وعميق، مُعزز بنوتات حمضية منعشة، يقدم أثراً عطرياً مكثفاً وراقياً.",
        ingredients: "كحول، عطر، ماء، ليمونين، لينالول، سيترونيلول.",
      },
      fr: {
        name: "Bleu Intense",
        longDescription:
          "Un parfum frais, propre et profondément sensuel.",
        ingredients: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol.",
      },
    },
  },
  {
    id: "prod-6",
    name: "Jasmine Mystique",
    brand: "Lumiere",
    volume: "50ml",
    longDescription:
      "Crafted with hand-picked jasmine blossoms at the break of dawn, this fragrance captures the pure, luminous essence of the flower. It is sophisticated, radiant, and endlessly beautiful.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Hexyl Cinnamal, Linalool.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 130,
    oldPrice: 150,
    stock: 10,
    isBest: true,
    translations: {
      ar: {
        name: "ياسمين مستيك",
        longDescription:
          "صُنع من أزهار الياسمين المقطوفة يدوياً عند بزوغ الفجر، هذا العطر يلتقط الجوهر النقي والمشرق للزهرة. إنه راقٍ ومشع وجميل بلا حدود.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، بنزيل ساليسيلات، هكسيل سيناميل، لينالول.",
      },
      fr: {
        name: "Jasmin Mystique",
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
      ar: {
        name: "صندل رويال",
        longDescription:
          "عطر غامض وآسر للرجال والنساء. محاط بهالة من الغموض الشرقي، تتناقض نضارة خشب الصندل مع النوتات العميقة والمسكرة من الجلد والعود.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، سيترونيلول، جيرانيول، سيناميل.",
      },
      fr: {
        name: "Santal Royal",
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
    longDescription:
      "A rich tapestry of golden vanilla and sweet amber, intertwined with smoky woods. A truly grand, enveloping scent designed for both men and women seeking an opulent and sweet everyday fragrance.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "unisex",
    price: 110,
    oldPrice: 135,
    stock: 30,
    isBest: true,
    translations: {
      ar: {
        name: "ذهب الفانيليا",
        longDescription:
          "نسيج غني من الفانيليا الذهبية والعنبر الحلو، متشابك مع الأخشاب المدخنة. عطر فخم وأنيق حقاً مصمم للرجال والنساء الباحثين عن رائحة يومية فاخرة وحلوة.",
        ingredients: "كحول منزوع الطبيعة، عطر، ماء، كومارين، أوجينول، بنزيل بنزوات.",
      },
      fr: {
        name: "Or Vanille",
        longDescription:
          "Une riche tapisserie de vanille dorée et d'ambre doux, entrelacée de bois fumés. Un parfum véritablement grandiose et enveloppant, conçu pour les hommes et les femmes en quête d'un parfum quotidien opulent et doux.",
        ingredients: "Alcohol Denat., Fragrance (Parfum), Eau (Aqua), Coumarin, Eugenol, Benzyl Benzoate.",
      },
    },
  },
  {
    id: "prod-9",
    name: "Royal Oud",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Royal Oud is the pinnacle of luxury, combining the deep, woody resonance of aged Cambodian Oud with the delicate, honeyed sweetness of Bulgarian Rose. A fragrance designed for those who command presence and appreciate the finer details of oriental perfumery.",
    ingredients: "Alcohol Denat., Aquilaria Agallocha (Oud) Oil, Rosa Damascena Flower Oil, Santalum Album (Sandalwood) Oil, Ambergris, Benzyl Salicylate.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "unisex",
    price: 245,
    oldPrice: 290,
    stock: 12,
    isBest: true,
    translations: {
      ar: {
        name: "عود ملكي",
        longDescription:
          "العود الملكي هو قمة الفخامة، يجمع بين الصدى الخشبي العميق للعود الكمبودي المعتق مع الحلاوة الرقيقة والعسلية للورد البلغاري. عطر مصمم لمن يفرض حضوره ويقدر أرقى تفاصيل العطور الشرقية.",
        ingredients: "كحول منزوع الطبيعة، زيت عود أُكيلاريا أغالوشا، زيت زهر الورد الدمشقي، زيت خشب الصندل، عنبر رمادي، بنزيل ساليسيلات.",
      },
      fr: {
        name: "Oud Royal",
        longDescription:
          "Oud Royal est le summum du luxe, combinant la résonance boisée profonde du Oud cambodgien vieilli avec la douceur délicate et miellée de la Rose bulgare. Un parfum conçu pour ceux qui imposent leur présence et apprécient les détails les plus fins de la parfumerie orientale.",
        ingredients: "Alcool Dénat., Huile d'Aquilaria Agallocha (Oud), Huile de fleur de Rosa Damascena, Huile de Santalum Album (Santal), Ambre gris, Salicylate de benzyle.",
      },
    },
  },
  {
    id: "prod-10",
    name: "Desert Rose",
    brand: "Alhor Elite",
    volume: "50ml",
    longDescription:
      "Desert Rose captures the ethereal beauty of a flower blooming in the heart of the desert. With top notes of saffron and heart notes of damask rose, it settles into a warm base of vanilla and white musk, perfect for the modern woman.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Saffron Extract, Rose absolute, Vanilla Planifolia, White Musk.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "women",
    price: 95,
    oldPrice: 120,
    stock: 45,
    isBest: false,
    translations: {
      ar: {
        name: "وردة الصحراء",
        longDescription:
          "تلتقط وردة الصحراء الجمال الأثيري لزهرة تتفتح في قلب الصحراء. مع نوتات الزعفران العلوية ونوتات الورد الدمشقي الوسطى، تستقر في قاعدة دافئة من الفانيليا والمسك الأبيض، مثالي للمرأة العصرية.",
        ingredients: "كحول منزوع الطبيعة، عطر، مستخلص الزعفران، ورد مطلق، فانيليا بلانيفوليا، مسك أبيض.",
      },
      fr: {
        name: "Rose du Désert",
        longDescription:
          "Rose du Désert capture la beauté éthérée d'une fleur s'épanouissant au cœur du désert. Avec des notes de tête de safran et des notes de cœur de rose de Damas, il s'installe dans une base chaude de vanille et de musc blanc, parfait pour la femme moderne.",
        ingredients: "Alcool Dénat., Parfum, Extrait de safran, Absolu de rose, Vanille Planifolia, Musc blanc.",
      },
    },
  },
  {
    id: "prod-11",
    name: "Midnight Musk",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Midnight Musk is a bold statement of masculinity and intrigue. It opens with sharp citrus and moves into a complex heart of leather and black pepper, finishing with a long-lasting, heavy musk that lingers long after the sun goes down.",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Musk Ketone, Leather Accord, Tobacco Absolute, Black Pepper Oil.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "men",
    price: 130,
    oldPrice: 160,
    stock: 20,
    isBest: false,
    translations: {
      ar: {
        name: "مسك منتصف الليل",
        longDescription:
          "مسك منتصف الليل هو تعبير جريء عن الرجولة والغموض. يُفتتح بحمضيات حادة وينتقل إلى قلب معقد من الجلد والفلفل الأسود، وينتهي بمسك ثقيل وطويل الأمد يبقى طويلاً بعد غروب الشمس.",
        ingredients: "كحول منزوع الطبيعة، عطر، كيتون المسك، أكورد الجلد، مطلق التبغ، زيت الفلفل الأسود.",
      },
      fr: {
        name: "Musc de Minuit",
        longDescription:
          "Musc de Minuit est une déclaration audacieuse de masculinité et d'intrigue. Il s'ouvre sur des agrumes vifs et évolue vers un cœur complexe de cuir et de poivre noir, se terminant par un musc lourd et durable qui subsiste longtemps après le coucher du soleil.",
        ingredients: "Alcool Dénat., Parfum, Cétone de musc, Accord cuir, Absolu de tabac, Huile de poivre noir.",
      },
    },
  },
  {
    id: "prod-12",
    name: "Atlas Cedar",
    brand: "Alhor Elite",
    volume: "100ml",
    longDescription:
      "Inspired by the crisp air and ancient forests of Morocco's High Atlas Mountains, Atlas Cedar combines refreshing bergamot with the noble strength of cedarwood and patchouli. A clean, invigorating scent for the adventurous soul.",
    ingredients: "Alcohol Denat., Cedrus Atlantica Wood Oil, Bergamot Oil, Patchouli, Vetiver, Lavender.",
    mainImage: PERFUME_IMAGE,
    thumbnailImages: [PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE, PERFUME_IMAGE],
    category: "men",
    price: 85,
    oldPrice: 110,
    stock: 50,
    isBest: false,
    translations: {
      ar: {
        name: "أرز الأطلس",
        longDescription:
          "مستوحى من الهواء النقي والغابات القديمة لجبال الأطلس الكبير المغربية، يجمع أرز الأطلس بين البرغموت المنعش وقوة خشب الأرز النبيلة والباتشولي. رائحة نظيفة ومنعشة للروح المغامرة.",
        ingredients: "كحول منزوع الطبيعة، زيت خشب أرز الأطلس، زيت البرغموت، باتشولي، فيتيفر، لافندر.",
      },
      fr: {
        name: "Cèdre de l'Atlas",
        longDescription:
          "Inspiré par l'air pur et les forêts ancestrales des montagnes du Haut Atlas marocain, Cèdre de l'Atlas combine la bergamote rafraîchissante avec la force noble du bois de cèdre et du patchouli. Un parfum propre et vivifiant pour l'âme aventurière.",
        ingredients: "Alcool Dénat., Huile de bois de Cedrus Atlantica, Huile de bergamote, Patchouli, Vétiver, Lavande.",
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
    const frTranslation = perfume.translations?.fr
    if (frTranslation && language !== "fr") {
      return {
        ...perfume,
        name: frTranslation.name,
        longDescription: frTranslation.longDescription,
        ingredients: frTranslation.ingredients || perfume.ingredients,
      }
    }
    return perfume
  }

  return {
    ...perfume,
    name: translation.name,
    longDescription: translation.longDescription,
    ingredients: translation.ingredients || perfume.ingredients,
  }
}

export const bestSellers: Perfume[] = perfumes.filter(p => p.isBest).slice(0, 8);

