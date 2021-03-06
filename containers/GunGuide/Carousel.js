
import { useRouter } from 'next/router';
import Carousel from 'react-slick'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/Button/Outline'
import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.main
  },
  image: {
    width: '100%',
    height: 695,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: 560
    }
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2)
  },
  description: {
    textTransform: 'uppercase',
    maxWidth: 350,
    marginBottom: theme.spacing(2)
  }
}));

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

const CAROUSEL_ITEMS = [
  {
    title: 'Article Headerline',
    description: `Ipissit voles et omnis estiaecabore
     la si corerspedit occustium atiore eos.`,
    imageUrl: '/img/background/gun-guide-carousel-1.jpg'
  },
  {
    title: 'Article Headerline',
    description: `Ipissit voles et omnis estiaecabore
    la si corerspedit occustium atiore eos.`,
    imageUrl: '/img/background/gun-guide-carousel-2.jpg'
  },
  {
    title: 'Article Headerline',
    description: `Ipissit voles et omnis estiaecabore
    la si corerspedit occustium atiore eos.`,
    imageUrl: '/img/background/gun-guide-carousel-3.jpg'
  }
]

const GunGuideCarousel = () => {
  const classes = useStyles();
  const router = useRouter();

  const showArticleHandler = (id) => () => {
    router.push({
      pathname: PAGES_CONSTANTS.GUN_GUIDE_ARTICLE.url,
      query: { id }
    });
  }

  return (
    <Carousel {...settings}>
      {
        CAROUSEL_ITEMS.map((item, index) => (
          <div key={index} className={classes.container}>
            <img
              alt='carousel image'
              src={item.imageUrl}
              className={classNames(classes.image, 'slick-image')}
            />
            <div className={classNames(classes.content, 'slick-caption')}>
              <Typography
                variant='h4'
                color='textPrimary'
                className={classes.title}
              >
                {item.title}
              </Typography>
              <Typography
                variant='body1'
                color='textPrimary'
                className={classes.description}
              >
                {item.description}
              </Typography>
              <OutlineButton
                onClick={showArticleHandler(index + 1)} >
                Read More
              </OutlineButton>
            </div>
          </div>
        ))
      }
    </Carousel >
  )
}

export default GunGuideCarousel;
