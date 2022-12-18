import React, { ReactElement, useState } from 'react'
import { HeadFC, Link } from 'gatsby'
import Page from '../layouts/Page'

import Landing from '../components/sections/Landing'
import Resume from '../components/Resume'
import { SEO } from '../components/SEO'
import Button from '../components/Button'
import { FileText, PenTool } from 'react-feather'
import Iconed from '../components/Iconed'

enum Block {
  Resume = 'resume',
  Blog = 'blog',
}

const IndexPage: React.FC = (): ReactElement => {
  const [block, setBlock] = useState<Block>(Block.Resume)
  const pages = [
    {
      block: Block.Resume,
      icon: <FileText />,
      title: 'Resume',
      path: Block.Resume,
    },
    {
      block: Block.Blog,
      icon: <PenTool />,
      title: 'Blog',
      path: Block.Blog,
    },
  ]
  return (
    <Page>
      <Landing />
      <div className="align-center flex justify-center gap-x-14 pb-8">
        {pages.map((page) => {
          const classes = 'w-3/12 px-2 py-1 text-2xl'
          const inner = (
            <Iconed icon={page.icon} size={18}>
              {page.title}
            </Iconed>
          )

          return block !== page.block ? (
            <Button className={classes} onClick={() => setBlock(page.block)}>
              {inner}
            </Button>
          ) : (
            <Link to={page.path} className={classes}>
              {inner}
            </Link>
          )
        })}
      </div>
      {block === Block.Resume && <Resume />}
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = (): ReactElement => (
  <SEO>
    {typeof window !== 'undefined' && (
      <>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin="true"
        />
        <script
          src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
          integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
          crossOrigin="true"></script>
      </>
    )}
  </SEO>
)
