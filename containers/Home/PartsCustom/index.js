
import { makeStyles } from '@material-ui/core/styles'

import { Grid, GridItem } from 'components/Grid'
import { Fragment } from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '2em 5em',
    backgroundColor: 'black',
    '& > .MuiGrid-item': {
      border: 'solid 1px pink',
      paddingBottom: '2em'
    }
  },
  imageContainer: {
    textAlign: 'center',
    '& > img': {
      width: 400
    },
  },
  textContainer: {
    paddingLeft: '1em',
    '& > a': {
      textTransform: 'uppercase'
    }
  }
}));

const PARTS_ITEMS = [
  {
    imageUrl: '/img/bg.jpg',
    title: 'Parts',
    description: 'Your gun\'s only as reliable as the parts inside it',
    linkTitle: 'Shop parts'
  },
  {
    imageUrl: '/img/bg2.jpg',
    title: 'Customize',
    description: 'See, feel and trust each shot',
    linkTitle: 'Learn more'
  },
  {
    imageUrl: '/img/bg3.jpg',
    title: 'Gunsmithing',
    description: 'Gun repairs and detailed gun cleaning and maintenance',
    linkTitle: 'Shop services'
  }
]
const PartsCustom = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      {
        PARTS_ITEMS.map((item, index) => (
          <Fragment key={index}>
            <GridItem xs={6} className={classes.imageContainer}>
              <img src={item.imageUrl} alt='' />
            </GridItem>
            <GridItem xs={6} className={classes.textContainer}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a href=''>{item.linkTitle} &gt;</a>
            </GridItem>
          </Fragment>
        ))
      }
    </Grid>
  )
}

export default PartsCustom;