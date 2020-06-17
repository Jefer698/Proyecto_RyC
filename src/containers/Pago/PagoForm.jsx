
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:"none"
  },
}));

export default function pagoForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
<h2 className="inline">Estas pagando en</h2> <h2 className="inline2"> Delivery</h2>
<h2 className="monto">$5.000 CLP</h2>


          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div className="metodopago">
     <h4 className="selectpay"> SELECCIONE METODO DE PAGO</h4>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Tarjeta de Credito
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">HAZ SELECCIONADO LA OPCION DE PAGO CON TARJETA DE CREDITO</DialogTitle>
        <DialogContent>
          <DialogContentText>
            RELLENE LOS CAMPOS SOLICITADOS PARA HACER VALIDO EL PAGO
          </DialogContentText>
          
          <TextField
          className="inenvio"
          label="Nombre del titular"
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    <TextField
          className="inenvio"
          label="Numero de la tarjeta"
          style={{ margin: 8 }}
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
     <div className="infecha">
          <TextField
           className="inenvio2"
          label="Fecha de expiracion"
          style={{ margin: 8 }}
          type="month"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
       </div>
        <TextField
           className="inenvio2"
          label="Codigo de seguridad"
          style={{ margin: 8 }}
         
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   


          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}

