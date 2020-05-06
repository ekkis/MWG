
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: theme.spacing(0.25, 2),
    borderRadius: 10,
    border: `1.5px solid ${theme.palette.button.main}`,
    color: theme.palette.button.main,
    backgroundColor: 'unset',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.custom.palette.main
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
}));

const OutlineButton = ({ className, type, color, variant, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Button
      className={classNames(className, classes.root)}
      color={color}
      variant={variant || 'contained'}
      type={type}
      {...rest}>
      {children}
    </Button>
  );
};

export default OutlineButton;
