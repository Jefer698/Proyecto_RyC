import React from 'react';
import PedidosUsers from '../containers/PedidosUsers'
import { dataCurrently, dataEnded } from '../data/PedidosMaintainer'
import NavBar from '../components/NavBar';
import { navLinkAdmin } from '../data/NavLinks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginTop:80,
      width:"auto",
      boxShadow:"none",
      height:"auto",
      fontSize:70,
      color:"white",
     backgroundColor:"transparent",
 
    },
  }));

const PedidosMaintainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className='lg'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Pago</Paper>
        </Grid> 
        </Grid>
    </div>
      </div>
      <NavBar links={navLinkAdmin} />
      <PedidosUsers
        dataCurrently={dataCurrently}
        dataEnded={dataEnded}
      />
    </>
  );
}

export default PedidosMaintainer;