import * as React from 'react'
import { HeadFC, Link } from 'gatsby'
import Page from '../layouts/Page'
import { SOCIALS } from '../content/data'
import { Home, Mail, Send } from 'react-feather'

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
          <a
            href={`mailto:${SOCIALS.email}`}
            className="inline-flex items-center gap-1"
          >
            <Mail size={12} /> Email me
          </a>{' '}
          or send a message via{' '}
          <a
            href={SOCIALS.telegram}
            title="Telegram"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <Send size={12} /> telegram
          </a>{' '}
          if you need this page
        </li>
        <li>
          <Link to="/" className="inline-flex items-center gap-1">
            Redirect to <Home size={12} /> home
          </Link>
        </li>
      </ul>
    </Page>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404: Not found</title>
