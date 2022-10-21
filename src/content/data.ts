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
}
