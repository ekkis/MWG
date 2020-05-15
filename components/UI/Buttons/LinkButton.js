
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

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

const LinkButton = ({ className, label, url, isLeft = false, ...rest }) => {
  const classes = useStyles()
  return (
    <a
      href={url}
      {...rest}
      className={classNames(className, classes.root)}
    >
      {isLeft && <ArrowBackIos className={classes.icon} />}
      {label}
      {!isLeft && <ArrowForwardIos className={classes.icon} />}
    </a>
  )
};

export default LinkButton;
