/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SocialLinks from "components/SocialLinks"
import SiteLinks from "components/SiteLinks"
import MailingList from "components/MailingList"

import styles from "styles/Footer";

export default function Footer(props) {
  const classes = styles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const gridContainerClasses = classNames({[classes.gridContainer]: true})
  const gridItemClasses = classNames("marginAuto", {
   [classes.gridItem]: true
  })
  return (
    <footer className={footerClasses}>
    <GridContainer className={gridContainerClasses}>
      <GridItem xs={6} className={gridItemClasses}>
        <SocialLinks/>
        <SiteLinks/>
        </GridItem>
      <GridItem xs={6} className={gridItemClasses}>
        <MailingList/>
      </GridItem>
      </GridContainer>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
