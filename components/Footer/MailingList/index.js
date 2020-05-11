
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1)
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.palette.button.main,
    marginBottom: theme.spacing(2)
  },
  description: {
    fontWeight: 'lighter',
    marginBottom: theme.spacing(2)
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    maxWidth: 200
  },
  signup: {
    fontWeight: 'lighter',
    marginRight: theme.spacing(1)
  }
}));

const MailingList = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography
        variant='body1'
        className={classes.title}
      >
        Latest from MWG
      </Typography>
      <Typography
        variant='body2'
        color='textPrimary'
        className={classes.description}
      >
        Be the first to hear about special events, new
        exclusive custom firearms, classes and more
      </Typography>
      <div className={classes.inputContainer}>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.signup}
        >
          Sign up
      </Typography>
        <TextField
          id='outlined-secondary'
          variant='outlined'
          color='secondary'
          className={classes.input}
        />
      </div>
    </main>
  )
}

export default MailingList