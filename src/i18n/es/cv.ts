import type { CV } from "@/i18n/cv";
import { basics, skills, projects, works } from './cv/index';

export const cv: CV = {
  basics,
  skills,
  projects,
  works,
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