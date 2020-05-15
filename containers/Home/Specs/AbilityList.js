
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1, 0),
    padding: '2em 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1, 0)
  },
  icon: {
    width: 50,
    height: 50,
    objectFit: 'scale-down'
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.goldLight
  }
}));

const SPECS_ITEMS = [
  {
    imageUrl: '/img/icon/spec-gun-icon.png',
    title: '2\' Handgun Accuracy',
    description: 'At 50 yards'
  },
  {
    imageUrl: '/img/icon/spec-gun-icon.png',
    title: '1/4\' Rifle Accuracy',
    description: 'At 100 yards'
  },
  {
    imageUrl: '/img/icon/spec-gun-icon.png',
    title: '5,000+ Rounds',
    description: '0 Malfunctions'
  },
  {
    imageUrl: '/img/icon/spec-gun-icon.png',
    title: '20-50% Reduced Recoil',
    description: 'Than Factor Firearms'
  },
  {
    imageUrl: '/img/icon/spec-gun-icon.png',
    title: '100% Custom Made',
    description: 'Made to Order'
  }
]

const AbilityList = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {
        SPECS_ITEMS.map((item, index) => (
          <div key={index} className={classes.container}>
            <img src={item.imageUrl} className={classes.icon} />
            <Typography
              variant='body1'
              className={classes.title}
            >
              {item.title}
            </Typography>
            <Typography
              variant='caption'
            >
              {item.description}
            </Typography>
          </div>
        ))
      }
    </main >
  )
}

export default AbilityList;