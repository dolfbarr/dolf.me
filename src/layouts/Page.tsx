import React from 'react'
import Footer from '../components/Footer'

const Page = ({ children }): React.FC => (
  <div className="flex flex-col items-center justify-center p-4 pt-8">
    <main className="max-w-screen-md px-2 sm:px-6 ">{children}</main>
    <Footer />
  </div>
)

export default Page
