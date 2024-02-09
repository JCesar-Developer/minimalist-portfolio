import type { CV } from "@/i18n/cv";
import { basics, skills, projects } from './cv/index';

export const cv: CV = {
  basics,
  skills,
  projects,

  work: [
    {
      name: "midudev",
      position: "Divulgador sobre Programación Web",
      url: "https://twitch.tv/midudev",
      startDate: "2021-01-01",
      endDate: null,
      summary: "Streamer de programación más visto en Español en Twitch. +1 millón de seguidores entre todas mis redes sociales. Reconocido por Google, Microsoft y GitHub por mi impacto en la comunidad de desarrolladores.",
      highlights: [
        "Started the company"
      ]
    },
    {
      name: "Adevinta",
      position: "Lead Frontend Architect",
      url: "https://twitch.tv/midudev",
      startDate: "2016-06-01",
      endDate: "2022-09-01",
      summary: "Lideré una convergencia técnica entre diferentes productos y migramos una arquitectura monolítica a otra más flexible y optimizada. Fomenté buenas prácticas y mejoras en la cultura de rendimiento, además de la entrega rápida de valor a los usuarios.",
      highlights: [
        "Started the company"
      ]
    },
    {
      name: "Hubii",
      position: "Senior FrontEnd Developer",
      startDate: "2011-03-01",
      endDate: "2016-05-01",
      summary: "Desarrollé una plataforma de noticias geolocalizadas y una API para consumir la información. Escalé los servicios para soportar la carga de más de cientos de miles de peticiones al día. Recorté los tiempos de entrega y despliegues a producción a la mitad. Colaboré con Mozilla y Telefónica para desarrollar la primera app para televisores con FirefoxOS.",
      highlights: [
        "Started the company"
      ]
    }
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: [
        "Awarded 'Volunteer of the Month'"
      ]
    }
  ],
  education: [
    {
      institution: "Universitat Oberta de Catalunya",
      url: "https://www.uoc.edu/portal/es/index.html",
      area: "Ingeniero de Software",
      studyType: "Bachelor",
      startDate: "2003-01-01",
      endDate: "2009-01-01",
      score: "4.0",
      courses: [
        "DB1101 - Basic SQL"
      ]
    }
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon."
    }
  ],
  certificates: [
    {
      name: "Certificate",
      date: "2021-11-07",
      issuer: "Company",
      url: "https://certificate.com"
    }
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Description…"
    }
  ],
  languages: [
    {
      language: "Spanish",
      fluency: "Native speaker"
    },
    {
      language: "English",
      fluency: "Advanced"
    }
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: [
        "Ferrets",
        "Unicorns"
      ]
    }
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference…"
    }
  ],
}