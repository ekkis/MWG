
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import { Grid, GridItem } from 'components/Grid'
import SocialLinks from './SocialLinks'
import SiteLinks from './SiteLinks'
import MailingList from './MailingList'
import FooterCopyRight from './FooterCopyRight'

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
    maxWidth: 820
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  gridItem: {
    border: 'none 1px red'
  },
  gridContainer: {
    border: 'none 1px blue',
    width: '100%'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <Grid className={classNames({ [classes.gridContainer]: true })}>
          <GridItem xs={12} sm={6} className={classNames('marginAuto', { [classes.gridItem]: true })}>
            <SocialLinks />
            <SiteLinks />
          </GridItem>
          <GridItem xs={12} sm={6} className={classNames('marginAuto', { [classes.gridItem]: true })}>
            <MailingList />
          </GridItem>
        </Grid>
        <FooterCopyRight />
      </div>
    </footer>
  )
}

export default Footer