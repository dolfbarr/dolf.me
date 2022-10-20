import React from 'react'

const Page = ({ children }): React.FC => (
  <div className='container flex justify-center p-4'>
    <main className='max-w-screen-md px-6'>
      {children}
    </main>
  </div>
)

export default Page
