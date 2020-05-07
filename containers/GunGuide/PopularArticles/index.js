
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Grid, GridItem } from 'components/Grid'
import PopularArticleItem from './PopularArticleItem'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  title: {
    fontWeight: 'lighter',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(4)
  },
  container: {
    maxWidth: 820
  }
}));


const PopularArticles = ({ articles }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography
        variant='h3'
        color='textPrimary'
        className={classes.title}
      >
        Popular Articles Headline
      </Typography>
      <Grid spacing={5} className={classes.container}>
        {
          articles.map((article, index) => (
            <GridItem key={index} xs={12} sm={6} md={4} className={classes.item}>
              <PopularArticleItem article={article} />
            </GridItem>
          ))
        }
      </Grid>
    </main>
  )
}

export default PopularArticles;
