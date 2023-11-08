import React from 'react'
import AliceCarousel from '../carousel/carousel'
// import HomeSection from '../home_section/homesection'
import HomeSection from '../home_section/homesection'



const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSection/>);


    return (
        <div>
            < AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                responsive={responsive}
            />
        </div>
    )
}

export default HomeSectionCarousel