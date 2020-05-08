
import { useRouter } from 'next/router'
import classNames from 'classnames'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import { defaultFont } from 'assets/jss/nextjs-material-kit.js'
import tooltip from 'assets/jss/nextjs-material-kit/tooltipsStyle.js'

import Button from 'components/Button'
import PAGES_CONSTANTS from 'constants/links/pages'

const useStyles = makeStyles(theme => ({
  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit'
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    color: theme.palette.text.primary,
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
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: theme.spacing(1.5),
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '15px',
    borderRadius: 'unset',
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
  ...tooltip,
  selected: {
    borderBottom: `2px solid ${theme.palette.button.main}`
  }
}));

const LINKS = [
  {
    title: PAGES_CONSTANTS.WARRIOR_SERIES.title,
    url: PAGES_CONSTANTS.WARRIOR_SERIES.url
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
    title: PAGES_CONSTANTS.GALLERY.title,
    url: PAGES_CONSTANTS.GALLERY.url
  },
  {
    title: PAGES_CONSTANTS.GUN_GUIDE.title,
    url: PAGES_CONSTANTS.GUN_GUIDE.url
  }
]

const HeaderItem = ({ title, url }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <ListItem className={classes.listItem}>
      <Button
        href={url}
        color='transparent'
        className={classNames(classes.navLink, { [classes.selected]: router.pathname === url })}
      >
        {title}
      </Button>
    </ListItem>
  )
}

const HeaderLinks = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {
        LINKS.map((link, index) =>
          <HeaderItem
            key={index}
            title={link.title}
            url={link.url}
          />
        )
      }
    </List>
  )
}

export default HeaderLinks;
