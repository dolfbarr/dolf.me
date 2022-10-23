import React from 'react'

const Page = ({ children }): React.FC => (
  <div className="container flex flex-1 justify-center p-4 pt-8 align-middle">
    <main className="max-w-screen-md px-2 sm:px-6 ">{children}</main>
  </div>
)

export default Page
