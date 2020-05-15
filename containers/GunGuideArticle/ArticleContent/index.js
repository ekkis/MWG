
import { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { getDateByFormat } from 'utils/time'
import ContentHeader from './Header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  container: {
    width: '100%',
    maxWidth: 1000,
  },
  date: {
    color: theme.palette.text.goldLight,
  },
  image: {
    maxWidth: 450,
    width: '100%',
    height: 320,
    objectFit: 'cover',
    margin: theme.spacing(6, 0, 3),
    border: `1.5px solid ${theme.palette.text.goldLight}`
  },
  description: {
    padding: theme.spacing(1, 0, 2)
  }
}));

const ArticleContent = ({ article = {} }) => {
  const classes = useStyles()

  const dateString = useMemo(() => getDateByFormat(article.date), [article]);

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        <ContentHeader />
        <Typography
          variant='caption'
          className={classes.date}
        >
          {dateString}
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          Ipissit voles et omnis esti aecabore la si corerspedit occustium atiore eomquia
          quam eos repu dandia sim quatiae dolor sunt porro. Git enimporepti volupta porror
          maximus magnimus eture doluptibus.
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          Obitatur sit andelique nem am, quam qui is voluptae essequibus quatusc iatendi
          onserae volupta tis aliquidunt poresedio con eatur repererum comnist rupturi
          blaccuptur maximpor sed modiam si omnimus none si alibusandae parunt alignist vendest,
          qui des ea verum nimod qui blatemo luptatem nis exerum et inte de everspitecae con
          necto des name audictur aut volor ad ea voluption ex earchiciis quist, et dellaut unt
          que volorisse voluptasini dolupta temporrunt fugiati dolores siminia cupta doluptatibus eat.
        </Typography>
        <img
          src={article.imageUrl}
          alt=''
          className={classes.image}
        />
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          Ehent alis ant. Alit moluptate nem ipsaperes eat. Nullore voluptam, etur alia ex
          earum endio. Hicipsumque inciat quis asped magniam dolupta tioriantia volor ant eum
          incient. Dolupta tquias mos ma dolupta cum, que voluptae.
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          Epero volorios aciis quis doluptate viditiniae. Ipsant audistiatis et preperae quiaere
          pernatis doluptaessi con non pratecaecto verum qui temposs imagnimagnat quo dolupie
          ndaepe pratem nonsequ aepuda dit oditatem aceaquat. 
        </Typography>
        <Typography
          variant='body2'
          color='textPrimary'
          className={classes.description}
        >
          Adioruptam harum volorer emporatat velitatiat vent hilibus doluptat assumque voles des
          se nonsequis solo inullectio. Emped qui sitationet aut mi, cum ut ipsus qui dolent.
        </Typography>
      </div>
    </main>
  )
}

export default ArticleContent;