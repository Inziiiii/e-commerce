import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { CarouselData } from './carouseldata';
import 'react-alice-carousel/lib/alice-carousel.css';


const Carousel = () => {
    const items = CarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt='' />)
 
    return(
        < AliceCarousel
        items = { items }  
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    )
}


export default Carousel