import React from 'react';
import LineField from './LineField';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
  backgroundInput: {
    backgroundColor: 'red',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    backgroundColor: 'whitesmoke',
    borderRadius: '5px!important'
  },
}));

const InputLine = (props) => {
  const { label,
    type,
    placeholder,
    required,
    minLength,
    maxLength,
    min,
    max,
    step,
    list,
    onChange,
    name,
    error,
    value,
    onClick,
    title
  } = props;
  const classes = useStyles();


  return (
    <div>
      <LineField label={label}>
        <FormControl className={classes.formControl}>
          <TextField
            label={label}
            variant='outlined'
            type={type}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            onClick={onClick}
            step={step}
            onChange={(event) => onChange(name, event)}
            className={error ? 'inputError' : undefined}
            value={value}
            title={title}
            list={list && list.id}
          />
        </FormControl>
        {list &&
          <datalist id={list.id}>
            {list.options.map((option, key) =>
              <option key={key}>{option}</option>
            )}
          </datalist>
        }
      </LineField>
    </div>
  );
}

export default InputLine;