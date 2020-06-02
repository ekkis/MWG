
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

var ImgDir = '/img/Home/PartsCustom/'
const Sections = [
  {
    image: 'shadow-compensator-parts',
    title: 'Custom Parts',
    description: 'The ultimate in fit, quality, and performance.',
    linkTitle: 'Shop parts'
  },
  {
    image: '9mm-reciever-set-blue-customize-cerakote-and-finishes',
    title: 'Customize',
    description: 'Rugged and functional done your way.',
    linkTitle: 'Learn more'
  },
  {
    image: 'gunsmithing-workstation',
    title: 'Gunsmithing',
    description: 'See, feel, and trust each shot.',
    linkTitle: 'Shop services'
  }
]

const Section = ({item, key, classes}) => (
  <Fragment key={key}>
  <GridItem xs={12} sm={5}>
    <img
      src={ImgDir + item.image + '.jpg'}
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
)

const PartsCustom = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid className={classes.container} spacing={2}>
        {
          Sections.map((item, index) => (
            <Section key={index} item={item} classes={classes}/>
          ))
        }
      </Grid>
    </main>
  )
}

export default PartsCustom