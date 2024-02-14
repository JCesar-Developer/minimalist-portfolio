//SPANISH TRANSLATIONS
import type { Project } from '@/i18n/cv';

export const projects: Project[] = [
  {
    name: "El Croquis Digital",
    isActive: true,
    image: '/images/projects/croquis.webp',
    description: 'Proyecto frontend desarrollado para la empresa de arquitectura "El Croquis". Se trata de una web de visualización de las revistas digitales de la empresa, con un modelo de suscripción.',
    highlights: [
      "FrontEnd",
      "HTML",
      "SASS",
      "Vue",
      "Nuxt",
      "JavaScript",
      "TypeScript",
      "API Rest",
    ],
    url: "https://www.elcroquisdigital.com/"
  },
  {
    name: "Astro-Tailwind Projects",
    isActive: true,
    image: '/images/projects/astro-tailwind.webp',
    description: "6 landpages completas creadas a partir de un diseño. Creadas con Astro + TailwindCSS, con 100% de performance y optimizadas para SEO",
    highlights: [
      "HTML",
      "CSS",
      'Tailwind',
      "Optimizado para SEO",
      "Performance al 100%"
    ],
    url: "https://astro-tailwind-6.netlify.app/"
  },
  {
    name: "Clon de Oh-Studio",
    isActive: false,
    image: '/images/projects/astro-bem.webp',
    description: "Clon de la web completa de Oh-Studio. Creada con Astro + BEM-CSS, con animaciones mejoradas, con performance mejorada al 100% y optimizada para SEO.",
    highlights: [
      "HTML",
      "CSS",
      "BEM-CSS",
      "Animaciones CSS",
      "Optimizado para SEO",
      "Performance al 100%",
    ],
    url: "https://astro-bem-projects.netlify.app/oh.studio/"
  },
  {
    name: "Rick & Morty App",
    isActive: true,
    image: '/images/projects/rick-morty.webp',
    description: "Aplicación web para buscar personajes de la serie Rick & Morty. Finalista del concurso Hackaton de Jump2Digital Barcelona",
    highlights: [
      "Finalista hackaton",
      "HTML",
      "SASS",
      "SPA",
      "Vue",
      "JavaScript",
      "TypeScript",
      "API Rest",
    ],
    url: "https://jc-rick-and-morty.netlify.app/"
  },
]