import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Typography } from '@material-ui/core'
import LinkButton from 'components/Button/Link'

const ImgDir = '/img/Home/WarriorSeries/'

const styles = theme => ({
   root: {},
   content: {
      flexDirection: 'column',
      alignItems: 'flex-end'
    },
    title: {
     margin: theme.spacing(1, 0)
   },
   image: {
     height: 600,
     objectFit: 'cover !important'
   },
})

const stylesMobile = theme => ({
   root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: theme.spacing(2)
    },
   content: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%'
    },
    title: {
      margin: theme.spacing(1, 0)
    },
    image: {
      width: '100%',
      height: 245,
      objectFit: 'cover'
    }
})
 
export default ({item, mobile}) => {
   const classes = makeStyles(mobile ? stylesMobile : styles)()
   var imgClass = classes.image
   var contentClass = classes.content
   if (!mobile) {
      imgClass = classNames(classes.image, 'slick-image')
      contentClass = classNames(classes.content, 'slick-caption')
   }
   return (
      <div key={item} classes={classes.root}>
         <img src={ImgDir + item.replace(/ /, '-').toLowerCase() + '.jpg'} 
            alt='carousel image' 
            className={imgClass} 
            />
         <div className={contentClass}>
            <Typography variant='h4' className={classes.title}>
               {item}
            </Typography>
            <LinkButton label='shop custom build' url='' />
         </div>
      </div>
   )
}