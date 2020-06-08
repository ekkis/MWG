
import { useMemo } from 'react'
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import LinkButton from 'components/Button/Link'
import PAGES_CONSTANTS from 'constants/links/pages'
import { getDateByFormat } from 'utils/time'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    backgroundColor: theme.palette.background.main,
    borderRadius: theme.spacing(0.3),
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: 'ease-out 0.4s',
      backgroundColor: theme.palette.background.brownLight,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s'
  },
  image: {
    width: '100%',
    height: 150,
    objectFit: 'cover'
  },
  cardMedia: {
    height: 0,
    paddingTop: '66.25%'
  },
  cardContent: {
    padding: theme.spacing(2, 1)
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1)
  },
  date: {
    color: theme.palette.text.goldLight,
    marginBottom: theme.spacing(1)
  },
  description: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    marginBottom: theme.spacing(2)
  },
  button: {
    fontSize: 12,
    '& svg': {
      width: 12,
      height: 12
    }
  }
}));


const PopularArticleItem = ({ article }) => {
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
    <Card className={classes.root}>
      <CardMedia
        image={article.imageUrl}
        className={classes.cardMedia} />
      <CardContent className={classes.cardContent}>
        <Typography
          variant='h6'
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
        <Typography
          variant='body1'
          color='textPrimary'
          className={classes.description}
        >
          {article.description}
        </Typography>
        <LinkButton
          label='read more'
          onClick={showArticleHandler}
          className={classes.button}
        />
      </CardContent>
    </Card>
  )
}

export default PopularArticleItem;
