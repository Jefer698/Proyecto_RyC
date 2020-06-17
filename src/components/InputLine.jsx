import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
  backgroundInput: {
    backgroundColor: 'red',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
 backgroundColor:"white",

  },
}));

const InputLine = (props) => {
  const { label,
    type,
    className,
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
    <>
   
        <FormControl className={classes.formControl}>
        <TextField
           className={className}
            label={label}
           type={type}
           style={{ margin: 8 }}
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
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          
        </FormControl>
        {list &&
          <datalist id={list.id}>
            {list.options.map((option, key) =>
              <option key={key}>{option}</option>
            )}
          </datalist>
        }
    </>
  );
}

export default InputLine;