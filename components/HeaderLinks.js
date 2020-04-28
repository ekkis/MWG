/*eslint-disable*/

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";
import styles from "styles/HeaderLinks";

export default () => {
  const classes = styles()
  var items = [
    "Warrior Series",
    "Custom Services",
    "Courses",
    "Gallery",
    "Gun Guide"
  ]
  return (
    <List className={classes.list}>
      {items.map(s => (<HeaderItem title={s} />))}
    </List>
  )

  function HeaderItem(props) {
    var {title} = props
    return (
      <ListItem className={classes.listItem}>
        <Button
          href={title.replace(/ /g, '')}
          color="transparent"
          className={classes.navLink}
        >
          {title}
        </Button>
      </ListItem>
    )
  }
}
