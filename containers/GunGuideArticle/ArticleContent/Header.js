
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import LinkButton from 'components/Button/Link'
import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3)
  },
  button: {
    fontSize: 12,
    '& svg': {
      width: 12,
      height: 12
    }
  },
  share: {
    textTransform: 'uppercase'
  },
  socialIcon: {
    width: 20,
    height: 20,
    margin: theme.spacing(0, 0.5)
  }
}));

const ContentHeader = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <LinkButton
        label='Back To Gun Guide'
        href={PAGES_CONSTANTS.GUN_GUIDE.url}
        isLeft={true}
        className={classes.button}
      />
      <Typography
        variant='caption'
        color='textPrimary'
        className={classes.share}
      >
        Share:
        <img
          alt='facebook icon'
          src='/img/social/facebook.png'
          className={classes.socialIcon}
        />
        <img
          alt='twitter icon'
          src='/img/social/twitter.png'
          className={classes.socialIcon}
        />
        <img
          alt='email icon'
          src='/img/social/email.png'
          className={classes.socialIcon}
        />
      </Typography>
    </main>
  )
}

export default ContentHeader;