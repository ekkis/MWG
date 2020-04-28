import Carousel from 'react-slick'
import LocationOn from '@material-ui/icons/LocationOn'
import Section from 'components/Section'
import styles from 'styles/CombatElite'

export default () => {
    const classes = styles()    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
    }

    return (
        <Section className={classes.container}>
        <h1>Warrior Series</h1>
        <Carousel {...settings}>
        <div>
          <img src='/img/bg.jpg' alt='First slide' className='slick-image' />
          <div className='slick-caption'>
          <h4>
            <LocationOn className='slick-icons' />
            Yellowstone National Park, United States
          </h4>
          </div>
        </div>
        <div>
          <img src='/img/bg2.jpg' alt='Second slide' className='slick-image' />
          <div className='slick-caption'>
          <h4>
            <LocationOn className='slick-icons' />
            Somewhere Beyond, United States
          </h4>
          </div>
        </div>
        <div>
          <img src='/img/bg3.jpg' alt='Third slide' className='slick-image' />
          <div className='slick-caption'>
          <h4>
            <LocationOn className='slick-icons' />
            Yellowstone National Park, United States
          </h4>
          </div>
        </div>
      </Carousel>
      </Section>
      )
}