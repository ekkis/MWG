
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TextButton from 'components/UI/Buttons/TextButton'
import ListHeader from './Header'
import ListItem from './Item'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  container: {
    width: '100%',
    maxWidth: 820
  },
  moreButton: {
    textAlign: 'center'
  }
}));

const PAGE_COUNT = 3;
const ArticleList = ({ articles }) => {
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const articleLength = articles.length;

    setTotal(articleLength);
    if (articleLength > PAGE_COUNT) {
      setCount(PAGE_COUNT)
    } else {
      setCount(articleLength);
    }
  }, [articles]);

  const paginationHandler = () => {
    if (total > count + PAGE_COUNT) {
      setCount(prev => prev + PAGE_COUNT)
    } else {
      setCount(total)
    }
  }

  return (
    <main className={classes.root}>
      <div spacing={5} className={classes.container}>
        <ListHeader />
        {[...Array(count)].map((e, index) => {
          const article = articles[index];
          return (
            <ListItem
              key={index}
              article={article} />
          )
        })}
        {
          total > count &&
          <TextButton
            label='view more'
            onClick={paginationHandler}
            className={classes.moreButton}
          />
        }
      </div>
    </main>
  )
}

export default ArticleList;
