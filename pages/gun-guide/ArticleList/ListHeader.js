
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CustomSingleSelect from 'components/UI/CustomSingleSelect'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

const searchOptions = [
  {
    value: 'Gun',
    label: 'Gun'
  },
  {
    value: 'Rifle',
    label: 'Rifle'
  }
]

const ListHeader = () => {
  const classes = useStyles();
  const [selectKey, setSelectKey] = useState('')

  const onSelectHandler = (key) => {
    setSelectKey(key)
  }

  return (
    <main className={classes.root}>
      <Typography
        variant='h4'
        color='textSecondary'
        className={classes.title}
      >
        All Articles
        <br />
        Headline
      </Typography>
      <CustomSingleSelect
        placeholder='Filter Headline'
        value={selectKey}
        onChange={onSelectHandler}
        items={searchOptions}
      />
    </main>
  )
}

export default ListHeader;
