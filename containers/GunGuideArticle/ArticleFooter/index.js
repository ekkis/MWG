
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import OutlineButton from 'components/UI/Buttons/OutlineButton'
import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.blueLight,
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

const ArticleFooter = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Typography
        variant='h4'
        color='textSecondary'
        className={classes.title}
      >
        Gun Guide Headline
      </Typography>
      <Typography
        variant='body1'
        color='textPrimary'
        className={classes.description}
      >
        Ipissit voles et omnis esti aecabore la si corerspedit occustium atiore
        eomquia quam eos repudandia sim quatiae dolor sunt porro.
      </Typography>
      <OutlineButton href={PAGES_CONSTANTS.GUN_GUIDE.url}>
        Find More articles
      </OutlineButton>
    </main>
  )
}

export default ArticleFooter;