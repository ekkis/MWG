
import Carousel from 'react-slick'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/Button/Outline'

const styles = theme => ({
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
    margin: theme.spacing(2, 0),
  }
})

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  pauseOnHover: true
}

const Images = [
    'modern-warrior-blue-1911-colt-defender',
    'warrior-series-colt-1911-right',
    'modern-warrior-sig-p238-with-hard-chrome-giraffe-bone-grips',
    'warrior-series-glock-1',
    'warrior-series-glock-2',
    'warrior-series-glock-with-cuts-and-shadow-compensator',
    'warrior-series-glock-with-shadow-compensator'
]

function Image({fn, classes}) {
  const root = '/img/Home/Hero/'
  return (
    <img src={root + fn + '.png'} 
      alt='carousel image' 
      className={classNames(classes.image, 'slick-image')} 
      />
  )
}

export default () => {
  const classes = makeStyles(styles)()
  return (
    <Carousel {...settings}>
      {
        Images.map((fn, index) => (
          <div key={index} className={classes.container}>
            <Image fn={fn} classes={classes} />
            <div className={classNames(classes.content, 'slick-caption')}>
              <Typography variant='h4' className={classes.description}>
                Modern Weapons
                <br/>
                time-honored weaponscraft
              </Typography>
              <OutlineButton>
                Shop Handguns
              </OutlineButton>
            </div>
          </div>
        ))
      }
    </Carousel >
  )
}
