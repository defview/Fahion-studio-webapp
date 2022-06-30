import React from 'react'
import CoverVideo from '../container/CoverVideo'
import Logo from '../container/Logo'
import NavBar from '../container/NavBar'

const Home = () => {
  return (
    <section className='relative min-h-[200vh] overflow-hidden'>
        <CoverVideo />
        <Logo />
        <NavBar />
    </section>
  )
}

export default Home