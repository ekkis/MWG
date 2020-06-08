import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Section from 'components/Section'
const ImgDir = '/img/WarriorSeries/1. Hero/'

const styles = theme => ({
   section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   },
   image: {
     width: '100%',
     objectFit: 'cover'
   },
   content: {
      position: 'absolute',
      textAlign: 'center',
      bottom: 200,
      // border: 'solid 1px red',
    },
})
 
export default () => {
   const classes = makeStyles(styles)()
   return (
   <Section className={classes.section}>
      <img src={ImgDir + 'modern-warrior-black-glock.jpg'} 
         className={classes.image} 
      />
      <div className={classes.content}>
         <Typography variant='h4'>
            Warrior Series custom guns
         </Typography>
         <Typography variant='body1'>
            You don’t bring “just a gun” to a fully custom gun fight.
         </Typography>
      </div>
   </Section>
   )
}