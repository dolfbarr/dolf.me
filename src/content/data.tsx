import React from 'react'
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
}

export const LOCATION = {
  title: 'Belgrade, Serbia',
  original: 'Београд, Србија',
  flag: '🇷🇸',
  link: 'https://geohack.toolforge.org/geohack.php?pagename=Belgrade&params=44_49_04_N_20_27_25_E_region:RS_type:city',
}

export const META = {
  description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
}

export const SOCIALS = {
  twitter: `https://twitter.com/${PERSONAL_DATA.nickname}`,
  github: `https://github.com/${PERSONAL_DATA.nickname}`,
  telegram: `https://${PERSONAL_DATA.nickname}.t.me/`,
  stackoverflow: 'https://stackoverflow.com/u/8362049',
  linkedin: `https://www.linkedin.com/in/${PERSONAL_DATA.nickname}`,
  email: `mail@${PERSONAL_DATA.firstName.toLocaleLowerCase()}.me`,
  instagram: `https://www.instagram.com/${PERSONAL_DATA.firstName.toLocaleLowerCase()}.${PERSONAL_DATA.lastName.toLocaleLowerCase()}/`,
  facebook: `https://www.facebook.com/${PERSONAL_DATA.nickname}/`,
}

export const CONTACTS: {
  [key: string]: {
    url: string
    icon: JSX.Element
    title: string
    isEmail?: string
  }
} = {
  resume: {
    url: '/files/dolf-barr-resume.pdf',
    icon: <FileText />,
    title: 'Download resume in PDF',
  },
  gpg: {
    url: '/files/dolf-barr-gpg.key',
    icon: <Key />,
    title: 'Download GPG Key',
  },
  email: {
    url: SOCIALS.email,
    icon: <Mail />,
    title: 'Email',
    isEmail: true,
  },
  telegram: {
    url: SOCIALS.telegram,
    icon: <Send />,
    title: 'Telegram',
  },
  facebook: {
    url: SOCIALS.facebook,
    icon: <Facebook />,
    title: 'Facebook',
  },
  instagram: {
    url: SOCIALS.instagram,
    icon: <Instagram />,
    title: 'Instagram',
  },
  twitter: {
    url: SOCIALS.twitter,
    icon: <Twitter />,
    title: 'Twitter',
  },
  github: {
    url: SOCIALS.github,
    icon: <GitHub />,
    title: 'Github',
  },
  stackoverflow: {
    url: SOCIALS.stackoverflow,
    icon: <Layers />,
    title: 'Stack Overflow',
  },
  linkedin: {
    url: SOCIALS.linkedin,
    icon: <Linkedin />,
    title: 'LinkedIn',
  },
}

export const WORK = {
  totalYearsOfExperience: Math.abs(
    new Date(Date.now() - new Date('1 Nov 2013')).getUTCFullYear() - 1970,
  ),
  link: 'https://invitae.com',
  name: 'Invitae',

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
    },
    {
      title: 'Senior Software Engineer',
      company: ' QuantumSoft',
      description:
        'Within different teams working on projects for QuantumSoft partners. Most of the time, I am responsible for the frontend architecture and development of the UI and application business logic.',
      startDate: 'Oct ’15',
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
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'KREOSOFT',
      description:
        'Participated in the development of corporate and social services for students and employees of Tomsk State University.',
      startDate: 'Nov ’13',
      endDate: 'Sep ’15',
    },
  ] as Array<{
    title: string
    company: string
    contract?: boolean
    description: string
    skills?: string[]
    startDate: string
    endDate?: string
  }>,
}

export const EDUCATION = {
  university: 'Tomsk State University',
  description: 'Bachelor’s degree, Computer Science.',
  startDate: '2011',
  endDate: '2015',
}
