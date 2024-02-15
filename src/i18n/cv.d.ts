export interface CV {
  basics: Basics
  works: Array<Work>
  experience: Array<Experience>
  volunteer: Array<Volunteer>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Project>
}

export interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

export interface Experience {
  name: string
  company: string
  companyUrl?: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
}

type DateStr = `${string}-${string}-${string}`

export interface Work {
  name: string
  image: string
  position: string
  client: Client
  url?: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  typeOfContract: string
  highlights: Highlight
}

export interface Client {
  name: string
  logo?: string
  url: string
}

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

export interface Skills {
  name: string
  level: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

export interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

export interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate: DateStr | null
  score: number | null
  courses: Array<string>
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

export interface Project {
  name: string
  isActive?: boolean
  image: string
  description: string
  highlights: Highlight
  url: string
  github?: string
}

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
