import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import { Grid, GridItem } from 'components/Grid'
import LinkButton from 'components/UI/Buttons/LinkButton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6),
    backgroundImage: `url(/img/background/rifle-background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '101% 100%',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    }
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'contain'
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(2, 0)
  }
}));

const RIFLE_ITEMS = [
  {
    name: 'ShutGuns',
    imageUrl: '/img/weapon/benelliM2A.png'
  },
  {
    name: 'Rifles',
    imageUrl: '/img/weapon/rifle.png'
  },
]

const RifleShotgun = () => {
  const classes = useStyles();

  return (
    <Grid>
      {
        RIFLE_ITEMS.map((item, index) => (
          <GridItem key={index} xs={12} sm={12} md={6} className={classes.root}>
            <img
              alt='slide image'
              src={item.imageUrl}
              className={classNames(classes.image)}
            />
            <Typography
              variant='h4'
              color='textPrimary'
              className={classes.description}
            >
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

export default RifleShotgun;
