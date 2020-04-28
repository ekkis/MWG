/*eslint-disable*/
import {List, ListItem} from "@material-ui/core";
import styles from "styles/SiteLinks"

export default function() {
    const classes = styles()
    var items = [
        "Home", "Custom Guns", "Our Work", "Custom Services",
        "Courses", "Gun Guide", "Account Login", "Shipping & Returns",
        "Privacy Policy", "Terms & Conditions", "Contact"
    ]
    return (
        <List className={classes.List}>
            {items.map(s => (
                <ListItem className={classes.ListItem}>
                    {s}
                </ListItem>
            ))}
        </List>
    )
}
