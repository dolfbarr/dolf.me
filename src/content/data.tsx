import React, { ReactElement } from 'react'
import {
  Facebook,
  GitHub,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Send,
  Twitter,
  Key,
  FileText,
  Code,
  Gitlab,
} from 'react-feather'

export const PERSONAL_DATA = {
  firstName: 'Dolf',
  lastName: 'Barr',
  get fullName() {
    return `${String(this.firstName)} ${String(this.lastName)}`
  },
  get nickname() {
    return `${String(this.firstName.toLocaleLowerCase())}${String(
      this.lastName.toLocaleLowerCase(),
    )}`
  },
  occupation: 'senior frontend engineer',
  tagLines: ['💻 frontend engineer', '☕️ coffee driven', '🏡 remote advocate'],
} as const

export const LOCATION = {
  title: 'Belgrade, Serbia',
  original: 'Београд, Србија',
  timeZone: 'Europe/Belgrade',
  coordinates: [44.8178, 20.457],
  flag: '🇷🇸',
} as const

export const META = {
  description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
} as const

export const SOCIALS: { [key: string]: string } = {
  twitter: `https://twitter.com/${PERSONAL_DATA.nickname}`,
  github: `https://github.com/${PERSONAL_DATA.nickname}`,
  gitlab: `https://gitlab.com/${PERSONAL_DATA.nickname}`,
  telegram: `https://${PERSONAL_DATA.nickname}.t.me/`,
  stackoverflow: 'https://stackoverflow.com/u/8362049',
  linkedin: `https://www.linkedin.com/in/${PERSONAL_DATA.nickname}`,
  email: `mail@${PERSONAL_DATA.firstName.toLocaleLowerCase()}.me`,
  instagram: `https://www.instagram.com/${PERSONAL_DATA.firstName.toLocaleLowerCase()}.${PERSONAL_DATA.lastName.toLocaleLowerCase()}/`,
  facebook: `https://www.facebook.com/${PERSONAL_DATA.nickname}/`,
  devto: `https://dev.to/${PERSONAL_DATA.nickname}`,
} as const

export enum ContactGroup {
  Social = 'social',
  Code = 'code',
  Other = 'other',
}

export const CONTACTS: {
  [key: string]: {
    url: string
    icon: ReactElement
    title: string
    isEmail?: boolean
    group?: ContactGroup
  }
} = {
  resume: {
    url: '/files/dolf-barr-resume.pdf',
    icon: <FileText />,
    title: 'Download resume in PDF',
    group: ContactGroup.Other,
  },
  gpg: {
    url: '/files/dolf-barr-gpg.key',
    icon: <Key />,
    title: 'Download GPG Key',
    group: ContactGroup.Other,
  },
  email: {
    url: SOCIALS.email,
    icon: <Mail />,
    title: 'Email',
    isEmail: true,
    group: ContactGroup.Social,
  },
  telegram: {
    url: SOCIALS.telegram,
    icon: <Send />,
    title: 'Telegram',
    group: ContactGroup.Social,
  },
  facebook: {
    url: SOCIALS.facebook,
    icon: <Facebook />,
    title: 'Facebook',
    group: ContactGroup.Social,
  },
  instagram: {
    url: SOCIALS.instagram,
    icon: <Instagram />,
    title: 'Instagram',
    group: ContactGroup.Social,
  },
  twitter: {
    url: SOCIALS.twitter,
    icon: <Twitter />,
    title: 'Twitter',
    group: ContactGroup.Social,
  },
  devto: {
    url: SOCIALS.devto,
    icon: <Code />,
    title: 'Dev.to',
    group: ContactGroup.Code,
  },
  github: {
    url: SOCIALS.github,
    icon: <GitHub />,
    title: 'GitHub',
    group: ContactGroup.Code,
  },
  gitlab: {
    url: SOCIALS.github,
    icon: <Gitlab />,
    title: 'Gitlab',
    group: ContactGroup.Code,
  },
  stackoverflow: {
    url: SOCIALS.stackoverflow,
    icon: <Layers />,
    title: 'Stack Overflow',
    group: ContactGroup.Code,
  },
  linkedin: {
    url: SOCIALS.linkedin,
    icon: <Linkedin />,
    title: 'LinkedIn',
    group: ContactGroup.Social,
  },
}

export const WORK = {
  totalYearsOfExperience: Math.abs(
    new Date(
      Number(Date.now()) - Number(new Date('1 Nov 2013')),
    ).getUTCFullYear() - 1970,
  ),

  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: ' Invitae',
      contract: true,
      description:
        'Working on the frontend architecture and implementation business processes for web portal & inner tools.',
      skills: [
        'Javascript',
        'Typescript',
        'HTML',
        'CSS',
        'Less',
        'Stylus',
        'Sass',
        'Node.js (NestJS)',
        'Redux-Forms',
        'React Hook Form',
        'Formik',
        'Yup',
        'Storybook',
        'Testing Library',
        'Cypress',
        'Python (Django)',
      ],
      startDate: 'Apr ’19',
      url: 'https://invitae.com',
    },
    {
      title: 'Senior Software Engineer',
      company: ' QuantumSoft',
      description:
        'Within different teams working on projects for QuantumSoft partners. Most of the time, I am responsible for the frontend architecture and development of the UI and application business logic.',
      startDate: 'Oct ’15',
      url: 'https://quantumsoft.pro',
    },
    {
      title: 'Frontend Engineer',
      company: 'Mind Doodle',
      contract: true,
      description:
        'Responsibility for the frontend architecture and development of the UI and application business logic.',
      skills: [
        'Javascript',
        'Flow',
        'Typescript',
        'HTML',
        'CSS',
        'Less',
        'Websockets',
        'Node.js (Express.js)',
        'Webpack',
        'Cytoscape',
        'd3',
        'Draft.js',
      ],
      startDate: 'Aug ’16',
      endDate: 'Mar ’19',
      url: 'https://www.mindmappro.com',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'KREOSOFT',
      description:
        'Participated in the development of corporate and social services for students and employees of Tomsk State University.',
      startDate: 'Nov ’13',
      endDate: 'Sep ’15',
      url: 'https://kreosoft.ru',
    },
  ] as Array<{
    title: string
    company: string
    contract?: boolean
    description: string
    skills?: string[]
    startDate: string
    endDate?: string
    url?: string
  }>,
} as const

export const EDUCATION = {
  university: 'Tomsk State University',
  description: 'Bachelor’s degree, Computer Science.',
  startDate: '2011',
  endDate: '2015',
} as const
