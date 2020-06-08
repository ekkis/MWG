import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'

import Section from 'components/Section'
import Button from 'components/Button/Outline'
import { Grid, GridItem } from 'components/Grid'

const ImgDir = '/img/WarriorSeries/'

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

const styles = theme => ({
  section: {
    backgroundColor: 'black',
    // border: 'solid 1px pink'
  },
  image: {
    width: '100%',
    objectFit: 'cover'
  },
  content: {
    position: 'absolute',
    marginTop: -460,
    width: '22em',
    //  border: '1px solid pink'
  },
  TheModernWarrior: {
    '& img': { marginLeft: '200px', },
    '& $content': { marginLeft: 180, }
  },
  TheCombatElite: {
    '& img': { marginLeft: '-190px' },
    '& $content': { marginLeft: 675, }
  },
  TheDeepConcealment: {
    '& img': { marginLeft: '200px', },
    '& $content': { marginLeft: 180, }
  },
  TheCompetition: {
    '& img': { marginLeft: '-150px', },
    '& $content': {
      marginLeft: 600,
      marginTop: -360,
    }
  }
})

function Sections() {
  const classes = makeStyles(styles)()
  return require('containers/WarriorSeries/Sections.json').map(o => {
    const sectionClass = o.title.replace(/\s+/g, '')
    return (
    <Section className={classNames(classes.section, classes[sectionClass])}>
      <img src={ImgDir + o.image} className={classes.image} />
      <div className={classes.content}>
        <Typography variant='h4' style={{marginBottom: 15}}>
          {o.title}
        </Typography>
        <Typography variant='body1' style={{marginBottom: 25}}>
          {o.desc}
        </Typography>
        <Button url=''>{o.button}</Button>
      </div>
    </Section>
    )
  })
}