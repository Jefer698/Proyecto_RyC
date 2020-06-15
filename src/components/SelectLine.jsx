import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 300,
    backgroundColor: 'whitesmoke',
    padding: '3px 0px 4px 0px',
    borderRadius: '5px!important'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function SelectLine(props) {

  const { name, label, options, required, onChange, error, value } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        required={required}
        onChange={(event) => onChange(name, event)}
        className={error ? 'inputError' : undefined}
        value={value}
      >
        {options.map((option, key) =>
          <MenuItem
            key={key}
            value={option.value}
            disabled={option.value === ''}
          >{option.label}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}