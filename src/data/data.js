const location = {
  title: 'Belgrade, Serbia',
  link: 'https://geohack.toolforge.org/geohack.php?pagename=Belgrade&params=44_49_04_N_20_27_25_E_region:RS_type:city'
}

const nickname = 'dolfbarr'

module.exports = {
  author: 'Dolf Barr',
  nickname,
  description: `Dolf Barr, a senior frontend engineer based in ${location.title}`,
  location,
  contacts: {
    twitter: `https://twitter.com/${nickname}`,
    github: `https://github.com/${nickname}`,
    telegram: `https://${nickname}.t.me/`,
    stackoverflow: 'https://stackoverflow.com/u/8362049',
    linkedin: `https://www.linkedin.com/in/${nickname}`,
    email: 'mail@dolf.me',
    instagram: 'https://www.instagram.com/dolf.barr/'
  },
  totalYearsOfExperience: Math.abs((new Date(Date.now() - new Date('Nov 2013'))).getUTCFullYear() - 1970),
  work: {
    link: 'https://invitae.com',
    name: 'Invitae Corp',
    label: '@invitae'
  }
}
