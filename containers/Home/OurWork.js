import Carousel from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';

import Section from 'components/Section'
import { Grid, GridItem } from 'components/Grid'
import Button from 'components/Button/Link'

const ImgDir = '/img/Home/OurWork/'
const styles = theme => ({
  GridItem: {
    // border: '1px solid red',
  },
  carousel: {
    // border: '1px solid blue'
  },
  container: {
    position: 'relative'
  },
  image: {
    height: 700,
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
    margin: theme.spacing(1, 0)
  }
})

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

export default () => {
  const classes = makeStyles(styles)()
  return (
    <Section className={classes.container}>
      <Hidden xsDown implementation='css'>
        <Grid>
        {
          Tiles().map(index => (
            <GridItem key={`competition${index}`} xs={3} className={classes.GridItem}>
              <Tile index={index} classes={classes} />
            </GridItem>
          ))
        }
        </Grid>
      </Hidden>

      <Hidden smUp implementation='css'>
        <Carousel {...settings}>
        {
          Tiles().map(index => (
            <Tile index={index} classes={classes} />
            ))
          }
        </Carousel>
      </Hidden>

      <div className={classes.content}>
        <Typography variant='h4' color='textPrimary'
          className={classes.description}
          >
          Our Work
        </Typography>
        <Button label='see past projects' url='' />
      </div>
    </Section>
  )
}

function Tiles() {
  return "x".repeat(4).split('').map((v,i) => i + 1)
}

function Tile({index, classes}) {
  return (
  <Carousel {...settings} className={classes.carousel}>
    <div key={1}>
      <img src={ImgDir + 'Column' + index + '_ImageA.jpg'} 
        className={classes.image} 
      />
    </div>
    <div key={2}>
      <img src={ImgDir + 'Column' + index + '_ImageB.jpg'} 
        className={classes.image} 
      />
    </div>
  </Carousel>
  )
}