import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import useStyles from '../styles';
import TextField from '@material-ui/core/TextField';


const EditPrice = (props) => {
  const classes = useStyles();
  const { onClose, data, onChangeInput, open, ...other } = props;
  const radioGroupRef = React.useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const onChangeValue = (event) => {
    onChangeInput(event);
  }

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth='xs'
      onEntering={handleEntering}
      aria-labelledby='detail-dialog-title'
      open={open}
      {...other}
    >
      <DialogTitle id='detail-dialog-title' className={classes.pinkColor}>Precio Único Menú</DialogTitle>
      <DialogContent dividers>
        {
          data &&
            <TextField
              id='price'
              label='Precio'
              value={data}
              type='number'
              name='precio'
              onChange={onChangeValue}
            />
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleOk}
          variant='contained'
          color='secondary'
          className={classes.buttonAdd}>
            ACEPTAR
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EditPrice.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default EditPrice;