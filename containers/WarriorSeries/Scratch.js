
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Button from 'components/Button/Outline'
import Section from 'components/Section'

const styles = theme => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  description: {
    textAlign: 'center',
    // maxWidth: 600,
    maxWidth: '32em',
    padding: theme.spacing(2, 0)
  }
})

export default () => {
  const classes = makeStyles(styles)()
  return (
    <Section className={classes.section}>
      <Typography
        variant='h4'
        color='textSecondary'
      >
        Start from scratch
      </Typography>
      <Typography
        variant='body1'
        color='textPrimary'
        className={classes.description}
      >
         For the most discerning shooters. Talk with one of our armorers and build 
         a custom gun that’s made for your special set of skills or maybe just to 
         match a big personality.
      </Typography>
      <Button className={classes.button}>Request a Quote</Button>
    </Section>
  )
}