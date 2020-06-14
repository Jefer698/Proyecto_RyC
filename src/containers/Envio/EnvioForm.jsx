import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {StyledTableCell,StyledTableRow,StyledTableContainer,envioStyles,inputStyles,inStyles,StyledUser} from './EnvioStyle';
import envioData from './Enviodata';
import {datos} from './Enviodata';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function EnvioForm() {
  const envio = envioStyles();
  const classes = inputStyles();
  const inop = inStyles();
  return (
      <>
      <StyledTableContainer >
      <Grid container spacing={3} alignItems="center" >
      
      <Grid item>
        <h1 >RESUMEN DE PEDIDO</h1>
      </Grid>
      <Grid item>
        <ShoppingCartIcon fontSize="large"/>
      </Grid>
    </Grid>
       
    <TableContainer className="enviotable" component={Paper}>
      <Table className={envio.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Producto</StyledTableCell>
            <StyledTableCell align="right">Descripcion</StyledTableCell>
            <StyledTableCell align="right">Precio unit.</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((dato) => (
            <StyledTableRow key={dato.producto}>
              <StyledTableCell component="th" scope="row">
                {dato.producto}
              </StyledTableCell>
              <StyledTableCell align="right">{dato.descripcion}</StyledTableCell>
              <StyledTableCell align="right">{dato.preciounit}</StyledTableCell>
              <StyledTableCell align="right">{dato.cantidad}</StyledTableCell>
              <StyledTableCell align="right">{dato.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
    <h1 className="totalenvio">TOTAL $5000</h1>
    
 
    <div className="tableenvio">
     <Grid container spacing={3} alignItems="center">
      
      <Grid item>
        <h1>Informacion Usuario</h1>
      </Grid>
      <Grid item>
        <PersonIcon fontSize="large"/>
      </Grid>
    </Grid>
   
 <div className="inenvio">
      
   <div className={classes.margin}>
      
     <Grid container spacing={4} alignItems="flex-end">
         
       <Grid item >
         < AccountCircle fontSize="large" />
       </Grid>
       <Grid item className="inla2" > 
       <TextField  className="inla" label="NOMBRE" />
       </Grid>  
     </Grid>
   </div>
  
   <div className={classes.margin}>
     <Grid container spacing={4} alignItems="flex-end">
       <Grid item>
         <AccountCircle fontSize="large"/>
       </Grid>
       <Grid item className="inla2">
         <TextField className="inla" label="R.U.T" />
       </Grid>
     </Grid>
   </div>
   <div className={classes.margin}>
     <Grid container spacing={4} alignItems="flex-end">
       <Grid item>
         <SmartphoneIcon fontSize="large" />
       </Grid>
       <Grid item className="inla2">
         <TextField className="inla" label="TELEFONO" />
       </Grid>
     </Grid> 
   </div>
   <div className={classes.margin}>
     <Grid container spacing={4} alignItems="flex-end">
       <Grid item>
         <PersonPinCircleIcon fontSize="large" />
       </Grid>
       <Grid item className="inla2">
         <TextField className="inla" label="DIRECCION" />
       </Grid>
     </Grid>
   </div>
 </div>
 </div>
 

     <div className={inop.root}>
      <Button color="secondary" startIcon={<ArrowBackIosIcon fontSize="large"/>}>Continuar con la compra</Button>
      
    
      <Button
        variant="contained"
        color="primary"
        className={inop.button}
      >
        Pagar
        <ArrowForwardIosIcon/> 
      </Button>
      </div>
 
      </StyledTableContainer>
    </>

    
  );
}
