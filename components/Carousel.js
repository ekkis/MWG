
import Carousel from 'react-slick'

const defaults = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

export default ({Items, Settings, children}) => {
  Settings = Object.assign(defaults, Settings)
  return (
    <Carousel {...Settings}>
    {
      Items.map((item, index) => children({item, index}))
    }
    </Carousel>
  )
}
