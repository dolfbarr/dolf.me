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
import { CONTACTS } from '../content/data'

const FOOTER_CONTACTS = {
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
    url: CONTACTS.email,
    icon: <Mail />,
    title: 'Email',
  },
  telegram: {
    url: CONTACTS.telegram,
    icon: <Send />,
    title: 'Telegram',
  },
  facebook: {
    url: CONTACTS.facebook,
    icon: <Facebook />,
    title: 'Facebook',
  },
  instagram: {
    url: CONTACTS.instagram,
    icon: <Instagram />,
    title: 'Instagram',
  },
  twitter: {
    url: CONTACTS.twitter,
    icon: <Twitter />,
    title: 'Twitter',
  },
  github: {
    url: CONTACTS.github,
    icon: <GitHub />,
    title: 'Github',
  },
  stackoverflow: {
    url: CONTACTS.stackoverflow,
    icon: <Layers />,
    title: 'Stack Overflow',
  },
  linkedin: {
    url: CONTACTS.linkedin,
    icon: <Linkedin />,
    title: 'LinkedIn',
  },
}

const Footer = ({ children }): React.FC => (
  <footer>
    <section className="flex gap-4 text-3xl text-primary">
      {Object.keys(FOOTER_CONTACTS).map((key) => (
        <a
          key={key}
          href={FOOTER_CONTACTS[key].url}
          target="_blank"
          title={FOOTER_CONTACTS[key].title}
          rel="noreferrer noopener"
        >
          {React.cloneElement(FOOTER_CONTACTS[key].icon, { size: 24 })}
          <span className="sr-only">{FOOTER_CONTACTS[key].title}</span>
        </a>
      ))}
    </section>
  </footer>
)

export default Footer
