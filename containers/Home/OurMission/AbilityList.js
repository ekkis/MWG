
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import HoverImage from 'react-hover-image'

const ImgDir = '/img/Home/OurMission/'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1, 0),
    padding: '2em 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1, 0)
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'scale-down'
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.goldLight
  }
}));

const SPECS_ITEMS = [
  {
    image: 'glock-handgun-accuracy',
    title: '2\' Handgun Accuracy',
    description: 'At 50 yards'
  },
  {
    image: 'rifle-accuracy',
    title: '1/4\' Rifle Accuracy',
    description: 'At 100 yards'
  },
  {
    image: 'bullet-rounds',
    title: '5,000+ Rounds',
    description: '0 Malfunctions'
  },
  {
    image: 'warrior-series-reduced-recoil',
    title: '20-50% Reduced Recoil',
    description: 'Than Factor Firearms'
  },
  {
    image: 'hammer-custom-made',
    title: '100% Custom Made',
    description: 'Made to Order'
  }
]

const AbilityList = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {
        SPECS_ITEMS.map((item, index) => (
          <div key={index} className={classes.container}>
            <HoverImage
              src={ImgDir + item.image + '-icon.png'}
              hoverSrc={ImgDir + item.image + '-rollover.png'}
              className={classes.icon}
            />
            <Typography
              variant='body1'
              className={classes.title}
            >
              {item.title}
            </Typography>
            <Typography
              variant='caption'
            >
              {item.description}
            </Typography>
          </div>
        ))
      }
    </main >
  )
}

export default AbilityList;