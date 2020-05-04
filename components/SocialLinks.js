/*eslint-disable*/

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/Button"
import styles from "styles/SocialLinks"

export default () => {
  const classes = styles()
  var items = [
    {
      id: "instagram-twitter",
      title: "Follow us on Twitter",
      href: "https://twitter.com/CreativeTim?ref=creativetim",
      icn: "fab fa-twitter"
    },
    {
      id: "instagram-facebook",
      title: "Follow us on Facebook",
      href: "https://www.facebook.com/CreativeTim?ref=creativetim",
      icn: "fab fa-facebook"
    },
    {
      id: "instagram-tooltip",
      title: "Follows us on Instagram",
      href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
      icn: "fab fa-instagram"
    }
  ]
  function item(args) {
    var {id, title, href, icn} = args
    return (
      <ListItem className={classes.listItem}>
        <Tooltip
          id={id} title={title}
          placement={"top"} classes={{ tooltip: classes.tooltip }}
        >
          <Button href={href}
            target="_blank" color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " " + icn} />
          </Button>
        </Tooltip>
      </ListItem>
    )
  }
  return (
    <List className={classes.list}>
      {items.map(o => item(o))}
    </List>
  )
}
