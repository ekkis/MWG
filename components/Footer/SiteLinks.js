
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem } from '@material-ui/core';

import Pages from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  List: {
    columnWidth: '10em',
    maxWidth: '300px',
    border: 'none 1px white',
    position: 'relative',
    padding: '0'
  },
  ListItem: {
    padding: theme.spacing(0.5, 0)
  },
  link: {
    fontWeight: 'lighter',
    color: theme.palette.text.primary
  }
}));

const siteLinks = [
    Pages.HOME,
    Pages.WARRIOR_SERIES,
    Pages.CUSTOM_SERVICES,
    Pages.OUR_WORK,
    Pages.CUSTOM_SERVICES,
    Pages.COURSES,
    Pages.GUN_GUIDE,
    Pages.ACCOUNT_LOGIN,
    Pages.SHIPPING_AND_RESUME,
    Pages.PRIVACY_POLICE,
    Pages.TERMS_AND_CONDITIONS,
    Pages.CONTACT,
]

const SiteLinks = () => {
  const classes = useStyles()

  return (
    <List className={classes.List}>
      {siteLinks.map((item, index) => (
        <ListItem key={index} className={classes.ListItem}>
          <a href={item.url} className={classes.link}>
            {item.title}
          </a>
        </ListItem>
      ))}
    </List>
  )
}

export default SiteLinks;