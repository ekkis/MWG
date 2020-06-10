import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import classNames from 'classnames'

import Button from 'components/Button/Outline'

import Hero from 'containers/WarriorSeries/Hero'
import Scratch from 'containers/WarriorSeries/Scratch'
import Knives from 'containers/WarriorSeries/Knives'

export default () => (
  <>
  <Hero />
  <Sections />
  <Scratch />
  <Knives />
  </>
)

const ImgDir = '/img/WarriorSeries/'
const styles = theme => ({
  Grid: {
    position: 'relative',
    backgroundColor: 'black',
    // border: 'solid 1px red'
  },
  GridItem: {
    height: '600px',
    display: 'grid',
    alignItems: 'center',
    // border: 'solid 1px red',
  },
  GridLeft: {
    justifyItems: 'end',
    '& img': {
      left: 60
    },
    '& $content': {
      marginRight: '5em',
    },
  },
  GridRight: {
    justifyItems: 'start',
    '& img': {
      left: -60
    },
    '& $content': {
      marginLeft: '8em'
    }
  },
  image: {
    position: 'relative',
    width: '90%',
    objectFit: 'cover',
    // border:  'solid 1px blue'
  },
  content: {
    width: '25em'
  },
  desc: {
    marginTop: '0.5em',
    marginBottom: '2em',
  },
  TheCompetition: {
    '& img': {
      position: 'relative',
      left: 200,
      width: '110%'
    },
    '& $content': {
      paddingTop: 150,
      marginLeft: '3em'
    },
  }
})

function Tile({item, classes, reverse}) {
  var sectionClass = classes[item.title.replace(/\s+/, '')]
  var styles = [
    classNames(classes.GridItem, classes.GridLeft, sectionClass),
    classNames(classes.GridItem, classes.GridRight, sectionClass)
  ]
  var contents = [(
    <img src={ImgDir + item.image} className={classes.image} />
  ),
  (
    <div className={classes.content}>
    <Typography variant='h4' className={classes.title}>
      {item.title}
    </Typography>
    <Typography variant='body1' className={classes.desc}>
      {item.desc}
    </Typography>
    <Button url='' className={classes.button}>{item.button}</Button>
    </div>
  )]
  if (reverse) swap(contents)
  return (
    <>
    <Grid item xs={6} className={styles[0]}>{contents[0]}</Grid>
    <Grid item xs={6} className={styles[1]}>{contents[1]}</Grid>
    </>
  )
}

function Sections() {
  const classes = makeStyles(styles)()
  return (
    <Grid container className={classes.Grid}>
    {
      require('containers/WarriorSeries/Sections.json').map((item, index) => (
        <Tile item={item} classes={classes} reverse={index % 2 == 0} />
      ))
    }
    </Grid>
  )
}

function swap(r) {
  var x = r[0]; r[0] = r[1]; r[1] = x
}