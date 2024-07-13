import React from 'react'
import AboutHil from '../../components/AboutHil/AboutHil'
import Financial from '../../components/Financial/Financial'
import Capslider from '../../components/CapSlider/CapSlider'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'

import AwardsSection from '../../components/Awards/AwardsSection'
import ReadMoreButton from '../../components/ReadMoreButton/ReadMoreButton'
import Slider from 'react-slick'
import Quote from '../../components/Quote/Quote'


function HomePage() {
  return (
    <div>
      <HeroSection/>
      <AboutHil/>
      <Capslider/>
      <div className='flex justify-center pt-10'>
            <ReadMoreButton/>
      </div>
      <AwardsSection/>
      {/* <Quote/> */}
      <Financial/>
    </div>
  )
}

export default HomePage
