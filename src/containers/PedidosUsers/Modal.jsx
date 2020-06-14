import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './styles';


const DetailModal = (props) => {
  const classes = useStyles();
  const { onClose, data, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleOk = () => {
    onClose(value);
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
      <DialogTitle id='detail-dialog-title' className={classes.pinkColor}>Detalle de pedido</DialogTitle>
      <DialogContent dividers>
        {
          data && <div>
            <p>Nombre: {data.name}</p>
            <p>RUT: {data.rut}</p>
            <p>Telefono: {data.phone}</p>
            <p>Correo: {data.mail}</p>
            <p>Dirección: {data.address}</p>
            <p>Método de Pago: {data.paymentType}</p>
            <p>Menú: {data.menu}</p>
          </div>
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

DetailModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default DetailModal;