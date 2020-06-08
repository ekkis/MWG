
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/Button/Outline'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  description: {
    textAlign: 'center',
    maxWidth: 600,
    padding: theme.spacing(2, 0)
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Typography
        variant='h4'
        color='textSecondary'
        className={classes.title}
      >
        Join our modern warrior world
      </Typography>
      <Typography
        variant='body1'
        color='textPrimary'
        className={classes.description}
      >
        We put the most reliable, functional, and beautiful custom 
        guns in your hands and news about them right in your inbox. 
        Be the first to hear about special events, new exclusive 
        custom guns, classes, and more. Check out faster, track your 
        project’s progress, and shoot sooner. Sign up for a Modern 
        Warrior Guns account and make building your custom gun online 
        even easier.
      </Typography>
      <OutlineButton>Join Now</OutlineButton>
    </main>
  )
}