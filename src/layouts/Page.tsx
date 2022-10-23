import React from 'react'
import Footer from '../components/Footer'

const Page = ({ children }): React.FC => (
  <div className="flex min-h-screen flex-col items-center justify-center p-4 pt-8">
    <main className="max-w-screen-md flex-1 px-2 sm:px-6">{children}</main>
    <Footer />
  </div>
)

export default Page
