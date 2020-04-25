/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";
import SocialLinks from "components/SocialLinks"
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

export default function HeaderLinks(props) {
  const classes = makeStyles(styles)();
  return (
    <List className={classes.list}>
      <HeaderItem title="Warrior Series" />
      <HeaderItem title="Custom Services" />
      <HeaderItem title="Courses" />
      <HeaderItem title="Gallery" />
      <HeaderItem title="Gun Guide" />
    </List>
  );

  function HeaderItem(props) {
    var {title} = props
    return (
      <ListItem className={classes.listItem}>
        <Button
          href={title.replace(/ /g, '')}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          {title}
        </Button>
      </ListItem>
    )
  }
}
