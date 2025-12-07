import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "sam4you",
    companyName: "Sam4You Agency",
    companyLogo: "https://sam4you.vercel.app/favicon.ico",
    positions: [
      {
        id: "founder",
        title: "Founder & Lead Developer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Founded and lead a digital agency specializing in high-performance web solutions.
- Delivered custom Next.js and WordPress projects for diverse clients.
- Integrated AI solutions to optimize business processes.
- Managed full project lifecycles from concept to deployment.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "WordPress",
          "AI Integration",
          "Project Management",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-dev",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "2019",
          end: "Present",
        },
        employmentType: "Self-employed",
        icon: "code",
        description: `- Developed responsive websites and web applications for global clients.
- Specialized in E-commerce solutions using Shopify and WooCommerce.
- Optimized website performance and SEO rankings.`,
        skills: [
          "Web Development",
          "E-commerce",
          "SEO",
          "JavaScript",
          "PHP",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "bca",
        title: "Bachelor of Computer Applications (BCA)",
        employmentPeriod: {
          start: "2025",
          end: "Present",
        },
        icon: "education",
        description: `**Baby Happy Modern P.G. College, Hanumangarh**
I am currently pursuing my BCA at Baby Happy Modern P.G. College, Hanumangarh. The college offers strong academic foundations in computer science, programming, and modern IT concepts. My ongoing studies are helping me strengthen my logical thinking, core fundamentals, and overall approach to software development.`,
        skills: [
          "Computer Science",
          "Programming",
          "IT Concepts",
          "Logical Thinking",
          "Software Development",
        ],
      },
      {
        id: "ducat",
        title: "Full Stack Development Diploma",
        employmentPeriod: {
          start: "2023",
          end: "2024",
        },
        icon: "education",
        description: `**DUCAT India — Full Stack Developer Program**
I completed my Full Stack Development Diploma from Ducat Institute, where I trained in Python, JavaScript, frontend & backend development, API building, databases, and modern web technologies.
This program helped me understand real-world development standards, full-stack workflows, and how to create complete functional applications from scratch.`,
        skills: [
          "Python",
          "JavaScript",
          "Frontend & Backend",
          "API Building",
          "Databases",
          "Modern Web Technologies",
        ],
      },
      {
        id: "continuous-learning",
        title: "Continuous Learning & Skill Growth",
        employmentPeriod: {
          start: "Ongoing",
        },
        icon: "education",
        description: `Along with formal education, I actively learn by building projects, exploring new technologies, freelancing, and gaining real-world experience. My focus is to keep improving daily and stay updated with the latest tech trends.`,
        skills: [
          "Project Building",
          "New Technologies",
          "Freelancing",
          "Real-world Experience",
        ],
      },
    ],
  },
];
