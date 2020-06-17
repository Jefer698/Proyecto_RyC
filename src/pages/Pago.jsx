
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import { navLinkUser } from '../data/NavLinks';
import  CenteredGrid from '../containers/PagoForm';
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

export default function Pago() {
    const classes = useStyles();

  return (
    <>
      <div className="aboutg">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Pago</Paper>
        </Grid>

        
        </Grid>
    </div>
      </div>
      <NavBar links={navLinkUser} />
      
    <CenteredGrid/>

    </>

  );
}
