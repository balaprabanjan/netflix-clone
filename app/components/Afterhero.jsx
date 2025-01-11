import React from 'react'
import TopMovies from './TopMovies'
import Features from './Features'
import Accordion from './Accordions'
import Footer from './Footer'

const Afterhero = () => {
  return (
    <>
      <div className='bg-black border-t-8 border-pink-600 rounded-t-3xl'>
        <TopMovies/>
        <Features/>
        <Accordion/>
        <Footer/>
      </div>
    </>
  )
}

export default Afterhero
