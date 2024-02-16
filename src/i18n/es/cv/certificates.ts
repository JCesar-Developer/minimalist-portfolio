//SPANISH TRANSLATION
import type { Certificate } from "@/i18n/cv";

/*
 * [] Quiero hacer AWS
 * [] Un certificado de NodeJS
 * [] Dos certificados de Tailwind - [✅] Español & [] Inglés
 * [] Un certificado de Angular
 * [✅] Un certificado de Git y GitHub
 * [✅] Un certificado de diseño UI/UX
 * [] Dos certificados de Vue - Udemy & DevTalles
 * [✅] Un certificado oficial de desarrollo web
*/

export const certificates: Certificate[] = [
  {
    name: "Certificado de estudios de técnico superior en desarrollo de aplicaciones web y programación",
    date: "2022-06-01",
    issuer: "Universitat Oberta de Catalunya",
    image: {
      url: "/images/certificates/uoc.webp",
      width: 1701,
      height: 2339,
    }
  },
  {
    name: "Certificado de estudios de especialización en diseño UI/UX",
    date: "2023-08-01",
    issuer: "Zero to Mastery",
    image: {
      url: "/images/certificates/ui-ux.webp",
      width: 2223,
      height: 1653,
    }
  },
  {
    name: "Certificado de estudios de especialización en TailwindCSS",
    date: "2023-11-22",
    issuer: "Universitat Oberta de Catalunya",
    image: {
      url: "/images/certificates/tailwind.webp",
      width: 2223,
      height: 1653,
    }
  },
  {
    name: "Certificado de estudios de dominio de herramients de control de versiones con Git y GitHub",
    date: "2022-10-13",
    issuer: "Universitat Oberta de Catalunya",
    image: {
      url: "/images/certificates/git.webp",
      width: 2223,
      height: 1653,
    }
  },
];