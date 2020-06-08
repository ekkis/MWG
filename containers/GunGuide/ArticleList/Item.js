
import { useMemo } from 'react'
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TextButton from 'components/Button/Text'
import PAGES_CONSTANTS from 'constants/links/pages'
import { getDateByFormat } from 'utils/time'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  image: {
    width: 140,
    height: 90,
    paddingRight: theme.spacing(2),
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      width: 120
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    }
  },
  title: {
    textTransform: 'uppercase',
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  },
  date: {
    color: theme.palette.text.goldLight
  },
  description: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

const ListItem = ({ article }) => {
  const classes = useStyles();
  const router = useRouter();

  const dateString = useMemo(() => getDateByFormat(article.date), [article]);

  const showArticleHandler = () => {
    router.push({
      pathname: PAGES_CONSTANTS.GUN_GUIDE_ARTICLE.url,
      query: { id: article.id }
    });
  }

  return (
    <main className={classes.root}>
      <div>
        <img
          src={article.imageUrl}
          alt=''
          className={classes.image}
        />
      </div>
      <div className={classes.textContainer}>
        <div className={classes.header}>
          <Typography
            variant='body1'
            color='textPrimary'
            className={classes.title}
          >
            {article.title}
          </Typography>
          <Typography
            variant='caption'
            className={classes.date}
          >
            {dateString}
          </Typography>
        </div>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          {article.description}
        </Typography>
        <TextButton
          onClick={showArticleHandler}
          label='read more' />
      </div>
    </main>
  )
}

export default ListItem;
