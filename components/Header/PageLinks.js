
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {List, ListItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { defaultFont } from 'assets/jss/nextjs-material-kit.js'
import tooltip from 'assets/jss/nextjs-material-kit/tooltipsStyle.js'

import Button from 'components/Button'
import PAGES from 'constants/links/pages'

const styles = theme => ({
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
    fontSize: '13px',
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
})

const HeaderItem = ({ item }) => {
  const classes = makeStyles(styles)()
  const router = useRouter()
  const className = classNames(classes.navLink, {
    [classes.selected]: router.pathname === item.url
  })
  
  return (
    <ListItem className={classes.listItem}>
      <Button href={item.url} color='transparent' className={className}>
        {item.title}
      </Button>
    </ListItem>
  )
}

const Links = [
  PAGES.WARRIOR_SERIES,
  PAGES.CUSTOM_SERVICES,
  PAGES.COURSES,
  PAGES.GALLERY,
  PAGES.GUN_GUIDE,
]

export default () => {
  const classes = makeStyles(styles)()
  return (
    <List className={classes.list}>
    {
      Links.map((item, index) =>
        <HeaderItem key={index} item={item} />
      )
    }
    </List>
  )
}