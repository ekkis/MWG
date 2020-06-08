
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import LinkButton from 'components/Button/Link'

const useStyles = makeStyles(theme => ({
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
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    margin: theme.spacing(1, 0)
  },
  image: {
    width: '100%',
    height: 245,
    objectFit: 'cover'
  }
}));

const MobileCombatItem = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={item.imageUrl} alt='carousel image' className={classes.image} />
      <div className={classes.content}>
        <Typography
          variant='h4'
          color='textPrimary'
          className={classes.title}
        >
          {item.title}
        </Typography>
        <LinkButton
          label='shop custom build'
          url=''
        />
      </div>
    </div>
  )
}

export default MobileCombatItem;