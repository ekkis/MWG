
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 455
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  content: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    maxWidth: 420,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'lighter',
    marginBottom: theme.spacing(2)
  }
}));

const ArticleHeader = ({ article = {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        alt='carousel image'
        src={article.imageUrl || ''}
        className={classes.image}
      />
      <div className={classes.content}>
        <Typography
          variant='h4'
          color='textPrimary'
          className={classes.title}
        >
          {article.title}
        </Typography>
      </div>
    </div>
  )
}

export default ArticleHeader;
