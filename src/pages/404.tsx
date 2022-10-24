import * as React from 'react'
import { HeadFC, Link } from 'gatsby'
import Page from '../layouts/Page'
import { SOCIALS } from '../content/data'
import { Home, Mail, Send } from 'react-feather'
import Iconed from '../components/Iconed'
import { SEO } from '../components/SEO'

const NotFoundPage = (): React.FC => {
  return (
    <Page>
      <h1 className="pb-12 leading-snug">
        Oops! <br />
        There&apos;s no such page 💫
      </h1>
      <h2>Troubleshooting</h2>
      <ul className="list-inside list-disc pb-8">
        <li>
          Do<strong>bu</strong>le check the URL spelling
        </li>
        <li>
          <a href={`mailto:${SOCIALS.email}`}>
            <Iconed icon={<Mail />}>Email me</Iconed>
          </a>{' '}
          or send a message via{' '}
          <a href={SOCIALS.telegram} title="Telegram" rel="noopener noreferrer">
            <Iconed icon={<Send />}> telegram</Iconed>
          </a>{' '}
          if you need this page
        </li>
        <li>
          <Link to="/">
            Redirect to <Iconed icon={<Home />}>home</Iconed>
          </Link>
        </li>
      </ul>
    </Page>
  )
}

export default NotFoundPage

export const Head = (): HeadFC => <SEO title="404: Not found" />
