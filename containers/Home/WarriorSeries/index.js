
import Carousel from 'react-slick'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';

import Section from 'components/Section'
import LinkButton from 'components/Button/Link'
import MobileCombatItem from './MobileCombatItem'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.blueLight,
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 2)
    }
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(1, 0)
  },
  image: {
    height: 600,
    objectFit: 'cover !important'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
}));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
}

const root = '/img/Home/WarriorSeries/'
const COMBAT_ITEMS = [
  {
    title: 'Modern Warrior',
    imageUrl: root + 'modern-warrior.jpg'
  },
  {
    title: 'Combat Elite',
    imageUrl: root + 'combat-elite.jpg'
  },
  {
    title: 'Deep Concealment',
    imageUrl: root + 'deep-concealment.jpg'
  },
  {
    title: 'Competition',
    imageUrl: root + 'competition.jpg'
  }
]

const CombatElite = () => {
  const classes = useStyles();

  return (
    <Section className={classes.root}>
      <Typography
        variant='h4'
        color='textPrimary'
        className={classes.title}
      >
        Warrior Series
      </Typography>
      <Hidden xsDown implementation='css'>
        <Carousel {...settings}>
          {
            COMBAT_ITEMS.map((item, index) => (
              <div key={index}>
                <img src={item.imageUrl} alt='carousel image' className={classNames(classes.image, 'slick-image')} />
                <div className={classNames(classes.content, 'slick-caption')}>
                  <Typography
                    variant='h4'
                    color='textPrimary'
                    className={classes.title}
                  >
                    {item.title}
                  </Typography>
                  <LinkButton
                    label='shop custom build'
                    url=''
                  />
                </div>
              </div>
            ))
          }
        </Carousel>
      </Hidden>
      <Hidden smUp implementation='css'>
        {
          COMBAT_ITEMS.map((item, index) =>
            <MobileCombatItem key={index} item={item} />
          )
        }
      </Hidden>
    </Section>
  )
}

export default CombatElite;