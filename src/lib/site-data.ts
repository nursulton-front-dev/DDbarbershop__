// Barcha sayt ma'lumotlari shu yerda saqlanadi.
// Telefon raqamlarini, manzilni va ijtimoiy havolalarni
// shu faylda haqiqiy qiymatlar bilan almashtiring.

export const site = {
  brand: "DDBarbershop_",
  // TODO: haqiqiy telefon raqamini kiriting
  phone: {
    label: "+998 90 123 45 67",
    href: "tel:+998901234567",
  },
  address: "Toshkent, Yunusobod tumani, Amir Temur ko'chasi 12",
  hours: "Har kuni, 09:00–21:00",
  // TODO: haqiqiy ijtimoiy tarmiq havolalarini kiriting
  social: {
    instagram: {
      label: "@ddbarbershop_",
      href: "#", // https://instagram.com/ddbarbershop_
    },
    telegram: {
      label: "@ddbarbershop_",
      href: "#", // https://t.me/ddbarbershop_
    },
  },
} as const;

export const nav = [
  { label: "Bosh sahifa", href: "#bosh" },
  { label: "Ustalar", href: "#ustalar" },
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Aloqa", href: "#aloqa" },
] as const;

export const hero = {
  eyebrow: "TOSHKENT · 8+ YILLIK TAJRIBA",
  titleTop: "Puxta ish.",
  titleBottom: "Aniq natija.",
  brand: "DDBarbershop_",
  description:
    "Toshkentda zamonaviy erkaklar soch turmagi, soqol parvarishi va individual yondashuv.",
  ctaLabel: "Qo'ng'iroq qilish",
  ctaHref: "tel:+998901234567",
  secondaryLink: { label: "Ustalar bilan tanishish", href: "#ustalar" },
  image:
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Barber soch turmagi yasayotganda",
};

export const trust = [
  { value: "3000+", label: "mijozlar" },
  { value: "8+ yil", label: "tajriba" },
  { value: "5.0", label: "Google baho" },
] as const;

export const masters = [
  {
    name: "Jasur",
    role: "Erkaklar soch turmagi ustasi",
    experience: "8+ yillik tajriba",
    shortLine: "Aniq shakl, toza o'tishlar va mijozga mos uslub.",
    bio: "Jasur har bir mijoz bilan ish boshlashdan oldin uning istagi, kundalik uslubi va soch tuzilishini hisobga oladi. Klassik soch turmaklaridan zamonaviy fade uslublarigacha puxta va tartibli ishlaydi. Uning asosiy maqsadi — faqat yaxshi ko'rinadigan emas, balki kundalik parvarishda ham qulay bo'lgan natijani yaratish.",
    specialties: ["Fade va taper", "Klassik turmak", "Soqolga shakl berish"],
    phone: { label: "+998 90 123 45 67", href: "tel:+998901234567" },
    image:
      "https://images.unsplash.com/photo-1503951914875-45212b0136266?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Usta Jasur — erkaklar soch turmagi ustasi",
  },
  {
    name: "Diyor",
    role: "Soch va soqol uslubi bo'yicha usta",
    experience: "8+ yillik tajriba",
    shortLine: "Detallarga e'tibor, sokin ish jarayoni va puxta yakun.",
    bio: "Diyor yuz shakli, sochning o'sish yo'nalishi va mijozning umumiy obraziga qarab mos yechim taklif qiladi. Soch va soqol uyg'unligiga alohida e'tibor beradi, ishni shoshmasdan va har bir detalni tekshirgan holda yakunlaydi. Natijada obraz tartibli, tabiiy va mijozning xarakteriga mos ko'rinadi.",
    specialties: [
      "Soch va soqol uyg'unligi",
      "Teksturali turmak",
      "Individual maslahat",
    ],
    phone: { label: "+998 90 123 45 67", href: "tel:+998901234567" },
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Usta Diyor — soch va soqol uslubi bo'yicha usta",
  },
] as const;

export const advantages = [
  {
    icon: "BadgeCheck",
    title: "Premium xizmat",
    description: "Har bir detalga e'tibor — ishning boshidan oxirigacha.",
  },
  {
    icon: "UserRound",
    title: "Individual yondashuv",
    description:
      "Har bir mijozning uslubi, soch tuzilishi va istagi hisobga olinadi.",
  },
  {
    icon: "Award",
    title: "Tajribali mutaxassislar",
    description: "8+ yillik amaliy tajriba natijada aniq ko'rinadi.",
  },
  {
    icon: "Armchair",
    title: "Qulay atmosfera",
    description: "Shoshilmasdan, sokin muhitda xizmatdan bemalol foydalanasiz.",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Soch turmagi",
    description: "Maslahat, soch turmagi va yakuniy styling.",
    price: "80 000 so'm",
  },
  {
    number: "02",
    title: "Soqol olish",
    description: "Soqolga shakl berish va konturlarni tozalash.",
    price: "60 000 so'm",
  },
  {
    number: "03",
    title: "Soch + soqol",
    description: "Yagona va tartibli obraz uchun to'liq xizmat.",
    price: "120 000 so'm",
  },
  {
    number: "04",
    title: "Bolalar uchun",
    description: "Sokin va ehtiyotkor yondashuv.",
    price: "50 000 so'm",
  },
] as const;

export const portfolio = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-45212b0136266?auto=format&fit=crop&w=900&q=80",
    alt: "Fade uslubidagi soch turmagi",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Taper uslubidagi soch turmagi",
    span: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    alt: "Klassik soch turmagi",
    span: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Teksturali soch turmagi",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-45212b0136266?auto=format&fit=crop&w=900&q=80",
    alt: "Soqolga shakl berish",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcb01a33f1d?auto=format&fit=crop&w=900&q=80",
    alt: "Soch va soqol uyg'unligi",
    span: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Ish jarayoni detallari",
    span: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    alt: "Yakuniy natija",
    span: "wide",
  },
] as const;

export const interior = {
  title: "Ichkarida",
  text: "Qulay joy, sokin muhit — shunchaki soch olish uchun emas, dam olish uchun ham.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1585747860717-5790255afaa0?auto=format&fit=crop&w=1200&q=80",
      alt: "Barbershop ish zonasi",
      size: "large",
    },
    {
      src: "https://images.unsplash.com/photo-1633200512915-0c0a0a0a0a0a?auto=format&fit=crop&w=800&q=80",
      alt: "Barbershop o'rindiqlari",
      size: "small",
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcb01a33f1d?auto=format&fit=crop&w=800&q=80",
      alt: "Barbershop oynasi va yoritish",
      size: "small",
    },
  ],
};

export interface Testimonial {
  name: string;
  text: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jasur",
    text: "Usta avval qanday natija xohlayotganimni so'radi, keyin o'z tavsiyasini berdi. Ish toza va aniq bajarildi.",
    featured: true,
  },
  {
    name: "Aziz",
    text: "Muhit sokin, xizmat shoshilmasdan amalga oshirildi. Soch va soqol bir-biriga juda mos tushdi.",
  },
  {
    name: "Sardor",
    text: "Belgilangan vaqtda qabul qilishdi. Natija kundalik parvarish uchun ham juda qulay bo'ldi.",
  },
];

export const faq = [
  {
    question: "Oldindan yozilish kerakmi?",
    answer:
      "Ha, qo'ng'iroq qiling, siz uchun qulay vaqtni band qilib qo'yamiz.",
  },
  {
    question: "Xizmat qancha vaqt oladi?",
    answer:
      "Tanlangan xizmatga qarab o'rtacha 40 daqiqa vaqt ketadi.",
  },
  {
    question: "To'lov qanday amalga oshiriladi?",
    answer: "Naqd yoki karta orqali to'lash mumkin.",
  },
  {
    question: "Bolalar uchun xizmat bormi?",
    answer: "Ha, bolalar uchun ham soch turmagi xizmati mavjud.",
  },
] as const;

export const footer = {
  title: "Yangi obraz — bitta qo'ng'iroqdan boshlanadi.",
  subtitle: "Qulay vaqtingizni tanlash uchun biz bilan bog'laning.",
  ctaLabel: "Qo'ng'iroq qilish",
  ctaHref: "tel:+998901234567",
  copyright: "© DDBarbershop_. Barcha huquqlar himoyalangan.",
};
