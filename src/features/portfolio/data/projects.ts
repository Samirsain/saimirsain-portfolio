import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "sam4you",
    title: "Sam4You - Digital Agency",
    period: {
      start: "01.2025",
    },
    link: "https://www.samirsain.com/",
    skills: [
      "Agency Website",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "WordPress Development",
      "AI Integration",
      "E-commerce Solutions",
      "SEO",
      "Vercel",
    ],
    description: `Sam4You is a comprehensive digital agency providing innovative solutions for business growth.
- **Services**: WordPress Development (8+ years), Next.js & Modern Apps, AI Integration, E-commerce Solutions
- **AI Tools**: Custom chatbots, GitaGPT integration, and intelligent features
- **Free Tools**: AI Content Generator, Pinterest Downloader, EMI Calculator, GST Calculator, and more
- **Digital Growth**: SEO, automation services, and strategic marketing
- Modern tech stack: Next.js 14, TypeScript, Tailwind CSS
- Successfully serving global clients with 24/7 availability`,
    logo: "https://www.samirsain.com/favicon.ico",
    isExpanded: true,
  },
  {
    id: "nuroxfit",
    title: "NuroxFit",
    period: {
      start: "11.2025",
    },
    link: "https://nuroxfit.myshopify.com/",
    skills: [
      "E-commerce",
      "Shopify",
      "Online Store",
      "Fashion",
      "Unisex Clothing",
      "Responsive Design",
    ],
    description: `NuroxFit is a stylish e-commerce platform offering comfortable and affordable unisex clothing for all ages.
- Trendy collection including T-shirts, crop tops, hoodies, and caps
- Unisex designs for both men and women
- Modern, responsive Shopify store with seamless shopping experience
- Features graphic tees, oversized fits, and anime-inspired designs
- Free shipping and 24/7 customer support`,
    logo: "/images/nurox-logo.png",
    isExpanded: true,
  },
];
