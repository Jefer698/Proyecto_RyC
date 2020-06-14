import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import useStyles from '../styles';


const DeleteModal = (props) => {
  const classes = useStyles();
  const { onClose, data, open, ...other } = props;
  const radioGroupRef = React.useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleOk = () => {
    onClose();
  };
  const handleCancel = () => {
    onClose();
  }

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
      <DialogTitle id='detail-dialog-title' className={classes.pinkColor}>¿Está seguro que desea eliminar el Menú?</DialogTitle>
      <DialogContent dividers>
        {
          data && <p>Menú: {data.menu}</p>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCancel}
          variant='contained'
          color='secondary'
          className={classes.buttonRed}>
            CANCELAR
        </Button>
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

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default DeleteModal;