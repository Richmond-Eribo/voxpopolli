import React from 'react'
import Nav from './../components/Nav'

const Elections = () => {
  return (
    <section className='relative  h-screen md:h-[70vh] lg:h-screen px-5 overflow-hidden bg-right bg-no-repeat background lg:px-32 '>
      <Nav />
      <p className='mt-16 text-3xl font-black text-center md:text-8xl text-dark '>
        Hey,
        <br /> The Election page is coming soon...
      </p>

      <p className='mt-16 text-xl font-black text-center md:text-4xlxl text-dark '>
        Please wait
      </p>
    </section>
  )
}

export default Elections
