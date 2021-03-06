
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { Grid, GridItem } from 'components/Grid'
import SocialLinks from './SocialLinks'
import SiteLinks from './SiteLinks'
import MailingList from './MailingList'
import Copyright from './Copyright'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.brownLight,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  container: {
    width: '100%',
    maxWidth: 920
  },
  gridItem: {
    border: 'none 1px red'
  },
  logo: {
    width: 320,
    position: 'absolute',
    top: -50,
    left: -150,
    border: 'none 1px pink'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <SocialLinks />
        <Hidden smDown implementation='css'>
          <Grid className={classes.gridContainer}>
            <GridItem xs={12} sm={5} className={classes.gridItem}>
              <SiteLinks />
            </GridItem>
            <GridItem xs={12} sm={4} className={classes.gridItem}>
              <MailingList />
            </GridItem>
            <GridItem xs={12} sm={3} className={classes.gridItem}>
              <img
                src='/img/mwg-logo-detailed-flipped.png'
                alt='footerImage'
                className={classes.logo}
              />
            </GridItem>
          </Grid>
        </Hidden>
        <Hidden mdUp implementation='css'>
          <MailingList />
          <SiteLinks />
          <img
            src='/img/mwg-logo-detailed-flipped.png'
            alt='footerImage'
            className={classes.logo}
          />
        </Hidden>
        <Copyright />
      </div>
    </footer >
  )
}
