import React from 'react'
import Footer from '../components/Footer'
import ThemeModeProvider from '../contexts/ThemeModeProvider'

const Page = ({ children }): React.FC => (
  <ThemeModeProvider>
    <div className="flex min-h-screen flex-col items-center justify-center p-4 pt-8">
      <main className="max-w-screen-md flex-1 px-2 sm:px-6">{children}</main>
      <Footer />
    </div>
  </ThemeModeProvider>
)

export default Page
