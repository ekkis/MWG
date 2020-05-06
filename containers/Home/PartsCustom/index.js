
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { Grid, GridItem } from 'components/Grid'
import LinkButton from 'components/UI/Buttons/LinkButton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(8, 2)
  },
  container: {
    maxWidth: 660
  },
  image: {
    width: '100%',
    height: 150,
    objectFit: 'cover'
  },
  imageContainer: {
    textAlign: 'center'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  description: {
    padding: theme.spacing(1, 0)
  }
}));

const PARTS_ITEMS = [
  {
    imageUrl: '/img/background/custom-path.jpg',
    title: 'Parts',
    description: 'Your gun\'s only as reliable as the parts inside it',
    linkTitle: 'Shop parts'
  },
  {
    imageUrl: '/img/background/custom-customize.jpg',
    title: 'Customize',
    description: 'See, feel and trust each shot',
    linkTitle: 'Learn more'
  },
  {
    imageUrl: '/img/background/custom-smithing.jpg',
    title: 'Gunsmithing',
    description: 'Gun repairs and detailed gun cleaning and maintenance',
    linkTitle: 'Shop services'
  }
]
const PartsCustom = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid className={classes.container} spacing={2}>
        {
          PARTS_ITEMS.map((item, index) => (
            <Fragment key={index}>
              <GridItem xs={12} sm={5}>
                <img
                  src={item.imageUrl}
                  alt=''
                  className={classes.image}
                />
              </GridItem>
              <GridItem xs={12} sm={7} className={classes.textContainer}>
                <Typography
                  variant='h5'
                  color='textPrimary'
                  className={classes.description}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='textPrimary'
                  className={classes.description}
                >
                  {item.description}
                </Typography>
                <LinkButton
                  label={item.linkTitle}
                  url=''
                />
              </GridItem>
            </Fragment>
          ))
        }
      </Grid>
    </main>
  )
}

export default PartsCustom;