import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Carousel from 'react-slick'

import Section from 'components/Section'
import Button from 'components/Button/Outline'

const ImgDir = '/img/WarriorSeries/7. Reverse Grip Knives/'
const settings = {
   dots: true,
   arrows: true,
   infinite: true,
   speed: 600,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   adaptiveHeight: true,
   pauseOnHover: true
}

const styles = theme => ({
   section: {
      position: 'relative',
      backgroundColor: 'black',
      backgroundImage: `url(${ImgDir}BlueDimondPlate.png)`,
      textAlign: 'center'
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
   },
   container: {
      // backgroundColor: theme.palette.background.main
   },
   image: {
      width: '100%',
      height: 617,
      objectFit: 'contain'
   },
   content: {
      display: 'inline',
      position: 'absolute',
      textAlign: 'center',
      top: '3em',
      width: '24em',
      border: 'solid 1px pink'
   },
 })

const Images = [
   'knife-1',
   'knife-6',
   'knife-8',
   'knife-desert-camo',
   'knife-digital-camo',
   'knife-green-tiger-stripe',
   'knife-jungle-camo',
   'Knife-X',
   'Knife-Xb',
   'Knife-Xc',
   'Knife-Xd',
   'Knife-Xe',
   'knife-zebra-stripe',
]
 
export default () => {
   const classes = makeStyles(styles)()
   return (
      <Section className={classes.section}>
         <Carousel {...settings}>
         {
            Images.map((fn, index) => (
               <Image key={index} fn={fn} classes={classes} />
            ))
         }
         </Carousel>
         <div className={classes.content}>
            <Typography variant='h4' style={{marginBottom: 15}}>
               Reverse Grip Knives
            </Typography>
            <Typography variant='body1'>
               Versatile, updated everyday-carry knives that live inside your waistband.
            </Typography>
         </div>
         <Button url=''>Shop Knives</Button>
      </Section>
   )
}

function Image({key, fn, classes}) {
   return (
      <div key={key} className={classes.container}>
         <img src={ImgDir + fn + '.png'} 
            alt='carousel image' 
            className={classNames(classes.image, 'slick-image')} 
         />
      </div>
   )
}
