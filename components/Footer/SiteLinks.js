
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem } from '@material-ui/core';

import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  List: {
    columnWidth: '10em',
    maxWidth: '350px',
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
  {
    title: PAGES_CONSTANTS.HOME.title,
    url: PAGES_CONSTANTS.HOME.url
  },
  {
    title: PAGES_CONSTANTS.WARRIOR_SERIES.title,
    url: PAGES_CONSTANTS.WARRIOR_SERIES.url
  },
  {
    title: PAGES_CONSTANTS.CUSTOM_SERVICES.title,
    url: PAGES_CONSTANTS.CUSTOM_SERVICES.url
  },
  {
    title: PAGES_CONSTANTS.OUR_WORK.title,
    url: PAGES_CONSTANTS.OUR_WORK.url
  },
  {
    title: PAGES_CONSTANTS.CUSTOM_SERVICES.title,
    url: PAGES_CONSTANTS.CUSTOM_SERVICES.url
  },
  {
    title: PAGES_CONSTANTS.COURSES.title,
    url: PAGES_CONSTANTS.COURSES.url
  },
  {
    title: PAGES_CONSTANTS.GUN_GUIDE.title,
    url: PAGES_CONSTANTS.GUN_GUIDE.url
  },
  {
    title: PAGES_CONSTANTS.ACCOUNT_LOGIN.title,
    url: PAGES_CONSTANTS.ACCOUNT_LOGIN.url
  },
  {
    title: PAGES_CONSTANTS.SHIPPING_AND_RESUME.title,
    url: PAGES_CONSTANTS.SHIPPING_AND_RESUME.url
  },
  {
    title: PAGES_CONSTANTS.PRIVACY_POLICE.title,
    url: PAGES_CONSTANTS.PRIVACY_POLICE.url
  },
  {
    title: PAGES_CONSTANTS.TERMS_AND_CONDITIONS.title,
    url: PAGES_CONSTANTS.TERMS_AND_CONDITIONS.url
  },
  {
    title: PAGES_CONSTANTS.CONTACT.title,
    url: PAGES_CONSTANTS.CONTACT.url
  }
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