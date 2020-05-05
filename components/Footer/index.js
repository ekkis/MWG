import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import { container } from 'assets/jss/nextjs-material-kit.js'

import { Grid, GridItem } from 'components/Grid'
import SocialLinks from './SocialLinks'
import SiteLinks from './SiteLinks'
import MailingList from './MailingList'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative',
    backgroundColor: 'black'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  gridItem: {
    border: 'none 1px red',
    padding: '0 3em'
  },
  gridContainer: {
    border: 'none 1px blue',
    width: '100%'
  }
}));

export default function Footer({ whiteFont }) {
  const classes = useStyles();

  return (
    <footer className={classNames({ [classes.footer]: true, [classes.footerWhiteFont]: whiteFont })}>
      <Grid className={classNames({ [classes.gridContainer]: true })}>
        <GridItem xs={6} className={classNames('marginAuto', { [classes.gridItem]: true })}>
          <SocialLinks />
          <SiteLinks />
        </GridItem>
        <GridItem xs={6} className={classNames('marginAuto', { [classes.gridItem]: true })}>
          <MailingList />
        </GridItem>
        <GridItem xs={12} className={classNames('marginAuto', { [classes.gridItem]: true })}>
          For authorized transfer, firearms are required to be shipped
          to an authorized dealer and the necessary FFL licence(s) presented
        <br />
        All Rights Reserved &copy 2019
      </GridItem>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
}
