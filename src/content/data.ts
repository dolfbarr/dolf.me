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
  link: 'https://geohack.toolforge.org/geohack.php?pagename=Belgrade&params=44_49_04_N_20_27_25_E_region:RS_type:city',
}

export const META = {
  description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
}

export const CONTACTS = {
  twitter: `https://twitter.com/${PERSONAL_DATA.nickname}`,
  github: `https://github.com/${PERSONAL_DATA.nickname}`,
  telegram: `https://${PERSONAL_DATA.nickname}.t.me/`,
  stackoverflow: 'https://stackoverflow.com/u/8362049',
  linkedin: `https://www.linkedin.com/in/${PERSONAL_DATA.nickname}`,
  email: `mail@${PERSONAL_DATA.firstName.toLocaleLowerCase()}.me`,
  instagram: `https://www.instagram.com/${PERSONAL_DATA.firstName.toLocaleLowerCase()}.${PERSONAL_DATA.lastName.toLocaleLowerCase()}/`,
  facebook: `https://www.facebook.com/${PERSONAL_DATA.nickname}/`,
}

export const WORK = {
  totalYearsOfExperience: Math.abs(
    new Date(Date.now() - new Date('1 Nov 2013')).getUTCFullYear() - 1970,
  ),
  link: 'https://invitae.com',
  name: 'Invitae',
  label: '@invitae',

  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: ' Invitae',
      contract: true,
      description:
        'Working on the frontend architecture and implementation business processes for web portal & inner tools.',
      skills: [
        'JS',
        'Typescript',
        'HTML',
        'CSS',
        'Less',
        'Stylus',
        'Sass',
        'Node.js (NestJS)',
        'Redux-Forms',
        'Formik',
        'Yup',
        'Cypress',
        'Python (Django)',
      ],
      startDate: 'April 2019',
    },
    {
      title: 'Senior Software Engineer',
      company: ' QuantumSoft',
      description:
        'Within different teams working on projects for QuantumSoft partners. Most of the time, I am responsible for the frontend architecture and development of the UI and application business logic.',
      startDate: 'October 2015',
    },
    {
      title: 'Frontend Engineer',
      company: 'Mind Doodle',
      contract: true,
      description:
        'Responsibility for the frontend architecture and development of the UI and application business logic.',
      skills: [
        'JS',
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
      startDate: 'August 2016',
      endDate: 'March 2019',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'KREOSOFT',
      description:
        'Participated in the development of corporate and social services for students and employees of Tomsk State University.',
      startDate: 'November 2013',
      endDate: 'Septmeber 2015',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Soundotcom',
      description:
        'Developing and implementing of a beta version of the application SoundDotCom.',
      startDate: 'January 2014',
      endDate: 'July 2014',
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
  description: "Bachelor's degree, Computer Science.",
  startDate: '2011',
  endDate: '2015',
}
