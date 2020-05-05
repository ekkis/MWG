
import Carousel from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import LocationOn from '@material-ui/icons/LocationOn'

import Section from 'components/Section'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'pink',
    padding: '4em'
  }
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

const COMBAT_ITEMS = [
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

const CombatElite = () => {
  const classes = useStyles();

  return (
    <Section className={classes.container}>
      <h1>Warrior Series</h1>
      <Carousel {...settings}>
        {
          COMBAT_ITEMS.map((item, index) => (
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
    </Section>
  )
}

export default CombatElite;