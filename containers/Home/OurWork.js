import Carousel from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';

import Section from 'components/Section'
import { Grid, GridItem } from 'components/Grid'
import LinkButton from 'components/UI/Buttons/LinkButton'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative'
  },
  image: {
    height: 668,
    width: '100%',
    objectFit: 'cover'
  },
  content: {
    position: 'absolute',
    top: 0,
    zIndex: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  description: {
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(1, 0)
  }
}));

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: false,
}

const Images = [
  [
    '/img/weapon/competition-weapon-1.jpg',
    '/img/weapon/competition-weapon-2.jpg'
  ],
  [
    '/img/weapon/competition-weapon-3.jpg',
    '/img/weapon/competition-weapon-4.jpg'
  ],
  [
    '/img/weapon/competition-weapon-5.jpg',
    '/img/weapon/competition-weapon-6.jpg'
  ],
  [
    '/img/weapon/competition-weapon-7.jpg',
    '/img/weapon/competition-weapon-8.jpg'
  ]
]

const Competition = () => {
  const classes = useStyles();

  return (
    <Section className={classes.container}>
      <Hidden xsDown implementation='css'>
        <Grid>
          {
            Images.map((competition, index) => (
              <GridItem key={`competition${index}`} xs={3}>
                <Carousel {...settings}>
                  {
                    competition.map((item, i) => (
                      <div key={i}>
                        <img src={item} className={classes.image} />
                      </div>
                    ))
                  }
                </Carousel>
              </GridItem>
            ))
          }
        </Grid>
      </Hidden>
      <Hidden smUp implementation='css'>
        <Carousel {...settings}>
          {
            Images.map((competition, index) => (
              competition.map((item, i) => (
                <div key={i}>
                  <img src={item} className={classes.image} />
                </div>
              ))
            ))
          }
        </Carousel>
      </Hidden>
      <div className={classes.content}>
        <Typography
          variant='h4'
          color='textPrimary'
          className={classes.description}
        >
          Our Work
        </Typography>
        <LinkButton
          label='see past projects'
          url=''
        />
      </div>
    </Section>
  )
}

export default Competition