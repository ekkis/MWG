
import Carousel from 'react-slick'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/UI/Buttons/OutlineButton'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.main
  },
  image: {
    width: '100%',
    height: 617,
    objectFit: 'contain'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  description: {
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(2, 0)
  }
}));

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

const CAROUSEL_ITEMS = [
  {
    title: 'Modern weapons',
    description: 'time-honored weaponscraft',
    imageUrl: '/img/background/main-carousel.png'
  },
  {
    title: 'Modern weapons',
    description: 'time-honored weaponscraft',
    imageUrl: '/img/background/main-carousel.png'
  },
  {
    title: 'Modern weapons',
    description: 'time-honored weaponscraft',
    imageUrl: '/img/background/main-carousel.png'
  }
]

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <Carousel {...settings}>
      {
        CAROUSEL_ITEMS.map((item, index) => (
          <div key={index} className={classes.container}>
            <img src={item.imageUrl} alt='carousel image' className={classNames(classes.image, 'slick-image')} />
            <div className={classNames(classes.content, 'slick-caption')}>
              <Typography
                variant='h4'
                color='textPrimary'
                className={classes.description}
              >
                {`${item.title}, `}
                <br />
                {item.description}
              </Typography>
              <OutlineButton >
                Shop Handguns
              </OutlineButton>
            </div>
          </div>
        ))
      }
    </Carousel >
  )
}

export default HomeCarousel;
