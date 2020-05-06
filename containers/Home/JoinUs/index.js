
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/UI/Buttons/OutlineButton'

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
}));
const JoinUs = () => {
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
        Be first in line to receive invitations to special events and hear
        about the new, exclusive custom guns, classes and more. You'll also
        be able to check out faster and track your project's progress so you
        can shoot sonner. Sign up for a Modern Warrior guns account and make
        building your custom gun online easy
      </Typography>
      <OutlineButton>Join Now</OutlineButton>
    </main>
  )
}

export default JoinUs;