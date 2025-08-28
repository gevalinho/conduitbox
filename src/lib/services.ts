// lib/services.ts
export type Service = {
  id: number;
  title: string;
  des: string;
  slug: string;
  features?: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Creative Design",
    slug: "creative-design",
    des: `We don’t just make things look beautiful — we give brands a voice that resonates. From logos and brand identity systems to marketing collaterals, pitch decks, and campaigns, we create visual languages that inspire trust and recognition.
Your idea gets a face. Your brand gets a personality.`,
    features: [
      `Gevalinho Welcome to our digital agency!`,
      `Dev online. From website design`,
      `Implementation evolving world of digital to driv`,
      `Launch growth and reach your goals.`,
    ]
  },
  {
    id: 2,
    title: "Product & UX Design",
    slug: "product-ux-design",
    des: `Every successful product begins with empathy. We dive deep into user research, map journeys, create wireframes, and design interfaces that are not only functional but delightful. Whether it’s a mobile app, a SaaS platform, or a web tool, we design experiences that keep users coming back.
Your users don’t just use your product — they enjoy it.`,
features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ]
  },
  {
    id: 3,
    title: "Software Development (Web & Mobile)",
    slug: "software-development",
    des: `From sleek websites to intuitive mobile applications, we build digital platforms that scale with your growth. Our team blends creativity with technical expertise to deliver fast, secure, and future-ready solutions.
You dream it, we code it into reality.`,
features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ]
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    des: `Great brands deserve to be seen. Through SEO, PPC, email campaigns, and digital strategy, we make sure your business isn’t just online — it’s found, remembered, and trusted.
Because visibility is the first step to impact.`,
features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ]
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const serviceParams = services.map((s) => ({ slug: s.slug }));
