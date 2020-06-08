import { makeStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  socialIcon: {
    width: 30,
    marginRight: theme.spacing(1)
  }
})

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

export default () => {
  const classes = makeStyles(styles)()
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