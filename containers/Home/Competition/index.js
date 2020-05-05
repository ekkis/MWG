
import Carousel from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'

import Section from 'components/Section'
import { Grid, GridItem } from 'components/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    '& img': {
      height: 500
    }
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

const COMPETITION_ITEMS = [
  [
    '/img/bg4.jpg',
    '/img/bg7.jpg'
  ],
  [
    '/img/bg.jpg',
    '/img/bg2.jpg'
  ],
  [
    '/img/bg4.jpg',
    '/img/bg7.jpg'
  ],
  [
    '/img/bg.jpg',
    '/img/bg2.jpg'
  ]
]

const Competition = () => {
  const classes = useStyles();

  return (
    <Section className={classes.container}>
      <Grid>
        {
          COMPETITION_ITEMS.map((competition, index) => (
            <GridItem key={`competition${index}`} xs={3}>
              <Carousel {...settings}>
                {
                  competition.map((item, i) => (
                    <div key={i}>
                      <img src={item} />
                    </div>
                  ))
                }
              </Carousel>
            </GridItem>
          ))
        }
      </Grid>
    </Section>
  )
}

export default Competition;