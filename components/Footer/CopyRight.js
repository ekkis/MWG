
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3, 0),
    marginTop: '6em'
  },
  description: {
    fontWeight: 'lighter',
    textAlign: 'center'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography
        variant='caption'
        color='textPrimary'
        className={classes.description}
      >
        For authorized transfer, firearms are required to be shipped
        to an authorized dealer and the necessary FFL licence(s) presented
      </Typography>
      <Typography
        variant='caption'
        color='textPrimary'
        className={classes.description}
      >
        All Rights Reserved &copy; 2019
      </Typography>
    </main>
  )
}
