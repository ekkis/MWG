/*eslint-disable*/
import PropTypes from 'prop-types'
import classNames from 'classnames'
// app components
import {Grid, GridItem} from 'components/Grid'
import SocialLinks from 'components/SocialLinks'
import SiteLinks from 'components/SiteLinks'
import MailingList from 'components/MailingList'

import styles from 'styles/Footer'

export default function Footer(props) {
  const classes = styles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const gridContainerClasses = classNames({[classes.gridContainer]: true})
  const gridItemClasses = classNames('marginAuto', {
   [classes.gridItem]: true,
  })
  return (
    <footer className={footerClasses}>
      <Grid className={gridContainerClasses}>
      <GridItem xs={6} className={gridItemClasses}>
        <SocialLinks/>
        <SiteLinks/>
      </GridItem>
      <GridItem xs={6} className={gridItemClasses}>
        <MailingList/>
      </GridItem>
      <GridItem xs={12} className={gridItemClasses}>
        For authorized transfer, firearms are required to be shipped
        to an authorized dealer and the necessary FFL licence(s) presented
        <br/>
        All Rights Reserved &copy 2019
      </GridItem>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
}
