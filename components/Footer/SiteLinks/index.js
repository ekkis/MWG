
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  List: {
    columnWidth: '10em',
    maxWidth: '350px',
    border: 'none 1px white',
    position: 'relative',
    padding: '0'
  },
  ListItem: {
    border: 'none 1px yellow',
    color: 'red',
    padding: 0,
  }
}));

const items = [
  'Home', 'Custom Guns', 'Our Work', 'Custom Services',
  'Courses', 'Gun Guide', 'Account Login', 'Shipping & Returns',
  'Privacy Policy', 'Terms & Conditions', 'Contact'
]

const SiteLinks = () => {
  const classes = useStyles()

  return (
    <List className={classes.List}>
      {items.map((item, index) => (
        <ListItem key={index} className={classes.ListItem}>
          {item}
        </ListItem>
      ))}
    </List>
  )
}

export default SiteLinks;