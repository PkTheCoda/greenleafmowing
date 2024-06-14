import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Guarantee from '../Components/Guarantee'
import TripleFeatures from '../Components/TripleFeatures'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Services />
        <Guarantee />
        <TripleFeatures />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Homepage