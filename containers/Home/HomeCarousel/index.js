
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
    imageUrl: '/img/bg.jpg'
  },
  {
    location: 'Somewhere Beyond, United States',
    imageUrl: '/img/bg2.jpg'
  },
  {
    location: 'Yellowstone National Park, United States',
    imageUrl: '/img/bg3.jpg'
  }
]

const HomeCarousel = () => {
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

export default HomeCarousel;
