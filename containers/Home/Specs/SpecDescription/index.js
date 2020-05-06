


import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    backgroundImage: `url(/img/background/spec-background.jpg)`,
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
      <img src='/img/weapon/spec-gun.png' className={classes.gunImage} />
      <div className={classes.content}>
        <Typography
          variant='h4'
          className={classes.title}
        >
          "AND," NOT "OR"
        </Typography>
        <Typography
          variant='body1'
          color='textPrimary'
          className={classes.description}
        >
          Some guns are reliable.  Others are about
          speed and top-tier performance Warrior Series
          guns are both -- because your custom gun
          should work just as well at the range and
          at home. That's our mission
        </Typography>
      </div>
    </div>
  )
}

export default SpecDescription;