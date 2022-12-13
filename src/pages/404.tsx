import React, { ReactElement } from 'react'
import { HeadFC, Link } from 'gatsby'
import Page from '../layouts/Page'
import { SOCIALS } from '../content/data'
import { Home, Mail } from 'react-feather'
import Iconed from '../components/Iconed'
import { SEO } from '../components/SEO'

const NotFoundPage: React.FC = (): ReactElement => {
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
            target="_blank"
            rel="noreferrer noopener"
            href={`mailto:${SOCIALS.email}`}
            title={'Email: ' + SOCIALS.email}>
            <Iconed icon={<Mail />}>
              <span>Email me</span>
            </Iconed>
          </a>{' '}
          if you need this page
        </li>
        <li>
          <Link to="/">
            Redirect to{' '}
            <Iconed icon={<Home />}>
              <span>home</span>
            </Iconed>
          </Link>
        </li>
      </ul>
    </Page>
  )
}

export default NotFoundPage

export const Head: HeadFC = (): ReactElement => <SEO title="404: Not found" />
