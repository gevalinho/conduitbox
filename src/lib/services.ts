// lib/services.ts
export type Faq = { q: string; a: string };

export type Service = {
  id: number;
  title: string;
  des: string;
  slug: string;
  features?: string[];
  faqs?: Faq[];
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
    ],
    faqs: [
      { q: "What’s the typical timeline?", a: "2–6 weeks depending on scope." },
      { q: "Do you provide source files?", a: "Yes, all editable assets." },
    ],
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
  ],
  faqs: [
      { q: "What’s the typical timeline?", a: "2–6 weeks depending on scope." },
      { q: "Do you provide source files?", a: "Yes, all editable assets." },
    ],
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
  ],
  faqs: [
      { q: "What’s the typical timeline?", a: "2–6 weeks depending on scope." },
      { q: "Do you provide source files?", a: "Yes, all editable assets." },
    ],
  },
  {
    id: 5,
    title: "Social Media Campaigns & Marketing",
    slug: "social-media-campaigns-marketing",
    des: `We turn social platforms into storytelling stages. From strategy to design and campaign execution, we help brands create engaging conversations that spark loyalty and drive results.
It’s not just about likes — it’s about meaningful connections.`,
features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
  faqs: [
      { q: "What’s the typical timeline?", a: "2–6 weeks depending on scope." },
      { q: "Do you provide source files?", a: "Yes, all editable assets." },
    ],
  },
  {
    id: 6,
    title: "Data & Performance Analytics",
    slug: "data-performance-analytics",
    des: `Every decision deserves insight. We set up performance tracking, analyze data, and optimize campaigns so your investments deliver maximum return.
Because growth without data is just guesswork.`,
features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
  faqs: [
      { q: "What’s the typical timeline?", a: "2–6 weeks depending on scope." },
      { q: "Do you provide source files?", a: "Yes, all editable assets." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const serviceParams = services.map((s) => ({ slug: s.slug }));
