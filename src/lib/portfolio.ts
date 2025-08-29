
import portfolio_img_6 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_7.jpg"; 

import Image, { StaticImageData } from 'next/image';

interface featureItems {
	  heading: string;
	  text: string;
}

export type Portfolio = {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
  slug: string;
  client?: string;
  service?: string[];
  date?: string;
  challenge?: string;
  solution?: string;
  features?: featureItems[];
  technologies?: string[];
  impact?: string;
  impact_features?: string[];
  deliverables?: string[];

}

export const portfolio_data: Portfolio[] = [
  // portfolio pages
	{
		id: 1,
		category: 'Industry',
		img: portfolio_img_6,
		title: "CTL Atlantis Project",
		des: "Real Estate",
        slug: "cltatlantis-project",
		client: "CTL Atlantis",
		challenge: "When the founder of CTL Atlantis parted ways with his previous partners, he was faced with the daunting task of building a new real estate brand from scratch. He wanted something fresh, bold, and different, but had no clear direction on where to begin. The risk was high: in such a competitive market, the wrong identity could easily make the brand invisible.",
		solution: "We set out to develop a minimalist yet powerful brand system that could convey both resilience and credibility.",	
		service: ["Full Brand Identity System ", "Stationery and Brand Mockups", "Social Media Campaign Graphics", "Event and Marketing Collateral"],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"The new identity did more than just “look good.” It gave CTL Atlantis the confidence and credibility to step into the market.",
		features: [
    {
      heading: "Brand Identity",
      text: "The visual centerpiece became a logo symbolizing a boulder — a mark of stability — that also doubled as a pillar with the letter A embedded inside it."
    },
    {
      heading: "Color System",
      text: "A sophisticated palette of Pistachio Green (freshness, growth) and Deep Grey (strength, trustworthiness)."
    },
    {
      heading: "Brand Collateral",
      text: "Complete stationery suite, branded campaigns, and event mockups to establish a consistent identity across all touchpoints."
    },
    {
      heading: "Social Media",
      text: "Designed graphics that carried the same bold, minimal energy into digital spaces, ensuring visibility across platforms."
    },
  ],
  impact_features: [
	"Boosted visibility at high-profile industry events.",
	"Generated increased sales inquiries within the first campaign cycle.",
	"Positioned the founder as a credible and independent force in real estate."
  ],
  deliverables: [
	"Full Brand Identity System (Logo, Color Palette, Typography)",
	"Stationery and Brand Mockups",
	"Social Media Campaign Graphics",
	"Event and Marketing Collateral"
  ],
	},
	{
		id: 2,
		category: 'Industry',
		img: portfolio_img_7,
		title: "The Oguntoyinbo Foundation",
		des: "Non-Profit / Advocacy",
        slug: "the-oguntoyinbo-foundation",
		client: "The Oguntoyinbo Foundation",
		challenge: "The Oguntoyinbo Foundation needed a brand identity that reflected its mission to empower the voiceless, especially women, through advocacy, education, and support. They had no prior visual identity, making it difficult to communicate credibility to partners and communities.",
		solution: "We created a holistic brand system that translated their values into visuals and digital presence.",	
		service: ["Brand Identity System", "Website Design & Development", "Social Media & Print Collateral"],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"The foundation launched with a professional identity that attracted partnerships and created a stronger sense of legitimacy. The website became a central hub for storytelling, helping them connect with supporters and amplify their mission.",
		features: [
    {
      heading: "Brand Identity",
      text: "A bold yet approachable logo system and color palette representing empowerment and trust."
    },
    {
      heading: "Website Design",
      text: "A responsive, user-friendly site to highlight programs, publish stories, and attract donors."
    },
    {
      heading: "Brand Guidelines & Collateral",
      text: "Stationery, social templates, and presentation decks to ensure consistency across communications."
    },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Brand Identity System",
	"Website Design & Development",
	"Social Media & Print Collateral",
  ],
	},
	{
		id: 3,
		category: 'Industry',
		img: portfolio_img_8,
		title: "EEN Foundation Project",
		des: "Non-Profit / Education & Empowerment",
        slug: "een-foundation-project",
		client: "EEN Foundation",
		challenge: "Education and Empowerment for the Needy Foundation (EEN) was launching as a new NGO. They needed a brand that could inspire trust among donors, volunteers, and beneficiaries while clearly communicating their mission to provide education and empowerment opportunities.",
		solution: "I developed a comprehensive design solution that brought their story to life.",	
		service: ["Brand Identity Design", "Website Design & Development", "Social Media Graphics"],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"The foundation’s launch was met with enthusiasm, with the new identity helping them secure early partnerships and drive engagement on social platforms. Their website now serves as a trusted source of information for beneficiaries and stakeholders alike",
		features: [
    {
      heading: "Visual Identity",
      text: "A strong, clean logo paired with colors that signify growth and inclusivity."
    },
    {
      heading: "Website Design",
      text: "Structured to showcase programs, encourage donations, and serve as a knowledge hub."
    },
    {
      heading: "Social Media Design",
      text: "Created adaptable templates and campaign graphics to help them build awareness and engage communities online."
    },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Brand Identity Design",
	"Website Design & Development",
	"Social Media Graphics",
	// "Event and Marketing Collateral"
  ],
	},
	{
		id: 4,
		category: 'Industry',
		img: portfolio_img_9,
		title: "Blends & Blingz",
		des: "Fragrance / Retail",
        slug: "blends-and-blingz",
		client: "Blends & Blingz",
		challenge: "Blends & Blingz, a fast-growing fragrance brand, needed strong product presentation and digital consistency. With frequent launches and limited design capacity in-house, they struggled to create graphics that matched the premium nature of their perfumes.",
		solution: "We worked closely with the team to establish a product-first creative approach:",	
		service: ["Product Label & Packaging Design", "Social Media Campaign Graphics", "Brand Visual Templates"],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"The refreshed creative output gave Blends & Blingz a luxury edge online, improving engagement and sales conversions. Their product launches now feel visually unified and market-ready.",
		features: [
    {
      heading: "Product Design",
      text: "Crafted label and packaging concepts that captured the essence of their signature scents."
    },
    {
      heading: "Social Media Graphics",
      text: "Designed vibrant, engaging campaign visuals that aligned with product launches and seasonal promotions."
    },
    {
      heading: "Consistency",
      text: "Developed adaptable templates to keep the brand identity cohesive across multiple product lines."
    },
    // {
    //   heading: "Social Media",
    //   text: "Designed graphics that carried the same bold, minimal energy into digital spaces, ensuring visibility across platforms."
    // },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Product Label & Packaging Design",
	"Social Media Campaign Graphics",
	"Brand Visual Templates",
	// "Event and Marketing Collateral"
  ],
	},
	{
		id: 5,
		category: 'Industry',
		img: portfolio_img_10,
		title: "TPS Luxury",
		des: "Luxury Fashion (Bags & Accessories)",
        slug: "tps-luxury",
		client: "TPS Luxury",
		challenge: "TPS Luxury, a Lagos-based handmade luxury bag brand, needed consistent high-end social media content to match the elegance of their collections. They wanted a digital presence that communicated luxury, exclusivity, and storytelling, but lacked the creative support to maintain it.",
		solution: "I translated their brand identity into compelling digital visuals:",	
		service: ["Social Media Campaign Graphics", "Event & Exhibition Visuals", "•	Ongoing Design Support",],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"TPS Luxury’s social platforms became strong storytelling tools, helping them connect emotionally with customers while elevating their market positioning. Their exhibitions and anniversaries gained a more polished, premium edge.",
		features: [
    {
      heading: "Social Media Design",
      text: "Curated and designed posts, stories, and promotional assets that reflected their brand’s luxurious tone."
    },
    {
      heading: "Campaign Support",
      text: "Designed creatives for exhibitions, anniversaries, and collaborations, ensuring brand identity was always consistent."
    },
    // {
    //   heading: "Brand Collateral",
    //   text: "Complete stationery suite, branded campaigns, and event mockups to establish a consistent identity across all touchpoints."
    // },
    // {
    //   heading: "Social Media",
    //   text: "Designed graphics that carried the same bold, minimal energy into digital spaces, ensuring visibility across platforms."
    // },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Social Media Campaign Graphics",
	"Event & Exhibition Visuals",
	"Ongoing Design Support",
  ],
	},
	{
		id: 6,
		category: 'UI Design',
		img: portfolio_img_11,
		title: "Glenn’s Apartment",
		des: "Hospitality / Real Estate",
        slug: "glens-apartment",
		client: "Glenn’s Apartment",
		challenge: "Glenn’s Apartment, a luxury short-let in Port Harcourt, needed to launch with a strong brand presence that would appeal to business travelers, couples, and families. They had no prior identity, website, or digital content.",
		solution: "I built a comprehensive launch identity:",	
		service: ["Brand Identity Design", "Website Design & Development", "Social Media Graphics"],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"The brand launched successfully, with the website and social channels helping them generate inquiries and bookings immediately. Their identity positioned them competitively in a growing short-let market.",
		features: [
    {
      heading: "Brand Design",
      text: "→ Developed a refined logo and color palette to reflect luxury and serenity."
    },
    {
      heading: "Website Design",
      text: "Designed and built a sleek, user-friendly website to showcase apartments, amenities, and booking options."
    },
    {
      heading: "Social Media",
      text: "Created launch graphics and campaign visuals to drive early bookings."
    },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Brand Identity Design",
	"Website Design & Development",
	"Social Media Graphics",
  ],
	},
	{
		id: 7,
		category: 'UI Design',
		img: portfolio_img_11,
		title: "Assurance Base Ltd",
		des: "Oil & Gas",
        slug: "assurance-base-ltd",
		client: "Assurance Base Ltd",
		challenge: "Assurance Base Ltd, an oil and gas service provider, needed a professional brand image and website to present themselves credibly in a highly competitive industry. Their absence of a strong identity made it harder to appeal to potential partners.",
		solution: "I delivered a clean, corporate-ready visual identity:",	
		service: ["Brand Logo Design", "Corporate Website Design",],
		technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign"],
		impact:"With their new logo and website, Assurance Base Ltd improved their professional credibility and could confidently approach stakeholders and partners in the oil and gas sector.",
		features: [
    {
      heading: "Logo Design",
      text: "A bold, professional mark that communicates strength and reliability."
    },
    {
      heading: "Website",
      text: "A straightforward corporate website with clear navigation, services overview, and contact channels."
    },
  ],
//   impact_features: [
// 	"Boosted visibility at high-profile industry events.",
// 	"Generated increased sales inquiries within the first campaign cycle.",
// 	"Positioned the founder as a credible and independent force in real estate."
//   ],
  deliverables: [
	"Brand Logo Design",
	"Corporate Website Design",
  ],
	},
]

export const getPortfolioBySlug = (slug: string) =>
  portfolio_data.find((s) => s.slug === slug);

export const portfolioParams = portfolio_data.map((s) => ({ slug: s.slug }));