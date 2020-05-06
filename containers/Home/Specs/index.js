
import { makeStyles } from '@material-ui/core/styles'

import Section from 'components/Section'
import AbilityList from './AbilityList'
import SpecDescription from './SpecDescription'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    }
  }
}));

const Specs = () => {
  const classes = useStyles();

  return (
    <Section>
      <div className={classes.root}>
        <AbilityList />
        <SpecDescription />
      </div>
    </Section>
  )
}

export default Specs;