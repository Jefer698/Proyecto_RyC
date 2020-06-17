
import React from 'react';
import NavBar from '../components/NavBar';
// import CorporateForm from '../containers/CorporateForm';
import { navLinkUser } from '../data/NavLinks';
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


export default function Corporate() {
  const classes = useStyles();
  return (

    <>
      <div className='corp'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>COORPORATIVO</Paper>
        </Grid>
        </Grid>
    </div>
      </div>
      <NavBar links={navLinkUser} />
    </>
  );
}
