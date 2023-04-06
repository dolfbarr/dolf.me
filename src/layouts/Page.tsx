import React, { PropsWithChildren, ReactElement } from 'react'
import Footer from '../components/Footer'
import ThemeModeProvider from '../contexts/ThemeModeProvider'

const Page: React.FC<PropsWithChildren> = ({ children }): ReactElement => (
  <ThemeModeProvider>
    <div className="flex min-h-screen flex-col items-center justify-center p-4 pt-8">
      <main className="max-w-screen-md flex-1 px-2 sm:px-6">{children}</main>
      <Footer className="max-w-screen-md px-2 sm:px-6" />
    </div>

    <noscript>
      <img src="https://dolf.goatcounter.com/count?p=/test-noscript" />
    </noscript>
  </ThemeModeProvider>
)

export default Page
