
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 180,
    '&>div': {
      border: `1px solid ${theme.palette.text.primary}`
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const CustomSingleSelect = ({ className, value, placeholder, onChange, items }) => {
  const classes = useStyles()

  const selectHandler = (event) => {
    onChange(event.target.value)
  }

  return (
    <FormControl variant='outlined' className={classNames(className, classes.root)}>
      <Select
        displayEmpty
        value={value}
        onChange={selectHandler}
      >
        <MenuItem value=''>
          {placeholder}
        </MenuItem>
        {
          items.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default CustomSingleSelect;
