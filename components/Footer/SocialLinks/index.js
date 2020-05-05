
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles'
import { defaultFont } from 'assets/jss/nextjs-material-kit.js';
import tooltip from 'assets/jss/nextjs-material-kit/tooltipsStyle.js';

import Button from 'components/Button'

const useStyles = makeStyles(theme => ({
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
    height: '50px',
    border: 'none 1px white',
    display: 'flex'
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5'
      }
    }
  },
  listItemText: {
    padding: '0 !important'
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start'
      }
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down('md')]: {
      top: '0',
      margin: '5px 15px'
    },
    color: '#FFF',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    top: '4px'
  },
  registerNavLink: {
    [theme.breakpoints.down('md')]: {
      top: '0',
      margin: '5px 15px'
    },
    top: '3px',
    position: 'relative',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex'
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '3px'
  },
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px'
  },
  dropdownLink: {
    '&,&:hover,&:focus': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'block',
      padding: '10px 20px'
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: '5px'
  }
}));

const items = [
  {
    id: 'instagram-twitter',
    title: 'Follow us on Twitter',
    href: 'https://twitter.com/CreativeTim?ref=creativetim',
    icn: 'fab fa-twitter'
  },
  {
    id: 'instagram-facebook',
    title: 'Follow us on Facebook',
    href: 'https://www.facebook.com/CreativeTim?ref=creativetim',
    icn: 'fab fa-facebook'
  },
  {
    id: 'instagram-tooltip',
    title: 'Follows us on Instagram',
    href: 'https://www.instagram.com/CreativeTimOfficial?ref=creativetim',
    icn: 'fab fa-instagram'
  }
]

const SocialItem = ({ id, title, href, icn }) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.listItem}>
      <Tooltip
        id={id} title={title}
        placement={'top'} classes={{ tooltip: classes.tooltip }}
      >
        <Button href={href}
          target='_blank' color='transparent'
          className={classes.navLink}
        >
          <i className={classes.socialIcons + ' ' + icn} />
        </Button>
      </Tooltip>
    </ListItem>
  )
}

export default () => {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      {items.map((item, index) => <SocialItem key={index} {...item} />)}
    </List>
  )
}
