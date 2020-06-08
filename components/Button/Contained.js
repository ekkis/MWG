
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: () => {
    return ({
      margin: theme.spacing(3 / 8),
      boxShadow: 'none',
      textTransform: 'none',
      backgroundColor: theme.custom.palette.darkRed,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: theme.custom.palette.hover
      }
    })
  }
}));

const ContainedButton = ({ className, type, color, variant, children, ...rest }) => {
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

export default ContainedButton;
