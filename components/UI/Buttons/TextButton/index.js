
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    fontSize: 14,
    textTransform: 'uppercase',
    color: theme.palette.button.main
  }
}));

const TextButton = ({ className, label, ...rest }) => {
  const classes = useStyles()
  return (
    <Typography className={classNames(className, classes.root)} {...rest}>
      {label}
    </Typography>
  )
};

export default TextButton;
