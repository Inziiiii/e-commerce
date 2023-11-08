import React from 'react'
import Carousel from '../../carousel/carousel'
import HomeSectionCarousel from '../../home_section_carousel/home_section_carousel'

const Homepage = () => {
  return (
    <div>
        <Carousel/>
        <div>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default Homepage