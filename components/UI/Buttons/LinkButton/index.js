
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    color: theme.palette.button.main
  },
  icon: {
    width: 16,
    height: 16
  }
}));

const LinkButton = ({ className, label, url }) => {
  const classes = useStyles()
  return (
    <a className={classNames(className, classes.root)} href={url}>
      {label}
      <ArrowForwardIos className={classes.icon} />
    </a>
  )
};

export default LinkButton;
