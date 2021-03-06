
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
// import BranchOfficeForm from '../containers/BranchOfficeForm';
import ActionsInExpansionPanelSummary from '../containers/AssembleMenu/AssembleMenuForm';
import { navLinkUserMenu } from '../data/NavLinks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getMenu } from '../api';
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
export default function AssembleMenu() {

   

  

  const classes = useStyles();

  return (
    <>
    
      <div className='local'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>ARMAR MENÚ</Paper>
        </Grid>   
        </Grid>
    </div>
      </div>
      <div className='armarbg'>
        <NavBar links={navLinkUserMenu} />
        <ActionsInExpansionPanelSummary />
      </div>
    </>
  );
}
