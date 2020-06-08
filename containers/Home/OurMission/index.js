
import { makeStyles } from '@material-ui/core/styles'

import Section from 'components/Section'
import AbilityList from './AbilityList'
import Description from './Description'

const styles = theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    }
  }
})

export default () => {
  const classes = makeStyles(styles)()

  return (
    <Section>
      <div className={classes.root}>
        <AbilityList />
        <Description />
      </div>
    </Section>
  )
}