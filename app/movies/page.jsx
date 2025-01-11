import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Trending from './components/Trending'
import Footer from './components/Footer'
import Series from './components/Series'

const page = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Trending/>
      <Series/>
      <Footer/>
    </>
  )
}

export default page
