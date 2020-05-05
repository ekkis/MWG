import classNames from 'classnames'
import LocationOn from '@material-ui/icons/LocationOn'
import { makeStyles } from '@material-ui/core/styles';

import { Grid, GridItem } from 'components/Grid'

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%'
  }
}));

const RIFLE_ITEMS = [
  {
    location: 'Yellowstone National Park, United States',
    imageUrl: '/img/bg.jpg'
  },
  {
    location: 'Somewhere Beyond, United States',
    imageUrl: '/img/bg2.jpg'
  },
]

const RifleShotgun = () => {
  const classes = useStyles();

  return (
    <Grid>
      {
        RIFLE_ITEMS.map((item, index) => (
          <GridItem key={index} xs={12} sm={12} md={6} className='marginAuto'>
            <div>
              <img
                alt='slide image'
                src={item.imageUrl}
                className={classNames(classes.image, 'slick-image')}
              />
              <div className='slick-caption'>
                <h4>
                  <LocationOn className='slick-icons' />
                  {item.location}
                </h4>
              </div>
            </div>
          </GridItem>
        ))
      }
    </Grid>
  )
}

export default RifleShotgun;
