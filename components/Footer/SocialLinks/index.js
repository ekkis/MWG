
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: theme.spacing(1)
  }
}));

const items = [
  {
    href: 'https://twitter.com/CreativeTim?ref=creativetim',
    icon: '/img/social/yelp.png'
  },
  {
    href: 'https://www.instagram.com/CreativeTimOfficial?ref=creativetim',
    icon: '/img/social/instagram.png'
  },
  {
    href: 'https://www.facebook.com/CreativeTim?ref=creativetim',
    icon: '/img/social/facebook.png'
  },
  {
    href: 'https://twitter.com/CreativeTim?ref=creativetim',
    icon: '/img/social/twitter.png'
  }
]

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {
        items.map((item, index) => (
          <a key={index} href={item.href} target='_blank'>
            <img
              alt='social icon'
              src={item.icon}
              className={classes.socialIcon}
            />
          </a>
        ))
      }
    </main>
  )
}

export default SocialLinks;
