//ENGLISH TRANSLATIONS
import type { Project } from '@/i18n/cv';

export const projects: Project[] = [
  {
    name: "El Croquis Digital",
    isActive: true,
    image: './images/projects/croquis.webp',
    description: 'Frontend project developed for the architecture company "El Croquis". It is a web for viewing the company\'s digital magazines, with a subscription model.',
    highlights: [
      "FrontEnd",
      "HTML",
      "SASS",
      "Vue",
      "Nuxt",
      "JavaScript",
      "TypeScript",
      "REST API",
    ],
    url: "https://www.elcroquisdigital.com/"
  },
  {
    name: "Astro-Tailwind Projects",
    isActive: true,
    image: './images/projects/astro-tailwind.webp',
    description: "6 complete landing pages created from a design. Created with Astro + TailwindCSS, with 100% performance and optimized for SEO",
    highlights: [
      "HTML",
      "CSS",
      'Tailwind',
      "SEO Optimized",
      "100% Performance"
    ],
    url: "https://astro-tailwind-6.netlify.app/"
  },
  {
    name: "Oh-Studio Clone",
    isActive: false,
    image: '/images/projects/astro-bem.webp',
    description: "Clone of the complete Oh-Studio website. Created with Astro + BEM-CSS, with improved animations, with 100% improved performance and optimized for SEO.",
    highlights: [
      "HTML",
      "CSS",
      "BEM-CSS",
      "CSS Animations",
      "SEO Optimized",
      "100% Performance",
    ],
    url: "https://astro-bem-projects.netlify.app/oh.studio/"
  },
  {
    name: "Rick & Morty App",
    isActive: true,
    image: './images/projects/rick-morty.webp',
    description: "Web application to search characters from the Rick & Morty series. Finalist of the Hackathon contest by Jump2Digital Barcelona.",
    highlights: [
      "Hackathon Finalist",
      "HTML",
      "SASS",
      "SPA",
      "Vue",
      "JavaScript",
      "TypeScript",
      "REST API",
    ],
    url: "https://jc-rick-and-morty.netlify.app/"
  },
];