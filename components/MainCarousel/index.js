
import Carousel from 'react-slick'
import LocationOn from '@material-ui/icons/LocationOn'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

const CAROUSEL_ITEMS = [
  {
    location: 'Yellowstone National Park, United States',
    imageUrl: '/img/background/gun-guide-carousel-1.jpg'
  },
  {
    location: 'Somewhere Beyond, United States',
    imageUrl: '/img/background/gun-guide-carousel-2.jpg'
  },
  {
    location: 'Yellowstone National Park, United States',
    imageUrl: '/img/background/gun-guide-carousel-3.jpg'
  }
]

const MainCarousel = () => {
  return (
    <Carousel {...settings}>
      {
        CAROUSEL_ITEMS.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt='carousel image' className='slick-image' />
            <div className='slick-caption'>
              <h4>
                <LocationOn className='slick-icons' />
                {item.location}
              </h4>
            </div>
          </div>
        ))
      }
    </Carousel>
  )
}

export default MainCarousel;
