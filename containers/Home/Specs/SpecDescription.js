import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    backgroundImage: `url(/img/background/warrior-series-gradient-background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '101% 100%',
    [theme.breakpoints.down('xs')]: {
      height: 500,
      padding: theme.spacing(8, 2)
    }
  },
  gunImage: {
    position: 'absolute',
    top: 80,
    left: '-20%',
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      left: 'unset',
      top: 'unset',
      bottom: -40
    }
  },
  title: {
    paddingTop: theme.spacing(1),
    borderTop: `2px solid ${theme.palette.button.main}`,
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      borderTop: 'unset',
    }
  },
  content: {
    position: 'absolute',
    maxWidth: 400,
    bottom: 40,
    left: 40,
    [theme.breakpoints.down('xs')]: {
      position: 'unset',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  description: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

const SpecDescription = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src='/img/weapon/warrior-series-black-glock.png' className={classes.gunImage} />
      <div className={classes.content}>
        <Typography
          variant='h4'
          className={classes.title}
        >
          Our mission
        </Typography>
        <Typography
          variant='body1'
          color='textPrimary'
          className={classes.description}
        >
          Should you choose to accept it. Some guns are reliable. 
          Others are all about speed and top-tier performance. 
          Modern Warrior guns are both, blended into a collection 
          of carefully considered designs, because your custom gun 
          should work just as well at the range, at home, and on the 
          job—and look good doing it.
        </Typography>
      </div>
    </div>
  )
}

export default SpecDescription;