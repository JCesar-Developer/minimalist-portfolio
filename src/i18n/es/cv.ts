import type { CV } from "@/i18n/cv";
import { basics, skills, projects, works, experience, education, certificates } from './cv/index';

export const cv: CV = {
  basics,
  skills,
  projects,
  works,
  experience,
  education,
  certificates,

  //NOT USED
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
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon."
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