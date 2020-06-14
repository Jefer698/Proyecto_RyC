import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import useStyles from '../styles';
import TextField from '@material-ui/core/TextField';


const EditMenu = (props) => {
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
      <DialogTitle id='detail-dialog-title' className={classes.pinkColor}>Menú</DialogTitle>
      <DialogContent dividers>
        {
          data && <>
            <TextField
              label="Nombre Menú"
              value={data.menu}
              name="menu"
              onChange={onChangeValue}
            />
            <TextField
              label="Detalle"
              value={data.detail}
              name="detail"
              onChange={onChangeValue}
            />
            <TextField
              label="Ensalada"
              value={data.salad}
              name="salad"
              onChange={onChangeValue}
            />
            <TextField
              label="Postre"
              value={data.dessert}
              name="dessert"
              onChange={onChangeValue}
            />
            <TextField
              label="Bebida"
              value={data.drink}
              name="drink"
              onChange={onChangeValue}
            />

          </>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleOk}
          variant='contained'
          color='secondary'
          className={classes.buttonAdd}>ACEPTAR</Button>
      </DialogActions>
    </Dialog>
  );
}

EditMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default EditMenu;