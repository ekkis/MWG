import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import { Grid, GridItem } from 'components/Grid'
import LinkButton from 'components/Button/Link'

const ImgDir = '/img/Home/LongGuns/'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6),
    backgroundRepeat: 'no-repeat',
    backgroundSize: '101% 100%',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    }
  },
  Shotguns: {
    backgroundImage: `url(${ImgDir}shotguns-background.jpg)`,
  },
  Rifles: {
    backgroundImage: `url(${ImgDir}shotguns-background.jpg)`,
  },
  image: {
    width: '100%',
    // height: 475,
    objectFit: 'contain'
  },
  description: {
    textAlign: 'center',
    margin: theme.spacing(2, 0)
  }
}));

const Panes = [
  {
    name: 'Shotguns',
    imageUrl: 'benelli-right-profile'
  },
  {
    name: 'Rifles',
    imageUrl: '9mm-ar-right-profile'
  },
]

export default () => {
  const classes = useStyles()

  return (
    <Grid>
      {
        Panes.map((item, index) => (
          <GridItem 
            key={index} 
            xs={12} sm={12} md={6} 
            className={classNames(classes.root, classes[item.name])}
          >
            <img
              alt='slide image'
              src={ImgDir + item.imageUrl + '.png'}
              className={classNames(classes.image)}
            />
            <Typography variant='h4' className={classes.description}>
              Warrior
              <br />
              {item.name}
            </Typography>
            <LinkButton
              label='custom build'
              url=''
            />
          </GridItem>
        ))
      }
    </Grid>
  )
}
