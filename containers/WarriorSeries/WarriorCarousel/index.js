
import Carousel from 'react-slick'

import Section from 'components/Section'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true
}

const CAROUSEL_ITEMS = [
  '/img/bg.jpg',
  '/img/bg2.jpg'
]

const WarriorCarousel = () => {
  return (
    <Section>
      <Carousel {...settings}>
        {
          CAROUSEL_ITEMS.map((item, index) => (
            <div key={index}>
              <img src={item} className='slick-image' />
            </div>
          ))
        }
      </Carousel>
    </Section>
  )
}

export default WarriorCarousel;
