// Barcha sayt ma'lumotlari shu yerda saqlanadi.
// Telefon raqamlarini, manzilni va ijtimoiy havolalarni
// shu faylda haqiqiy qiymatlar bilan almashtiring.

export const site = {
  brand: "DDBarbershop_",
  // TODO: haqiqiy telefon raqamini kiriting
  phone: {
    label: "+998 91 636 47 90",
    href: "tel:+998916364790",
  },
  address: "Toshkent shahar, Chilonzor tumani, 5-mavze, 29-uy",
  hours: "Dushanba — dam olish kuni. Seshanba–yakshanba: 11:00–23:00",
  social: {
    instagram: {
      label: "@ddbarbershop_",
      href: "https://www.instagram.com/ddbarbershop_",
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
  titleTop: "Imijingizni bizga ishoning!",
  titleBottom: "",
  description:
    "Tajribali ustalar, sokin muhit va sizga mos uslub.",
  ctaLabel: "Qo'ng'iroq qilish",
  ctaHref: "tel:+998916364790",
  secondaryLink: { label: "Ustalar bilan tanishish", href: "#ustalar" },
  image: new URL("../hero.png", import.meta.url).href,
  imageAlt: "Barber Doston soch turmagi yasayotganda",
};

export const trust = [
  { value: "3000+", label: "mijozlar" },
  { value: "8+ yil", label: "tajriba" },
  { value: "5.0", label: "Google baho" },
] as const;

export interface Master {
  name: string;
  role: string;
  /** Ixtiyoriy belgi, masalan: "VIP xona". */
  badge?: string;
  experience: string;
  bio: string;
  specialties: readonly string[];
  phone: { label: string; href: string };
  image: string;
  imageAlt: string;
}

export const masters: readonly Master[] = [
  {
    name: "Doston",
    role: "Erkaklar soch turmagi ustasi",
    badge: "VIP xona",
    experience: "8+ yillik tajriba",
    bio: "Doston har bir mijoz bilan ishni uning istagi, soch tuzilishi va uslubini hisobga olishdan boshlaydi. Klassik turmaklardan zamonaviy fade uslublarigacha — barchasini puxta va tartibli bajaradi. Uning maqsadi shunchaki chiroyli emas, balki har kuni parvarish qilish oson bo'lgan natija yaratish.",
    specialties: ["Fade va taper", "Klassik turmak", "Zamonaviy uslublar"],
    phone: { label: "+998 91 636 47 90", href: "tel:+998916364790" },
    image: new URL("../Barber1-Doston.jpg", import.meta.url).href,
    imageAlt: "Usta Doston — erkaklar soch turmagi ustasi",
  },
  {
    name: "Diyor",
    role: "Erkaklar soch turmagi ustasi",
    experience: "8+ yillik tajriba",
    bio: "Diyor yuz shakli, soch o'sish yo'nalishi va mijozning umumiy obraziga qarab mos yechim taklif qiladi. Ishni shoshmasdan, har bir detalni tekshirgan holda yakunlaydi. Natijada obraz tartibli, tabiiy va mijozning xarakteriga mos ko'rinadi.",
    specialties: [
      "Teksturali turmak",
      "Individual maslahat",
      "Zamonaviy uslublar",
    ],
    phone: { label: "+998 33 888 1004", href: "tel:+998338881004" },
    image: new URL("../Barber2-Diyor.JPG", import.meta.url).href,
    imageAlt: "Usta Diyor — soch va soqol uslubi bo'yicha usta",
  },
];

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

export interface PriceItem {
  title: string;
  /** So'mdagi qiymat. Ko'rsatishda formatPrice() orqali formatlanadi. */
  amount: number;
}

export interface PriceGroup {
  master: string;
  badge?: string;
  items: readonly PriceItem[];
}

export const pricing = {
  eyebrow: "XIZMATLAR",
  title: "Narxlar",
  subtitle: "Har bir usta uchun aniq va shaffof narxlar.",
  groups: [
    {
      master: "Doston",
      badge: "VIP xona",
      items: [
        { title: "Soch olish", amount: 200000 },
        { title: "Soqol olish", amount: 100000 },
        { title: "Soqol (moshinkada)", amount: 70000 },
        { title: "Soch + soqol", amount: 300000 },
        { title: "Bolalar uchun", amount: 150000 },
      ],
    },
    {
      master: "Diyor",
      items: [
        { title: "Soch olish", amount: 150000 },
        { title: "Soqol olish", amount: 80000 },
        { title: "Soqol (moshinkada)", amount: 50000 },
        { title: "Bolalar uchun", amount: 100000 },
      ],
    },
  ] as readonly PriceGroup[],
};

export const portfolio = [
  {
    src: new URL("../assets/portfolio/web/1.jpg", import.meta.url).href,
    alt: "Yon ajrimli klassik turmak va tartibli soqol",
    label: "Klassik uslub",
    focus: "50% 80%",
    zoom: 1.5,
  },
  {
    src: new URL("../assets/portfolio/web/2.jpg", import.meta.url).href,
    alt: "Qisqa fade turmagi va aniq soch konturi",
    label: "Fade",
    focus: "50% 65%",
    zoom: 1.1,
  },
  {
    src: new URL("../assets/portfolio/web/3.jpg", import.meta.url).href,
    alt: "Teksturali turmak va aniq shakllantirilgan soqol",
    label: "Soch va soqol",
    focus: "50% 60%",
    zoom: 1.05,
  },
  {
    src: new URL("../assets/portfolio/web/4.jpg", import.meta.url).href,
    alt: "Yon tomonida chiziqli naqsh tushirilgan soch turmagi",
    label: "Kreativ turmak",
    focus: "50% 70%",
    zoom: 1.12,
  },
  {
    src: new URL("../assets/portfolio/web/5.jpg", import.meta.url).href,
    alt: "Orqa tomondan ko'rinish: fade turmagi va toza o'tishlar",
    label: "Toza o'tishlar",
    focus: "50% 55%",
    zoom: 1,
  },
  {
    src: new URL("../assets/portfolio/web/6.jpg", import.meta.url).href,
    alt: "Teksturali soch turmagi va yon tomondagi silliq o'tish",
    label: "Teksturali turmak",
    focus: "50% 75%",
    zoom: 1.25,
  },
  {
    src: new URL("../assets/portfolio/web/7.jpg", import.meta.url).href,
    alt: "Hajmli soch turmagi va qisqa yon tomonlar",
    label: "Zamonaviy uslub",
    focus: "50% 75%",
    zoom: 1.25,
  },
  {
    src: new URL("../assets/portfolio/web/8.jpg", import.meta.url).href,
    alt: "Yon ajrimli turmak va tartibli o'tishlar",
    label: "Yon ajrim",
    focus: "50% 65%",
    zoom: 1.1,
  },
] as const;

export const interior = {
  title: "Ichkarida",
  text: "Qulay joy, sokin muhit — shunchaki soch olish uchun emas, dam olish uchun ham.",
  images: [
    {
      src: new URL("../assets/interior/interyer2.png", import.meta.url).href,
      alt: "Barbershop ish joyi, yoritilgan oyna va televizor",
      size: "large",
    },
    {
      src: new URL("../assets/interior/interyer1.png", import.meta.url).href,
      alt: "Barber kreslosi va ish joyi",
      size: "small",
    },
    {
      src: new URL("../assets/interior/interyer3.jpg", import.meta.url).href,
      alt: "Barbershop televizori va qahva burchagi",
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
    text: "Usta ishni boshlashdan oldin qanday natija kutayotganimni so'radi va o'z maslahatini berdi. Natija — toza va aniq.",
    featured: true,
  },
  {
    name: "Aziz",
    text: "Muhit sokin, hech qanday shoshqaloqlik yo'q. Har bir detal o'ylab qilingan, natija esa kutganimdan ham yaxshi chiqdi.",
  },
  {
    name: "Sardor",
    text: "Belgilangan vaqtda qabul qilishdi, kutish bo'lmadi. Turmak esa hali ham chiroyli ko'rinishda — kundalik parvarishi ham qulay.",
  },
];

export const faq = [
  {
    question: "Oldindan yozilish kerakmi?",
    answer:
      "Ha, o'z vaqtingizni belgilash uchun oldindan yozilish tavsiya etiladi. Telefon orqali yoki Instagram DM orqali bog'lanishingiz mumkin.",
  },
  {
    question: "Xizmat qancha vaqt oladi?",
    answer:
      "Xizmat turiga qarab 30 daqiqadan 1 soatgacha vaqt oladi. Aniq vaqtni usta bilan bog'lanishda bilib olishingiz mumkin.",
  },
  {
    question: "To'lov qanday amalga oshiriladi?",
    answer: "Naqd yoki karta orqali to'lash mumkin.",
  },
  {
    question: "Bolalar uchun xizmat bormi?",
    answer: "Ha, bolalar uchun ham soch turmagi xizmati mavjud. Aniq narx va vaqtni oldindan so'rab bilishingiz mumkin.",
  },
] as const;

export const footer = {
  title: "Yangi obraz — bitta qo'ng'iroqdan boshlanadi.",
  subtitle: "Qulay vaqtingizni tanlash uchun biz bilan bog'laning.",
  ctaLabel: "Qo'ng'iroq qilish",
  ctaHref: "tel:+998916364790",
  copyright: "© DDBarbershop_. Barcha huquqlar himoyalangan.",
};
